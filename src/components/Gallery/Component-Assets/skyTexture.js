import sky from '../../../assets/sky.jpg'
import 'aframe'
import React, {Component} from 'react'

class SkyTexture extends Component{
    static Assets = [
        <img id="sky" src={sky} alt="Sky Texture Image" />
    ];


}

export default SkyTexture