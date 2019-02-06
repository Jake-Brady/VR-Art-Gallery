import React, { Component } from 'react'
import '../../styles/Components/account.css'
import axios from 'axios'
import { v4 as randomStringGenerator } from 'uuid';
import Placeholder from '../../styles/Media/Placeholder.png'

class Account extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            firstName: '',
            username: '',
            avatarURL: '',
            imageAddress: '',
            isUploading: false,
            theMagicWord: '',
            newPassword: '',
            newPasswordAgain: '',
            passwordConfirm: '',
            newUsername: '',
            newEmail: '',
            edit: false
        }
    }

    componentDidMount() {
        const { email, avatar_img, first_name, username } = this.props.accountInfo
        this.setState({ email, avatarURL: avatar_img, firstName: first_name, username, theMagicWord: 'username' })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changeSetting(magicWord) {
        switch (magicWord) {
            case "username":
                this.setState({ theMagicWord: 'username' })
                break;
            case "email":
                this.setState({ theMagicWord: 'email' })
                break;
            case "avatar":
                this.setState({ theMagicWord: 'avatar' })
                break;
            case "password":
                this.setState({ theMagicWord: 'password' })
                break;
        }
    }

    async changeUsername() {
        const { newUsername, passwordConfirm, username } = this.state
        console.log(passwordConfirm)
        const checkPassword = await axios.get(`/api/confirmPassword/${passwordConfirm}/${username}`)
        console.log(checkPassword.data)
        if (checkPassword.data === 'incorrect') {
            alert('Sorry, but that password is incorrect.  Your username will remain unchanged.')
        } else {
            const updatedUsername = await axios.put(`/api/changeUsername/`, { newUsername, username })
            if (updatedUsername.data === 'username') {
                alert('Username is already taken.')
            } else {
                this.setState({ username: updatedUsername.data[0].username, passwordConfirm: '' })
            }
        }
    }

    async changeEmail() {
        const { passwordConfirm, newEmail, username } = this.state
        const checkPassword = await axios.get(`/api/confirmPassword/${passwordConfirm}/${username}`)
        if (checkPassword.data[0] === 'incorrect') {
            alert('Sorry, but that password is incorrect.  Your email will remain unchanged.')
        } else {
            const updatedEmail = await axios.put(`/api/changeEmail/`, { newEmail, username })
            if (updatedEmail.data === 'email') {
                alert('That email address is already in use.')
            } else {
                this.setState({ email: updatedEmail.data[0].email, passwordConfirm: '' })
            }
        }
    }

    async changeAvatar() {
        const { passwordConfirm, imageAddress, username } = this.state
        const checkPassword = await axios.get(`/api/confirmPassword/${passwordConfirm}/${username}`)
        if (checkPassword.data[0] === 'incorrect') {
            alert('Sorry, but that password is incorrect.  Your email will remain unchanged.')
        } else {
            const updatedAvatar = await axios.put(`/api/changeAvatar/`, { imageAddress, username })
            this.setState({ avatarURL: updatedAvatar.data[0].avatar_img, passwordConfirm: '', imageAddress: '' })
        }
    }

    async changePassword() {
        const { newPassword, newPasswordAgain, passwordConfirm, username } = this.state
        if (newPassword === newPasswordAgain) {
            const checkPassword = await axios.get(`/api/confirmPassword/${passwordConfirm}/${username}`)
            if (checkPassword.data === 'incorrect') {
                alert('Incorrect current password.')
            } else {
                const updatedPassword = await axios.put(`/api/changePassword/`, { newPassword, username })
                this.setState({ passwordConfirm: '', newPassword: '', newPasswordAgain: '' }, () => {
                    alert('Success! Your password has successfully changed.')
                })
            }
        } else {
            alert('Passwords do not match')
        }
    }

    getSignedRequestThumbnails = ([file]) => {
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
                this.setState({ isUploading: false, imageAddress: url })
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

    handleEdit = () => {
        this.setState({ edit: !this.state.edit })
    }

    render() {
        return (
            <section className="account-page">
                <h1>My Account</h1>
                {!this.state.edit ?
                    <div className='account-overview'>
                        <img src={this.state.avatarURL || Placeholder} alt='User Image' />
                        <div className='account-text'>
                            <h1>USERNAME</h1>
                            <h2>{this.state.username}</h2>
                            <h1>EMAIL</h1>
                            <h2>{this.state.email}</h2>
                        </div>
                        <div className='account-edit center' onClick={() => this.handleEdit()}>EDIT</div>
                    </div>
                    :
                    <div className='account-overview-edit'>
                        <div className='account-upload center'>
                            <i className="fas fa-plus"></i>
                        </div>
                        <img src={this.state.avatarURL || Placeholder} alt='User Image' style={{cursor: 'pointer'}} />
                        <div className='account-text'>
                            <h1>USERNAME</h1>
                            <h2>{this.state.username}</h2>
                            <h1>EMAIL</h1>
                            <h2>{this.state.email}</h2>
                        </div>
                    </div>
                }
            </section>
        )
    }
}

export default Account

{/* <div className="account-information">
                <h3>Hello {this.state.firstName}.</h3>
                <div className="account-avatar-img">
                    <img className="avatar-thumbnail" src={`${this.state.avatarURL}` || 'http://via.placeholder.com/450x450'} />
                </div>
                <div id="account-change-buttons-div">
                    <h1>Account Setting Changes</h1>
                    <div className="button-div">
                        <span className="button" onClick={() => this.changeSetting('username')}>Username</span>
                        <span className="button" onClick={() => this.changeSetting('email')}>Email</span>
                        <span className="button" onClick={() => this.changeSetting('avatar')}>Avatar Thumbnail</span>
                        <span className="button" onClick={() => this.changeSetting('password')}>Password</span>
                    </div>
                </div>
            </div>
            <div className="changing-section">
                 {
                    theMagicWord === 'username' ?
                    <div className="change-username-div">
                        <div className="username-container">
                            <h2>{this.state.username}</h2>
                        </div>
                        <div className="change-username-inputs">
                            <h2>Password</h2>
                            <input value={`${this.state.passwordConfirm}`} type="password" className="inputbar" name="passwordConfirm" onChange={(e) => this.handleChange(e)}></input>
                            <h2>Username</h2>
                            <input value={`${this.state.newUsername}`} className="inputbar" name="newUsername" onChange={(e) => this.handleChange(e)}></input>
                            <span onClick={() => this.changeUsername()} className="button">Submit</span>
                        </div>
                    </div>
                    : theMagicWord === 'email' ?

                    <div className="change-email-div">
                        <h2>{this.state.email}</h2>
                        <h2>Password</h2>
                        <input value={`${this.state.passwordConfirm}`} type="password" className="inputbar" name="passwordConfirm" onChange={(e) => this.handleChange(e)}></input>
                        <h2>Email</h2>
                        <input value={`${this.state.newEmail}`} className="inputbar" name="newEmail" onChange={(e) => this.handleChange(e)}></input>
                        <span onClick={() => this.changeEmail()} className="button">Submit</span>
                    </div>

                   : theMagicWord === 'password' ?
                    <div className="change-password-div">
                        <h2>Current Password</h2>
                        <input value={`${this.state.passwordConfirm}`} type="password" className="inputbar" name="passwordConfirm" onChange={e => this.handleChange(e)}></input>
                        <h2>New Password</h2>
                        <input value={`${this.state.newPassword}`} type="password" className="inputbar" name="newPassword" onChange={e => this.handleChange(e)}></input>
                        <h2>New Password(again)</h2>
                        <input value={`${this.state.newPasswordAgain}`} type="password" className="inputbar" name="newPasswordAgain" onChange={e => this.handleChange(e)}></input>
                        <span onClick={() => this.changePassword()} className="button">Submit</span>
                    </div>
                    
                    : theMagicWord === 'avatar' &&
                <div className="change-avatar-thumbnail">
                    <div className="new-avatar-container">
                        <img className="avatar-thumbnail" src={`${this.state.imageAddress}` || 'http://via.placeholder.com/450x450'} alt="new avatar" />
                    </div>
                    <input value={`${this.state.imageAddress}`} className="inputbar" name="imageAddress" onChange={(e) => this.handleChange(e)} />
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
                     <span onClick={() => this.changeAvatar()} className="button">Submit</span>
                 </div>
                    }
                </div> */}