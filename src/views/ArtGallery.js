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
                    <rw-room position="-2 0 -2">
                    <rw-floor material="src:#floor; repeat:2" ></rw-floor>
                    <rw-ceiling material="src:#ceiling; repeat:0"></rw-ceiling>
                    <rw-wall material="src:#wall; repeat:2" position="10 0 0" height="4m"></rw-wall>
                    <rw-wall material="src:#wall; repeat:2" position="10 0 20" height="4m"></rw-wall>
                    <rw-wall material="src:#wall; repeat:2" position="0 0 20" height="4m"></rw-wall>
                    <rw-wall material="src:#wall; repeat:2" position="0 0 0" height="4m">
                    </rw-wall>
                </rw-room>
            </Scene>
    )
}
}

export default ArtGallery