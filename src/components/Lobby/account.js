import React, { Component } from 'react'
import '../../styles/Components/account.css'
import axios from 'axios'
import { v4 as randomStringGenerator } from 'uuid';
import Placeholder from '../../styles/Media/Placeholder.png'
import Dropzone from 'react-dropzone'

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
            newPassword: '',
            newPasswordAgain: '',
            passwordConfirm: '',
            newUsername: '',
            newEmail: '',
            edit: false,
            pass: false
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

    checkChanges = () => {
        const { imageAddress, newUsername, newEmail, newPassword } = this.state
        if (imageAddress) this.changeAvatar()
        if (newUsername) this.changeUsername()
        if (newEmail) this.changeEmail()
        if (newPassword) this.changePassword()
    }

    async changeUsername() {
        const { newUsername, passwordConfirm, username } = this.state
        const checkPassword = await axios.get(`/api/confirmPassword/${passwordConfirm}/${username}`)
        if (checkPassword.data === 'incorrect') {
            this.wrongPass()
        } else {
            const updatedUsername = await axios.put(`/api/changeUsername/`, { newUsername, username })
            if (updatedUsername.data === 'username') {
                this.userTaken()
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
        const { imageAddress, username } = this.state
        const updatedAvatar = await axios.put(`/api/changeAvatar/`, { imageAddress, username })
        this.setState({ avatarURL: updatedAvatar.data[0].avatar_img, passwordConfirm: '', imageAddress: '' })
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
        this.setState({ edit: !this.state.edit }, () => {
            const inputs = document.querySelectorAll('.account-edit-inputs > input')
            inputs[0].value = this.state.username
            inputs[1].value = this.state.email
        })
    }

    cancelEdit = () => {
        this.setState({ edit: !this.state.edit, pass: false })
    }

    addPass = () => {
        this.setState({ pass: true })
    }

    wrongPass = () => {
        const passwordInput = document.querySelector('#account-password')
        passwordInput.style.borderColor = 'red'
    }

    render() {
        return (
            <section className="account-page">
                <h1>My Account</h1>
                {!this.state.edit ?
                    <div className='account-overview'>
                        <img src={this.state.avatarURL || Placeholder} alt='User Image' onError={(e) => e.target.src = Placeholder} />
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
                        <Dropzone
                            onDropAccepted={this.getSignedRequestThumbnails.bind(this)}
                            onFileDialogCancel={this.onCancel.bind(this)}
                            accept="image/*"
                            multiple={false}
                        >
                            {({ getRootProps, getInputProps }) => (
                                <div {...getRootProps()}
                                    style={{
                                        width: '150px',
                                        height: '150px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: '15px',
                                        fontSize: '15px',
                                        color: 'white',
                                        cursor: 'pointer',
                                        borderRadius: '50%',
                                        position: 'absolute',
                                        top: '10px',
                                        border: 'none',
                                        zIndex: '1'
                                    }}>
                                    <input {...getInputProps()} style={{ width: '1px', height: '1px', visibility: 'hidden' }} />
                                </div>
                            )}
                        </Dropzone>
                        <img src={this.state.imageAddress || this.state.avatarURL || Placeholder} alt='User Image' style={{ cursor: 'pointer' }} onError={(e) => e.target.src = Placeholder} />
                        <div className='account-edit-inputs'>
                            <h1>USERNAME</h1>
                            <input id='account-name' name="newUsername" onChange={(e) => this.handleChange(e)} />
                            <h1>EMAIL</h1>
                            <input id='account-email' name="newEmail" onChange={(e) => this.handleChange(e)} />
                            <h1>CURRENT PASSWORD</h1>
                            <input id='account-password' name="passwordConfirm" onChange={e => this.handleChange(e)} />
                            {this.state.pass ?
                                <>
                                    <h1>NEW PASSWORD</h1>
                                    <input name="newPassword" onChange={e => this.handleChange(e)} />
                                </>
                                :
                                <h2 onClick={() => this.addPass()}>Change Password?</h2>
                            }
                        </div>
                        <div className='edit-bottom'>
                            <h2 onClick={() => this.cancelEdit()}>Cancel</h2>
                            <h1 className='center' onClick={() => this.checkChanges()}>Save</h1>
                        </div>
                    </div>
                }
            </section>
        )
    }
}

export default Account

{/* <div className="account-information">
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
                     <span onClick={() => this.changeAvatar()} className="button">Submit</span>
                 </div>
                    }
                </div> */}