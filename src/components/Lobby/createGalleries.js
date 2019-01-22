import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { v4 as randomStringGenerator } from 'uuid';
import { GridLoader } from 'react-spinners'
import axios from 'axios';
import UploadGalleryImages from './CreateSubComponents/uploadImages'
import GalleryPresets from './CreateSubComponents/galleryPresets'
import BluePrint from './CreateSubComponents/blueprint'


class CreateGalleries extends Component {
    constructor(props) {
        super(props)
        this.state = {
            galleryName: '',
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
        this.retrievingImageData = this.retrievingImageData.bind(this)
        this.retrievingGalleryPresets = this.retrievingGalleryPresets.bind(this)
    }

    componentDidMount() {
        let { user, galleries, editGalleryId } = this.props
        const numOfGalleries = galleries.length
        if (editGalleryId){
            this.setState({author: user, numOfGalleries, editMode: true, galleryId: editGalleryId}, ()=> {
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
        .get('/api/amazons3/thumbnails/', {params: {'file-name': fileName,'file-type': file.type},
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
            this.setState({ isUploading: false, thumbnail:url })
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


    onCancel() {
        this.setState({
            files: []
        });
    }

    updateGallery(){
    // If galleryName, author, or thumbnail are left blank, user should be notified to fill in the missing blanks.
    const {galleryName, author, thumbnail, isPrivate, galleryPresets, images} = this.state
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

        const {images,captions, galleryPresets} = this.state

        // Passes all relevant info to backend where separate queries will be made to populate galleries, gallery_preset, images, and captions tables.
        axios.post(`/api/createNewGallery/`, {galleryName, author, thumbnail, isPrivate}).then(res => {
            // Redirects user to EditGallery component to add their images and captions where they can actually create gallery
            this.props.history.push({pathname:`/gallery/${author}/${galleryName}/`, state:{galleryName, author, thumbnail, privacy: isPrivate}})
        })
    }

    retrievingImageData = (image, caption) => {
    // Erasing current data in local state as each child's state may have changed then setting state with new info
    let images = [];
    let captions = [];
    images.push(image)
    captions.push(caption)
    this.setState({images, captions})
    console.log(this.state.images, this.state.captions)
    }

    retrievingGalleryPresets = (state) => {
    let {music, lighting, floorTexture, ceilingTexture, wallTexture} = state
    let galleryPresets = [];
    galleryPresets.push(music, lighting, floorTexture, ceilingTexture, wallTexture)
    this.setState({galleryPresets})
    console.log(this.state.galleryPresets)
    }

    editGallery(id){
    // set State with gallery related info after retrieving gallery info.
    let galleryPresets = []
    axios.get(`/api/editGallery/${id}`).then(res => {
    console.log(res.data)
    let {image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_name, atmosphere_lighting, music, wall_texture, is_private, thumbnail, ceiling_texture, floor_texture, img1_caption, img2_caption, img3_caption, img4_caption, img5_caption, img6_caption, img7_caption, img8_caption, img9_caption, img10_caption, img11_caption, img12_caption, img13_caption, img14_caption, img15_caption} = res.data[0]
    let images = [image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15]
    let captions = [img1_caption, img2_caption, img3_caption, img4_caption, img5_caption, img6_caption, img7_caption, img8_caption, img9_caption, img10_caption, img11_caption, img12_caption, img13_caption, img14_caption, img15_caption]
    let galleryPresets = [ceiling_texture, wall_texture, atmosphere_lighting, floor_texture, music]
    this.setState({galleryName: gallery_name, isPrivate: is_private, thumbnail, images, captions, galleryPresets})
    })
    }

    render(props) {
        console.log(this.state)
        let {author, galleryName, thumbnail, isPrivate, numOfGalleries, maxLimit, isUploading, editMode, galleryId } = this.state
        // If there are multiple galleries, the spelling should reflect that correctly.
        let spellingGallery = numOfGalleries === 1 ? 'gallery' : 'galleries'
        return (
            <section className="create-galleries">
                {
                    maxLimit ?
                    <div className='create-galleries_max center'>
                        You currently have reached the gallery amount cap.
                        You can either edit an existing gallery or delete one to continue.
                    </div>
                    :
                    <div className="gallery-initialization">
                        <div className="name-gallery">
                            <h2>Your Gallery Name</h2>
                            <h3>{galleryName}</h3>
                            <input name="galleryName" onChange={(e) => { this.handleChange(e) }}></input>
                        </div>

                        <div className="privacy-gallery">
                            <h2>Privacy</h2>
                            <h3>Will your gallery be public or private?</h3>
                            <h5>Must be public to share.</h5>
                            {isPrivate ? "Private" : "Public"}
                            <span onClick={() => this.setPrivacy('private')} id="private-span">Private</span>
                            <span onClick={this.setPrivacy} id="public-span">Public</span>
                        </div>

                        <div className="thumbnail-gallery">
                            <h2>Gallery Thumbnail</h2>
                            <img src={thumbnail} alt="This is what is in frame 1" width="450px" />
                            <Dropzone
                                onDropAccepted={this.getSignedRequestThumbnails.bind(this)}
                                onFileDialogCancel={this.onCancel.bind(this)}
                                accept="image/*"
                                multiple={false}
                            >
                                {({ getRootProps, getInputProps }) => (
                                    <div {...getRootProps()} style={{
                                        position: 'relative',
                                        width: 200,
                                        height: 200,
                                        borderWidth: 7,
                                        borderColor: 'rgb(102, 102, 102)',
                                        borderStyle: 'dashed',
                                        borderRadius: 5,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: 28,
                                    }}>
                                        <input {...getInputProps()} />
                                        { isUploading 
                                         ?  <GridLoader />
                                         : <p>Drop File or Click Here</p>
                                        }
                                    </div>
                                )}
                            </Dropzone>
                            <input placeholder="Image Address"></input>
                        </div>

                        <UploadGalleryImages
                        existingImages={this.state.images}
                        existingCaptions={this.state.captions}
                        retrievingImageData={this.retrievingImageData}
                        />

                        <GalleryPresets 
                        galleryPresets={this.state.galleryPresets}
                        retrievingGalleryPresets={this.retrievingGalleryPresets}
                        />

                        <BluePrint />
                        
                        {
                        editMode ? 
                        <span id="edit-gallery-btn" onClick={this.updateGallery(galleryId)}>Edit Gallery</span>
                        :
                        <span id="create-gallery-btn" onClick={this.createNewGallery}>Create Gallery</span>
                        }
                    </div>
                }
                <div className='create-galleries_bottom'>
                    {12 - numOfGalleries} {spellingGallery} available
                </div>
            </section>
        )
    }
}

export default CreateGalleries