import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import {v4 as randomStringGenerator} from 'uuid';
import {GridLoader} from 'react-spinners'
import axios from 'axios'

class EditGalleries extends Component{
    constructor(){
        super()
            this.state={
                images: [],
                galleryPresets: [],
                isUploading: false,
                url: 'http://via.placeholder.com/450x450',
                image1: '',
                image1Caption: '',
                image2: '',
                image2Caption: '',
                image3: '',
                image3Caption: '',
                image4: '',
                image4Caption: '',
                image5: '',
                image5Caption: '',
                image6: '',
                image6Caption: '',
                Image7: '',
                Image7Caption: '',
                Image8: '',
                Image8Caption: '',
                Image9: '',
                Image9Caption: '',
                Image10: '',
                Image10Caption: '',
                Image11: '',
                Image11Caption: '',
                Image12: '',
                Image12Caption: '',
                Image13: '',
                Image13Caption: '',
                Image14: '',
                Image14Caption: '',
                Image15: '',
                Image15Caption: '',
                
            }
    }

componentDidMount(){
//Needs to confirm whether user is logged in and is the author. If not, redirects the user back to landingPage.
let user = this.props.match.params.username
axios.get(`/api/checkUser/`).then(res => {
    if (res.data !== user) {
        this.props.history.push('/')
    }
}, () => {
// Needs to take in the galleryID and retrieve all associated images from images table for it, along with presets, and general info related to it.
axios.get()

})



}

getSignedRequest = ([file]) => {

}

uploadFile = (file, signRequest, url) => {

}

onDrop(files) {
    this.setState({files});
  }

onCancel() {
    this.setState({
      files: []
    });
}


render(){
    const {url, isUploading} = this.state;
    console.log(this.props)
    return(
    <section id="image-uploads">
    <h2>User-Uploaded Image Section</h2>
        <div className="img-block">
            <h3>Frame 1</h3>
            <img src={url} alt="This is what is in frame 1" width="450px" />
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
                marginTop: 100,
                borderColor: 'rgb(102, 102, 102)',
                borderStyle: 'dashed',
                borderRadius: 5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 28,
              }}>
              <input {...getInputProps()} />
                
            </div>
          )}
        </Dropzone>

        </div>
        <div className="img-block">
            <h3>Frame 2</h3>
            <img src={url} alt="This is what is in frame 2" width="450px" />

        </div>
        <div className="img-block">
            <h3>Frame 3</h3>
            <img src={url} alt="This is what is in frame 3" width="450px" />

        </div>
        <div className="img-block">
            <h3>Frame 4</h3>
            <img src={url} alt="This is what is in frame 4" width="450px" />

        </div>
        <div className="img-block">
            <h3>Frame 5</h3>
            <img src={url} alt="This is what is in frame 5" width="450px" />

        </div>
        <div className="img-block">
            <h3>Frame 6</h3>
            <img src={url} alt="This is what is in frame 6" width="450px" />

        </div>
        <div className="img-block">
            <h3>Frame 7</h3>
            <img src={url} alt="This is what is in frame 7" width="450px" />

        </div>
        <div className="img-block">
            <h3>Frame 8</h3>
            <img src={url} alt="This is what is in frame 8" width="450px" />

        </div>
        <div className="img-block">
            <h3>Frame 9</h3>
            <img src={url} alt="This is what is in frame 9" width="450px" />

        </div>
        <div className="img-block">
            <h3>Frame 10</h3>
            <img src={url} alt="This is what is in frame 10" width="450px" />

        </div>
        <div className="img-block">
            <h3>Frame 11</h3>
            <img src={url} alt="This is what is in frame 11" width="450px" />

        </div>
        <div className="img-block">
            <h3>Image for Frame 12</h3>
            <img src={url} alt="This is what is in frame 12" width="450px" />

        </div>
        <div className="img-block">
            <h3>Image for Frame 13</h3>
            <img src={url} alt="This is what is in frame 13" width="450px" />

        </div>
        <div className="img-block">
            <h3>Image for Frame 14</h3>
            <img src={url} alt="This is what is in frame 14" width="450px" />

        </div>
        <div className="img-block">
            <h3>Image for Frame 15</h3>
            <img src={url} alt="This is what is in frame 15" width="450px" />

        </div>
    </section>
    )
}
}

export default EditGalleries