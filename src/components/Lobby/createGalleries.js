import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import {withRouter} from 'react-router-dom'
import {v4 as randomStringGenerator} from 'uuid';
import {GridLoader} from 'react-spinners'
import '../Styles/createGalleries.css'
import axios from 'axios';

class CreateGalleries extends Component {
    constructor(props) {
        super(props)
            this.state={
                galleryName: '',
                author: '',
                isPrivate: false,
                thumbnail: 'http://via.placeholder.com/450x450',
                numOfGalleries: 0,
                maxLimit: false
            }
        this.handleChange = this.handleChange.bind(this)
        this.setPrivacy = this.setPrivacy.bind(this)
        this.createNewGallery = this.createNewGallery.bind(this)
    }

componentDidMount(){
let {user, galleries} = this.props
const numOfGalleries = galleries.length
this.setState({author: user, numOfGalleries}, () => {
    if(this.state.numOfGalleries === 12){
        this.setState({maxLimit: true})
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

createNewGallery(){
// If galleryName, author, or thumbnail are left blank, user should be notified to fill in the missing blanks.
const {galleryName, author, thumbnail} = this.state
if (!galleryName || !author || !thumbnail) return;

// Redirects user to EditGallery component to add their images and captions where they can actually create gallery
this.props.history.push(`/lobby/${author}/${galleryName}/uploadGallery`)

}

render(props){
let {author, galleryName, thumbnail, isPrivate, numOfGalleries, maxLimit} = this.state
// If there are multiple galleries, the spelling should reflect that correctly.
let spellingGallery;
if (numOfGalleries === 1){
    spellingGallery = "gallery"
} else {
    spellingGallery = "galleries"
}
return(
    // If maxLimit is true, then user can receives div notifying that galleries must be deleted first in order to create new ones.


    <section id="create-galleries">
        {/* Inform User of how many galleries he/she has */}
        <div className="user-galleries">
            <h2>Welcome {author}.</h2>
            <h2>You currently have {numOfGalleries} existing {spellingGallery}.</h2>
            <h5>{12 - numOfGalleries} available.</h5>
        </div>

        {/* if maxLimit is true, then notify user. If false, then allow user to continue making gallery name and thumbnail. */}
    {maxLimit ? <section><h1>Too many galleries.</h1></section> :
        <section className="gallery-initialization">
            <div className="name-gallery">
                <h2>Your Gallery Name</h2>
                <h3>{galleryName}</h3>
                <input name="galleryName" onChange={(e) => {this.handleChange(e)}}></input>
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
                {({getRootProps, getInputProps}) => (
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
        </section>
        }
    </section>
    )
}
}

export default withRouter (CreateGalleries)