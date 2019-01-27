import React, { Component } from 'react'
import '../styles/Views/LandingPage.css'
import VRVideo from '../assets/video/VR-Trailer.mp4'
import axios from 'axios'
import $ from 'jquery'

class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileToggle: false,
            user: '',
            loading: true,
            galleries: [],
            favorited: [],
            favoriteNum: 0
        }
    }

    async componentDidMount() {
        const offset = this.state.galleries.length,
            galleries = await axios.get(`/api/getAllGalleries/${offset}`)
        this.setState({ galleries: galleries.data })
        const user = await axios.get('/api/checkUser/')
        this.setState({ user: user.data }, () => this.setState({ loading: false }))
        window.addEventListener('scroll', this.handleScroll)

        // Sees whether user is logged in. If true, it will store favorites in array to be compared with galleries array so addToFavorites/removeFromFavorites function will work.
        const favorites = await axios.get(`/api/getFavorites/`)
        this.setState({ favorited: favorites.data }, () => {
            // Once favorited array has been set to state, trigger function that will loop through array for galleryID
            this.identifyFavorites()
        })
    }

    identifyFavorites() {
        // Array of IDs shared in both galleries and favorited
        let sharedIds = []
        // Loop through all favorited galleries and for every id that matches those in galleries (nested for loop), color heart matching that id in galleries red. 
        for (let i = 0; i < this.state.favorited.length; i++) {
            for (let v = 0; v < this.state.galleries.length; v++) {
                if (this.state.favorited[i].id === this.state.galleries[v].id) {
                    sharedIds.push(this.state.favorited[i].id)
                }
            }
        }
        // Once Ids are collected into a single array, pass them to ColorHeartsRed function to color hearts on page
        this.colorHeartsRed(sharedIds)
    }

    colorHeartsRed(sharedIds) {
        // Need node array of all existing hearts on page to receive class '.make-red'
        const hearts = document.getElementsByClassName('fa-heart')
        for (let i = 0; i < hearts.length; i++) {
            for (let v = 0; v < sharedIds.length; v++) {
                if (Number(hearts[i].getAttribute('data-id')) === sharedIds[v]) {
                    hearts[i].classList.add('make-red')
                }
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    //yoinked this from the interwebs 😂
    debounce = (func, wait, immediate) => {
        let timeout
        return function () {
            let context = this, args = arguments
            let later = function () {
                timeout = null
                if (!immediate) func.apply(context, args)
            }
            let callNow = immediate && !timeout
            clearTimeout(timeout)
            timeout = setTimeout(later, wait)
            if (callNow) func.apply(context, args)
        }
    }

    handleScroll = this.debounce(() => {
        const scroll = window.scrollY
        const back = document.querySelector('.landing-back')
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) this.addMore()
        if (scroll >= 650) {
            back.classList.add('animate-fadeIn')
            setTimeout(() => {
                back.style.visibility = 'visible'
            }, 1000);
        }
        else {
            back.classList.remove('animate-fadeIn')
            back.classList.add('animate-fadeOut')
            setTimeout(() => {
                back.style.visibility = 'hidden'
                back.classList.remove('animate-fadeOut')
            }, 1000);
        }
    }, 150)

    smoothScroll(target) {
        if (target === 'gallery') {
            const galleries = $('.landing-galleries').position().top;
            $('html, body').animate({
                scrollTop: galleries
            }, 300)
        } else if (target === 'home') {
            const home = $('.home').position().top;
            $('html, body').animate({
                scrollTop: home
            }, 500)
        }
    }


    handleSign = type => {
        if (type === 'login') this.props.history.push('/login')
        else if (type === 'register') this.props.history.push('/register')
        else if (type === 'dash') this.props.history.push(`/lobby/${this.state.user}`)
    }

    addMore = () => {
        // Needs offset variable from length of galleries. It accounts for number of galleries currently loaded on page, passes it on params, and uses that as an offset within the query so there are no duplicates/skipped galleries in the ordered retrieval by number of favorites.
        const offset = this.state.galleries.length
        axios.get(`/api/getAllGalleries/${offset}`).then(res => {
            // join res.data with galleries array in state
            let arrayOfNewGalleries = res.data
            let joinedArray = this.state.galleries.concat(arrayOfNewGalleries)
            this.setState({ galleries: joinedArray }, () => {
                if (this.state.user) {
                    this.identifyFavorites()
                }
            })
        })
    }

    visitGallery = (galleryId, galleryName, author) => {
        //Redirects user to gallery, then adds one view to gallery.
        this.props.history.push(`/${author}/${galleryName}/`)
        axios.put(`/api/incrementView/${galleryId}`)
    }

    adjustFavorites(galleryId, timesFavorited) {
        //Check whether user is signed in first, otherwise cancel function
        if (!this.state.user) return;
        // Array of hearts on page and counters to be passed in axios calls
        let galleries = this.state.galleries
        let increaseFave = timesFavorited + 1;
        let decreaseFave = timesFavorited - 1;
        const hearts = document.getElementsByClassName('fa-heart')
        for (let i = 0; i < hearts.length; i++) {
            if (Number(hearts[i].getAttribute('data-id')) === galleryId) {
                // if heart is already filled in as red, then remove class, decrement count on state for increased perceived loading time, decrement count on gallery's database, and then subsequently remove from favorites in user's database.
                if (hearts[i].classList.contains('make-red')) {
                    // remove color
                    hearts[i].classList.remove('make-red');
                    // loop through copy of existing galleries to find gallery matching the element where heart is located.
                    for (let i = 0; i < galleries.length; i++) {
                        if (galleries[i].id === galleryId) {
                            // Once gallery is found, replace times_favorited with decreaseFave which is the timesFavorited - 1;
                            galleries[i].times_favorited = decreaseFave
                            this.setState({ galleries }, () => {
                                //   after State has been updated, update favorited number on gallery then remove from favorites list in db.
                                axios.put(`/api/adjustGalleryFavorites/${galleryId}`, { Decrease: 1 }).then(res => {
                                    // pass in ID to be deleted from favorites table
                                    axios.delete(`/api/deleteFromFavorites/${galleryId}`).then(res => {
                                        // popup saying galleryName has been removed from favorites?
                                        console.log('favorites successfully updated - decreased.')
                                    })
                                })
                            })
                        }
                    }
                } else {
                    // add color
                    hearts[i].classList.add('make-red')
                    // loop through galleries, find matching gallery by galleryId, replace times_favorited by IncreaseFave, and reset state with newgallery
                    for (let i = 0; i < galleries.length; i++) {
                        if (galleries[i].id === galleryId) {
                            galleries[i].times_favorited = increaseFave
                            this.setState({ galleries }, () => {
                                // pass in galleryId to adjust favorites number in server
                                axios.put(`/api/adjustGalleryFavorites/${galleryId}`, { Increase: 1 }).then(res => {
                                    // pass in galleryId as body to add into favorites table
                                    axios.post(`/api/addToFavorites/`, { galleryId }).then(res => {
                                        //popup saying galleryName has been added to favorites?
                                        console.log('favorites successfully updated - increased.')
                                    })
                                })
                            })
                        }
                    }
                }
            }
        }
    }

    shareGallery(galleryName, author) {
        const location = window.location
        // Check for spaces in galleryName and author function - and replace with %20 for url to understand destination in url. May revise later so it doesn't look ugly.
        const galleryDestination = galleryName.replace(/ /g, "%20");
        const authorDestination = author.replace(/ /g, "%20");
        let destination = `${location}${authorDestination}/${galleryDestination}`
        console.log(destination)
    }

    urlSpaceCleaner() {
        // if we want to clean up spaces into something else 
    }

    render() {
        const galleryArray = this.state.galleries.map(gallery => {
            const galleryId = gallery.id
            const galleryName = gallery.gallery_name
            const author = gallery.author
            let timesFavorited = gallery.times_favorited
            return (
                <div key={galleryId} className='gallery-container'>
                    <img src={gallery.thumbnail} alt='Card Thumbnail' className='gallery-thumbnail' />
                    <div className='gallery-text'>
                        <h1 className='gallery-title'>{galleryName.length > 20 ? galleryName.slice(0,20) + '...' : galleryName}</h1>
                        <div className='gallery-title-hover'>{galleryName}</div>
                        <h3 className='gallery-author'>BY:{author}</h3>
                        <div className='gallery-stats'>
                            <i className="fas fa-eye stat"></i><span>{gallery.views}</span>
                            <i onClick={() => this.adjustFavorites(galleryId, timesFavorited)} className="fas fa-heart stat" data-id={galleryId}></i><span>{timesFavorited}</span>
                            <i onClick={() => this.shareGallery(galleryName, author)} className="fas fa-share stat"></i><span>{gallery.shares}</span>
                        </div>
                        <div onClick={() => this.visitGallery(galleryId, galleryName, author)} className='gallery-view center'>Visit Gallery</div>
                    </div>
                </div>
            )
        })
        return (
            <>
                {!this.state.loading ?
                    <div className='home'>
                        <div className='landing'>
                            <header className='landing-header'>
                                <div className='landing-header_name center'>
                                    VR <span className='lighttext'>ART GALLERY</span>
                                </div>
                                {this.state.user ?
                                    <div className='landing-header_links'>
                                        <span onClick={() => this.handleSign('dash')}>Dashboard</span>
                                    </div>
                                    :
                                    <div className='landing-header_links'>
                                        <span onClick={() => this.handleSign('login')}>LOGIN</span>
                                        <span onClick={() => this.handleSign('register')}>REGISTER</span>
                                    </div>
                                }
                            </header>
                            <div className='landing-welcome'>
                                <div className='landing-welcome_body'>
                                    <h1>Walk around and see cool shit in VR</h1>
                                    <h3>Make your own or browse other galleries</h3>
                                    <div className='center' onClick={() => this.smoothScroll('gallery')}>VIEW GALLERIES</div>
                                    <div className='video-container center'>
                                        <video controls src={VRVideo} alt="trailer of VR-Art-Gallery"></video>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <main className='landing-main'>
                            <div className='landing-galleries'>
                                {galleryArray}
                            </div>
                            <div className='landing-back center' onClick={() => this.smoothScroll('home')}>
                                <i className="fas fa-arrow-up"></i>
                            </div>
                        </main>
                    </div>
                    :
                    <div className='lobby-loading center'>
                        <div className='lobby-loading_content center'>
                            <span>VR<span className='lighttext'>ART GALLERY</span></span>
                            <div className='lobby-loading-grid center'>
                                <div />
                                <div />
                                <div />
                            </div>
                        </div>
                    </div>
                }

            </>
        )
    }
}

export default LandingPage