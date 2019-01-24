import moonTexture from '../../../assets/gltfs/gltf_textures/Bump_2K.png'
import 'aframe'
import React, {Component} from 'react'

class ObjectTextures extends Component{
    static Assets = [
        <img id="moon-texture" src={moonTexture} alt="moonTexture" />
    ];


}

export default ObjectTextures