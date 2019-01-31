import React, { Component } from 'react'
import '../../styles/Components/account.css'
import axios from 'axios'
import { v4 as randomStringGenerator } from 'uuid';
import Dropzone from 'react-dropzone'

class Account extends Component {
    constructor(props){
        super(props)
            this.state={
                email: '',
                firstName: '',
                username: '',
                avatarURL: '',
                isUploading: false
            }
    }

async componentDidMount(){
    let accountInfo = await axios.get('/api/getAccountInfo')
    let {username, avatar_img, email, first_name} = accountInfo.data[0]
    this.setState({email, avatarURL: avatar_img, firstName: first_name, username})
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

render() {
    console.log(this.state)
    return (
        <section className="account-page">
            <h1>Account Settings</h1>
            <div className="account-information">
                <h3>Hello, {this.state.firstName}</h3>
                <div className="account-avatar-img">
                    <h4>Current:</h4>
                    <img className="avatar-thumbnail" src={this.state.avatarURL || 'http://via.placeholder.com/450x450'}></img>
                </div>
                <div className="account-details">
                    
                </div>
            </div>
            <div className="change-avatar-thumbnail">
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
        </section>
    )
}
}

export default Account