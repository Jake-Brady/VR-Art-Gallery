import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setImages} from '../ducks/reducer'
import { Scene } from 'aframe-react'
import '../styles/Views/ArtGallery.css'
import Assets from '../components/Gallery/Assets'
import 'aframe'
import 'aframe-room-component'
import 'aframe-physics-system'
import 'aframe-extras'
import 'aframe-physics-extras'
import axios from 'axios'



class ArtGallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            wallTexture: '',
            floorTexture: '',
            ceilingTexture: '',
            atmosphereLighting: '',
            music: '',
            imagesHaveLoaded: false
        }
    }

    componentDidMount(props) {
        if(this.props.imagesHaveLoaded){this.setState({imagesHaveLoaded: true}, () => console.log(this.state))}
        let { username, galleryName } = this.props.match.params
        // Retrieve User's Images and Presets
        axios.get(`/api/getGalleryData/${username}/${galleryName}`).then(res => {
            let { image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, ceiling_texture, wall_texture, floor_texture, atmosphere_lighting, music } = res.data[0]
            // Putting all images in array to be sent to Reducer Store which is connected to Asset file
            const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15]
            this.props.setImages(images)
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
            switch (ceiling_texture) {

            }
            // Lighting Color Assignments
            switch (atmosphere_lighting) {

            }
            // Music Selection Assignments
            switch (music) {

            }
            this.setState({ceilingTexture: ceiling_texture, wallTexture: wall_texture, floorTexture: floor_texture, atmosphereLighting: atmosphere_lighting, music: music }, () => {
                this.checkFPS()
            })
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
        }, 3000);
    }

    changeImageSrc(){
        const pictures = document.querySelectorAll('.user-image')
        console.log(pictures)
    }

    render() {
        let { wallTexture, floorTexture, atmosphereLighting, music } = this.state
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
                <Assets />
                    {/* World Outside */}
                    <a-plane static-body rotation="-90 0 0" position="0 -0.01 0" height="35" width="30"></a-plane>
                    {/* <a-sky material="src:#sky"></a-sky> */}

                    {/* Invisible Box Barriers to prevent players from leaving the room. */}
                    <a-plane material="visible:true" width="18" height="30" static-body position="14 5 8" rotation=" 0 270 0"></a-plane>

                    <a-plane material="visible:true" width="16" height="30" static-body position="-3 5 10" rotation=" 0 270 0"></a-plane>

                    <a-plane material="visible:true" width="16" height="30" static-body position="5 5 -3" rotation=" 0 180 0"></a-plane>

                    <a-plane material="visible:true" width="16" height="30" static-body position="5 5 19" rotation=" 0 180 0"></a-plane>

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

                    
                    {/* User-Uploaded Images */}
                    <a-image src="#Portrait1" className="user-image"  position="12.99 2 -1" rotation=" 0 270 0"></a-image>
                    <a-image src="#Portrait2" className="user-image" position="12.99 2 1" rotation=" 0 270 0"></a-image>
                    <a-image src="#Portrait3" className="user-image" height="2" width="2"  position="12.99 2 3" rotation=" 0 270 0"></a-image>
                    <a-image src="#Portrait4" className="user-image" position="12.99 2 5" rotation=" 0 270 0"></a-image>
                    <a-image src="#Portrait5" className="user-image" height="2" width="2"  position="12.99 2 7" rotation=" 0 270 0"></a-image>
                    <a-image src="#Portrait6" className="user-image" height="2" width="2"  position="12.99 2 10" rotation=" 0 270 0"></a-image>
                    <a-image src="#Portrait7" className="user-image" position="12.99 2 11.8" rotation=" 0 270 0"></a-image>
                    <a-image src="#Portrait8" className="user-image" position="12.99 2 13" rotation=" 0 270 0"></a-image>
                    <a-image src="#Portrait9" className="user-image" height="2" width="2"  position="12.99 2 15" rotation=" 0 270 0"></a-image>
                    <a-image src="#Portrait10" className="user-image" position="12.99 4 17" rotation=" 0 270 0"></a-image>
                    <a-image src="#Portrait11" className="user-image" position="12.99 4 15" rotation=" 0 270 0"></a-image>
                    <a-image src="#Portrait12" className="user-image" position="12.99 4 13" rotation=" 0 270 0"></a-image>
                    <a-image src="#Portrait13" className="user-image" position="12.99 4 10" rotation=" 0 270 0"></a-image>
                    <a-image src="#Portrait14" className="user-image" position="12.99 4 8" rotation=" 0 270 0"></a-image>
                    <a-image src="#Portrait15" className="user-image" position="12.99 4 5" rotation=" 0 270 0"></a-image>

                    {/* Frames for user images */}
                    <a-gltf-model 
                    src="#frame" 
                    scale='.005 .005 .005' 
                    position='12.99 2 1' 
                    rotation="0 90 0">
                    </a-gltf-model>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.005 .005 .005' 
                    position='12.99 4 1' 
                    rotation="0 90 0">
                    </a-gltf-model>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.005 .005 .005' 
                    position='12.99 6 1' 
                    rotation="0 90 0">
                    </a-gltf-model>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.005 .005 .005' 
                    position='12.99 8 1' 
                    rotation="0 90 0">
                    </a-gltf-model>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.005 .005 .005' 
                    position='12.99 10 1' 
                    rotation="0 90 0">
                    </a-gltf-model>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.005 .005 .005' 
                    position='12.99 12 1' 
                    rotation="0 90 0">
                    </a-gltf-model>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.005 .005 .005' 
                    position='12.99 2 3' 
                    rotation="0 90 0">
                    </a-gltf-model>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.005 .005 .005' 
                    position='12.99 4 3' 
                    rotation="0 90 0">
                    </a-gltf-model>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.005 .005 .005' 
                    position='12.99 6 3' 
                    rotation="0 90 0">
                    </a-gltf-model>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.005 .005 .005' 
                    position='12.99 9 3' 
                    rotation="0 90 0">
                    </a-gltf-model>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.005 .005 .005' 
                    position='12.99 12 3' 
                    rotation="0 90 0">
                    </a-gltf-model>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.005 .005 .005' 
                    position='12.99 2 5' 
                    rotation="0 90 0">
                    </a-gltf-model>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.005 .005 .005' 
                    position='12.99 4 5' 
                    rotation="0 90 0">
                    </a-gltf-model>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.005 .005 .005' 
                    position='12.99 6 5' 
                    rotation="0 90 0">
                    </a-gltf-model>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.005 .005 .005' 
                    position='12.99 8 5' 
                    rotation="0 90 0">
                    </a-gltf-model>


                    {/* Objects */}
                    {/* Sphere of Music */}
                    <a-entity
                        static-body
                        width="3"
                        geometry="primitive: sphere; radius: .5;"
                        position="7 8 15"
                        material="color:#C0C0C0"
                        glow="color:#C0C0C0;intensity:.2"
                        sound="src:#snowDrop; on:click; rolloffFactor:.1"
                        light="color:lightblue;type: point; intensity: .7; decay: 2;"
                    >
                    </a-entity>

                    {/* 3D Object Imports */}
                    {/* Chandelier */}
                    
                    <a-gltf-model 
                    static-body 
                    src="#nymph" 
                    scale='.75 .75 .75' 
                    position='3 6 7' 
                    rotation="-180 0 0">
                    </a-gltf-model>
                    
                    <a-gltf-model 
                    static-body
                    src="#moon" 
                    scale='2 2 2' 
                    position='3 35 7'
                    ></a-gltf-model>

                    <a-gltf-model 
                    src="#carpet" 
                    scale='.05 .05 .05' 
                    position='7 .1 7'
                    ></a-gltf-model>



                    {/* Everything below here is part of the architecture */}
                    {/* Main Art Gallery - 1st Floor */}
                    <rw-room position="-2 0 -2">
                        <rw-floor material="src:#wood; repeat:2"></rw-floor>
                        {/* <rw-ceiling material="src:#ceiling; repeat:0"></rw-ceiling> */}
                        <rw-wall material="src:#granite; repeat:2" position="15 0 0" height="15"></rw-wall>
                        <rw-wall material="src:#granite; repeat:2" position="15 0 20" height="15"></rw-wall>
                        <rw-wall material="src:#granite; repeat:2" position="0 0 20" height="15"></rw-wall>
                        <rw-wall material="src:#granite; repeat:2" position="0 0 0" height="15"></rw-wall>
                    </rw-room>

                    {/* Interior Walls and Pillars for added Decorations */}
                    <a-box width="8" height="7" depth="1" static-body position="2 2 -1.5"></a-box>
                    <a-box width="8" height="7" depth="1" static-body position="2 2 4"></a-box>
                    <a-box width="8" height="7" depth="1" static-body position="2 2 9.5"></a-box>

                    {/* Stairwell to 2nd Floor */}
                    {/* Stairs from firstfloor to platform */}
                    <a-entity static-body geometry="primitive: box; height:1; width: 3.75" position="5.5 0 16.35" rotation="0 90 0" material="src:#marble"></a-entity>
                    <a-entity static-body geometry="primitive: box; height:2; width: 3.75" position="4.5 0 16.35" rotation="0 90 0" material="src:#marble"></a-entity>
                    <a-entity static-body geometry="primitive: box; height:2; width: 3.75" position="3.5 .5 16.35" rotation="0 90 0" material="src:#marble"></a-entity>
                    <a-entity static-body geometry="primitive: box; height:3; width: 3.75" position="2.5 .5 16.35" rotation="0 90 0" material="src:#marble"></a-entity>
                    <a-entity static-body geometry="primitive: box; height:4; width: 3.75" position="1.5 .5 16.35" rotation="0 90 0" material="src:#marble"></a-entity>
                    <a-entity static-body geometry="primitive: box; height:5; width: 3.75" position="0.5 .5 16.35" rotation="0 90 0" material="src:#marble"></a-entity>
                    <a-entity static-body geometry="primitive: box; height:5; width: 3.75; depth: 3.1" position="-.5 .51 16" rotation="0 90 0" material="src:#marble"></a-entity>
                    {/* Stairs from platform to 2nd floor */}
                    <a-entity static-body geometry="primitive: box; height:5; width: 4.5; depth: 1" position="-1.199 1 14" rotation="0 0 0" material="src:#marble"></a-entity>
                    <a-entity static-body geometry="primitive: box; height:5; width: 4.5; depth: 1" position="-1.200 1.5 13" rotation="0 0 0" material="src:#marble"></a-entity>
                    <a-entity static-body geometry="primitive: box; height:5; width: 4.5; depth: 1" position="-1.200 2 12" rotation="0 0 0" material="src:#marble"></a-entity>
                    <a-entity static-body geometry="primitive: box; height:5; width: 4.5; depth: 1" position="-1.200 2.5 11" rotation="0 0 0" material="src:#marble"></a-entity>
                    <a-entity static-body geometry="primitive: box; height:5.5; width: 4.5; depth: 1" position="-1.199 2.75 10.5" rotation="0 0 0" material="src:#marble"></a-entity>

                    {/* 2nd Floor Glass Barriers */}
                    {/* Facing Large Walls */}
                    <a-entity static-body geometry="primitive: plane; height: 1.2; width: 12"  position="6 6.1 4"
            material="color: black; opacity: 0.5" rotation="0 90 0"></a-entity>
                    <a-entity static-body geometry="primitive: plane; height: 1.2; width: 12"  position="5.99 6.1 4"
            material="color: black; opacity: 0.5" rotation="0 -90 0"></a-entity>

                    {/* Facing Stairwell */}
                    <a-entity static-body geometry="primitive: plane; height: 1.2; width: 5"  position="3.5 6.1 10"
            material="color: black; opacity: 0.5" rotation="0 0 0"></a-entity>
                    <a-entity static-body geometry="primitive: plane; height: 1.2; width: 5"  position="3.5 6.1 10"
            material="color: black; opacity: 0.5" rotation="0 180 0"></a-entity>

                    {/* 2nd Floor */}
                    <a-entity geometry="primitive: plane; height: 12; width: 8"  position="2 5.5 4"
            material="color: black; opacity: 0.5" rotation="90 0 0"></a-entity>
                    <a-entity static-body geometry="primitive: plane; height: 12; width: 8"  position="2 5.501 4"
            material="color: black; opacity: 0.5" rotation="-90 0 0"></a-entity>

                    {/* Elevator from 2nd floor to 3rd floor */}
                    <a-entity
                    static-body
                    geometry="primitive: box; height: .1; width: 4; depth: 4"
                    material="src:#marble"
                    position="0 5.5 -.5"
                    >
                    <a-animation begin="click" attribute="position" from="0 5.5 -.5" to="0 14.2 -.5" dur="10000"></a-animation>
                    <a-animation begin="click" attribute="position" from="0 14.2 -.5" to="0 5.5 -.5" delay="9000" dur="9000"></a-animation>
                    </a-entity>

                    <a-box 
                    width="12" 
                    height="1" 
                    depth="4" 
                    static-body 
                    position="7 14 -.5">
                    </a-box>
                </Scene>
            </>
        )
    }
}

function mapStateToProps(state){
let {images, imagesHaveLoaded} = state
return{
    images, imagesHaveLoaded
}
}

export default connect (mapStateToProps, {setImages}) (ArtGallery)