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
                    <a-plane static-body rotation="-90 0 0" position="0 -0.01 0" height="50" width="50"></a-plane>
                    {/* <a-sky material="src:#sky"></a-sky> */}

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

                    {/* Frames for user images */}
                    {/* Frames on Central Walls - First Floor */}
                    {/* Walls closest to Exit Point */}
                    <a-light
                    color='white'
                    intensity="1"
                    position="4 2 2"
                    type="ambient"
                    >
                    </a-light>

                    <a-image src="#Portrait6" height="2.5" width="3.5" className="user-image"  position="2.99 2.5 2.01" rotation=" 0 0 0"></a-image>
                    <a-image src="#Portrait7" height="2.5" width="3.5" className="user-image" position="2.99 2.5 7.48" rotation=" 0 0 0"></a-image>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.008 .008 .008' 
                    position='2.99 2.5 2' 
                    rotation="0 180 0">
                    </a-gltf-model>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.008 .008 .008' 
                    position='2.99 2.5 7.5' 
                    rotation="0 0 0">
                    </a-gltf-model>
                    

                    {/* Centrals Walls - First Floor */}
                    <a-image src="#Portrait8" height="2.5" width="3.5" className="user-image" position="2.99 2.5 8.52" rotation=" 0 180 0"></a-image>
                    <a-image src="#Portrait9" height="2.5" width="3.5" className="user-image"  position="2.99 2.5 13.98" rotation=" 0 0 0"></a-image>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.008 .008 .008' 
                    position='2.99 2.5 8.5' 
                    rotation="0 180 0">
                    </a-gltf-model>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.008 .008 .008' 
                    position='2.99 2.5 14' 
                    rotation="0 0 0">
                    </a-gltf-model>
                    

                    {/* Outer Side of Inner-Walls - First Floor */}
                    {/* Near Player Spawn */}
                    <a-image src="#Portrait10" height="2.5" width="3.5" className="user-image" position="2.99 2.5 .99" rotation=" 0 -180 0"></a-image>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.008 .008 .008' 
                    position='2.99 2.5 1' 
                    rotation="0 0 0">
                    </a-gltf-model>
                    

                    {/* Near Elevator */}
                    <a-image src="#Portrait11" height="2.5" width="3.5" className="user-image" position="2.99 2.5 15.01" rotation=" 0 180 0"></a-image>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.008 .008 .008' 
                    position='2.99 2.5 15' 
                    rotation="0 180 0">
                    </a-gltf-model>
                    

                    {/* Wall - Elevator Side - First Floor */}
                    <a-image src="#Portrait12" height="2.5" width="3.5" className="user-image" position="-6.98 2.5 4.75" rotation=" 0 270 0"></a-image>
                    <a-image src="#Portrait13" height="2.5" width="3.5" className="user-image" position="-6.98 2.5 11" rotation=" 0 270 0"></a-image>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.008 .008 .008' 
                    position='-7 2.5 4.75' 
                    rotation="0 -90 0">
                    </a-gltf-model>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.008 .008 .008' 
                    position='-7 2.5 11' 
                    rotation="0 -90 0">
                    </a-gltf-model>

                    

                    {/* Wall - Opposite Side of Elevator - First Floor */}
                    <a-image src="#Portrait14" height="2.5" width="3.5" className="user-image" position="12.99 2.5 4.75" rotation=" 0 270 0"></a-image>
                    <a-image src="#Portrait15" height="2.5" width="3.5" className="user-image" position="12.99 2.5 11" rotation=" 0 270 0"></a-image>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.008 .008 .008' 
                    position='12.99 2.5 4.75' 
                    rotation="0 90 0">
                    </a-gltf-model>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.008 .008 .008' 
                    position='12.99 2.5 11' 
                    rotation="0 90 0">
                    </a-gltf-model>


                    {/* 2nd Floor Images - Outer Wall on side of elevator */}
                    <a-image src="#Portrait2" height="2.5" width="3.5" className="user-image" position="-6.98 7.75 4.75" rotation=" 0 -270 0"></a-image>
                    <a-image src="#Portrait3" height="2.5" width="3.5" className="user-image" position="-6.98 7.75 11" rotation="0 -270 0"></a-image>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.008 .008 .008' 
                    position='-7 7.75 4.75' 
                    rotation="0 -90 0">
                    </a-gltf-model>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.008 .008 .008' 
                    position='-7 7.75 11' 
                    rotation="0 -90 0">
                    </a-gltf-model>

                    {/* 2nd Floor Images - Outer Wall opposite of elevator */}
                    <a-image src="#Portrait4" height="2.5" width="3.5" className="user-image" position="12.99 7.75 4.75" rotation=" 0 270 0"></a-image>
                    <a-image src="#Portrait5" height="2.5" width="3.5" className="user-image" position="12.99 7.75 11" rotation=" 0 270 0"></a-image>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.008 .008 .008' 
                    position='12.99 7.75 4.75' 
                    rotation="0 90 0">
                    </a-gltf-model>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.008 .008 .008' 
                    position='12.99 7.75 11' 
                    rotation="0 90 0">
                    </a-gltf-model>

                    {/* Opposite of Elevator - 2nd Floor */}
                    <a-image src="#Portrait1" height="2.5" width="3.5" className="user-image"  position="2.99 7.75 -1.99" rotation=" 0 0 0"></a-image>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.008 .008 .008' 
                    position='2.99 7.75 -2' 
                    rotation="0 -180 0">
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
                    <a-gltf-model 
                    static-body 
                    src="#nymph" 
                    scale='.85 .85 .85' 
                    position='9.9 .7 -.1' 
                    rotation="-180 -90 0">
                    </a-gltf-model>
                    
                    <a-gltf-model 
                    static-body
                    src="#moon" 
                    scale='2 2 2' 
                    position='3 35 7'
                    ></a-gltf-model>

                    <a-gltf-model 
                    src="#carpet" 
                    scale='.07 .07 .08' 
                    position='3 .1 6'
                    ></a-gltf-model>

                    {/* Everything below here is part of the architecture */}
                    {/* Main Art Gallery - 1st Floor */}
                    <rw-room position="-2 0 -2">
                        <rw-floor material="src:#wood; repeat:2"></rw-floor>
                        <rw-wall material="src:#granite; repeat:2" position="15 0 0" height="15"></rw-wall>
                        <rw-wall material="src:#granite; repeat:2" position="15 0 20" height="15"></rw-wall>
                        <rw-wall material="src:#granite; repeat:2" position="-5 0 20" height="15"></rw-wall>
                        <rw-wall material="src:#granite; repeat:2" position="-5 0 0" height="15"></rw-wall>
                    </rw-room>
                     {/* Invisible Box Barriers to prevent players from leaving the room. */}
                     <a-plane material="visible:true" width="18" height="30" static-body position="14 5 8" rotation=" 0 270 0"></a-plane>

                    <a-plane material="visible:true" width="16" height="30" static-body position="-8 5 10" rotation=" 0 270 0"></a-plane>

                    <a-plane material="visible:true" width="16" height="30" static-body position="5 5 -3" rotation=" 0 180 0"></a-plane>

                    <a-plane material="visible:true" width="16" height="30" static-body position="5 5 19" rotation=" 0 180 0"></a-plane>

                    {/* Interior Walls and Pillars for added Decorations */}
                    <a-box width="8" height="7" depth="1" static-body position="3 2 1.5"></a-box>
                    <a-box width="8" height="7" depth="1" static-body position="3 2 8"></a-box>
                    <a-box width="8" height="7" depth="1" static-body position="3 2 14.5"></a-box>

                    {/* 2nd Floor */}
                    {/* Glass Floor - Center */}
                    <a-entity geometry="primitive: plane; height: 14; width: 11"  position="3 5.5 8"
            material="color: black; opacity: 0.5" rotation="90 0 0"></a-entity>
                    <a-entity static-body geometry="primitive: plane; height: 14; width: 11"  position="3 5.501 8"
            material="color: black; opacity: 0.5" rotation="-90 0 0"></a-entity>

                    {/* Flooring for outter sections of 2nd floor */}
            <a-entity geometry="primitive: plane; height: 18; width: 5"  position="-5 5.5 6"
                        material="color: gray" rotation="90 0 0"></a-entity>
                    <a-entity static-body geometry="primitive: plane; height: 18; width: 5"  position="-5 5.501 6"
            material="color: gray" rotation="-90 0 0"></a-entity>

            <a-entity geometry="primitive: plane; height: 20; width: 5"  position="11 5.5 8"
                        material="color: gray" rotation="90 0 0"></a-entity>
                    <a-entity static-body geometry="primitive: plane; height: 20; width: 5"  position="11 5.501 8"
            material="color: gray" rotation="-90 0 0"></a-entity>

            <a-entity geometry="primitive: plane; height: 3; width: 11"  position="3 5.5 -.5"
                        material="color: gray" rotation="90 0 0"></a-entity>
                    <a-entity static-body geometry="primitive: plane; height: 3; width: 11"  position="3 5.501 -.5"
            material="color: gray" rotation="-90 0 0"></a-entity>

            <a-entity geometry="primitive: plane; height: 3; width: 11"  position="3 5.5 16.5"
                        material="color: gray" rotation="90 0 0"></a-entity>
                    <a-entity static-body geometry="primitive: plane; height: 3; width: 11"  position="3 5.501 16.5"
            material="color: gray" rotation="-90 0 0"></a-entity>

                    {/* Elevator from 2nd floor to 3rd floor */}
                    <a-entity
                    static-body
                    geometry="primitive: box; height: .1; width: 4; depth: 4"
                    material="src:#marble"
                    position="-6 .1 16.5"
                    >
                    <a-animation begin="click" attribute="position" from="-6 .1 16.5" to="-6 5.5 16.5" dur="10000"></a-animation>
                    <a-animation begin="click" attribute="position" from="-6 5.5 16.5" to="-6 .1 16.5" delay="9000" dur="9000"></a-animation>
                    </a-entity>
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