import ceiling from '../../../assets/marble_texture.jpg'
import 'aframe'
import React, {Component} from 'react'

class CeilingTexture extends Component{
    static Assets = [
        <img id="ceiling" src={ceiling} alt="Ground Texture" />
    ];


}

export default CeilingTexture