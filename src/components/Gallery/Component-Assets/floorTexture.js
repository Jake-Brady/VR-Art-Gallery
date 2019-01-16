import woodFloor from '../../../assets/laminate-floor.jpg'
import marbleFloor from '../../../assets/marble_texture.jpg'
import 'aframe'
import React, {Component} from 'react'

class FloorTexture extends Component{
    static Assets = [
        <img id="wood-floor" src={woodFloor} alt="Ground texture" />,
        <img id="marble-floor" src={marbleFloor} alt="Ground texture" />
    ];


}

export default FloorTexture