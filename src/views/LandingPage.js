import React, { Component } from 'react'
import '../Styles/LandingPage.css'
import VRVideo from '../assets/video/VR-Trailer.mp4'
import { homedir } from 'os';

class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileToggle: false
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

    handleMobile = () => {

    }

    handleScroll = this.debounce(() => {
        const scroll = window.scrollY
        const back = document.querySelector('.landing-back')
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
            console.log('helo')
            const top = document.querySelector('.home')
            top.scrollIntoView()
        }
    }

    render() {
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
                    
                    <div className='landing-back center' onClick={() => this.handleClick('top')}>
                        <i className="fas fa-arrow-up"></i>
                    </div>
                </main>
            </div>
        )
    }
}

export default LandingPage