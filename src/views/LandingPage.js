import React, { Component } from 'react'
import '../Styles/LandingPage.css'
import VRVideo from '../assets/video/VR-Trailer.mp4'

class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileToggle: false,
            galleries: [{ author: 'jakerowla', name: 'Waves', thumbnail: 'https://ih1.redbubble.net/image.495947844.1611/flat,550x550,075,f.u1.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'http://www.artfusionproductions.com.au/files/1891429/uploaded/Zebra%20Image.JPG' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://www.orlandodiocese.org/wp-content/uploads/2018/07/art.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://cdn-images-1.medium.com/max/2000/1*AnmQd3T5y_k9M0e0rAfxYQ.jpeg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'http://www.aljazeera.com/mritems/Images/2018/2/13/b9a83cabd7134bbc8ba42bc762ff179f_18.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'http://wpr-public.s3.amazonaws.com/ttbook/styles/story_full_image/s3/images/cody-davis-253925-unsplash.jpg?itok=5ue8OyO3' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'http://i.imgur.com/1wYVzIK.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://d1cgopr8ucbnrg.cloudfront.net/Events/Annual%20Events/Art%20Basel/alexej-von-jawlensky-haus-mit-palme-1440x900.jpg?ext=.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://static01.nyt.com/images/2018/05/18/arts/18list-art/18list-art-articleLarge.jpg?quality=75&auto=webp&disable=upscale' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://i.pinimg.com/736x/94/e5/c8/94e5c8f8a38382c6750f26a2467ad670--bright-art-lonely-heart.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://assets.saatchiart.com/saatchi/484210/art/4332623/3402463-KNVHBTVS-7.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://www.moma.org/d/assets/W1siZiIsIjIwMTUvMTAvMjEvaWJ3dmJmanIyX3N0YXJyeW5pZ2h0LmpwZyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ/starrynight.jpg?sha=161d3d1fb5eb4b23' }]
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

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

    handleClick = (target) => {
        if (target === 'gallery') {
            const main = document.querySelector('.landing-main')
            main.scrollIntoView()
        }
        else if (target === 'top') {
            const top = document.querySelector('.home')
            top.scrollIntoView()
        }
    }

    addMore = () => {
        this.setState({ galleries: [...this.state.galleries, { author: 'jakerowla', name: 'Waves', thumbnail: 'https://ih1.redbubble.net/image.495947844.1611/flat,550x550,075,f.u1.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'http://www.artfusionproductions.com.au/files/1891429/uploaded/Zebra%20Image.JPG' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://www.orlandodiocese.org/wp-content/uploads/2018/07/art.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://cdn-images-1.medium.com/max/2000/1*AnmQd3T5y_k9M0e0rAfxYQ.jpeg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'http://www.aljazeera.com/mritems/Images/2018/2/13/b9a83cabd7134bbc8ba42bc762ff179f_18.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'http://wpr-public.s3.amazonaws.com/ttbook/styles/story_full_image/s3/images/cody-davis-253925-unsplash.jpg?itok=5ue8OyO3' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'http://i.imgur.com/1wYVzIK.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://d1cgopr8ucbnrg.cloudfront.net/Events/Annual%20Events/Art%20Basel/alexej-von-jawlensky-haus-mit-palme-1440x900.jpg?ext=.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://static01.nyt.com/images/2018/05/18/arts/18list-art/18list-art-articleLarge.jpg?quality=75&auto=webp&disable=upscale' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://i.pinimg.com/736x/94/e5/c8/94e5c8f8a38382c6750f26a2467ad670--bright-art-lonely-heart.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://assets.saatchiart.com/saatchi/484210/art/4332623/3402463-KNVHBTVS-7.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://www.moma.org/d/assets/W1siZiIsIjIwMTUvMTAvMjEvaWJ3dmJmanIyX3N0YXJyeW5pZ2h0LmpwZyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ/starrynight.jpg?sha=161d3d1fb5eb4b23' }] })
    }

    render() {
        const galleryArray = this.state.galleries.map(gallery => {
            return (
                <div className='gallery-container'>
                    <img src={gallery.thumbnail} alt='Card Thumbnail' className='gallery-thumbnail' />
                    <div className='gallery-text'>
                        <h1 className='gallery-title'>{gallery.name}</h1>
                        <h3 className='gallery-author'>BY: {gallery.author}</h3>
                        <div className='gallery-stats'>
                        <i className="fas fa-eye stat"></i>
                        <span>12</span>
                        <i className="fas fa-heart stat"></i>
                        <span>12</span>
                        <i className="fas fa-share stat"></i>
                        <span>25</span>
                        </div>
                        <div className='gallery-view center'>Visit Gallery</div>
                    </div>
                </div>
            )
        })
        return (
            <div className='home'>
                <div className='landing'>
                    <header className='landing-header'>
                        <div className='landing-header_name center'>
                            VR <span className='lighttext'>ART GALLERY</span>
                        </div>
                        <div className='landing-header_links'>
                            <span>LOGIN</span>
                            <span>REGISTER</span>
                        </div>
                    </header>
                    <div className='landing-welcome'>
                        <div className='landing-welcome_body'>
                            <h1>Walk around and see cool shit in VR</h1>
                            <h3>Make your own or browse other galleries</h3>
                            <div className='center' onClick={() => this.handleClick('gallery')}>VIEW GALLERIES</div>
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
                    <div className='landing-back center' onClick={() => this.handleClick('top')}>
                        <i className="fas fa-arrow-up"></i>
                    </div>
                </main>
            </div>
        )
    }
}

export default LandingPage