import React, { Component } from 'react'
import axios from 'axios'
import '../../styles/Components/login.css'
import logo from '../../styles/Media/Icon.png'
import { withRouter } from 'react-router-dom'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            loginMsg: ''
        }
    }

    componentDidMount() {
        const input = document.querySelector('#login-focus')
        input.focus()
        document.addEventListener('keypress', this.checkEnter)
    }

    componentWillUnmount() {
        document.removeEventListener('keypress', this.checkEnter)
    }

    checkEnter = e => {
        if (e.code === 'Enter') this.login()
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = () => {
        let { username, password } = this.state
        axios.post(`/api/login`, { username, password }).then(res => {
            //If username does not exist, inform user
            if (res.data === 'Wrong Username') {
                this.setState({ loginMsg: 'This username does not exist.' }, () => {
                    alert('This username does not exist.')
                })
                //If password does not match username, inform user
            } else if (res.data === 'Wrong Password') {
                this.setState({ loginMsg: 'Incorrect password.' }, () => {
                    alert('Password is incorrect.')
                })
                //If all above is false, then username and password must match and user will be redirect to lobby view.
            } else {
                let { username } = res.data
                this.props.history.push(`/lobby/${username}`)
            }
        })
    }

    render() {
        return (
            <div className="login-container">
                <div className='login-header'>
                    <img src={logo} alt='VR Logo' />
                    <span>VR<span className='lighttext'>ART GALLERY</span></span>
                </div>
                <div className='login-content'>
                    <h1>Log In</h1>
                    <input id='login-focus' name="username" placeholder="Username" onChange={this.handleChange}></input>
                    <input name="password" placeholder="Password" type="password" onChange={this.handleChange}></input>
                    <div onClick={() => this.login()}>Log In</div>
                    <h2>Forgot Password?</h2>
                </div>
                <h1>Don't have an account? <span className='login-sign' onClick={() => this.props.history.push('/register')}>Sign Up.</span></h1>
            </div>
        )
    }
}

export default withRouter(Login)