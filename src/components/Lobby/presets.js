import React, {Component} from 'react'
import { Dropdown } from 'react-bootstrap';

class Presets extends Component{
    constructor(){
        super()
            this.state={
                nameOfGallery: '',
                floorTexture: '',
                wallTexture: '',
                music: '',
                lighting: '',
            }
    }

componentDidMount(){
    // Get request to user's Gallery_Presets table and populates state
}

render(){
    return(
        <section className="gallery-presets">
        <h2>Gallery Preset Section</h2>
            <div className="music preset">
                <dropdown value=""></dropdown>
            </div>
            <div className="floor-texture preset">
                <dropdown value=""></dropdown>
            </div>
            <div className="wall-texture preset">
                <dropdown value=""></dropdown>
            </div>
            <div className="lighting preset">
                <dropdown value=""></dropdown>
            </div>
        </section>
    )
}
}

export default Presets