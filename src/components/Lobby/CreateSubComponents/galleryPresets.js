import React, { Component } from 'react'
// Wall Textures
import granite from '../../../assets/grey_granite_texture.jpg'
import brickPavement from '../../../assets/brickpavementtexture.jpg'
import redBrick from '../../../assets/repeatingRedBrick.jpg'
import corkwall from '../../../assets/corkwall.jpg'
import cobblestone from '../../../assets/cobblestone.jpg'
// Floor Textures
import streetPaved from '../../../assets/StreetPaved.jpg'
import terrazzoPorcelainTiles from '../../../assets/TerrazzoPocelainTiles.jpg'
import seamlessStone from '../../../assets/repeatingSeamlessStone.jpg'
import stoneTiles from '../../../assets/stoneTiles.jpg'
import wood from '../../../assets/laminate-floor.jpg'
// Music Covers
import gymnopedie from '../../../assets/Gymnopedie.jpg'
import calmant from '../../../assets/Calmant.jpg'
import impromptu from '../../../assets/Impromptu.jpg'
import onThePassingOfTime from '../../../assets/onThePassingOfTime.jpg'
import snowDrop from '../../../assets/SnowDrop.jpg'

class GalleryPresets extends Component {
    constructor() {
        super()
        this.state = {
            lighting: '',
            music: '',
            floor: '',
            wall: '',
            finalCountdown: 2,
            down: false
        }
    }



    componentWillReceiveProps(props) {
        let { galleryPresets, finalCountdown, retrievingGalleryPresets } = props
        if (this.state.finalCountdown === 2 && galleryPresets) {
            this.setState({ ceilingTexture: galleryPresets[0], wallTexture: galleryPresets[1], lighting: galleryPresets[2], floorTexture: galleryPresets[3], music: galleryPresets[4] }, () => {
                this.setState({ finalCountdown: 1 })
            })
        } else if (this.state.finalCountdown === 1 && galleryPresets) {
            this.setState({ ceilingTexture: galleryPresets[0], wallTexture: galleryPresets[1], lighting: galleryPresets[2], floorTexture: galleryPresets[3], music: galleryPresets[4] }, () => {
                this.setState({ finalCountdown: 0 })
            })
        }
        if (finalCountdown === 0) {
            retrievingGalleryPresets(this.state)
        }
    }

    setTexture = (section, target) => {
        document.querySelectorAll(`#${section} > img`).forEach(option => option.style.opacity = '.2')
        target.style.opacity = '1'
        // wood, stoneTiles, seamlessStone, streetPaved, porcleainTiles
        // granite, brickPavement, cork, redwallBrick, cobblestone
        console.log(target.getAttribute('data'))
        this.setState({ [section]: target.getAttribute('data') })
    }

    render() {
        console.log(this.state)
        return (
            <section className="gallery-presets">
                <div id='wall'>
                    <h1>Wall Texture</h1>
                    <img onClick={(e) => this.setTexture('wall', e.target)} data="granite" src={granite} alt='granite texture' />
                    <img onClick={(e) => this.setTexture('wall', e.target)} data="brickPavement" src={brickPavement} alt='brick pavement texture' />
                    <img onClick={(e) => this.setTexture('wall', e.target)} data="redBrick" src={redBrick} alt='red brick texture' />
                    <img onClick={(e) => this.setTexture('wall', e.target)} data="cork" src={corkwall} alt='cork texture' />
                    <img onClick={(e) => this.setTexture('wall', e.target)} data="cobblestone" src={cobblestone} alt='cobblestone texture' />
                </div>
                <div id='floor'>
                    <h1>Floor Texture</h1>
                    <img onClick={(e) => this.setTexture('floor', e.target)} data="wood" src={wood} alt='laminate wood flooring texture' />
                    <img onClick={(e) => this.setTexture('floor', e.target)} data="porcelainTiles" src={terrazzoPorcelainTiles} alt='terrazzo porcelain tiles flooring texture' />
                    <img onClick={(e) => this.setTexture('floor', e.target)} data="streetPaved" src={streetPaved} alt='street paved texture' />
                    <img onClick={(e) => this.setTexture('floor', e.target)} data="seamlessStone" src={seamlessStone} alt='seamless stone texture' />
                    <img onClick={(e) => this.setTexture('floor', e.target)} data-type="stoneTiles" src={stoneTiles} alt='stone tiles texture' />
                </div>
                <div id='music'>
                    <h1>Music Selection</h1>
                    <img onClick={(e) => this.setTexture('music', e.target)} data='gymnopedie' src={gymnopedie} alt='Gymnopedie by Kevin Macleod' />
                    <img onClick={(e) => this.setTexture('music', e.target)} data="calmant" src={calmant} alt='Calmant by Kevin Macleod' />
                    <img onClick={(e) => this.setTexture('music', e.target)} data="snowDrop" src={snowDrop} alt='Snow Drop by Kevin Macleod' />
                    <img onClick={(e) => this.setTexture('music', e.target)} data="impromptu" src={impromptu} alt='Impromptu in Quarter Comma Meantone by Kevin Macleod' />
                    <img onClick={(e) => this.setTexture('music', e.target)} data="onThePassingOfTime" src={onThePassingOfTime} alt='On The Passing of Time by Kevin Macleod' />
                </div>
            </section>
        )
    }
}

export default GalleryPresets