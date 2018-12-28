import sky from '../../../assets/sky.jpg'
import 'aframe'
import {Entity} from 'aframe-react'
import React, {Component} from 'react'

class SkyTexture extends Component{
    static Assets = [
        <img id="sky" src={sky} alt="Sky Texture Image" />
    ];

render(){
    return(
        <Entity {...this.props}>
            <a-sky className="sky" src="#sky" rotation="0 0 0"/>
        </Entity>
    )
}
}

export default SkyTexture