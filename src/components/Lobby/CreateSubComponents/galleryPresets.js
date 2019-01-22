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



componentWillReceiveProps(props){
let {galleryPresets} = props
if (galleryPresets){
this.setState({ceilingTexture:galleryPresets[0], wallTexture: galleryPresets[1], lighting:galleryPresets[2], floorTexture:galleryPresets[3], music:galleryPresets[4]}, () => {
    console.log(this.state)
})
}
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