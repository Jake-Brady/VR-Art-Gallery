import React, {Component} from 'react'
import '../Styles/galleries.css'
import imageUploads from './createGalleries'
import Presets from './presets'
import axios from 'axios';

class Galleries extends Component{
    constructor(props){
        super(props)
            this.state={
                gallery: [],
                images: [],
                presets: []
            }
    }

componentDidMount(props){


}

render(){
    return(
        <section id="user-gallery-section">
            



        </section>
    )
}
}

export default Galleries