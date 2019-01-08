import crystal_chandelier from '../../../assets/3d_objs/crystal_chandelier.obj'
import 'aframe'
import {Entity} from 'aframe-react'
import React, {Component} from 'react'

class Chandelier extends Component{
    static Assets = [
        <Entity id="CC" src={crystal_chandelier} alt="Crystal Chandelier Obj" />
    ];


}

export default Chandelier