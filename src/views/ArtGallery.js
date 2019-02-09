import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setImages} from '../ducks/reducer'
import { Scene } from 'aframe-react'
import '../styles/Views/ArtGallery.css'
import Assets from '../components/Gallery/assets'
import 'aframe'
import 'aframe-room-component'
import 'aframe-physics-system'
import 'aframe-extras'
import 'aframe-physics-extras'
import 'aframe-star-system-component'
import axios from 'axios'
import '../components/Gallery/aframeFunctions'



class ArtGallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            captions: [],
            wallTexture: '',
            floorTexture: '',
            music: '',
            imagesHaveLoaded: false
        }
    }

    componentDidMount(props) {
        let { username, galleryName } = this.props.match.params
        // Retrieve User's Images and Presets
        console.log(username, galleryName)
        axios.get(`/api/getGalleryData/${username}/${galleryName}`).then(res => {
            console.log(res)
            let { image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, img1_caption, img2_caption, img3_caption, img4_caption, img5_caption, img6_caption, img7_caption, img8_caption, img9_caption, img10_caption, img11_caption, img12_caption, img13_caption, img14_caption, img15_caption, wall_texture, floor_texture, atmosphere_lighting, music } = res.data[0]
            // Putting all images in array to be sent to Reducer Store which is connected to Asset file
            const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15]
            const captions = [img1_caption, img2_caption, img3_caption, img4_caption, img5_caption, img6_caption, img7_caption, img8_caption, img9_caption, img10_caption, img11_caption, img12_caption, img13_caption, img14_caption, img15_caption]
            this.props.setImages(images)
            this.setState({captions}, () => {
            // Check values of wall, floor, lighting, and music and assign them proper IDs to be set to state and then as src material to each entity.
            // Floor Texture Assignments
            switch (floor_texture) {
                case "wood":
                    floor_texture = '#wood'
                    break;
                case "porcelainTiles":
                    floor_texture = '#porcelainTiles'
                    break;
                case "streetPaved":
                    floor_texture = "#streetPaved"
                    break;
                case "seamlessStone":
                    floor_texture = '#seamlessStone'
                    break;
                case "stoneTiles":
                    floor_texture = '#stoneTiles'
                    break;
            }
            // Wall Texture Assignments
            switch (wall_texture) {
                case "granite":
                    wall_texture = '#granite'
                    break;
                case "brickPavement":
                    wall_texture = '#brickPavement'
                    break;
                case "redBrick":
                    wall_texture = '#redBrick'
                    break;
                case "cork":
                    wall_texture = '#cork'
                    break;
                case "cobblestone":
                    wall_texture = "#cobblestone"
                    break;
            }
            // Music Selection Assignments
            switch (music) {
                case "gymnopedie":
                    music = '#gymnopedie'
                    break;
                case "calmant":
                    music = '#calmant'
                    break;
                case "snowDrop":
                    music = '#snowDrop'
                    break;
                case "impromptu":
                    music = '#impromptu'
                    break;
                case "onThePassingOfTime":
                    music = '#passingTime'
                    break;
            }
            this.setState({wallTexture: wall_texture, floorTexture: floor_texture, atmosphereLighting: atmosphere_lighting, music}, () => {
                this.checkFPS()
            })
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

    exit(){
        this.props.history.push('/')
    }

    render() {
        let { wallTexture, floorTexture, music, captions, position } = this.state
        console.log(this.state, 'state of gallery')
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
                <Scene physics="debug: false" stats id='scene'>
                <Assets />
                    {/* World Outside - Star System outside skylight */}
                <a-plane static-body rotation="-90 0 0" position="0 -0.01 0" height="50" width="50"></a-plane>
                <a-sky color="#000"></a-sky>
                <a-entity star-system></a-entity>
                    <a-entity
                    position="5 3 -1.99"
                    geometry="primitive: plane"
                    material="color:black"
                    scale="4 2 2"
                    >
                    </a-entity>
                    <a-entity 
                    scale="2 2 2" 
                    position="3.75 3.10 -1.98" 
                    clock="font: sourcecodepro; color: #191;">
                    </a-entity>
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
                    {/* User Images */}
                    <a-image id="portrait6" src="#Portrait6" height="2.5" width="3.5" className="user-image"  position="2.99 2.5 2.01" rotation=" 0 0 0"></a-image>
                    <a-image id="portrait7" src="#Portrait7" height="2.5" width="3.5" className="user-image" position="2.99 2.5 7.48" rotation=" 0 180 0"></a-image>
                    {/* frames */}
                    <a-gltf-model 
                    src="#frame" 
                    scale='.008 .008 .008' 
                    position='2.99 2.5 2.01' 
                    rotation="0 180 0">
                    </a-gltf-model>
                    <a-gltf-model 
                    src="#frame" 
                    scale='.008 .008 .008' 
                    position='2.99 2.5 7.5' 
                    rotation="0 0 0">
                    </a-gltf-model>
                    {/* Captions */}
                    <a-text 
                    value={captions[5] || null}
                    position='1.9 1.13 2.09'
                    >
                    </a-text>
                    <a-text 
                    value={captions[6] || null}
                    position='3.8 1.13 7.42'
                    rotation="0 180 0"
                    >
                    </a-text>
            
                    

                    {/* Centrals Walls - First Floor */}
                    {/* User Images */}
                    <a-image id="portrait8" src="#Portrait8" height="2.5" width="3.5" className="user-image" position="2.99 2.5 8.52" rotation=" 0 0 0"></a-image>
                    <a-image id="portrait9" src="#Portrait9" height="2.5" width="3.5" className="user-image"  position="2.99 2.5 13.98" rotation=" 0 180 0"></a-image>
                    {/* Frames */}
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
                    {/* Captions */}
                    <a-text 
                    value={captions[7] || null}
                    position='1.9 1.13 8.58'
                    >
                    </a-text>
                    <a-text 
                    value={captions[8] || null}
                    position='3.8 1.13 13.92'
                    rotation="0 180 0"
                    ></a-text>

                    {/* Outer Side of Inner-Walls - First Floor */}
                    {/* Near Player Spawn */}
                    {/* User Images */}
                    <a-image id="portrait10" src="#Portrait10" height="2.5" width="3.5" className="user-image" position="2.99 2.5 .99" rotation=" 0 -180 0"></a-image>
                    {/* Frame */}
                    <a-gltf-model 
                    src="#frame" 
                    scale='.008 .008 .008' 
                    position='2.99 2.5 1' 
                    rotation="0 0 0">
                    </a-gltf-model>
                    {/* Caption */}
                    <a-text 
                    value={captions[9] || null}
                    position='3.8 1.13 .92'
                    rotation="0 180 0"
                    ></a-text>
                   
                    

                    {/* Near Elevator */}
                    {/* User Image */}
                    <a-image id="portrait11" src="#Portrait11" height="2.5" width="3.5" className="user-image" position="2.99 2.5 15.01" rotation=" 0 0 0"></a-image>
                    {/* Frame */}
                    <a-gltf-model 
                    src="#frame" 
                    scale='.008 .008 .008' 
                    position='2.99 2.5 15' 
                    rotation="0 180 0">
                    </a-gltf-model>
                    {/* Caption */}
                    <a-text 
                    value={captions[10] || null}
                    position='1.9 1.13 15.08'
                    rotation="0 0 0"
                    ></a-text>
                    
                    

                    {/* Wall - Elevator Side - First Floor */}
                    {/* User Images */}
                    <a-image id="portrait12" src="#Portrait12" height="2.5" width="3.5" className="user-image" position="-6.98 2.5 4.75" rotation=" 0 -270 0"></a-image>
                    <a-image id="portrait13" src="#Portrait13" height="2.5" width="3.5" className="user-image" position="-6.98 2.5 11" rotation=" 0 -270 0"></a-image>
                    {/* Frames */}
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
                    {/* Captions */}
                    <a-text 
                    value={captions[11] || null}
                    position='-6.92 1.13 5.7'
                    rotation="0 90 0"
                    ></a-text>
                    <a-text 
                    value={captions[12] || null}
                    position='-6.92 1.13 11.9'
                    rotation="0 90 0"
                    ></a-text>
                    

                    

                    {/* Wall - Opposite Side of Elevator - First Floor */}
                    {/* User Images */}
                    <a-image id="portrait14" src="#Portrait14" height="2.5" width="3.5" className="user-image" position="12.99 2.5 4.75" rotation=" 0 270 0"></a-image>
                    <a-image id="portrait15" src="#Portrait15" height="2.5" width="3.5" className="user-image" position="12.99 2.5 11" rotation=" 0 270 0"></a-image>
                    {/* Frames */}
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
                    {/* Captions */}
                    <a-text 
                    value={captions[13] || null}
                    position='12.91 1.13 4'
                    rotation="0 -90 0"
                    ></a-text>
                    <a-text 
                    value={captions[14] || null }
                    position='12.91 1.13 10.3'
                    rotation="0 -90 0"
                    ></a-text>
                   


                    {/* 2nd Floor Images - Outer Wall on side of elevator */}
                    {/* User Images */}
                    <a-image id="portrait2" src="#Portrait2" height="2.5" width="3.5" className="user-image" position="-6.98 7.75 4.75" rotation=" 0 -270 0"></a-image>
                    <a-image id="portrait3" src="#Portrait3" height="2.5" width="3.5" className="user-image" position="-6.98 7.75 11" rotation="0 -270 0"></a-image>
                    {/* Frames */}
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
                    {/* Captions */}
                    <a-text 
                    value={captions[1] || null}
                    position='-6.92 6.4 5.5'
                    rotation="0 90 0"
                    ></a-text>
                    <a-text 
                    value={captions[2] || null}
                    position='-6.92 6.4 11.7'
                    rotation="0 90 0"
                    ></a-text>
                    

                    {/* 2nd Floor Images - Outer Wall opposite of elevator */}
                    {/* User-Images */}
                    <a-image id="portrait4" src="#Portrait4" height="2.5" width="3.5" className="user-image" position="12.99 7.75 4.75" rotation=" 0 270 0"></a-image>
                    <a-image id="portrait5" src="#Portrait5" height="2.5" width="3.5" className="user-image" position="12.99 7.75 11" rotation=" 0 270 0"></a-image>
                    {/* Frames */}
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
                    {/* Captions */}
                    <a-text 
                    value={captions[3] || null}
                    position='12.92 6.4 4'
                    rotation="0 -90 0"
                    >
                    </a-text>
                    <a-text 
                    value={captions[4] || null}
                    position='12.92 6.4 10.3'
                    rotation="0 -90 0"
                    ></a-text>
                  

                    {/* Opposite of Elevator - 2nd Floor */}
                    {/* User-Image */}
                    <a-image id="portrait1" src="#Portrait1" height="2.5" width="3.5" className="user-image"  position="2.99 7.75 -1.98" rotation=" 0 0 0"></a-image>
                    {/* Frame */}
                    <a-gltf-model 
                    src="#frame" 
                    scale='.008 .008 .008' 
                    position='2.99 7.75 -2' 
                    rotation="0 -180 0">
                    </a-gltf-model>
                    {/* Caption */}
                    <a-text 
                    value={captions[0] || null}
                    position='2.3 6.4 -1.92'
                    rotation="0 0 0"
                    ></a-text>
                    

                    {/* Objects */}
                    {/* 3D Object Imports */}
                    <a-gltf-model
                    onClick={() => this.exit()}
                    src="#door" 
                    scale='.0015 .0015 .0015' 
                    position='-4.5 0 -1.99' 
                    rotation="0 90 0">
                    </a-gltf-model>

                    <a-gltf-model 
                    static-body 
                    src="#table" 
                    scale='.0015 .003 .0015' 
                    position='-6.15 .05 .5' 
                    rotation="0 0 0">
                    </a-gltf-model>

                    <a-gltf-model
                    src="#stereo" 
                    scale='2.5 2.5 2.5' 
                    position='-6.65 1.57 .52' 
                    rotation="0 90 0"
                    sound={`src:${music}; on:click; rolloffFactor:.1`}
                    >
                    </a-gltf-model>

                    <a-gltf-model 
                    static-body 
                    src="#hibiscus" 
                    scale='.004 .004 .004' 
                    position='-3.15 5.51 -.8' 
                    rotation="0 90 0">
                    </a-gltf-model>

                    <a-gltf-model 
                    static-body 
                    src="#hibiscus" 
                    scale='.004 .004 .004' 
                    position='9.15 5.51 -.8' 
                    rotation="0 90 0">
                    </a-gltf-model>

                    <a-gltf-model 
                    static-body 
                    src="#bench" 
                    scale='21 21 21' 
                    position='9.15 9.51 20.5' 
                    rotation="0 180 0">
                    </a-gltf-model>

                    <a-gltf-model 
                    static-body 
                    src="#bench" 
                    scale='21 21 21' 
                    position='4.15 9.51 20.5' 
                    rotation="0 180 0">
                    </a-gltf-model>

                    <a-gltf-model 
                    static-body 
                    src="#nymph" 
                    scale='.85 .85 .85' 
                    position='9.9 .7 -.1' 
                    rotation="-180 -90 0">
                    </a-gltf-model>

                    <a-gltf-model 
                    static-body 
                    src="#marsStatue" 
                    scale='1 1 1' 
                    position='11.5 3.6 7.1' 
                    rotation="-180 90 0">
                    </a-gltf-model>

                    <a-gltf-model 
                    static-body 
                    src="#penelope" 
                    scale='.0023 .0023 .0023' 
                    position='-6.1 0 7.8' 
                    rotation="0 0 0">
                    </a-gltf-model>

                    <a-gltf-model 
                    static-body 
                    src="#marblePlayer" 
                    scale='.5 .5 .5' 
                    position='12 3.3 16.2' 
                    rotation="-180 45 0">
                    </a-gltf-model>

                    <a-gltf-model 
                    static-body 
                    src="#pedestal" 
                    scale='.003 .002 .003' 
                    position='12 .1 17.2' 
                    rotation="0 0 0">
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
                    <rw-room id="room-floor" position="-2 0 -2">
                        <rw-floor material={`src:${floorTexture}; repeat:2`}></rw-floor>
                        <rw-wall material={`src:${wallTexture}; repeat: 2`} position="15 0 0" height="12"></rw-wall>
                        <rw-wall material={`src:${wallTexture}; repeat: 2`} position="15 0 20" height="12"></rw-wall>
                        <rw-wall material={`src:${wallTexture}; repeat: 2`} position="-5 0 20" height="12"></rw-wall>
                        <rw-wall material={`src:${wallTexture}; repeat: 2`} position="-5 0 0" height="12"></rw-wall>
                    </rw-room>
                     {/* Invisible Plane Barriers to prevent players from leaving the room. */}
                     <a-plane visible="false" material="visible:true" width="18" height="15" static-body position="14 5 8" rotation=" 0 270 0"></a-plane>

                    <a-plane visible="false" material="visible:true" width="18" height="15" static-body position="-8 5 10" rotation=" 0 270 0"></a-plane>

                    <a-plane visible="false" material="visible:true" width="18" height="15" static-body position="3 5 -3" rotation=" 0 180 0"></a-plane>

                    <a-plane visible="false" material="visible:true" width="18" height="15" static-body position="3 5 19" rotation=" 0 180 0"></a-plane>

                    {/* Interior Walls and Pillars for added Decorations */}
                    <a-box material="src:#marble; side:front" width="8" height="7" depth="1" static-body position="3 2 1.5"></a-box>
                    <a-box material="src:#marble" width="8" height="7" depth="1" static-body position="3 2 8"></a-box>
                    <a-box material="src:#marble" width="8" height="7" depth="1" static-body position="3 2 14.5"></a-box>

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

            {/* Ceiling Floor */}
                    {/* Glass Floor - Center */}
                    <a-entity geometry="primitive: plane; height: 14; width: 11"  position="3 12 8"
            material="color: black; opacity: 0.5" rotation="90 0 0"></a-entity>
                    <a-entity static-body geometry="primitive: plane; height: 14; width: 11"  position="3 12.001 8"
            material="color: black; opacity: 0.5" rotation="-90 0 0"></a-entity>

                    {/* Flooring for outter sections of 2nd floor */}
            <a-entity geometry="primitive: plane; height: 20; width: 5"  position="-5 12 8"
                        material="color: gray" rotation="90 0 0"></a-entity>
                    <a-entity static-body geometry="primitive: plane; height: 20; width: 5"  position="-5 12.001 8"
            material="color: gray" rotation="-90 0 0"></a-entity>

            <a-entity geometry="primitive: plane; height: 20; width: 5"  position="11 12 8"
                        material="color: gray" rotation="90 0 0"></a-entity>
                    <a-entity static-body geometry="primitive: plane; height: 20; width: 5"  position="11 12.001 8"
            material="color: gray" rotation="-90 0 0"></a-entity>

            <a-entity geometry="primitive: plane; height: 3; width: 11"  position="3 12 -.5"
                        material="color: gray" rotation="90 0 0"></a-entity>
                    <a-entity static-body geometry="primitive: plane; height: 3; width: 11"  position="3 12.001 -.5"
            material="color: gray" rotation="-90 0 0"></a-entity>

            <a-entity geometry="primitive: plane; height: 3; width: 11"  position="3 12 16.5"
                        material="color: gray" rotation="90 0 0"></a-entity>
                    <a-entity static-body geometry="primitive: plane; height: 3; width: 11"  position="3 12.001 16.5"
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