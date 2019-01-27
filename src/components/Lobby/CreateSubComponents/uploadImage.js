import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { v4 as randomStringGenerator } from 'uuid';
import { GridLoader } from 'react-spinners'
import axios from 'axios'

class UploadImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageURL: 'https://www.rpnation.com/gallery/250-x-250-placeholder.30091/full',
            newURL: '',
            imageCaption: '',
            isUploading: false,
            finalCountdown: 2
        }
    }


    componentWillReceiveProps(props) {
        let { imageURL, imageCaption, retrievingImageData, finalCountdown} = props
        if (this.state.finalCountdown === 2 && imageURL) {
            this.setState({ imageURL, imageCaption}, () => {
                this.setState({finalCountdown: 1})
            })
        }
        if (finalCountdown === 0){
                retrievingImageData(this.state.newURL || this.state.imageURL, this.state.imageCaption) 
            }
    }

    onChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getSignedRequest = ([file]) => {
        console.log(this.state.url)
        console.log(file)
        this.setState({ isUploading: true });
        const fileName = `${randomStringGenerator()}-${file.name.replace(/\s/g, '-')}`;
        axios
            .get('/api/amazons3/images/', {
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
                this.setState({ isUploading: false, newURL: url })
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


    render(props) {
        let { imageURL, imageCaption, isUploading } = this.state
        return (
            <section className="image-block">
                <div className="upload-block">
                    <input name="imageCaption" onChange={(e) => this.onChangeHandler(e)} maxlength="30" placeholder="Image Caption (30 character limit)"></input>
                    <input name="newURL" onChange={(e) => this.onChangeHandler(e)} maxlength="100" placeholder="Image Address"></input>
                    <Dropzone
                        onDropAccepted={this.getSignedRequest.bind(this)}
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
                                <p>Upload</p>
                            </div>
                        )}
                    </Dropzone>
                </div>

                <div className="preview-image-box">
                    <figure className="image-caption-container">
                    <img className="preview-image" src={this.state.newURL || this.state.imageURL} alt="Preview" />
                    <figcaption className="preview-caption">{this.state.imageCaption || '(Optional) Caption'}</figcaption>
                    </figure>
                </div>
            </section>
        )
    }
}

export default UploadImage