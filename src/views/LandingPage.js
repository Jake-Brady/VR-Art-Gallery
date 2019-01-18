import React, { Component } from 'react'
import '../Styles/Views/LandingPage.css'
import VRVideo from '../assets/video/VR-Trailer.mp4'
import Splat from '../Styles/Media/yoinkminenow.png'
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
            favorited: []
        }
        this.visitGallery = this.visitGallery.bind(this)
    }

    async componentDidMount() {
        const offset = this.state.galleries.length
        axios.get(`/api/getAllGalleries/${offset}`).then(res => {
                this.setState({galleries: res.data})
        })
        const user = await axios.get('/api/checkUser/')
        this.setState({ user: user.data }, () => this.setState({ loading: false }))
        window.addEventListener('scroll', this.handleScroll)
        
        // Sees whether user is logged in. If true, it will store favorites in array to be compared with galleries array so addToFavorites/removeFromFavorites function will work.
        axios.get(`/api/getFavorites/`).then(res => {
            this.setState({favorited: res.data}, () => {
                // Once favorited array has been 
            })
        })
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

    smoothScroll(target){
        if (target === 'gallery'){
        const galleries = $('.landing-galleries').position().top;
        $('html, body').animate({
            scrollTop: galleries
        }, 300)
    } else if (target === 'home') {
        const home = $('.home').position().top;
        $('html, body').animate({
            scrollTop: home
        }, 500)
    }}


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
            this.setState({galleries: joinedArray})
        })
    }

    visitGallery(galleryId, galleryName, author) {
        //Redirects user to gallery, then adds one view to gallery.
        this.props.history.push(`/${author}/${galleryName}/`)
        axios.put(`/api/incrementView/${galleryId}`)
    }

    adjustFavorites(galleryId, timesFavorited){
      //Check whether user is signed in first, otherwise cancel function
      if (!this.state.user) return;
      // Array of hearts on page 
      const hearts = document.getElementsByClassName('fa-heart')
      // Counter for favorites displayed on page.
      let updateFavorites = timesFavorited;
      for(let i = 0; i < hearts.length; i++){
          if (Number(hearts[i].getAttribute('id')) === galleryId){
            // if heart is already filled in as red, then remove class, decrement count, decrement count on gallery's database, and then subsequently remove from favorites in user's database.
            if(hearts[i].classList.contains('make-red')){
            hearts[i].classList.remove('make-red');
            updateFavorites = updateFavorites - 1;
            // setState? Or replace innerHTML?
            axios.put(`/api/adjustGalleryFavorites/${galleryId}`, {Decrease: 1}).then(res => {
                console.log('adjusted gallery favorited times by -1')
                axios.put(`/api/deleteFromFavorites/${galleryId}`, {updateFavorites}).then(res => {
                    // popup saying galleryName has been removed from favorites?
                })
            })
            } else {
            hearts[i].classList.add('make-red')
            updateFavorites = updateFavorites + 1;
            // setState? Or replace innerHTML?
            axios.put(`/api/adjustGalleryFavorites/${galleryId}`, {Increase: 1}).then(res => {
                console.log('adjusted gallery favorited times by +1')
                axios.put(`/api/addToFavories/${galleryId}`, {updateFavorites}).then(res => {
                    //popup saying galleryName has been added to favorites?
                })
            })
            }
          }
      }
    }

    render() {
        const galleryArray = this.state.galleries.map(gallery => {
            const galleryId = gallery.id
            const galleryName = gallery.gallery_name
            const author = gallery.author
            let timesFavorited = gallery.times_favorited
            return (
                <div id={galleryId} className='gallery-container'>
                    <img src={gallery.thumbnail} alt='Card Thumbnail' className='gallery-thumbnail' />
                    <div className='gallery-text'>
                        <h1 className='gallery-title'>{galleryName}</h1>
                        <h3 className='gallery-author'>BY:{author}</h3>
                        <div className='gallery-stats'>
                            <i className="fas fa-eye stat"></i>
                            <span>{gallery.views}</span>
                            <i onClick={() => this.adjustFavorites(galleryId, timesFavorited)} className="fas fa-heart stat" id={galleryId}></i>
                            <span>{timesFavorited}</span>
                            <i className="fas fa-share stat"></i>
                            <span>{gallery.shares}</span>
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
                    <div>
                        <img src={Splat} alt='' className='landing-splat'/>
                    </div>
            }

            </>
        )
    }
}

export default LandingPage