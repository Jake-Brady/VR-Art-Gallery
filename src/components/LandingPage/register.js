import React, {Component} from 'react'
import axios from 'axios';
import '../Styles/register.css'

class Register extends Component {
    constructor(){ 
        super()
            this.state={
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                email: '',
                registerMsg: ''
            }
        this.handleChange = this.handleChange.bind(this)
        this.registerUser = this.registerUser.bind(this)
    }

handleChange(e){
this.setState({
    [e.target.name]: e.target.value
})
}

registerUser(){
let {firstName, lastName, username, password, email, registerMsg} = this.state

// Check to make sure no fields were left blank
if(firstName === "" || lastName === "" || username === "" || password === "" || email === ""){
    alert('One of the fields were left blank. Please fill out all fields to register a new account.')
} else {
    // Check to make sure email address has '@' symbol - if true, register; if false, alert user
    if(email.indexOf('@') > -1){
        axios.post(`/api/registerUser`, {firstName, lastName, username,  password, email}).then(res => {
        if (res.data === 'email') {
            //If email is already in use, inform user that email has been sent to their existing account's email address.
            this.setState({RegisterMsg: 'An account with that email exists. An email has been sent to that account with the proper login information.'}, () => alert('Email is taken.'))
        } else if (res.data === 'username'){
            //If username exists already, inform user to create a new one.
            this.setState({registerMsg: 'That username already exists. Please choose another one.'}, () => alert('Username already exists. Choose another.'))
        } else if (res.data === 'success') {
            //If all above is false, then registration is successful.
            this.setState({registerMsg: `Successfully registered ${username}! Login to access your lobby.`}, () => alert('Successful registration'))
        }
        })
    } else {
        alert('Missing "@" symbol in email address.')
    }
}
}

render(){
    return(
        <>
        <p>register component</p>
        <section id="register-modal">
            <input placeholder="first name" name="firstName" onChange={this.handleChange}></input>
            <input placeholder="last name" name="lastName" onChange={this.handleChange}></input>
            <input placeholder="username" name="username" onChange={this.handleChange}></input>
            <input placeholder="password" type="password" name="password" onChange={this.handleChange}></input>
            <input placeholder="email" name="email" onChange={this.handleChange}></input>
            <button onClick={this.registerUser}>Submit</button>
        </section>
        </>
    )
}
}

export default Register