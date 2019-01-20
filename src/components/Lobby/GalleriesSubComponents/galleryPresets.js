import React, {Component} from 'react'

class GalleryPresets extends Component {
    constructor(){
        super()
            this.state={
                music: '',
                lighting: '',
                floorTexture: '',
                ceilingTexture: '',
                wallTexture: ''
            }
    }

componentDidMount(){

}

render(){
    return(
        <section id="gallery-presets">
            <h2>Gallery Preset Section</h2>
            <p>Music Selection</p>
            <p>Floor Textures</p>
            <p>Wall Textures</p>
        </section>
    )
}
}

export default GalleryPresets