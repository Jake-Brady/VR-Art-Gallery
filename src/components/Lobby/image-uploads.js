import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import {v4 as randomStringGenerator} from 'uuid';
import {GridLoader} from 'react-spinners'
import '../Styles/image-uploads.css'

class ImageUploads extends Component{
    constructor(){
        super()
            this.state={
                images: [],
                isUploading: false,
                url: 'http://via.placeholder.com/450x450'
            }
    }

componentDidMount(){
// GET user's image URLs from their images table.
}

getSignedRequest = ([file]) => {

}

uploadFile = (file, signRequest, url) => {

}

render(){
    const {url, isUploading} = this.state;
    return(
    <section id="image-uploads">
    <h2>User-Uploaded Image Section</h2>
        <div className="img-block">
            <h3>Frame 1</h3>
            <img src={url} alt="This is what is in frame 1" width="450px" />
            <Dropzone
          onDropAccepted={this.getSignedRequest}
          style={{
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
          }}
          accept="image/*"
          multiple={false}
        >
          {isUploading ? <GridLoader /> : <p>Drop File or Click Here</p>}
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
        <div className="img-block">
            <h3>Image for Frame 15</h3>
            <img src={url} alt="This is what is in frame 1" width="450px" />

        </div>

    </section>
    )
}
}

export default ImageUploads