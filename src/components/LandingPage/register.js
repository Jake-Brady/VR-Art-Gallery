import React, {Component} from 'react'
import axios from 'axios';

class Register extends Component {
    constructor(){ 
        super()
            this.state={
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                email: '',
                RegisterMsg: ''
            }
        this.handleChange = this.handleChange.bind(this)
    }

handleChange(e){
this.setState({
    [e.target.name]: e.target.value
})
}

registerUser(){
let {firstName, lastName, username, password, email} = this.state
axios.post(`/api/registerUser`, {firstName, lastName, username,  password, email}).then(res => {
if (res.data === 'email') {
    this.setState({RegisterMsg: 'An account with that email exists. An email has been sent to that account with the proper login information.'})
} else if (res.data === 'username'){
    this.setState({RegisterMsg: 'That username already exist. Please choose another one.'})
} else {
    this.setState({RegisterMsg: `Successfully registered ${username}! Login to access your lobby.`})
}
})
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

export default register