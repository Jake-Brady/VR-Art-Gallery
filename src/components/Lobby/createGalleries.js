import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { withRouter } from 'react-router-dom'
import { v4 as randomStringGenerator } from 'uuid';
import { GridLoader } from 'react-spinners'
import '../Styles/createGalleries.css'
import axios from 'axios';

class CreateGalleries extends Component {
    constructor(props) {
        super(props)
        this.state = {
            galleryName: '',
            author: '',
            isPrivate: false,
            thumbnail: 'http://via.placeholder.com/450x450',
            numOfGalleries: 0,
            maxLimit: false
        }
    }

    componentDidMount() {
        let { user, galleries } = this.props
        const numOfGalleries = galleries.length
        this.setState({ author: user, numOfGalleries }, () => {
            if (this.state.numOfGalleries === 12) {
                this.setState({ maxLimit: true })
            }
        })
        // Should set author and number of galleries tied to user in state. Immediately throw popup if user has reached limit 12 and disallow the rendering of the create Gallery


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

    getSignedRequest = ([file]) => {

    }

    uploadFile = (file, signRequest, url) => {

    }

    onDrop(files) {
        this.setState({ files });
    }

    onCancel() {
        this.setState({
            files: []
        });
    }

    createNewGallery = () => {
        // If galleryName, author, or thumbnail are left blank, user should be notified to fill in the missing blanks.
        const { galleryName, author, thumbnail, isPrivate } = this.state
        if (!galleryName || !author || !thumbnail) return;
        // Adds gallery to Database, as this is needed to generate a SPK id, to be used in next view so images and preset tables can reference it.
        axios.post(`/api/createNewGallery`, {galleryName, author, thumbnail, isPrivate}).then(res => {
            // Redirects user to EditGallery component to add their images and captions where they can actually create gallery
            this.props.history.push({pathname:`/gallery/${author}/${galleryName}/`, state:{galleryName, author, thumbnail, privacy: isPrivate}})
        })
    }

    render(props) {
        console.log(this.state)
        let { author, galleryName, thumbnail, isPrivate, numOfGalleries, maxLimit } = this.state
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
                                onDrop={this.onDrop.bind(this)}
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
                                        <h3>Upload</h3>
                                    </div>
                                )}
                            </Dropzone>
                            <input placeholder="Image Address"></input>
                        </div>
                        <span id="create-gallery-btn" onClick={this.createNewGallery}>Create Gallery</span>
                    </div>
                }
                <div className='create-galleries_bottom'>
                    {12 - numOfGalleries} {spellingGallery} available
                </div>
            </section>
        )
    }
}

export default withRouter(CreateGalleries)