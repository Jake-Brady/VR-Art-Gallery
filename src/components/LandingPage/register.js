import React, { Component } from 'react'
import axios from 'axios';
import logo from '../../Styles/Media/Icon.png'
import '../Styles/register.css'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            email: '',
            registerMsg: ''
        }
    }

    componentDidMount() {
        const input = document.querySelector('#register-focus')
        input.focus()
        document.addEventListener('keypress', this.checkEnter)
    }

    componentWillUnmount() {
        document.removeEventListener('keypress', this.checkEnter)
    }

    checkEnter = e => {
        if (e.code === 'Enter') this.registerUser()
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    registerUser = () => {
        let { firstName, lastName, username, password, email, registerMsg } = this.state

        // Check to make sure no fields were left blank
        if (firstName === "" || lastName === "" || username === "" || password === "" || email === "") {
            alert('One of the fields were left blank. Please fill out all fields to register a new account.')
        } else {
            // Check to make sure email address has '@' symbol - if true, register; if false, alert user
            if (email.indexOf('@') > -1) {
                axios.post(`/api/registerUser`, { firstName, lastName, username, password, email }).then(res => {
                    if (res.data === 'email') {
                        //If email is already in use, inform user that email has been sent to their existing account's email address.
                        this.setState({ RegisterMsg: 'An account with that email exists. An email has been sent to that account with the proper login information.' }, () => alert('Email is taken.'))
                    } else if (res.data === 'username') {
                        //If username exists already, inform user to create a new one.
                        this.setState({ registerMsg: 'That username already exists. Please choose another one.' }, () => alert('Username already exists. Choose another.'))
                    } else if (res.data === 'success') {
                        //If all above is false, then registration is successful.
                        this.setState({ registerMsg: `Successfully registered ${username}! Login to access your lobby.` }, () => alert('Successful registration'))
                    }
                })
            } else {
                alert('Missing "@" symbol in email address.')
            }
        }
    }

    render() {
        return (
            <div style={{ overflowX: 'hidden' }}>
                <div className="login-container">
                    <div className='login-header'>
                        <img src={logo} alt='VR Logo' />
                        <span>VR<span className='lighttext'>ART GALLERY</span></span>
                    </div>
                    <div className='login-content'>
                        <h1>Register</h1>
                        <input id='register-focus' placeholder="First Name" name="firstName" onChange={this.handleChange}></input>
                        <input placeholder="Last Name" name="lastName" onChange={this.handleChange}></input>
                        <input placeholder="Email Address" name="email" onChange={this.handleChange}></input>
                        <input placeholder="Username" name="username" onChange={this.handleChange}></input>
                        <input placeholder="Password" type="password" name="password" onChange={this.handleChange}></input>
                        <div onClick={() => this.registerUser()} style={{ marginBottom: '20px' }}>Register</div>
                    </div>
                    <h1 style={{ marginBottom: '20px' }}>Already have an account? <span className='login-sign' onClick={() => this.props.history.push('/login')}>Log In.</span></h1>
                </div>
            </div>
        )
    }
}

export default Register