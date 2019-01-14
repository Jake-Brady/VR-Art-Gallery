import React, {Component} from 'react'
import '../Styles/presets.css'

class Presets extends Component{
    constructor(){
        super()
            this.state={
                nameOfGallery: '',
                floorTexture: '',
                wallTexture: '',
                music: '',
                lighting: '',
                user:''
            }
    }

componentDidMount(){
    // Get request to user's Gallery_Presets table and populates state
}

render(){
    return(
        <section id="gallery-presets">
        <h2>Gallery Preset Section</h2>
            <div className="music preset">
                <select>
                    <option value="Gymnopedie">Gymnopedie</option>
                    <option value="whatever">Open Source</option>
                    <option value="whatever">Open Source</option>
                </select>
            </div>
            <div className="floor-texture preset">
                <select>
                    <option value="Wood">Laminate Wood Flooring</option>
                    <option value="whatever">Open Source</option>
                    <option value="whatever">Open Source</option>
                </select>
            </div>
            <div className="wall-texture preset">
                <select>
                    <option value="Granite">Grey Granite</option>
                    <option value="whatever">Open Source</option>
                    <option value="whatever">Open Source</option>
                </select>
            </div>
            <div className="lighting preset">
                <select>
                    <option value="Blue">Light Blue</option>
                    <option value="whatever">Open Source</option>
                    <option value="whatever">Open Source</option>
                </select>
            </div>
        </section>
    )
}
}

export default Presets