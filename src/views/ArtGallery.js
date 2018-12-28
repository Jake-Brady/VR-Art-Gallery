import React, {Component} from 'react'
import 'aframe'
import {Entity, Scene, Assets} from 'aframe-react'
import 'aframe-particle-system-component'
import 'aframe-room-component'
import 'aframe-physics-system'



class ArtGallery extends Component{
    constructor(){
        super()
            this.state = {
                
            }
    }

render(){


    return(
        <>
            <Scene>
                    <rw-room position="-2 0 -2" material="color:#866">
                    <rw-floor material="color:#000"></rw-floor>
                    <rw-ceiling></rw-ceiling>
                    <rw-wall position="10 0 0" height="6m"></rw-wall>
                    <rw-wall position="10 0 10" height="6m"></rw-wall>
                    <rw-wall position="0 0 10" height="6m"></rw-wall>
                    <rw-wall position="0 0 0" height="6m">
                        <rw-doorhole id="holeA"></rw-doorhole>
                        <rw-doorlink from="#holeA" to="#holeB" position="2.5 0 0"></rw-doorlink>
                    </rw-wall>
                </rw-room>
                <rw-room position="0 0 -3">
                    <rw-wall position=" 1 0 -1" material="color:#787"></rw-wall>
                    <rw-wall position=" 1 0  1" material="color:#877">
                        <rw-doorhole id="holeB"></rw-doorhole>
                    </rw-wall>
                    <rw-wall position="-1 0  1" material="color:#878"></rw-wall>
                    <rw-wall position="-1 0 -1" material="color:#778"></rw-wall>
                </rw-room>  
            </Scene>
        </>
    )
}
}

export default ArtGallery