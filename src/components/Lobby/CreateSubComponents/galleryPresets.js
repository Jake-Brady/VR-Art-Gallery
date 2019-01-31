import React, { Component } from 'react'

class GalleryPresets extends Component {
    constructor() {
        super()
        this.state = {
            music: '',
            lighting: '',
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
        this.setState({ [section]: target.src })
    }

    handleHSL = e => {
        if (this.state.down) {
            const lighting = document.querySelector('#lighting')
            lighting.style.background = `hsl(${e.clientX}, 80%, 80%)`
        }
    }

    render() {
        return (
            <section className="gallery-presets">
                <div id='wall'>
                    <h1>Wall Texture</h1>
                    <img onClick={(e) => this.setTexture('wall', e.target)} src='https://img.freepik.com/free-photo/wooden-plank-textured-background-material_53876-33591.jpg?size=626&ext=jpg' alt='' />
                    <img onClick={(e) => this.setTexture('wall', e.target)} src='https://images.pexels.com/photos/935875/pexels-photo-935875.jpeg?cs=srgb&dl=hardwood-material-rough-935875.jpg&fm=jpg' alt='' />
                    <img onClick={(e) => this.setTexture('wall', e.target)} src='https://i.pinimg.com/originals/2c/c1/3e/2cc13e6422218aa521474b36346b85f9.jpg' alt='' />
                    <img onClick={(e) => this.setTexture('wall', e.target)} src='https://images-na.ssl-images-amazon.com/images/I/81mTgAm-P0L._SX425_.jpg' alt='' />
                    <img onClick={(e) => this.setTexture('wall', e.target)} src='https://www.textures.com/system/gallery/photos/Brick/Modern/Painted/121401/BrickSmallPainted0216_2_350.jpg' alt='' />
                </div>
                <div id='floor'>
                    <h1>Floor Texture</h1>
                    <img onClick={(e) => this.setTexture('floor', e.target)} src='https://img.freepik.com/free-photo/wooden-plank-textured-background-material_53876-33591.jpg?size=626&ext=jpg' alt='' />
                    <img onClick={(e) => this.setTexture('floor', e.target)} src='https://images.pexels.com/photos/935875/pexels-photo-935875.jpeg?cs=srgb&dl=hardwood-material-rough-935875.jpg&fm=jpg' alt='' />
                    <img onClick={(e) => this.setTexture('floor', e.target)} src='https://i.pinimg.com/originals/2c/c1/3e/2cc13e6422218aa521474b36346b85f9.jpg' alt='' />
                    <img onClick={(e) => this.setTexture('floor', e.target)} src='https://images-na.ssl-images-amazon.com/images/I/81mTgAm-P0L._SX425_.jpg' alt='' />
                    <img onClick={(e) => this.setTexture('floor', e.target)} src='https://www.textures.com/system/gallery/photos/Brick/Modern/Painted/121401/BrickSmallPainted0216_2_350.jpg' alt='' />
                </div>
                <div id='music'>
                    <h1>Music Selection</h1>
                    <img onClick={(e) => this.setTexture('music', e.target)} src='https://img.freepik.com/free-photo/wooden-plank-textured-background-material_53876-33591.jpg?size=626&ext=jpg' alt='' />
                    <img onClick={(e) => this.setTexture('music', e.target)} src='https://images.pexels.com/photos/935875/pexels-photo-935875.jpeg?cs=srgb&dl=hardwood-material-rough-935875.jpg&fm=jpg' alt='' />
                    <img onClick={(e) => this.setTexture('music', e.target)} src='https://i.pinimg.com/originals/2c/c1/3e/2cc13e6422218aa521474b36346b85f9.jpg' alt='' />
                    <img onClick={(e) => this.setTexture('music', e.target)} src='https://images-na.ssl-images-amazon.com/images/I/81mTgAm-P0L._SX425_.jpg' alt='' />
                    <img onClick={(e) => this.setTexture('music', e.target)} src='https://www.textures.com/system/gallery/photos/Brick/Modern/Painted/121401/BrickSmallPainted0216_2_350.jpg' alt='' />
                </div>
                {/* <div id='lighting'>
                    <h1>Lighting</h1>
                    <div style={{ width: '1038px', height: '100px' }} onMouseDown={() => this.setState({ down: true })} onMouseUp={() => this.setState({ down: false })} onMouseMove={e => this.handleHSL(e)}>

                    </div>
                </div> */}
            </section>
        )
    }
}

export default GalleryPresets