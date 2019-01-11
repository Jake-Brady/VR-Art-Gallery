import React,{Component} from 'react'
import Dropzone from 'react-dropzone'
import axios from 'axios'

class Lobby extends Component{
    constructor(){
        super()
            this.state ={
                filler: ''
            }
    }

render(){
    return(
        <>
        <h1>Lobby</h1>
        {/* <Dropzone></Dropzone> */}

        
        </>
    )
}
}

export default Lobby