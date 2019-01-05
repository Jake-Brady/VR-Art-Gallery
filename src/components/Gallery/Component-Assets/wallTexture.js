import wall from '../../../assets/grey_granite_texture.jpg'
import 'aframe'
import {Entity} from 'aframe-react'
import React, {Component} from 'react'

class WallTexture extends Component{
    static Assets = [
        <img id="wall" src={wall} alt="Ground Texture" />
    ];

render(){
    return(
        <Entity {...this.props}>
            <a-sky className="wall" src="#wall" rotation="0 0 0"/>
        </Entity>
    )
}
}

export default WallTexture