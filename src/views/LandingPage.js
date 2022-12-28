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
            favoriteNum: 0,
            notificationType: '',
            sharedGalleries: [],
            galleriesFiltered: [],
            popping: false,
            queue: []
        }
    }

    async componentDidMount() {
        if (document.querySelector('html').classList.contains('a-html')) {
            window.location.reload(true)
        }
        const offset = this.state.galleries.length,
            galleries = await axios.get(`/api/getAllGalleries/${offset}`)
        this.setState({ galleries: galleries.data })
        const user = await axios.get('/api/checkUser/')
        this.setState({ user: user.data }, () => this.setState({ loading: false }))
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('keypress', this.checkKey)
        this.getFavorites()
    }

    checkKey = e => {
        if (e.code === 'Enter') this.handleSearch()
    }

    handleSearch = () => {
        const input = document.querySelector('#landing-search > input')
        if (input.value) this.searchResults(input.value)
        else this.setState({ galleriesFiltered: [] })
        input.value = ''
    }

    async searchResults(keywords) {
        const searchResults = await axios.get(`/api/galleries?search=${keywords}`)
        this.setState({ galleriesFiltered: searchResults.data })
    }

    async getFavorites() {
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
        window.removeEventListener('keypress', this.checkKey)
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
            const galleries = $('#landing-search').position().top;
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
                    this.getFavorites()
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
        if (!this.state.user) {
            this.removeFavPop({ name: null, type: 'signin' })
        } else {
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
                                // popup saying galleryName has been removed from favorites
                                this.removeFavPop({ name: galleries[i].gallery_name, type: 'removed' })
                                // Once gallery is found, replace times_favorited with decreaseFave which is the timesFavorited - 1;
                                galleries[i].times_favorited = decreaseFave
                                this.setState({ galleries }, () => {
                                    //   after State has been updated, update favorited number on gallery then remove from favorites list in db.
                                    axios.put(`/api/adjustGalleryFavorites/${galleryId}`, { Decrease: 1 }).then(res => {
                                        // pass in ID to be deleted from favorites table
                                        axios.delete(`/api/deleteFromFavorites/${galleryId}`)
                                    })
                                })
                            }
                        }
                    } else {
                        //popup saying galleryName has been added to favorites
                        this.removeFavPop({ name: galleries[i].gallery_name, type: 'favorited' })
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
                                        axios.post(`/api/addToFavorites/`, { galleryId })
                                    })
                                })
                            }
                        }
                    }
                }
            }
        }
    }

    shareGallery(galleryName, author, galleryId, galleryShares, { target }) {
        target.style.color = 'rgb(110, 142, 254)'
        this.removeFavPop({ name: galleryName, type: 'share' })
        this.increaseShare(galleryId, galleryShares)
        const location = window.location
        galleryName = galleryName.split(' ').join('%20')
        author = author.split(' ').join('%20')
        let destination = `${location}${author}/${galleryName}`
        let textField = document.createElement('textarea')
        textField.innerText = destination
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }

    increaseShare(galleryId, galleryShares) {
        // To prevent spamming of shared, it'll keep a record of which galleries are being shared and not update the client or database, but still allow the user to see the notification and paste the URL.
        let sharedGalleries = this.state.sharedGalleries,
            galleries = this.state.galleries,
            gallerySharesIncrement = galleryShares + 1,
            hasSomeoneSharedThisAlready = sharedGalleries.includes(galleryId)
        // Needs to check whether value is in sharedGalleries
        // if true, return nothing.  if false, perform the loop below:
        if (!hasSomeoneSharedThisAlready) {
            sharedGalleries.push(galleryId)
            for (let i = 0; i < galleries.length; i++) {
                if (galleries[i].id === galleryId) {
                    galleries[i].shares = gallerySharesIncrement
                    this.setState({ galleries }, async () => {
                        await axios.put(`/api/increaseShare/${galleryId}`)
                    })
                }
            }
        }
    }

    removeFavPop = name => {
        this.setState({ queue: [...this.state.queue, name] }, () => {
            if (!this.state.popping) this.startInterval()
        })
    }

    startInterval = () => {
        this.playAnim(this.state.queue[0])
        this.setState({ popping: true, queue: [...this.state.queue.slice(1)] }, () => {
            let interval = setInterval(() => {
                if (this.state.queue.length) {
                    this.playAnim(this.state.queue[0])
                    this.setState({ queue: [...this.state.queue.slice(1)] })
                }
                else this.setState({ popping: false }, () => clearInterval(interval))
            }, 2050)
        })
    }

    playAnim = obj => {
        const pop = document.querySelector('.add-favorites-pop')
        if (!obj.name && obj.type === 'signin') {
            pop.style.background = 'rgb(238, 50, 50)'
            pop.innerText = `Sign in to add to favorites`
        }
        else if (obj.name && obj.type === 'share') {
            pop.style.background = 'rgb(61, 111, 220)'
            pop.innerText = `Copied ${obj.name} to Clipboard`
        }
        else if (obj.name && obj.type === 'removed') {
            pop.style.background = 'rgb(238, 50, 50)'
            pop.innerText = `Removed ${obj.name} from favorites`
        }
        else if (obj.name && obj.type === 'favorited') {
            pop.style.background = 'rgb(61, 111, 220)'
            pop.innerText = `Added ${obj.name} to favorites`
        }
        pop.classList.add('lobby-pop-anim')
        setTimeout(() => {
            pop.classList.remove('lobby-pop-anim')
        }, 2000);
    }

    handleVideo = ({ target }) => {
        const play = document.querySelector('.video-icons'),
            pause = document.querySelector('.video-icons2')
        if (!target.paused) {
            play.classList.remove('video-anim')
            play.style.opacity = '0'
            pause.classList.add('video-anim')
            target.pause()
        }
        else {
            pause.classList.remove('video-anim')
            play.classList.add('video-anim')
            target.play()
        }
    }

    render() {
        const galleryArray = this.state.galleries.map(gallery => {
            const galleryId = gallery.id
            const galleryName = gallery.gallery_name
            const author = gallery.author
            let timesFavorited = gallery.times_favorited
            return (
                <div key={galleryId} className='gallery-container'>
                    <img onClick={() => this.visitGallery(galleryId, galleryName, author)} src={gallery.thumbnail} alt='Card Thumbnail' className='gallery-thumbnail' />
                    <div className='gallery-text'>
                        <h1 className='gallery-title'>{galleryName.length > 20 ? galleryName.slice(0, 20) + '...' : galleryName}</h1>
                        <div className='gallery-title-hover'>{galleryName}</div>
                        <h3 className='gallery-author'>BY:{author}</h3>
                        <div className='gallery-stats'>
                            <i className="fas fa-eye stat"></i><p className="stats-view">Views</p><span>{gallery.views}</span>
                            <i onClick={() => this.adjustFavorites(galleryId, timesFavorited)} className="fas fa-heart stat" data-id={galleryId}></i><p className="stats-favorite">Favorite</p><span>{timesFavorited}</span>
                            <i onClick={(e) => this.shareGallery(galleryName, author, galleryId, gallery.shares, e)} className="fas fa-share stat"></i><p className="stats-shared">Share</p><span>{gallery.shares}</span>
                        </div>
                        <div onClick={() => this.visitGallery(galleryId, galleryName, author)} className='gallery-view center'>Visit Gallery</div>
                    </div>
                </div>
            )
        })
        const filteredArray = this.state.galleriesFiltered.map(gallery => {
            const galleryId = gallery.id
            const galleryName = gallery.gallery_name
            const author = gallery.author
            let timesFavorited = gallery.times_favorited
            return (
                <div key={galleryId} className='gallery-container'>
                    <img onClick={() => this.visitGallery(galleryId, galleryName, author)} src={gallery.thumbnail} alt='Card Thumbnail' className='gallery-thumbnail' />
                    <div className='gallery-text'>
                        <h1 className='gallery-title'>{galleryName.length > 20 ? galleryName.slice(0, 20) + '...' : galleryName}</h1>
                        <div className='gallery-title-hover'>{galleryName}</div>
                        <h3 className='gallery-author'>BY:{author}</h3>
                        <div className='gallery-stats'>
                            <i className="fas fa-eye stat"></i><p className="stats-view">Views</p><span>{gallery.views}</span>
                            <i onClick={() => this.adjustFavorites(galleryId, timesFavorited)} className="fas fa-heart stat" data-id={galleryId}></i><p className="stats-favorite">Favorite</p><span>{timesFavorited}</span>
                            <i onClick={(e) => this.shareGallery(galleryName, author, galleryId, gallery.shares, e)} className="fas fa-share stat"></i><p className="stats-shared">Share</p><span>{gallery.shares}</span>
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
                                    <h1>Walk around and see cool stuff in VR</h1>
                                    <h3>Make your own gallery or browse others</h3>
                                    <div className='center' onClick={() => this.smoothScroll('gallery')}>VIEW GALLERIES</div>
                                    <div className='video-container center'>
                                        <div className='video-icons center'>
                                            <i className="fas fa-play"></i>
                                        </div>
                                        <div className='video-icons2 center'>
                                            <i className="fas fa-pause"></i>
                                        </div>
                                        <video src={VRVideo} alt="trailer of VR-Art-Gallery" onClick={e => this.handleVideo(e)}></video>
                                    </div>
                                    <div id='landing-search'>
                                        <input placeholder='Search by Gallery or Author' />
                                        {this.state.galleriesFiltered.length ?
                                            <i className="fas fa-times center" onClick={() => this.handleSearch()}></i>
                                            :
                                            <i className="fas fa-search center" onClick={() => this.handleSearch()}></i>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <main className='landing-main'>
                            {this.state.galleriesFiltered.length ?
                                <div className='landing-galleries'>
                                    {filteredArray}
                                </div>
                                :
                                <div className='landing-galleries'>
                                    {galleryArray}
                                </div>
                            }
                            <div className='landing-back center' onClick={() => this.smoothScroll('home')}>
                                <i className="fas fa-arrow-up"></i>
                            </div>
                            <div className="add-favorites-pop center"></div>
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