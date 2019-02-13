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

    async checkChanges() {
        this.clearErrors()
        const { imageAddress, newUsername, newEmail, newPassword, newPasswordAgain, username, passwordConfirm } = this.state
        //check username
        if (newUsername) {
            if (newUsername.split(' ').length > 1) {
                this.noSpaces()
                return;
            }
            if (!passwordConfirm) {
                this.wrongPass()
                return;
            }
            const checkPassword = await axios.get(`/api/confirmPassword/${passwordConfirm}/${username}`)
            if (checkPassword.data === 'incorrect') {
                this.wrongPass()
                return;
            }
            const updatedUsername = await axios.put(`/api/changeUsername/`, { newUsername, username })
            if (updatedUsername.data === 'username') {
                this.userTaken()
                return;
            }
        }
        //new email
        if (newEmail) {
            console.log('new email')
            if (!passwordConfirm) {
                this.wrongPass()
                return;
            }
            if (!newEmail.includes('@')) {
                this.invalidEmail()
                return;
            }
            const checkPassword = await axios.get(`/api/confirmPassword/${passwordConfirm}/${username}`)
            if (checkPassword.data[0] === 'incorrect') {
                this.wrongPass()
                return;
            } else {
                const updatedEmail = await axios.put(`/api/changeEmail/`, { newEmail, username })
                if (updatedEmail.data === 'email') {
                    this.emailExists()
                    return;
                }
            }
        }

        if (newPassword) {
            if (!passwordConfirm) {
                this.wrongPass()
                return;
            }
            const checkPassword = await axios.get(`/api/confirmPassword/${passwordConfirm}/${username}`)
            if (checkPassword.data === 'incorrect') {
                this.wrongPass()
                return;
            } else {
                const updatedPassword = await axios.put(`/api/changePassword/`, { newPassword, username })
            }
        }
        if (imageAddress) {
            const updatedAvatar = await axios.put(`/api/changeAvatar/`, { imageAddress, username })
            this.setState({ avatarURL: updatedAvatar.data[0].avatar_img, passwordConfirm: '', imageAddress: '' })
        }
        this.setState({ username: newUsername || this.state.username, email: newEmail || this.state.email})
        this.cancelEdit()
    }

    clearErrors = () => {
        const passwordInput = document.querySelector('#account-password'),
            errorText = document.querySelector('.account-edit-inputs > h4'),
            nameInput = document.querySelector('#account-name'),
            nameText = document.querySelector('.account-edit-inputs > h3'),
            emailInput = document.querySelector('#account-email'),
            emailText = document.querySelector('.account-edit-inputs > h5')
        passwordInput.style.borderColor = 'rgba(0, 0, 0, 0.1)'
        nameInput.style.borderColor = 'rgba(0, 0, 0, 0.1)'
        emailInput.style.borderColor = 'rgba(0, 0, 0, 0.1)'
        nameText.style.visibility = 'hidden'
        errorText.style.visibility = 'hidden'
        emailText.style.visibility = 'hidden'
    }

    wrongPass = () => {
        const passwordInput = document.querySelector('#account-password'),
            errorText = document.querySelector('.account-edit-inputs > h4')
        passwordInput.style.borderColor = 'red'
        errorText.style.visibility = 'visible'
    }

    userTaken = () => {
        const nameInput = document.querySelector('#account-name'),
            nameText = document.querySelector('.account-edit-inputs > h3')
        nameText.innerText = 'Name Taken'
        nameInput.style.borderColor = 'red'
        nameText.style.visibility = 'visible'
    }

    noSpaces = () => {
        const nameInput = document.querySelector('#account-name'),
            nameText = document.querySelector('.account-edit-inputs > h3')
        nameText.innerText = 'No Spaces'
        nameInput.style.borderColor = 'red'
        nameText.style.visibility = 'visible'
    }

    emailExists = () => {
        const emailInput = document.querySelector('#account-email'),
            emailText = document.querySelector('.account-edit-inputs > h5')
        emailText.innerText = 'Email Exists'
        emailInput.style.borderColor = 'red'
        emailText.style.visibility = 'visible'
    }

    invalidEmail = () => {
        const emailInput = document.querySelector('#account-email'),
            emailText = document.querySelector('.account-edit-inputs > h5')
        emailText.innerText = 'Invalid Email'
        emailInput.style.borderColor = 'red'
        emailText.style.visibility = 'visible'
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
        this.setState({ edit: !this.state.edit, pass: false, newUsername: '', newEmail: '', newPassword: '', imageAddress: '', passwordConfirm: '' })
    }

    addPass = () => {
        this.setState({ pass: true })
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
                            <h3>Name is Taken</h3>
                            <h1>EMAIL</h1>
                            <input id='account-email' name="newEmail" onChange={(e) => this.handleChange(e)} />
                            <h5>Email is taken</h5>
                            <h1>CURRENT PASSWORD</h1>
                            <input id='account-password' name="passwordConfirm" onChange={e => this.handleChange(e)} />
                            <h4>Incorrect Password</h4>
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