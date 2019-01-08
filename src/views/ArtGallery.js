import React, {Component} from 'react'
import 'aframe'
import {Scene} from 'aframe-react'
import 'aframe-room-component'
import 'aframe-physics-system'
import rootAssets from '../components/Gallery/rootAssets'
import Assets from 'aframe-react-assets'
import axios from 'axios'


class ArtGallery extends Component{
    constructor(){
        super()
            this.state = {
                Portrait1: '',
                Portrait2: '',
                Portrait3: '',
                Portrait4: '',
                Portrait5: '',
                Portrait6: '',
                Portrait7: '',
                Portrait8: '',
                Portrait9: '',
                Portrait10: ''
            }
    }

componentDidMount(){
    axios.get('/api/getImages/').then(res => {
        let {img1, img2, img3, img4, img5, img6, img7, img8, img9, img10} = res.data
        this.setState({Portrait1: img1, Portrait2: img2, Portrait3: img3, Portrait4: img4, Portrait5: img5, Portrait6: img6, Portrait7: img7, Portrait8: img8, Portrait9: img9, Portrait10: img10})
    })
}

render(){
    let {Portrait1, Portrait2, Portrait3, Portrait4, Portrait5, Portrait6, Portrait7, Portrait8, Portrait9, Portrait10} = this.state
    return(
        <Scene stats id='scene'>
        <Assets 
    assets={rootAssets}
    debug={true}
        />

        {/* World Outside */}
        <a-plane color="green" rotation="-90 0 0" position="0 -0.01 0" height="100" width="100"></a-plane>
        {/* <a-sky material="src:#sky"></a-sky> */}


        {/*Entities Inside of Main Gallery  */}
        {/* Player Camera and Cursor */}
        <a-camera>
            <a-cursor color="#fff"></a-cursor>
        </a-camera>
            
        {/* User-Uploaded Images */}
        <a-image src={`${Portrait1}`} position="2 2 -1.99" ></a-image>

        {/* Objects */}
        <a-entity 
        geometry="primitive: sphere; radius: 1.5"
        position="5 2 16"
        sound="src:#music; on:click;"
        preload="auto"
        >
        </a-entity>

        {/* Chandelier */}
        <a-obj-model material="src:#glass" src='#CC' scale='.002 .002 .002' position='3 3.2 7'></a-obj-model>


        {/* Everything below here is part of the architecture */}
        {/* Main Art Gallery */}
        <rw-room position="-2 0 -2">
            <rw-floor material="src:#floor; repeat:2"></rw-floor>
            <rw-ceiling material="src:#ceiling; repeat:0"></rw-ceiling>
            <rw-wall material="src:#wall; repeat:2" position="10 0 0" height="4m"></rw-wall>
            <rw-wall material="src:#wall; repeat:2" position="10 0 20" height="4m"></rw-wall>
            <rw-wall material="src:#wall; repeat:2" position="0 0 20" height="4m">
                <rw-doorhole id="holeB"></rw-doorhole>
            </rw-wall>
            <rw-wall material="src:#wall; repeat:2" position="0 0 0" height="4m"></rw-wall>
        </rw-room>

        {/* Enter/Exit Room */}
        <rw-room position="0 0 -3">
            <rw-ceiling material="src:#ceiling; repeat:0"></rw-ceiling>
            <rw-floor material="src:#floor; repeat:2"></rw-floor>
            <rw-wall position="1 0 -1" material="src:#wall; repeat:2"></rw-wall>
            <rw-wall position="1 0  1" material="src:#wall; repeat:2">
            
            </rw-wall>
            <rw-wall position="-1 0  1" material="src:#wall; repeat:2"></rw-wall>
            <rw-wall position="-1 0 -1" material="src:#wall; repeat:2"></rw-wall>
        </rw-room>

        {/* Balcony */}
        <rw-room position="-3 0 7">
            <rw-floor material="src:#floor; repeat:2"></rw-floor>
            <rw-wall position="1 0 -1" material="src:#wall; repeat:2" height="1m">
                <rw-doorhole id="holeA"></rw-doorhole>
                <rw-doorlink from="#holeA" to="#holeB" position="1 0 0" width="2"></rw-doorlink>
            </rw-wall>
            <rw-wall position="1 0  1" material="src:#wall; repeat:2" height="1m"></rw-wall>
            <rw-wall position="-1 0  5" material="src:#wall; repeat:2" height="1m"></rw-wall>
            <rw-wall position="-1 0 -5" material="src:#wall; repeat:2" height="1m"></rw-wall>
        </rw-room>
    

    {/* Outside Texture on Main Gallery */}
    <rw-room outside="true" position="-2 0 -2">
            <rw-floor material="src:#floor; repeat:2"></rw-floor>
            <rw-ceiling material="src:#ceiling; repeat:0"></rw-ceiling>
            <rw-wall material="src:#wall; repeat:2" position="10 0 0" height="4m"></rw-wall>
            <rw-wall material="src:#wall; repeat:2" position="10 0 20" height="4m"></rw-wall>
            <rw-wall material="src:#wall; repeat:2" position="0 0 20" height="4m">
                <rw-doorhole id="holeA"></rw-doorhole>
            </rw-wall>
            <rw-wall material="src:#wall; repeat:2" position="0 0 0" height="4m"></rw-wall>
        </rw-room>

        {/* Outside texture for Exit */}
        <rw-room outside="true" position="0 0 -3">
            <rw-ceiling material="src:#ceiling; repeat:0"></rw-ceiling>
            <rw-floor material="src:#floor; repeat:2"></rw-floor>
            <rw-wall position="1 0 -1" material="src:#wall; repeat:2"></rw-wall>
            <rw-wall position="1 0  1" material="src:#wall; repeat:2"></rw-wall>
            <rw-wall position="-1 0  1" material="src:#wall; repeat:2"></rw-wall>
            <rw-wall position="-1 0 -1" material="src:#wall; repeat:2"></rw-wall>
        </rw-room>
    </Scene>
    )
}
}

export default ArtGallery