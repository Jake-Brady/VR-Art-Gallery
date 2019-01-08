import grass from '../../../assets/grass_texture.jpg'
import 'aframe'
import React, {Component} from 'react'

class GrassTexture extends Component{
    static Assets = [
        <img id="grass" src={grass} alt="Ground Texture" />
    ];


}

export default GrassTexture