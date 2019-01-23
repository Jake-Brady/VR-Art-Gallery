import React, { Component } from 'react'
import '../../styles/Components/createGalleries.css'
import Dropzone from 'react-dropzone'
import { v4 as randomStringGenerator } from 'uuid';
import { GridLoader } from 'react-spinners'
import axios from 'axios';
import UploadGalleryImages from './CreateSubComponents/uploadImages'
import GalleryPresets from './CreateSubComponents/galleryPresets'


class CreateGalleries extends Component {
    constructor(props) {
        super(props)
        this.state = {
            galleryName: '',
            imageAddress: '',
            author: '',
            isPrivate: false,
            thumbnail: 'http://via.placeholder.com/450x450',
            numOfGalleries: 0,
            maxLimit: false,
            images: [],
            captions: [],
            isUploading: false,
            galleryPresets: [],
            editMode: false,
            galleryId: 0,
        }
    }

    componentDidMount() {
        let { user, galleries, editGalleryId } = this.props
        const numOfGalleries = galleries.length
        if (editGalleryId) {
            this.setState({ author: user, numOfGalleries, editMode: true, galleryId: editGalleryId }, () => {
                this.editGallery(editGalleryId)
            })
        }
        else {
            // if user has reached limit 12, conditionally disallow the rendering of the create Gallery
            this.setState({ author: user, numOfGalleries }, () => {
                if (this.state.numOfGalleries === 12) {
                    this.setState({ maxLimit: true })
                }
            })
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    setPrivacy = par => {
        if (par === 'private') {
            this.setState({ isPrivate: true })
        } else {
            this.setState({ isPrivate: false })
        }
    }

    getSignedRequestThumbnails = ([file]) => {
        console.log(this.state.url)
        console.log(file)
        this.setState({ isUploading: true });
        const fileName = `${randomStringGenerator()}-${file.name.replace(/\s/g, '-')}`;
        axios
            .get('/api/amazons3/thumbnails/', {
                params: { 'file-name': fileName, 'file-type': file.type },
            })
            .then(res => {
                const { signedRequest, url } = res.data;
                console.log(url)
                this.uploadFile(file, signedRequest, url);
            })
            .catch(err => {
                console.log(err);
            });
    }
    uploadFile = (file, signedRequest, url) => {
        console.log(url)
        const options = {
            headers: {
                'Content-Type': file.type,
            },
        };

        axios
            .put(signedRequest, file, options)
            .then(res => {
                console.log(url)
                this.setState({ isUploading: false, thumbnail: url })
                // .then(console.log("this is the url",url))
                // THEN DO SOMETHING WITH THE URL. SEND TO DB 
            })

            .catch(err => {
                this.setState({
                    isUploading: false,
                });
                if (err.response.status === 403) {
                    alert(
                        `Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${
                        err.stack
                        }`
                    );
                } else {
                    alert(`ERROR: ${err.status}\n ${err.stack}`);
                }
            });
    };


    onCancel = () => {
        this.setState({
            files: []
        });
    }

    updateGallery = () => {
        // If galleryName, author, or thumbnail are left blank, user should be notified to fill in the missing blanks.
        const { galleryName, author, thumbnail, isPrivate, galleryPresets, images } = this.state
        if (!galleryName || !author || !thumbnail) return;

        // // axios request to update back end once all data has been received.
        // axios.put(`/api.updateGallery/:id`, {images, galleryPresets, isPrivate}).then(res => {
        //     // notify user that gallery has been updated and redirect them to galleries.
        // })
    }

    createNewGallery = () => {
        // If galleryName, author, or thumbnail are left blank, user should be notified to fill in the missing blanks.
        const { galleryName, author, thumbnail, isPrivate } = this.state
        if (!galleryName || !author || !thumbnail) return;

        const { images, captions, galleryPresets } = this.state

        // Passes all relevant info to backend where separate queries will be made to populate galleries, gallery_preset, images, and captions tables.
        axios.post(`/api/createNewGallery/`, { galleryName, author, thumbnail, isPrivate }).then(res => {
            // Redirects user to EditGallery component to add their images and captions where they can actually create gallery
            this.props.history.push({ pathname: `/gallery/${author}/${galleryName}/`, state: { galleryName, author, thumbnail, privacy: isPrivate } })
        })
    }

    retrievingImageData = (image, caption) => {
        // Erasing current data in local state as each child's state may have changed then setting state with new info
        let images = [];
        let captions = [];
        images.push(image)
        captions.push(caption)
        this.setState({ images, captions })
        console.log(this.state.images, this.state.captions)
    }

    retrievingGalleryPresets = (state) => {
        let { music, lighting, floorTexture, ceilingTexture, wallTexture } = state
        let galleryPresets = [];
        galleryPresets.push(music, lighting, floorTexture, ceilingTexture, wallTexture)
        this.setState({ galleryPresets })
        console.log(this.state.galleryPresets)
    }

    editGallery = id => {
        // set State with gallery related info after retrieving gallery info.
        let galleryPresets = []
        axios.get(`/api/editGallery/${id}`).then(res => {
            console.log(res.data)
            let { image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_name, atmosphere_lighting, music, wall_texture, is_private, thumbnail, ceiling_texture, floor_texture, img1_caption, img2_caption, img3_caption, img4_caption, img5_caption, img6_caption, img7_caption, img8_caption, img9_caption, img10_caption, img11_caption, img12_caption, img13_caption, img14_caption, img15_caption } = res.data[0]
            let images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15]
            let captions = [img1_caption, img2_caption, img3_caption, img4_caption, img5_caption, img6_caption, img7_caption, img8_caption, img9_caption, img10_caption, img11_caption, img12_caption, img13_caption, img14_caption, img15_caption]
            let galleryPresets = [ceiling_texture, wall_texture, atmosphere_lighting, floor_texture, music]
            this.setState({ galleryName: gallery_name, isPrivate: is_private, thumbnail, images, captions, galleryPresets })
        })
    }

    handlePrivacy = bool => {
        this.setState({ isPrivate: bool })
    }

    render(props) {
        let { author, galleryName, thumbnail, isPrivate, numOfGalleries, maxLimit, isUploading, editMode, galleryId } = this.state
        // If there are multiple galleries, the spelling should reflect that correctly.
        let spellingGallery = numOfGalleries === 1 ? 'gallery' : 'galleries'
        return (
            <section className="create-galleries">
                {maxLimit ?
                    <div className='create-galleries_max center'>
                        You currently have reached the gallery amount cap.
                        You can either edit an existing gallery or delete one to continue.
                        </div>
                    :
                    <>
                        <div className='create-gallery-header center'>CARD</div>
                        <div className="create-gallery_card">
                            <div className='create-gallery_cardleft'>
                                <h1>Gallery Name (100 characters)</h1>
                                <input name="galleryName" onChange={(e) => this.handleChange(e)} maxLength='100' />
                                <h2>Privacy</h2>
                                <div className='create-gallery-privacy'>
                                    <div style={this.state.isPrivate ? { opacity: '.5' } : { opacity: '1' }} onClick={() => this.handlePrivacy(false)}>Public <i className="fas fa-unlock" style={{ marginLeft: '10px', fontSize: '12px', marginTop: '5px' }}></i></div>
                                    <div style={this.state.isPrivate ? { opacity: '1' } : { opacity: '.5' }} onClick={() => this.handlePrivacy(true)}>Private <i className="fas fa-lock" style={{ marginLeft: '10px', fontSize: '12px', marginTop: '5px' }}></i></div>
                                </div>
                                <h1 style={{ marginTop: '10px' }}>Thumbnail</h1>
                                <input name="imageAddress" onChange={(e) => this.handleChange(e)} />
                                <h1>or</h1>
                                <Dropzone
                                    onDropAccepted={this.getSignedRequestThumbnails.bind(this)}
                                    onFileDialogCancel={this.onCancel.bind(this)}
                                    accept="image/*"
                                    multiple={false}
                                >
                                    {({ getRootProps, getInputProps }) => (
                                        <div {...getRootProps()} style={{
                                            width: '100px',
                                            height: '40px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            background: 'rgb(119, 148, 253)',
                                            marginTop: '15px',
                                            fontSize: '15px',
                                            color: 'white',
                                            cursor: 'pointer'
                                        }}>
                                            <input {...getInputProps()} />
                                            <p>UPLOAD</p>
                                        </div>
                                    )}
                                </Dropzone>
                            </div>

                            <div className='create-gallery_cardright center'>
                                <div className='gallery-container'>
                                    <img src={thumbnail} alt='Card Thumbnail' className='gallery-thumbnail' />
                                    <div className='gallery-text'>
                                        <h1 className='gallery-title'>{galleryName.split(' ')[0] ? galleryName.length > 15 ? galleryName.slice(0, 15) + '...' : galleryName : 'Sample Text'}</h1>
                                        <h3 className='gallery-author'>BY: {author}</h3>
                                        <div className='gallery-stats'>
                                            {isPrivate ? <><i className="fas fa-lock stat"></i> <span>Private</span></> : <><i className="fas fa-unlock stat"></i> <span>Public</span> </>}
                                            <i className="fas fa-eye stat"></i><span>0</span>
                                            <i className="fas fa-heart stat"></i><span>0</span>
                                            <i className="fas fa-share stat"></i><span>0</span>
                                            <div className='gallery-pop'>
                                                <div className='center'>EDIT</div>
                                                <div className='center'>DELETE</div>
                                            </div>
                                        </div>
                                        <div className='gallery-view center'>Visit Gallery</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='create-gallery-header center'>IMAGES</div>

                        <UploadGalleryImages
                            existingImages={this.state.images}
                            existingCaptions={this.state.captions}
                            retrievingImageData={this.retrievingImageData}
                        />

                        <div className='create-gallery-header center'>GALLERY</div>

                        <GalleryPresets
                            galleryPresets={this.state.galleryPresets}
                            retrievingGalleryPresets={this.retrievingGalleryPresets}
                        />

                        {
                            editMode ?
                                <span id="edit-gallery-btn" onClick={this.updateGallery(galleryId)}>Edit Gallery</span>
                                :
                                <span id="create-gallery-btn" onClick={this.createNewGallery}>Create Gallery</span>
                        }
                    </>
                }
                <div className='create-galleries_bottom'>
                    {12 - numOfGalleries} {spellingGallery} available
                </div>
            </section>
        )
    }
}

export default CreateGalleries