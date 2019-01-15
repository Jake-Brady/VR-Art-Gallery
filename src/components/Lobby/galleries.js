import React, {Component} from 'react'
import '../Styles/galleries.css'
import imageUploads from './createGalleries'
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
console.log(props)

}

render(props){
    console.log(props)
    return(
        <section id="user-gallery-section">
            



        </section>
    )
}
}

export default Galleries