import React,{Component} from 'react'
import axios from 'axios'
import GalleryBluePrint from '../components/Lobby/blueprint'
import Galleries from '../components/Lobby/galleries'
import '../Styles/Views/Lobby.css'

class Lobby extends Component{
    constructor(){
        super()
            this.state ={
                user: '',
                usersGalleries: [],
                favoritedGalleries: []
            }
    }

componentDidMount(){
//Validate User on Page as being logged in with session. If not, send back to landingPage; otherwise retrieve user's existing galleries and favorited galleries.
let user = this.props.match.params.username
axios.get(`/api/checkUser/`).then(res => {
    if (res.data !== user){
        this.props.history.push('/')
    } else {
        //Retrieve user's galleries and favorited galleries
        axios.get('/api/retrieveGalleries/').then(res => {
            console.log(res.data)
            this.setState({usersGalleries: res.data}, () => {
                axios.get('/api/getFavorites/').then(res => {
                    console.log(res.data)
                    this.setState({favoritedGaleries: res.data})
                })
            })
        })
    }
})

//axios get for online users

//axios get for favorited gallories by user

//axios get for user's existing galleries

}

render(){
    console.log(this.state)
    let {user} = this.props.match.params.username
    console.log(user)
    return(
        <main id="Lobby">
            <h1>Lobby</h1>
            

            
            <Galleries />
            <GalleryBluePrint />

            <section id="online-users-container">
            <p>Online Users Container</p>
            </section>

        
        </main>
    )
}
}

export default Lobby