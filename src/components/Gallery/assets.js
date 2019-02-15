import React,{Component} from 'react'
import {connect} from 'react-redux'
import {imagesHaveLoaded} from '../../ducks/reducer'
import portalPreviewPorcelain from '../../assets/portalPreviewPorcelain.png'
import portalPreviewWood from '../../assets/portalPreviewWood.png'
import Door from '../../assets/gltfs/door.glb'
import Table from '../../assets/gltfs/table.glb'
import Frame from '../../assets/gltfs/frame.glb'
import Gymnopedie from '../../assets/audio/Gymnopedie_No_1.mp3'
import SnowDrop from '../../assets/audio/Snow_Drop.mp3'
import OnThePassingOfTime from '../../assets/audio/On_the_Passing_of_Time.mp3'
import ImpromputInQuarterCommaMeantone from '../../assets/audio/Impromptu_in_Quarter_Comma_Meantone.mp3'
import Calmant from '../../assets/audio/Calmant.mp3'
import Granite from '../../assets/grey_granite_texture.jpg'
import Nymph from '../../assets/gltfs/smallestNymph.glb'
import Mars from '../../assets/gltfs/marsStatue.glb'
import Moon from '../../assets/gltfs/moon.glb'
import Carpet from '../../assets/gltfs/smallCarpet.glb'
import StreetPaved from '../../assets/StreetPaved.jpg'
import TerrazzoPocelainTiles from '../../assets/TerrazzoPocelainTiles.jpg'
import brickPavement from '../../assets/brickpavementtexture.jpg'
import seamlessStone from '../../assets/repeatingSeamlessStone.jpg'
import redBrick from '../../assets/repeatingRedBrick.jpg'
import cobblestone from '../../assets/cobblestone.jpg'
import stoneTiles from '../../assets/stoneTiles.jpg'
import corkwall from '../../assets/corkwall.jpg'
import Wood from '../../assets/laminate-floor.jpg'
import Marble from '../../assets/marble_texture.jpg'
import Stereo from '../../assets/gltfs/stereo.glb'
import Penelope from '../../assets/gltfs/penelope.glb'
import Pedestal from '../../assets/gltfs/pedestal.glb'
import Bench from '../../assets/gltfs/canapea.glb'
import Pillar from '../../assets/gltfs/pillar.glb'
import Kore from '../../assets/gltfs/kore.glb'
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
        <img id="granite" src={Granite} alt="granite texture" />
        <img id="streetPaved" src={StreetPaved} alt="street paved texture" />
        <img id="porcelainTiles" src={TerrazzoPocelainTiles} alt="terrazzo tiles texture" />
        <img id="brickPavement" src={brickPavement} alt="brick pavement texture" />
        <img id="cobblestone" src={cobblestone} alt="cobblestone texture" />
        <img id="stoneTiles" src={stoneTiles} alt="stone tiles texture" />
        <img id="cork" src={corkwall} alt="corkwall texture" />
        <img id="redBrick" src={redBrick} alt="red brick texture" />
        <img id="seamlessStone" src={seamlessStone} alt="seamless stone texture" />

        {/* Portal Preview */}
        <img id="portalPreviewWood" src={portalPreviewWood} alt="portal preview image" />
        <img id="portalPreviewPorcelain" src={portalPreviewPorcelain} alt="portal preview image" />
       
        {/* Objects */}
        <Entity id="frame" src={Frame} alt="Picture Frame" />
        <Entity id="nymph" src={Nymph} alt="Nymph Statue Obj" />
        <Entity id="marsStatue" src={Mars} alt="Mars Statue Obj" />
        <Entity id="moon" src={Moon} alt="Moon Obj" />
        <Entity id="carpet" src={Carpet} alt="Carpet Obj" />
        <Entity id="door" src={Door} alt="Door Obj" />
        <Entity id="table" src={Table} alt="Table Obj" />
        <Entity id="stereo" src={Stereo} alt="Stereo Obj" change-size/>
        <Entity id="pedestal" src={Pedestal} alt="pedestal Obj" />
        <Entity id="penelope" src={Penelope} alt="Penelope Obj" />
        <Entity id="bench" src={Bench} alt="Bench Obj" />
        <Entity id="pillar" src={Pillar} alt="Pillar Obj" />
        <Entity id="kore" src={Kore} alt="Kore Obj" />

        <a-mixin 
        id="shooting-star"
        light="color: lightblue; distance: 180; type:point; intensity:3"
        geometry="primitive:sphere; radius:.5;"
        material="color:#DCF3FF;"
                 >
        </a-mixin>

        
        {/* Music */}
        <audio id="gymnopedie" src={Gymnopedie}/>
        <audio id="impromptu" src={ImpromputInQuarterCommaMeantone}/>
        <audio id="snowDrop" src={SnowDrop}/>
        <audio id="passingTime" src={OnThePassingOfTime}/>
        <audio id="calmant" src={Calmant} />
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