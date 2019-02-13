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
import calmantPreview from '../../../assets/audio/Calmant.mp3'
import snowDropPreview from '../../../assets/audio/Snow_Drop.mp3'
import impromptuPreview from '../../../assets/audio/Impromptu_in_Quarter_Comma_Meantone.mp3'
import timePreview from '../../../assets/audio/On_the_Passing_of_Time.mp3'

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
            file: ''
        }
    }

    componentWillReceiveProps(props) {
        let { galleryPresets, finalCountdown, retrievingGalleryPresets } = props
        if (this.state.finalCountdown === 2 && galleryPresets) {
            this.setState({ wall: galleryPresets[1], floor: galleryPresets[3], music: galleryPresets[4] }, () => {
                this.setState({ finalCountdown: 1 })
            })
        } else if (this.state.finalCountdown === 1 && galleryPresets) {
            this.setState({ ceilingTexture: galleryPresets[0], wallTexture: galleryPresets[1], wall: galleryPresets[1], lighting: galleryPresets[2], floorTexture: galleryPresets[3], floor: galleryPresets[3], music: galleryPresets[4] }, () => {
                this.setState({ finalCountdown: 0 }, () => {
                    this.highlightPresets()
                })
            })
        }
        if (finalCountdown === 0) {
            retrievingGalleryPresets(this.state)
        }
    }

    setTexture = (section, target) => {
        if (section === 'music') document.querySelectorAll(`#${section} > div`).forEach(option => option.style.opacity = '.2')
        else document.querySelectorAll(`#${section} img`).forEach(option => option.style.opacity = '.2')
        target.style.opacity = '1'
        this.setState({ [section]: target.getAttribute('data') })
    }

    highlightPresets = () => {
        const { wallTexture, floorTexture, music } = this.state
        const wallTarget = [...document.querySelectorAll('#wall img')].filter(wall => wall.getAttribute('data') === wallTexture)[0],
            floorTarget = [...document.querySelectorAll('#floor img')].filter(floor => floor.getAttribute('data') === floorTexture)[0],
            musicTarget = [...document.querySelectorAll('#music > div')].filter(musicPreset => musicPreset.getAttribute('data') === music)[0]
        if (this.state.wall) this.setTexture('wall', wallTarget)
        if (this.state.floor) this.setTexture('floor', floorTarget)
        if (this.state.music) this.setTexture('music', musicTarget)
    }

    audioPreview = (file, e) => {
        e.stopPropagation()
        document.querySelectorAll('.gallery-audio-preview').forEach(icon => icon.style.color = 'black')
        const audio = document.querySelector('.gallery-audio-tag')
        const src = audio.getAttribute('src')
        if (src === file && audio.paused) {
            e.target.style.color = 'rgb(110, 142, 254)'
            audio.play()
        }
        else if (audio.duration > 0 && src === file) {
            e.target.style.color = 'black'
            audio.pause()
        }
        else {
            e.target.style.color = 'rgb(110, 142, 254)'
            audio.setAttribute('src', file)
            audio.load()
            audio.volume = 0.2
            audio.play()
        }
    }

    render() {
        console.log('RENDER', this.state)
        return (
            <section className="gallery-presets">
                <audio className='gallery-audio-tag' />
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
                        <img onClick={(e) => this.setTexture('floor', e.target)} data="stoneTiles" src={stoneTiles} alt='stone tiles texture' />
                        <div className='gallery-preset-overlay' />
                        <span className='gallery-preset-name'>TILES</span>
                    </div>
                </div>
                <div id='music'>
                    <h1>Music Selection</h1>
                    <div className='gallery-audio-preview center' onClick={(e) => this.audioPreview(gymnopediaPreview, e)}>
                        <i className="fas fa-music"></i>
                    </div>
                    <div className='gallery-audio-preview center audio2' onClick={(e) => this.audioPreview(calmantPreview, e)}>
                        <i className="fas fa-music"></i>
                    </div>
                    <div className='gallery-audio-preview center audio3' onClick={(e) => this.audioPreview(snowDropPreview, e)}>
                        <i className="fas fa-music"></i>
                    </div>
                    <div className='gallery-audio-preview center audio4' onClick={(e) => this.audioPreview(timePreview, e)}>
                        <i className="fas fa-music"></i>
                    </div>
                    <div className='gallery-audio-preview center audio5' onClick={(e) => this.audioPreview(impromptuPreview, e)}>
                        <i className="fas fa-music"></i>
                    </div>
                    <div className='center gallery-preset gallery-music-box' onClick={(e) => this.setTexture('music', e.target)} data='gymnopedie'>
                        <div className='gallery-preset-overlay audio-overlay' />
                        GYMNOPEDIE
                    </div>
                    <div className='center gallery-preset gallery-music-box' onClick={(e) => this.setTexture('music', e.target)} data="calmant">
                        <div className='gallery-preset-overlay audio-overlay' />
                        CALMANT
                    </div>
                    <div className='center gallery-preset gallery-music-box' onClick={(e) => this.setTexture('music', e.target)} data="snowDrop">
                        <div className='gallery-preset-overlay audio-overlay' />
                        SNOW DROP
                    </div>
                    <div className='center gallery-preset gallery-music-box' onClick={(e) => this.setTexture('music', e.target)} data="impromptu">
                        <div className='gallery-preset-overlay audio-overlay' />
                        IMPROMPTU IN QUARTER COMMA MEANTONE
                    </div>
                    <div className='center gallery-preset gallery-music-box' onClick={(e) => this.setTexture('music', e.target)} data="onThePassingOfTime">
                        <div className='gallery-preset-overlay audio-overlay' />
                        ON THE PASSING OF TIME
                    </div>
                </div>
            </section>
        )
    }
}

export default GalleryPresets