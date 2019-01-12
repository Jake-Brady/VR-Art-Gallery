import React, { Component } from 'react'
import '../Styles/LandingPage.css'

class LandingPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
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
                <main className='landing-main center'>
                    <div className='landing-main_body'>
                        <h1>Walk around and see cool shit in VR</h1>
                        <h3>Make your own or browse other galleries</h3>
                        <div className='center'>View Galleries</div>
                    </div>
                </main>
            </div>
        )
    }
}

export default LandingPage