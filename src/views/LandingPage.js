import React,{Component} from 'react'
import Login from '../components/LandingPage/login'
import Register from '../components/LandingPage/register'

class LandingPage extends Component{
    constructor(){
        super()
        this.state={
            name: '',
            username: '',
            password: '',
            email: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}

render(){
    console.log(this.state)
    return(
        <>
        <h1>Landing Page</h1>
        <Login/>
        <Register 
        handleChange={this.handleChange}/>
        
        </>
    )
}
}

export default LandingPage