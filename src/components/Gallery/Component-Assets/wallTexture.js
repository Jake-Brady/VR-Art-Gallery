import wall from '../../../assets/grey_granite_texture.jpg'
import 'aframe'
import React, {Component} from 'react'

class WallTexture extends Component{
    static Assets = [
        <img id="wall" src={wall} alt="Ground Texture" />
    ];


}

export default WallTexture