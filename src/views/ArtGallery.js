import React, { Component } from 'react'
import '../styles/Views/ArtGallery.css'
import 'aframe'
import { Scene } from 'aframe-react'
import 'aframe-room-component'
import 'aframe-physics-system'
import 'aframe-extras'
import 'aframe-physics-extras'
import rootAssets from '../components/Gallery/rootAssets'
import Assets from 'aframe-react-assets'
import axios from 'axios'



class ArtGallery extends Component {
    constructor() {
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
            Portrait10: '',
            Portrait11: '',
            Portrait12: '',
            Portrait13: '',
            Portrait14: '',
            Portrait15: '',
            wallTexture: '',
            floorTexture: '',
            atmosphereLighting: '',
            music: ''
        }
    }

    componentDidMount() {
        const stats = document.querySelector('.rs-base')
        console.log(stats)
        let { username, galleryName } = this.props.match.params
        // Retrieve User's Images and Presets
        axios.get(`/api/getGalleryData/${username}/${galleryName}`).then(res => {
            let { image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, wall_texture, floor_texture, atmosphere_lighting, music } = res.data[0]
            // Check values of wall, floor, lighting, and music and assign them proper IDs to be set to state and then as src material to each entity.
            // Floor Texture Assignments
            switch (floor_texture) {
                case "wood":
                    floor_texture = '#wood-floor'
                    break;
                case "marble":
                    floor_texture = '#marble-floor';
                    break;
            }
            // Wall Texture Assignments
            switch (wall_texture) {

            }
            // Lighting Color Assignments
            switch (atmosphere_lighting) {

            }
            // Music Selection Assignments
            switch (music) {

            }
            this.setState({ Portrait1: image1, Portrait2: image2, Portrait3: image3, Portrait4: image4, Portrait5: image5, Portrait6: image6, Portrait7: image7, Portrait8: image8, Portrait9: image9, Portrait10: image10, Portrait11: image11, Portrait12: image12, Portrait13: image13, Portrait14: image14, Portrait15: image15, wallTexture: wall_texture, floorTexture: floor_texture, atmosphereLighting: atmosphere_lighting, music: music })
            this.checkFPS()
        })
    }

    checkFPS = () => {
        const scene = document.querySelector('#scene'),
        loading = document.querySelector('#gallery-loading')
        const interval = setInterval(() => {
            let fps = document.querySelectorAll('.rs-counter-value')[1].innerText
            if (fps > 30) {
                scene.style.visibility = 'visible'
                loading.style.display = 'none'
                clearInterval(interval)
            }
        }, 1000);
    }

    render() {
        let { Portrait1, Portrait2, Portrait3, Portrait4, Portrait5, Portrait6, Portrait7, Portrait8, Portrait9, Portrait10, Portrait11, Portrait12, Portrait13, Portrait14, Portrait15, wallTexture, floorTexture, atmosphereLighting, music } = this.state
        // Identify floor_texture, wall_texture, atmosphere_lighting, music strings and assign ID equivalents to variables below and pass as template literals as src within each a-entity.
        return (
            <>
                <div className='lobby-loading center' id='gallery-loading'>
                    <div className='lobby-loading_content center'>
                        <span>VR<span className='lighttext'>ART GALLERY</span></span>
                        <div className='lobby-loading-grid center'>
                            <div />
                            <div />
                            <div />
                        </div>
                    </div>
                </div>
                <Scene physics="debug: true" stats id='scene'>
                    <Assets
                        assets={rootAssets}
                        debug={true}
                    />

                    {/* World Outside */}
                    <a-plane static-body rotation="-90 0 0" position="0 -0.01 0" height="35" width="30"></a-plane>
                    {/* <a-sky material="src:#sky"></a-sky> */}

                    {/* Invisible Box Barriers to prevent players from leaving the room. */}
                    <a-box material="visible:true" width="18" height="10" static-body position="14 5 8" rotation=" 0 270 0"></a-box>

                    <a-box material="visible:true" width="15" height="10" static-body position="-3 5 10" rotation=" 0 270 0"></a-box>

                    <a-box material="visible:true" width="15" height="10" static-body position="5 5 -3" rotation=" 0 180 0"></a-box>

                    <a-box material="visible:true" width="15" height="10" static-body position="5 5 19" rotation=" 0 180 0"></a-box>

                    {/*Entities Inside of Main Gallery  */}
                    {/* Player Camera and Cursor */}
                    <a-entity id="rig" movement-controls kinematic-body rotation="0 -90 0">
                        <a-entity id="camera"
                            camera
                            position="0 1.6 0"
                            look-controls>
                            <a-cursor color="red"></a-cursor>
                        </a-entity>
                    </a-entity>

                    {/* Interior Walls and Pillars for added Decorations */}
                    <a-box width="8" height="7" depth="1" static-body position="2 2 -1.5"></a-box>
                    <a-box width="8" height="7" depth="1" static-body position="2 2 4"></a-box>
                    <a-box width="8" height="7" depth="1" static-body position="2 2 9.5"></a-box>


                    {/* User-Uploaded Images */}
                    <a-image src={`${Portrait1}`} position="12.99 2 -1" rotation=" 0 270 0"></a-image>
                    <a-image src={`${Portrait2}`} position="12.99 2 1" rotation=" 0 270 0"></a-image>
                    <a-image src={`${Portrait3}`} height="2" width="2"  position="12.99 2 3" rotation=" 0 270 0"></a-image>
                    <a-image src={`${Portrait4}`} position="12.99 2 5" rotation=" 0 270 0"></a-image>
                    <a-image src={`${Portrait5}`} height="2" width="2"  position="12.99 2 7" rotation=" 0 270 0"></a-image>
                    <a-image src={`${Portrait6}`} height="2" width="2"  position="12.99 2 10" rotation=" 0 270 0"></a-image>
                    <a-image src={`${Portrait7}`} position="12.99 2 11.8" rotation=" 0 270 0"></a-image>
                    <a-image src={`${Portrait8}`} position="12.99 2 13" rotation=" 0 270 0"></a-image>
                    <a-image src={`${Portrait9}`} height="2" width="2"  position="12.99 2 15" rotation=" 0 270 0"></a-image>
                    <a-image src={`${Portrait10}`} position="12.99 2 17" rotation=" 0 270 0"></a-image>


                    {/* Objects */}
                    {/* Sphere of Music */}
                    <a-entity
                        static-body
                        width="3"
                        geometry="primitive: sphere; radius: .5;"
                        position="9 8 10"
                        material="color:#C0C0C0"
                        glow="color:#C0C0C0;intensity:.2"
                        sound="src:#music; on:click; rolloffFactor:.1"
                        light="color:lightblue;type: point; intensity: .7; decay: 2;"

                    >
                    </a-entity>

                    {/* 3D Object Imports */}
                    {/* Chandelier */}
                    {/* <a-obj-model material="src:#glass" src='#CC' scale='.002 .002 .002' position='3 3.2 7'></a-obj-model> */}
                    <a-gltf-model static-body src="#nymph" material="src:#marble-floor" scale='.75 .75 .75' position='3 8 7' rotation="-180 0 0"></a-gltf-model>


                    {/* Everything below here is part of the architecture */}
                    {/* Main Art Gallery - 1st Floor */}
                    <rw-room position="-2 0 -2">
                        <rw-floor material={`src:${floorTexture}; repeat:2`}></rw-floor>
                        {/* <rw-ceiling material="src:#ceiling; repeat:0"></rw-ceiling> */}
                        <rw-wall material="src:#wall; repeat:2" position="15 0 0" height="10"></rw-wall>
                        <rw-wall material="src:#wall; repeat:2" position="15 0 20" height="10"></rw-wall>
                        <rw-wall material="src:#wall; repeat:2" position="0 0 20" height="10"></rw-wall>
                        <rw-wall material="src:#wall; repeat:2" position="0 0 0" height="10"></rw-wall>
                    </rw-room>

                    {/* Stairwell to 2nd Floor */}
                    {/* Stairs from firstfloor to platform */}
                    <a-entity static-body geometry="primitive: box; height:1; width: 3.75" position="5.5 0 16.35" rotation="0 90 0" material="src:#marble-floor"></a-entity>
                    <a-entity static-body geometry="primitive: box; height:2; width: 3.75" position="4.5 0 16.35" rotation="0 90 0" material="src:#marble-floor"></a-entity>
                    <a-entity static-body geometry="primitive: box; height:2; width: 3.75" position="3.5 .5 16.35" rotation="0 90 0" material="src:#marble-floor"></a-entity>
                    <a-entity static-body geometry="primitive: box; height:3; width: 3.75" position="2.5 .5 16.35" rotation="0 90 0" material="src:#marble-floor"></a-entity>
                    <a-entity static-body geometry="primitive: box; height:4; width: 3.75" position="1.5 .5 16.35" rotation="0 90 0" material="src:#marble-floor"></a-entity>
                    <a-entity static-body geometry="primitive: box; height:5; width: 3.75" position="0.5 .5 16.35" rotation="0 90 0" material="src:#marble-floor"></a-entity>
                    <a-entity static-body geometry="primitive: box; height:5; width: 3.75; depth: 3.1" position="-.5 .51 16" rotation="0 90 0" material="src:#marble-floor"></a-entity>
                    {/* Stairs from platform to 2nd floor */}
                    <a-entity static-body geometry="primitive: box; height:5; width: 4.5; depth: 1" position="-1.199 1 14" rotation="0 0 0" material="src:#marble-floor"></a-entity>
                    <a-entity static-body geometry="primitive: box; height:5; width: 4.5; depth: 1" position="-1.200 1.5 13" rotation="0 0 0" material="src:#marble-floor"></a-entity>
                    <a-entity static-body geometry="primitive: box; height:5; width: 4.5; depth: 1" position="-1.200 2 12" rotation="0 0 0" material="src:#marble-floor"></a-entity>
                    <a-entity static-body geometry="primitive: box; height:5; width: 4.5; depth: 1" position="-1.200 2.5 11" rotation="0 0 0" material="src:#marble-floor"></a-entity>
                    <a-entity static-body geometry="primitive: box; height:5.5; width: 4.5; depth: 1" position="-1.199 2.75 10.5" rotation="0 0 0" material="src:#marble-floor"></a-entity>


                    {/* 2nd Floor */}
                    <a-entity geometry="primitive: plane; height: 12; width: 8"  position="2 5.5 4"
            material="color: black; opacity: 0.5" rotation="90 0 0"></a-entity>
                    <a-entity static-body geometry="primitive: plane; height: 12; width: 8"  position="2 5.501 4"
            material="color: black; opacity: 0.5" rotation="-90 0 0"></a-entity>
                </Scene>
            </>
        )
    }
}

export default ArtGallery