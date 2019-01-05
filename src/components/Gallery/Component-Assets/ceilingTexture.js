import ceiling from '../../../assets/marble_texture.jpg'
import 'aframe'
import {Entity} from 'aframe-react'
import React, {Component} from 'react'

class CeilingTexture extends Component{
    static Assets = [
        <img id="ceiling" src={ceiling} alt="Ground Texture" />
    ];

render(){
    return(
        <Entity {...this.props}>
            <a-sky className="ceiling" src="#ceiling" rotation="0 0 0"/>
        </Entity>
    )
}
}

export default CeilingTexture