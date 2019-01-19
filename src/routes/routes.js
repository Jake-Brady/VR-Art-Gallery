import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LandingPage from '../views/LandingPage'
import Lobby from '../views/Lobby'
import ArtGallery from '../views/ArtGallery'
import Login from '../components/LandingPage/login'
import Register from '../components/LandingPage/register'
import EditGallery from '../components/Lobby/editGalleries'

export default function Nav() {
    return(
            <Switch>
                <Route exact path='/' component={LandingPage}/>
                <Route path='/lobby/:username' component={Lobby} />
                <Route path='/gallery/:author/:galleryName' component={EditGallery} />
                <Route path='/:username/:galleryName' component={ArtGallery} />
                <Route path='/login' component={Login} /> 
                <Route path='/register' component={Register} />
            </Switch>
    )
}