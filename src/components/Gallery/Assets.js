import React,{Component} from 'react'
import {connect} from 'react-redux'
import {imagesHaveLoaded} from '../../ducks/reducer'
import Gymnopedie from '../../assets/audio/Gymnopedie_No_1.mp3'
import Granite from '../../assets/grey_granite_texture.jpg'
import Nymph from '../../assets/gltfs/smallestNymph.glb'
import Moon from '../../assets/gltfs/moon.glb'
import Carpet from '../../assets/gltfs/smallCarpet.glb'
import Emoji from '../../assets/gltfs/joyemoji.glb'
import Wood from '../../assets/laminate-floor.jpg'
import Marble from '../../assets/marble_texture.jpg'
import 'aframe'
import {Entity} from 'aframe-react'

class Assets extends Component {
    constructor(props){
        super(props)
        this.state={
            images: []
        }
    }

componentWillMount(props){
let {images} = this.props
this.setState({images})
}

componentWillReceiveProps(nextProps) {
    if (this.props.images !== nextProps.images) {
      this.setState({images: nextProps.images}, () => {
          console.log(this.state.images)
          this.props.imagesHaveLoaded(true)
        })
    }
  }


render(){
    let {images} = this.state
    return(
    <a-assets>
        {/* User related Files from Store */}
        <img id="Portrait1" src={images[0]}  crossOrigin="anonymous" alt="user portrait #1"  className="Portrait" />
        <img id="Portrait2" src={images[1]}  crossOrigin="anonymous" alt="user portrait #2"  className="Portrait"/>
        <img id="Portrait3" src={images[2]}  crossOrigin="anonymous" alt="user portrait #3"  className="Portrait"/>
        <img id="Portrait4" src={images[3]}  crossOrigin="anonymous" alt="user portrait #4"  className="Portrait"/>
        <img id="Portrait5" src={images[4]}  crossOrigin="anonymous" alt="user portrait #5"  className="Portrait"/>
        <img id="Portrait6" src={images[5]}  crossOrigin="anonymous" alt="user portrait #6"  className="Portrait"/>
        <img id="Portrait7" src={images[6]}  crossOrigin="anonymous" alt="user portrait #7"  className="Portrait"/>
        <img id="Portrait8" src={images[7]}  crossOrigin="anonymous" alt="user portrait #8"  className="Portrait"/>
        <img id="Portrait9" src={images[8]}  crossOrigin="anonymous" alt="user portrait #9"  className="Portrait"/>
        <img id="Portrait10" src={images[9]}  crossOrigin="anonymous" alt="user portrait #10"  className="Portrait"/>
        <img id="Portrait11" src={images[10]}  crossOrigin="anonymous" alt="user portrait #11"  className="Portrait"/>
        <img id="Portrait12" src={images[11]}  crossOrigin="anonymous" alt="user portrait #12"  className="Portrait"/>
        <img id="Portrait13" src={images[12]}  crossOrigin="anonymous" alt="user portrait #13"  className="Portrait"/>
        <img id="Portrait14" src={images[13]}  crossOrigin="anonymous" alt="user portrait #14"  className="Portrait"/>
        <img id="Portrait15" src={images[14]} crossOrigin="anonymous" alt="user portrait #15"  className="Portrait"/>
  
        {/* Static Files from application */}
        {/* Textures */}
        <img id="wood" src={Wood} alt="wood floor texture" />
        <img id="marble" src={Marble} alt="marble floor texture" />
        <img id="granite" src={Granite} alt="marble floor texture" />
       
        {/* Objects */}
        <Entity id="nymph" src={Nymph} alt="Nymph Statue Obj" />,
        <Entity id="moon" src={Moon} alt="Moon Obj" />,
        <Entity id="carpet" src={Carpet} alt="Carpet Obj" />,
        <Entity id="emoji" src={Emoji} alt="Emoji Entity" />
        
        {/* Music */}
        <audio id="music" src={Gymnopedie}/>
    </a-assets>
    )
}
}

function mapStateToProps (state) {
    let {images, imagesHaveLoaded} = state
    return{
        images, imagesHaveLoaded
    }
}

export default connect(mapStateToProps, {imagesHaveLoaded})(Assets)