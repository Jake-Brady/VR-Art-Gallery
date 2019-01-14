import React, {Component} from 'react'
import axios from 'axios'
import '../Styles/login.css'
import {withRouter} from 'react-router-dom'

class Login extends Component{
    constructor(){
        super()
            this.state={
                username: '',
                password: '',
                loginMsg: ''
            }
            this.handleChange = this.handleChange.bind(this)
            this.login = this.login.bind(this)
    }

handleChange(e){
this.setState({
    [e.target.name]: e.target.value
})
}

login(){
let {username, password} = this.state
axios.post(`/api/login`, {username, password}).then(res => {
    //If username does not exist, inform user
    if (res.data === 'Wrong Username'){
        this.setState({loginMsg: 'This username does not exist.'}, () => {
            alert('This username does not exist.')
        })
    //If password does not match username, inform user
    } else if (res.data === 'Wrong Password'){
        this.setState({loginMsg: 'Incorrect password.'}, () => {
            alert('Password is incorrect.')
        })
    //If all above is false, then username and password must match and user will be redirect to lobby view.
    } else {
        let {username} = res.data
        console.log(username)
        this.props.history.push(`/lobby/${username}`)
    }  
})
} 

render(){
    return(
        <section id="login-section">
            <p>login component</p>
            <input name="username" placeholder="username" onChange={this.handleChange}></input>
            <input name="password" placeholder="password" type="password" onChange={this.handleChange}></input>
            <button onClick={this.login}>Login</button>
        </section>
    )
}
}

export default withRouter(Login)