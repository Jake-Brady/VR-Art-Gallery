import React, {Component} from 'react';
import 'aframe';
import {Entity, Scene} from 'aframe-react'

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
                <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>

                    
                <Entity primitive='a-sky' src="../assets/sky.jpeg"/>
            </Scene>
        </>
    )
}
}

export default ArtGallery