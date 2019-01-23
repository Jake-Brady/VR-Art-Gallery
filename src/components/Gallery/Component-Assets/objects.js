import nymph from '../../../assets/3d_objs/gltf/Nymph.glb'
import 'aframe'
import {Entity} from 'aframe-react'
import React, {Component} from 'react'

class Objects extends Component{
    static Assets = [
        <Entity id="nymph" src={nymph} alt="Nymph Statue Obj" />
    ];


}

export default Objects