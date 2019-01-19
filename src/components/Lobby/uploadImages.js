import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import {v4 as randomStringGenerator} from 'uuid';
import {GridLoader} from 'react-spinners'
import axios from 'axios'

class UploadGalleryImages extends Component{
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
                image7: '',
                image7Caption: '',
                image8: '',
                image8Caption: '',
                image9: '',
                image9Caption: '',
                image10: '',
                image10Caption: '',
                image11: '',
                image11Caption: '',
                image12: '',
                image12Caption: '',
                image13: '',
                image13Caption: '',
                image14: '',
                image14Caption: '',
                image15: '',
                image15Caption: '',
            }
    }

componentDidMount(){
//Needs to check for existing images associated with gallery.

}

onChangeHandler(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}

getSignedRequest = ([file]) => {

}


uploadFile = (file, signRequest, url) => {

}

onCancel() {
    this.setState({
      files: []
    });
}


render(){
    const {isUploading, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image1Caption, image2Caption, image3Caption, image4Caption, image5Caption, image6Caption, image7Caption, image8Caption, image9Caption, image10Caption, image11Caption, image12Caption, image13Caption, image14Caption, image15Caption} = this.state;

    return(
    <section id="image-uploads">
    <h2>User-Uploaded Image Section</h2>
        <div className="img-block">
            <h3>Frame 1</h3>
            <img src={image1} alt="This is what is in frame 1" width="450px" />
            <Dropzone
                onDropAccepted={this.getSignedRequest.bind(this)}
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
            <input name="image1" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Address"></input>
            {image1Caption}
            <input name="image1Caption" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Caption (30 character limit"></input>

        </div>
        <div className="img-block">
            <h3>Frame 2</h3>
            <img src={image2} alt="This is what is in frame 2" width="450px" />
            <Dropzone
                onDropAccepted={this.getSignedRequest.bind(this)}
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
            <input name="image2" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Address"></input>
            {image2Caption}
            <input name="image2Caption" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Caption (30 character limit"></input>

        </div>
        <div className="img-block">
            <h3>Frame 3</h3>
            <img src={image3} alt="This is what is in frame 3" width="450px" />
            <Dropzone
                onDropAccepted={this.getSignedRequest.bind(this)}
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
            <input name="image3" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Address"></input>
            {image3Caption}
            <input name="image3Caption" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Caption (30 character limit"></input>

        </div>
        <div className="img-block">
            <h3>Frame 4</h3>
            <img src={image4} alt="This is what is in frame 4" width="450px" />
            <Dropzone
                onDropAccepted={this.getSignedRequest.bind(this)}
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
            <input name="image4" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Address"></input>
            {image4Caption}
            <input name="image4Caption" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Caption (30 character limit"></input>

        </div>
        <div className="img-block">
            <h3>Frame 5</h3>
            <img src={image5} alt="This is what is in frame 5" width="450px" />
            <Dropzone
                onDropAccepted={this.getSignedRequest.bind(this)}
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
            <input name="image5" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Address"></input>
            {image5Caption}
            <input name="image5Caption" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Caption (30 character limit"></input>

        </div>
        <div className="img-block">
            <h3>Frame 6</h3>
            <img src={image6} alt="This is what is in frame 6" width="450px" />
            <Dropzone
                onDropAccepted={this.getSignedRequest.bind(this)}
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
            <input name="image6" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Address"></input>
            {image6Caption}
            <input name="image6Caption" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Caption (30 character limit"></input>

        </div>
        <div className="img-block">
            <h3>Frame 7</h3>
            <img src={image7} alt="This is what is in frame 7" width="450px" />
            <Dropzone
                onDropAccepted={this.getSignedRequest.bind(this)}
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
            <input name="image7" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Address"></input>
            {image7Caption}
            <input name="image7Caption" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Caption (30 character limit"></input>

        </div>
        <div className="img-block">
            <h3>Frame 8</h3>
            <img src={image8} alt="This is what is in frame 8" width="450px" />
            <Dropzone
                onDropAccepted={this.getSignedRequest.bind(this)}
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
            <input name="image8" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Address"></input>
            <input name="image8Caption" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Caption (30 character limit"></input>

        </div>
        <div className="img-block">
            <h3>Frame 9</h3>
            <img src={image9} alt="This is what is in frame 9" width="450px" />
            <Dropzone
                onDropAccepted={this.getSignedRequest.bind(this)}
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
            <input name="image9" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Address"></input>
            {image9Caption}
            <input name="image9Caption" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Caption (30 character limit"></input>

        </div>
        <div className="img-block">
            <h3>Frame 10</h3>
            <img src={image10} alt="This is what is in frame 10" width="450px" />
            <Dropzone
                onDropAccepted={this.getSignedRequest.bind(this)}
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
            <input name="image10" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Address"></input>
            {image10Caption}
            <input name="image10Caption" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Caption (30 character limit"></input>

        </div>
        <div className="img-block">
            <h3>Frame 11</h3>
            <img src={image11} alt="This is what is in frame 11" width="450px" />
            <Dropzone
                onDropAccepted={this.getSignedRequest.bind(this)}
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
            <input name="image11" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Address"></input>
            {image11Caption}
            <input placeholder="Image Caption (30 character limit"></input>

        </div>
        <div className="img-block">
            <h3>Image for Frame 12</h3>
            <img src={image12} alt="This is what is in frame 12" width="450px" />
            <Dropzone
                onDropAccepted={this.getSignedRequest.bind(this)}
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
            {image12Caption}
            <input name="image12" onChange={(e) => this.onChangeHandler(e)} name="image12Caption" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Caption (30 character limit"></input>

        </div>
        <div className="img-block">
            <h3>Image for Frame 13</h3>
            <img src={image13} alt="This is what is in frame 13" width="450px" />
            <Dropzone
                onDropAccepted={this.getSignedRequest.bind(this)}
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
            <input name="image13" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Address"></input>
            {image13Caption}
            <input name="image13Caption" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Caption (30 character limit"></input>
            

        </div>
        <div className="img-block">
            <h3>Image for Frame 14</h3>
            <img src={image14} alt="This is what is in frame 14" width="450px" />
            <Dropzone
                onDropAccepted={this.getSignedRequest.bind(this)}
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
            <input name="image14" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Address"></input>
            {image14Caption}
            <input name="image14Caption" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Caption (30 character limit"></input>

        </div>
        <div className="img-block">
            <h3>Image for Frame 15</h3>
            <img src={image15} alt="This is what is in frame 15" width="450px" />
            <Dropzone
                onDropAccepted={this.getSignedRequest.bind(this)}
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
            <input name="image15" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Address"></input>
            {image15Caption}
            <input name="image15Caption" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Caption (30 character limit"></input>
        </div>

        <div>
            <h1>Presets of Gallery</h1>
            <p>Floor Textures</p>
            <p>Wall Textures</p>
            <p>Ceiling Textures</p>
            <p>Music Selection</p>
            <p>Lighting</p>
        </div>

        <div>
            <h1>BluePrints of Art Gallery</h1>
        </div>
    </section>
    )
}
}

export default UploadGalleryImages