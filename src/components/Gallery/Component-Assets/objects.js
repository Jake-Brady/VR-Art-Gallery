import nymph from '../../../assets/gltfs/smallestNymph.glb'
import moon from '../../../assets/gltfs/Moon.glb'
import carpet from '../../../assets/gltfs/smallCarpet.glb'
import emoji from '../../../assets/gltfs/joyemoji.glb'
import 'aframe-extras'
import 'aframe'
import {Entity} from 'aframe-react'
import React, {Component} from 'react'

class Objects extends Component{
    static Assets = [
        <Entity id="nymph" src={nymph} alt="Nymph Statue Obj" />,
        <Entity id="moon" src={moon} alt="Moon Obj" />,
        <Entity id="carpet" src={carpet} alt="Carpet Obj" />,
        <Entity id="emoji" src={emoji} alt="Emoji Entity" />
    ];


}

export default Objects