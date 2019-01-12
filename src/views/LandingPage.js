import React, { Component } from 'react'
import '../Styles/LandingPage.css'
import VRVideo from '../assets/video/VR-Trailer.mp4'

class LandingPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='home'>
                <div className='landing'>
                    <header className='landing-header'>
                        <div className='landing-header_name'>
                            VR <span className='lighttext'>ART GALLERY</span>
                        </div>
                        <div className='landing-header_links'>
                            <span>LOGIN</span>
                            <span>REGISTER</span>
                            <div className='landing-header_search'>
                                <input type='text' placeholder='Search Galleries'></input>
                            </div>
                        </div>
                    </header>
                    <div className='landing-welcome center'>
                        <div className='landing-welcome_body'>
                            <h1>Walk around and see cool shit in VR</h1>
                            <h3>Make your own or browse other galleries</h3>
                            <div className='center'>VIEW GALLERIES</div>
                            <div className='video-container center'>
                                <video controls src={VRVideo} alt="trailer of VR-Art-Gallery"></video>
                            </div>
                        </div>
                    </div>
                </div>
                <main className='landing-main'>

                </main>
            </div>
        )
    }
}

export default LandingPage