import glass from '../../../assets/glass_texture.jpg'
import 'aframe'
import React, {Component} from 'react'

class GlassTexture extends Component{
    static Assets = [
        <img id="glass" src={glass} alt="Chandelier Texture" />
    ];


}

export default GlassTexture