import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import Placeholder from '../../../styles/Media/Placeholder.png'
import { v4 as randomStringGenerator } from 'uuid';
import axios from 'axios'

class UploadImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageURL: '',
            newURL: '',
            imageCaption: '',
            isUploading: false,
            finalCountdown: 2
        }
        this.delete = this.delete.bind(this)
    }


    componentWillReceiveProps(nextProps) {
        let { imageURL, imageCaption, retrievingImageData, finalCountdown } = nextProps
        if (this.state.finalCountdown === 2 && imageURL) {
            this.setState({ imageURL, imageCaption }, () => {
                this.setState({ finalCountdown: 1 })
            })
        }
        if (finalCountdown === 0) {
            retrievingImageData(this.state.newURL || this.state.imageURL, this.state.imageCaption)
        }
        if (!imageURL) {
            this.setState({ imageURL: '', imageCaption: ''})
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
                this.setState({ newURL: url }, () => {
                    this.setState({ isUploading: false })
                })
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

    delete(){
        console.log('this firing?')
        this.setState({newURL: '', imageURL: ''})
    }

    render(props) {
        console.log(this.state)
        let { imageURL, imageCaption, isUploading } = this.state
        return (
            <section className="image-block">
                <div className="preview-image-box">
                    {isUploading ?
                        <figure className='image-caption-container center'>
                            <section className='image-upload'>
                                <div />
                                <div />
                                <div />
                            </section>
                        </figure>
                        :
                        <figure className="image-caption-container center">
                            <div className='image-add center'>
                                <i className="fas fa-plus"></i>
                            </div>
                            <img className="preview-image" src={this.state.newURL || this.state.imageURL || Placeholder} alt="Preview" onError={(e) => e.target.src = Placeholder} />
                            <span>UPLOAD OR DRAG</span>
                            <div className='image-caption-hover' />
                            <Dropzone
                                onDropAccepted={this.getSignedRequest.bind(this)}
                                onFileDialogCancel={this.onCancel.bind(this)}
                                accept="image/*"
                                multiple={false}
                            >
                                {({ getRootProps, getInputProps }) => (
                                    <div {...getRootProps()} style={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: '15px',
                                        color: 'white',
                                        cursor: 'pointer',
                                        position: 'absolute',
                                        opacity: '0',
                                        border: 'none',
                                    }}>
                                        <input {...getInputProps()} style={{ width: '1px', height: '1px', visibility: 'hidden' }} />
                                    </div>
                                )}
                            </Dropzone>
                        </figure>
                    }
                </div>
                <input name="imageCaption" onChange={(e) => this.onChangeHandler(e)} maxLength="15" placeholder={imageCaption ? imageCaption : "Image Caption (15 character limit)"}></input>
                <span className="delete-btn center" onClick={(e) => this.delete(e)}>Delete Image</span>
            </section>
        )
    }
}

export default UploadImage