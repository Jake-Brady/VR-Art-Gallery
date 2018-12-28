import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LandingPage from '../views/LandingPage'
import Lobby from '../views/Lobby'
import ArtGallery from '../views/ArtGallery'

export default function Nav() {
    return(
        <>
            <Switch>
                <Route exact path='/' component={LandingPage}/>
                <Route path='/lobby' component={Lobby} />
                <Route path='/gallery' component={ArtGallery} />
            </Switch>
        </>
    )
}