import nymph from '../../../assets/gltfs/smallestNymph.glb'
import moon from '../../../assets/gltfs/Moon.glb'
import 'aframe-extras'
import 'aframe'
import {Entity} from 'aframe-react'
import React, {Component} from 'react'

class Objects extends Component{
    static Assets = [
        <Entity id="nymph" src={nymph} alt="Nymph Statue Obj" />,
        <Entity id="moon" src={moon} alt="Moon Obj" />
    ];


}

export default Objects