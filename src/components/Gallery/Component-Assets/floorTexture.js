import floor from '../../../assets/laminate-floor.jpg'
import 'aframe'
import React, {Component} from 'react'

class FloorTexture extends Component{
    static Assets = [
        <img id="floor" src={floor} alt="Ground Texture" />
    ];


}

export default FloorTexture