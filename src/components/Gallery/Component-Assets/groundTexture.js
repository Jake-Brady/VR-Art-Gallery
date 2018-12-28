import floor from '../../../assets/laminate-floor.jpg'
import 'aframe'
import {Entity} from 'aframe-react'
import React, {Component} from 'react'

class FloorTexture extends Component{
    static Assets = [
        <img id="floor" src={floor} alt="Ground Texture" />
    ];

render(){
    return(
        <Entity {...this.props}>
            <a-sky className="floor" src="#floor" rotation="0 0 0"/>
        </Entity>
    )
}
}

export default FloorTexture