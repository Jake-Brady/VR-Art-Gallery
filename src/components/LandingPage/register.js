import React, { Component } from 'react'
import axios from 'axios';

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

    highLightFields = () => {
        const inputs = [...document.querySelectorAll('#register-inputs > input')],
            stars = [...document.querySelectorAll('#register-inputs > span')]
        const filtered = inputs.filter(input => !input.value)
        for (const input of filtered) {
            input.setAttribute('style', 'border-color: red; padding-right: 40px;')
            const index = inputs.findIndex(inputs => inputs.name === input.name)
            stars[index].style.visibility = 'visible'
        }
    }

    noSpaces = () => {
        const alert = document.querySelector('.register-space'),
            input = document.querySelectorAll('#register-inputs > input')[3]
        alert.style.visibility = 'visible'
        input.setAttribute('style', 'border-color: red; padding-right: 90px;')
    }

    nameExists = () => {
        const alert = document.querySelector('.register-name'),
            input = document.querySelectorAll('#register-inputs > input')[3]
        alert.style.visibility = 'visible'
        input.setAttribute('style', 'border-color: red; padding-right: 110px;')
    }

    invalidEmail = () => {
        const alert = document.querySelector('.register-at'),
            input = document.querySelectorAll('#register-inputs > input')[2]
        alert.style.visibility = 'visible'
        input.setAttribute('style', 'border-color: red; padding-right: 90px;')
    }

    emailExists = () => {
        const alert = document.querySelector('.register-email'),
            input = document.querySelectorAll('#register-inputs > input')[2]
        alert.style.visibility = 'visible'
        input.setAttribute('style', 'border-color: red; padding-right: 90px;')
    }

    clearAll = () => {
        const inputs = [...document.querySelectorAll('#register-inputs > input')],
            stars = [...document.querySelectorAll('#register-inputs > span')],
            spaceAlert = document.querySelector('.register-space'),
            nameAlert = document.querySelector('.register-name'),
            atAlert = document.querySelector('.register-at'),
            emailAlert = document.querySelector('.register-email')
        //clear required fields
        inputs.map(input => input.setAttribute('style', 'border-color: rgba(0, 0, 0, 0.185); padding-right: 15px;'))
        stars.map(star => star.style.visibility = 'hidden')
        //clear username space error
        inputs[3].style.paddingRight = '15px'
        spaceAlert.style.visibility = 'hidden'
        //clear invalid name error
        nameAlert.style.visibility = 'hidden'
        //clear @ error
        inputs[2].style.paddingRight = '15px'
        atAlert.style.visibility = 'hidden'
        //clear invalid email alert
        emailAlert.style.visibility = 'hidden'
    }

    registerUser = () => {
        const { firstName, lastName, username, password, email } = this.state
        // Check to make sure no fields were left blank
        if (firstName === "" || lastName === "" || username === "" || password === "" || email === "") {
            this.clearAll()
            this.highLightFields()
        } else {
            this.clearAll()
            if (username.split(' ').length === 1) {
                if (email.indexOf('@') > -1) {
                    axios.post(`/api/registerUser/`, { firstName, lastName, username, password, email }).then(res => {
                        if (res.data === 'email') {
                            //If email is already in use, inform user that email has been sent to their existing account's email address.
                            this.clearAll()
                            this.emailExists()
                        } else if (res.data === 'username') {
                            //If username exists already, inform user to create a new one.
                            this.clearAll()
                            this.nameExists()
                        } else if (res.data === 'success') {
                            //If all above is false, then registration is successful.
                            this.setState({ registerMsg: `Successfully registered ${username}! Login to access your lobby.` }, () => {
                                axios.post(`/api/login`, { username, password })
                                    .then(() => this.props.history.push(`/lobby/${username}`))
                            })
                        }
                    })
                } else {
                    this.clearAll()
                    this.invalidEmail()
                }

            }
            else {
                this.clearAll()
                this.noSpaces()
            }
        }
    }

    render() {
        return (
            <div>
                <div className="login-container">
                    <div className='login-header'>
                        <span>VR<span className='lighttext'>ART GALLERY</span></span>
                    </div>
                    <div className='login-content' id='register-inputs'>
                        <h1>Register</h1>
                        <input id='register-focus' placeholder="First Name" name="firstName" onChange={this.handleChange}></input>
                        <span className='_1'>*</span>
                        <input placeholder="Last Name" name="lastName" onChange={this.handleChange}></input>
                        <span className='_2'>*</span>
                        <input placeholder="Email Address" name="email" onChange={this.handleChange}></input>
                        <span className='_3'>*</span>
                        <h6 className='register-at'>Invalid Email</h6>
                        <h6 className='register-email'>Email Taken</h6>
                        <input placeholder="Username" name="username" onChange={this.handleChange}></input>
                        <span className='_4'>*</span>
                        <h6 className='register-space'>No Spaces</h6>
                        <h6 className='register-name'>Username Taken</h6>
                        <input placeholder="Password" type="password" name="password" onChange={this.handleChange}></input>
                        <span className='_5'>*</span>
                        <div onClick={() => this.registerUser()} style={{ marginBottom: '20px' }}>Register</div>
                    </div>
                    <h1 style={{ marginBottom: '20px' }}>Already have an account? <span className='login-sign' onClick={() => this.props.history.push('/login')}>Log In.</span></h1>
                </div>
            </div>
        )
    }
}

export default Register