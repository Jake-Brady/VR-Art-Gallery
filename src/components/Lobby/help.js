import React from 'react'
import '../Styles/help.css'

export default function (props) {
    return (
        <div className='help-container'>
            <h1>Why is my VR running like shit?</h1>
            <p>If you're using Chrome make sure that "Hardware Acceleration" is enabled. You can find this setting
                by clicking the 3 circles in the top right => settings => advanced => Use hardware acceleration when available. You can also try running this app in another browser such as Firefox or Edge.
            </p>
        </div>
    )
}