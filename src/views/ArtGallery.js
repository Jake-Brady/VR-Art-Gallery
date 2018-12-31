import React, {Component} from 'react'
import 'aframe'
import {Scene} from 'aframe-react'
import 'aframe-room-component'
import 'aframe-physics-system'
import rootAssets from '../components/Gallery/rootAssets'
import Assets from 'aframe-react-assets'


class ArtGallery extends Component{
    constructor(){
        super()
            this.state = {
                
            }
    }

render(){
    return(
            <Scene stats id='scene'>
            <Assets 
        assets={rootAssets}
        timeout={4e4}
        interval={200}
        debug={true}
        onLoad={this.updateAssetsLoadingStatus}
        onLoadingBySize={this.updateAssetsCurrentInfo}
        onLoadingByAmount={this.updateAssetsLoadingInfo}
            />
                    <rw-room position="-2 0 -2" material="color:#866">
                    <rw-floor material="src:#floor; repeat:2" ></rw-floor>
                    <rw-ceiling></rw-ceiling>
                    <rw-wall position="10 0 0" height="6m"></rw-wall>
                    <rw-wall position="10 0 10" height="6m"></rw-wall>
                    <rw-wall position="0 0 10" height="6m"></rw-wall>
                    <rw-wall position="0 0 0" height="6m">
                    </rw-wall>
                </rw-room>
            </Scene>
    )
}
}

export default ArtGallery