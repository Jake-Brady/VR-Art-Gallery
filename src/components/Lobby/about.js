import React from 'react'
import '../../styles/Components/about.css'


export default function (props) {
    const musicCitations = [`Gymnopedie No. 1 Kevin MacLeod (incompetech.com)
    Licensed under Creative Commons: By Attribution 3.0 License http://creativecommons.org/licenses/by/3.0/`, `Impromptu in Quarter Comma Meantone Kevin MacLeod (incompetech.com)
    Licensed under Creative Commons: By Attribution 3.0 License http://creativecommons.org/licenses/by/3.0/`, `On the Passing of Time Kevin MacLeod (incompetech.com)
    Licensed under Creative Commons: By Attribution 3.0 License http://creativecommons.org/licenses/by/3.0/`, `Snow Drop Kevin MacLeod (incompetech.com)
    Licensed under Creative Commons: By Attribution 3.0 License http://creativecommons.org/licenses/by/3.0/` ]
    return (
        <div className="about-page">
        <div className='about-container'>
                <h1>FREQUENTLY ASKED QUESTIONS</h1>
                <div className="question-div">
                    <h2>Who made this? 😂👌🔥</h2>
                    <p>
                        <a href="https://github.com/Besnuggs" target="_blank">Brady Snuggs</a> and <a href="https://github.com/jakerowla" target="_blank">Jake Rowland</a>.
                    </p>
                </div>
                <div className="question-div">
                    <h2>Why is my VR running so poorly? </h2>
                    <p> Make sure that "Hardware Acceleration" is enabled if you are using Google Chrome. You can find this setting by clicking the 3 circles in the top right corner of the window. Then click settings --> advanced --> Use hardware acceleration when available.  This application has been tested for performance in Edge, Firefox, and Chrome.
                    </p>
                </div>
                <div className="question-div">
                    <h2>Why will my music not play?</h2>
                    <p>
                    Make sure your cursor is directly over the vinyl player and left-click to play your song selection.
                    </p>
                </div>
                <div className="question-div">
                    <h2>Why will my music not play in my gallery while on mobile? </h2>
                    <p>
                    Unforunately, mobile browsers have limitations playing imported audio files into the aframe asset management system. We're looking into it.😂
                    </p>
                </div>
                <div className="question-div">
                    <h2>Who performed the songs available as musical presets?</h2>
                    <p>All songs were performed by Kevin Macleod, and they are all licensed under a creative commons license.  You can find more about him and his music <a href="http://freemusicarchive.org/music/Kevin_MacLeod/" target="_blank">here</a>, and the proper citations for each song are as follows:
                    </p>
                        <div className="citation-section">
                                {musicCitations.map((e,i) => {
                                    return(
                                        <span className="citation-list-item" key={i}>
                                            {e}
                                        </span>
                                    )
                                })}
                        </div>
                </div>
                <div className="question-section">
                    <h2>Why will some images load while others will not?</h2>
                    <p>CORS, unfortunately, sets limitations on which image files will load depending on the file source; however, if it is possible to save the image locally, you should try uploading it instead.
                    </p>
                </div>
        </div>
        </div>
    )
}