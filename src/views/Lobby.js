import React,{Component} from 'react'
import axios from 'axios'
import CreateGalleries from '../components//Lobby/createGalleries'
import GalleryBluePrint from '../components/Lobby/blueprint'
import Galleries from '../components/Lobby/galleries'
import Favorites from '../components/Lobby/favorites'
import '../Styles/Views/Lobby.css'
import Icon from '../Styles/Media/Icon.png'

class Lobby extends Component{
    constructor(){
        super()
            this.state ={
                user: '',
                usersGalleries: [],
                favoritedGalleries: [],
                theMagicWord: ''
            }
        this.changeWindow = this.changeWindow.bind(this)
    }

componentDidMount(){
//Validate User on Page as being logged in with session. If not, send back to landingPage; otherwise retrieve user's existing galleries and favorited galleries.
let user = this.props.match.params.username
axios.get(`/api/checkUser/`).then(res => {
    if (res.data !== user){
        this.props.history.push('/')
    } else {
        //Retrieve user's galleries and then favorited galleries while setting the first middle window to 'Create'
        axios.get('/api/retrieveGalleries/').then(res => {
            this.setState({usersGalleries: res.data, theMagicWord:'create'}, () => {
                axios.get('/api/getFavorites/').then(res => {
                    this.setState({favoritedGalleries: res.data})
                })
            })
        })
    }
})
}

changeWindow(magicWord){
let {theMagicWord} = this.state
if (magicWord === theMagicWord) return;
switch(magicWord){
    case "create":
    this.setState({theMagicWord: 'create'})
    break;
    case "galleries":
    this.setState({theMagicWord: 'galleries'})
    break;
    case "favorites":
    this.setState({theMagicWord: 'favorites'})
    break;
    case 'account':
    this.setState({theMagicWord: 'account'})
    break;
    case 'help':
    this.setState({theMagicWord: 'help'})
    break;
}
}


logout(){
    // destroys sessions and redirects user to landing page.
    axios.post('/api/logout')
    .then(this.props.history.push('/'))
}

render(){
    console.log(this.state.theMagicWord)
    const {favoritedGalleries, usersGalleries, theMagicWord} = this.state
    //Map over list of favorites and existing galleries, pass to separate components for styling them as distinct section, 
    const listOfFavorites = favoritedGalleries.map((e, i) => {
        return(
            <div key={i} className="favorites-container">
                <img src={e.thumbnail} alt="thumbnail" />
                <h3>{e.gallery_name}</h3>
                <h3>{e.views}</h3>
                <h3>{e.times_favorited}</h3>
                <h3>Author of Gallery?</h3>
                <span onClick={this.visitGallery}>Visit Gallery</span>
            </div>
        )
    })

    const galleryContainers = usersGalleries.map((e, i) => {
        let is_private_string = e.is_private.toString()
        return(
           <div key={i} className="gallery-container">
                <img src={e.thumbnail} alt="thumbnail" />
                <h3>Name of Gallery: {e.gallery_name}</h3>
                <h3># of Views: {e.views}</h3>
                <h3># of times Favorited:{e.times_favorited}</h3>
                <span onClick={this.visitGallery}>Visit Gallery</span>
                <span onClick={this.editGallery}>Edit Gallery</span>
           </div>
        )
    })
    return(
        <main id="Lobby">
            <section className="side-menu">
                <div id="menu-lobby">
        <img src={Icon} className="icon" onClick={(e) => this.props.history.push('/')} />
                    <span className="menu-btn" onClick={(e) => this.changeWindow('create')}>Create</span>
                    <span className="menu-btn" onClick={(e) => this.changeWindow('galleries')}>Galleries</span>
                    <span className="menu-btn" onClick={(e) => this.changeWindow('favorites')}>Favorites</span>
                    <span className="menu-btn" onClick={(e) => this.changeWindow('account')}>Account</span>
                    <span className="menu-btn" onClick={(e) => this.changeWindow('help')}>Help</span>
                    <span className="menu-btn" onClick={() => this.logout()}>Logout</span>
                </div>
            </section>
           
            <section className="middle-window">
                <div id="conditionally-rendered-lobby">
                {/* Conditionally rendering based on magicWord */}
                {
                    theMagicWord === 'create' ?
                    <div className="middle-window-container"> 
                        <h1>Create Gallery Tab</h1>
                        <CreateGalleries />
                    </div>
                    : theMagicWord === 'galleries' ? 
                    <div className="middle-window-container"> 
                        <h1>Existing Galleries Tab</h1>
                        <Galleries
                        />
                    </div>
                    : theMagicWord === 'favorites' ?
                    <div className="middle-window-container">
                        <h1>Favorite Galleries Tab</h1>
                        <Favorites 
                        listOfFavorites={listOfFavorites}
                         />
                    </div>
                    : theMagicWord === 'account' ?
                    <div className="middle-window-container">
                        <h1>Account Settings Tab</h1>
                    </div>
                    : theMagicWord === 'help' &&
                    <div className="middle-window-container">
                        <h1>Help Tab</h1>
                    </div>
                }   
                </div>
            </section>
           
            <section className="right-window">
                <div id="blueprint-lobby">
                    <GalleryBluePrint />
                </div>
            </section>
        </main>
    )
}
}

export default Lobby