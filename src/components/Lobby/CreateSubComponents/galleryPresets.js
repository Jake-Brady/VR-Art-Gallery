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
//Audio
import gymnopediaPreview from '../../../assets/audio/Gymnopedie_No_1.mp3'

class GalleryPresets extends Component {
    constructor() {
        super()
        this.state = {
            lighting: '',
            music: '',
            floor: '',
            wall: '',
            finalCountdown: 2,
            down: false,
            audio: ''
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
        document.querySelectorAll(`#${section} img`).forEach(option => option.style.opacity = '.2')
        target.style.opacity = '1'
        this.setState({ [section]: target.getAttribute('data') })
    }

    audioPreview = file => {
        const audio = new Audio(file)
    }

    render() {
        return (
            <section className="gallery-presets">
                <div id='wall'>
                    <h1>Wall Texture</h1>
                    <div className='center gallery-preset'>
                        <img onClick={(e) => this.setTexture('wall', e.target)} data="granite" src={granite} alt='granite texture' />
                        <div className='gallery-preset-overlay' />
                        <span className='gallery-preset-name'>GRANITE</span>
                    </div>
                    <div className='center gallery-preset'>
                        <img onClick={(e) => this.setTexture('wall', e.target)} data="brickPavement" src={brickPavement} alt='brick pavement texture' />
                        <div className='gallery-preset-overlay' />
                        <span className='gallery-preset-name'>PAVEMENT</span>
                    </div>
                    <div className='center gallery-preset'>
                        <img onClick={(e) => this.setTexture('wall', e.target)} data="redBrick" src={redBrick} alt='red brick texture' />
                        <div className='gallery-preset-overlay' />
                        <span className='gallery-preset-name'>BRICK</span>
                    </div>
                    <div className='center gallery-preset'>
                        <img onClick={(e) => this.setTexture('wall', e.target)} data="cork" src={corkwall} alt='cork texture' />
                        <div className='gallery-preset-overlay' />
                        <span className='gallery-preset-name'>CORK</span>
                    </div>
                    <div className='center gallery-preset'>
                        <img onClick={(e) => this.setTexture('wall', e.target)} data="cobblestone" src={cobblestone} alt='cobblestone texture' />
                        <div className='gallery-preset-overlay' />
                        <span className='gallery-preset-name'>COBBLESTONE</span>
                    </div>
                </div>
                <div id='floor'>
                    <h1>Floor Texture</h1>
                    <div className='center gallery-preset'>
                        <img onClick={(e) => this.setTexture('floor', e.target)} data="wood" src={wood} alt='laminate wood flooring texture' />
                        <div className='gallery-preset-overlay' />
                        <span className='gallery-preset-name'>WOOD</span>
                    </div>
                    <div className='center gallery-preset'>
                        <img onClick={(e) => this.setTexture('floor', e.target)} data="porcelainTiles" src={terrazzoPorcelainTiles} alt='terrazzo porcelain tiles flooring texture' />
                        <div className='gallery-preset-overlay' />
                        <span className='gallery-preset-name'>PORCELAIN</span>
                    </div>
                    <div className='center gallery-preset'>
                        <img onClick={(e) => this.setTexture('floor', e.target)} data="streetPaved" src={streetPaved} alt='street paved texture' />
                        <div className='gallery-preset-overlay' />
                        <span className='gallery-preset-name'>PAVED</span>
                    </div>
                    <div className='center gallery-preset'>
                        <img onClick={(e) => this.setTexture('floor', e.target)} data="seamlessStone" src={seamlessStone} alt='seamless stone texture' />
                        <div className='gallery-preset-overlay' />
                        <span className='gallery-preset-name'>STONE</span>
                    </div>
                    <div className='center gallery-preset'>
                        <img onClick={(e) => this.setTexture('floor', e.target)} data-type="stoneTiles" src={stoneTiles} alt='stone tiles texture' />
                        <div className='gallery-preset-overlay' />
                        <span className='gallery-preset-name'>TILES</span>
                    </div>
                </div>
                <div id='music'>
                    <h1>Music Selection</h1>
                    <div className='center gallery-preset gallery-music-box' onClick={() => this.audioPreview(gymnopediaPreview)} >
                        <div className='gallery-preset-overlay' />
                        GYMNOPEDIE
                    </div>
                    <div className='center gallery-preset gallery-music-box'>
                        <div className='gallery-preset-overlay' />
                        CALMANT
                    </div>
                    <div className='center gallery-preset gallery-music-box'>
                        <div className='gallery-preset-overlay' />
                        SNOW DROP
                    </div>
                    <div className='center gallery-preset gallery-music-box'>
                        <div className='gallery-preset-overlay' />
                        IMPROMPTU IN QUARTER COMMA MEANTONE
                    </div>
                    <div className='center gallery-preset gallery-music-box'>
                        <div className='gallery-preset-overlay' />
                        ON THE PASSING OF TIME
                    </div>
                    {/* <img onClick={(e) => this.setTexture('music', e.target)} data='gymnopedie' src={gymnopedie} alt='Gymnopedie by Kevin Macleod' /> */}
                    {/* <img onClick={(e) => this.setTexture('music', e.target)} data="calmant" src={calmant} alt='Calmant by Kevin Macleod' />
                    <img onClick={(e) => this.setTexture('music', e.target)} data="snowDrop" src={snowDrop} alt='Snow Drop by Kevin Macleod' />
                    <img onClick={(e) => this.setTexture('music', e.target)} data="impromptu" src={impromptu} alt='Impromptu in Quarter Comma Meantone by Kevin Macleod' />
                    <img onClick={(e) => this.setTexture('music', e.target)} data="onThePassingOfTime" src={onThePassingOfTime} alt='On The Passing of Time by Kevin Macleod' /> */}
                </div>
            </section>
        )
    }
}

export default GalleryPresets