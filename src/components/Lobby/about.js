import React from 'react'
import '../../styles/Components/about.css'


export default function (props) {
    const handleDrop = num => {
        const drops = document.querySelectorAll('[data-drop]')
        if (num === 3) {
            if (drops[num].classList.contains('drop-anim2')) {
                drops[num].classList.remove('drop-anim2')
                drops[num].classList.add('up-anim2')
            }
            else {
                drops[num].classList.remove('up-anim2')
                drops[num].classList.add('drop-anim2')
            }
        }
        else {
            if (drops[num].classList.contains('drop-anim')) {
                drops[num].classList.remove('drop-anim')
                drops[num].classList.add('up-anim')
            }
            else {
                drops[num].classList.remove('up-anim')
                drops[num].classList.add('drop-anim')
            }
        }
    }

    return (
        <>
            <div className='about-container'>
                <h1>FREQUENTLY ASKED QUESTIONS</h1>
                <div className='about-question' onClick={() => handleDrop(0)}>
                    Why is my VR running so poorly?
            <i className="fas fa-chevron-down about-down center"></i>
                </div>
                <div className='about-dropdown center' data-drop>
                    <p>Make sure that "Hardware Acceleration" is enabled if you are using Google Chrome. You can find this setting by clicking the 3 circles in the top right corner of the window. Then click settings --> advanced --> Use hardware acceleration when available.  This application has been tested for performance in Edge, Firefox, and Chrome.</p>
                </div>
                <div className='about-question' onClick={() => handleDrop(1)}>
                    Why will my music not play?
            <i className="fas fa-chevron-down about-down center"></i>
                </div>
                <div className='about-dropdown center' data-drop>
                    <p>Make sure your cursor is directly over the boombox and left-click to play your song selection.</p>
                </div>
                <div className='about-question' onClick={() => handleDrop(2)}>
                    Why is music not playing on mobile?
            <i className="fas fa-chevron-down about-down center"></i>
                </div>
                <div className='about-dropdown center' data-drop>
                    <p>Unforunately, mobile browsers have limitations playing imported audio files into the aframe asset management system. We're looking into it.<span role="img" aria-label='laughing'>😂</span></p>
                </div>
                <div className='about-question' onClick={() => handleDrop(3)}>
                    Who performed the songs available as musical presets?
            <i className="fas fa-chevron-down about-down center"></i>
                </div>
                <div className='about-dropdown center-column' data-drop>
                    <p>All songs were performed by Kevin Macleod, and they are all licensed under a creative commons license.  You can find more about him and his music <a href="http://freemusicarchive.org/music/Kevin_MacLeod/" target="_blank" rel='noopener noreferrer' className='about-link'>here</a>, and the proper citations for each song are as follows:</p>
                    <p>• Gymnopedie No. 1 Kevin MacLeod (incompetech.com) Licensed under Creative Commons: By <a href='http://creativecommons.org/licenses/by/3.0/' target='_blank' rel='noopener noreferrer' className='about-link'>Attribution 3.0 License</a>.</p>
                    <p>• Impromptu in Quarter Comma Meantone Kevin MacLeod (incompetech.com) Licensed under Creative Commons: By <a href='http://creativecommons.org/licenses/by/3.0/' target='_blank' rel='noopener noreferrer' className='about-link'>Attribution 3.0 License</a>.</p>
                    <p>• On the Passing of Time Kevin MacLeod (incompetech.com) Licensed under Creative Commons: By <a href='http://creativecommons.org/licenses/by/3.0/' rel='noopener noreferrer' target='_blank' className='about-link'>Attribution 3.0 License</a>.</p>
                    <p>• Snow Drop Kevin MacLeod (incompetech.com) Licensed under Creative Commons: By <a href='http://creativecommons.org/licenses/by/3.0/' rel='noopener noreferrer' target='_blank' className='about-link'>Attribution 3.0 License</a>.</p>
                </div>
                <div className='about-question' onClick={() => handleDrop(4)}>
                    Who created this project?
            <i className="fas fa-chevron-down about-down center"></i>
                </div>
                <div className='about-dropdown center' data-drop>
                    <p><a href="https://github.com/Besnuggs" target="_blank" rel='noopener noreferrer' className='about-link'>Brady Snuggs</a> and <a href="https://github.com/jakerowla" target="_blank" rel='noopener noreferrer' className='about-link'>Jake Rowland</a>.</p>
                </div>
            </div>
        </>
    )
}
