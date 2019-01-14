import React, {Component} from 'react'
import '../Styles/galleries.css'
import imageUploads from './image-uploads'
import Presets from './presets'


class Galleries extends Component{
    constructor(){
        super()
            this.state={
                userGalleries: []
            }
    }

componentDidMount(){
    //axios.get for galleries associated with user_id
    //axios.get for galleries the user has favorited.
}

render(){
//map over existing galleries in state
//put presets and imageuploads in return - pass gallery id as props to each component so they can retrieve each respective
    return(
        <section id="user-galleries">
            <h1>Galleries</h1>
            
            <div id="existing-galleries">


            </div>
        </section>
    )
}
}

export default Galleries