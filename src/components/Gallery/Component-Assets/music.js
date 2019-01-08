import Gymnopedie from '../../../assets/audio/Gymnopedie_No_1.mp3'
import 'aframe'
import React, {Component} from 'react'

class Music extends Component{
    static Assets = [
        <audio id="music" src={Gymnopedie}/>
    ];


}

export default Music