import React, {Component} from 'react'
import '../Styles/galleries.css'
import imageUploads from './image-uploads'
import Presets from './presets'

class Galleries extends Component{
    constructor(props){
        super(props)
            this.state={
                gallery: [],
                images: [],
                presets: []
            }
    }

componentDidMount(){

}

render(){
    return(
        <section id="user-gallery-section">
            



        </section>
    )
}
}

export default Galleries