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
                        <span>LOGIN</span><span> | </span><span>REGISTER</span>
                    </div>
                </header>
            </div>
        )
    }
}

export default LandingPage