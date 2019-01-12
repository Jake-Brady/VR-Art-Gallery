import React,{Component} from 'react'
import axios from 'axios'
import Presets from '../components/Lobby/presets'
import ImageUploads from '../components/Lobby/image-uploads'

class Lobby extends Component{
    constructor(){
        super()
            this.state ={
                onlineUsers: []
            }
    }

componentDidMount(){
// Retrieve all users who are currently online.
}

render(){
    return(
        <main id="Lobby">
        <h1>Lobby</h1>
        


        <Presets />
        <ImageUploads />

        
        </main>
    )
}
}

export default Lobby