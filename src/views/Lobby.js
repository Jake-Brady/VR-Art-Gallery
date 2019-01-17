import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import CreateGalleries from '../components//Lobby/createGalleries'
import GalleryBluePrint from '../components/Lobby/blueprint'
import Galleries from '../components/Lobby/galleries'
import Favorites from '../components/Lobby/favorites'
import Account from '../components/Lobby/account'
import Help from '../components/Lobby/help'
import '../Styles/Views/Lobby.css'
import Icon from '../Styles/Media/Icon.png'

class Lobby extends Component {
    constructor() {
        super()
        this.state = {
            user: '',
            usersGalleries: [{ author: 'jakerowla', name: 'Waves', thumbnail: 'https://ih1.redbubble.net/image.495947844.1611/flat,550x550,075,f.u1.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'http://www.artfusionproductions.com.au/files/1891429/uploaded/Zebra%20Image.JPG' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://www.orlandodiocese.org/wp-content/uploads/2018/07/art.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://cdn-images-1.medium.com/max/2000/1*AnmQd3T5y_k9M0e0rAfxYQ.jpeg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'http://www.aljazeera.com/mritems/Images/2018/2/13/b9a83cabd7134bbc8ba42bc762ff179f_18.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'http://wpr-public.s3.amazonaws.com/ttbook/styles/story_full_image/s3/images/cody-davis-253925-unsplash.jpg?itok=5ue8OyO3' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'http://i.imgur.com/1wYVzIK.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://d1cgopr8ucbnrg.cloudfront.net/Events/Annual%20Events/Art%20Basel/alexej-von-jawlensky-haus-mit-palme-1440x900.jpg?ext=.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://static01.nyt.com/images/2018/05/18/arts/18list-art/18list-art-articleLarge.jpg?quality=75&auto=webp&disable=upscale' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://i.pinimg.com/736x/94/e5/c8/94e5c8f8a38382c6750f26a2467ad670--bright-art-lonely-heart.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://assets.saatchiart.com/saatchi/484210/art/4332623/3402463-KNVHBTVS-7.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://www.moma.org/d/assets/W1siZiIsIjIwMTUvMTAvMjEvaWJ3dmJmanIyX3N0YXJyeW5pZ2h0LmpwZyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ/starrynight.jpg?sha=161d3d1fb5eb4b23' }],
            favoritedGalleries: [{ author: 'jakerowla', name: 'Waves', thumbnail: 'https://ih1.redbubble.net/image.495947844.1611/flat,550x550,075,f.u1.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'http://www.artfusionproductions.com.au/files/1891429/uploaded/Zebra%20Image.JPG' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://www.orlandodiocese.org/wp-content/uploads/2018/07/art.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://cdn-images-1.medium.com/max/2000/1*AnmQd3T5y_k9M0e0rAfxYQ.jpeg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'http://www.aljazeera.com/mritems/Images/2018/2/13/b9a83cabd7134bbc8ba42bc762ff179f_18.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'http://wpr-public.s3.amazonaws.com/ttbook/styles/story_full_image/s3/images/cody-davis-253925-unsplash.jpg?itok=5ue8OyO3' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'http://i.imgur.com/1wYVzIK.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://d1cgopr8ucbnrg.cloudfront.net/Events/Annual%20Events/Art%20Basel/alexej-von-jawlensky-haus-mit-palme-1440x900.jpg?ext=.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://static01.nyt.com/images/2018/05/18/arts/18list-art/18list-art-articleLarge.jpg?quality=75&auto=webp&disable=upscale' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://i.pinimg.com/736x/94/e5/c8/94e5c8f8a38382c6750f26a2467ad670--bright-art-lonely-heart.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://assets.saatchiart.com/saatchi/484210/art/4332623/3402463-KNVHBTVS-7.jpg' }, { author: 'Jake the Snake', name: 'A collection of ass', thumbnail: 'https://www.moma.org/d/assets/W1siZiIsIjIwMTUvMTAvMjEvaWJ3dmJmanIyX3N0YXJyeW5pZ2h0LmpwZyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ/starrynight.jpg?sha=161d3d1fb5eb4b23' }],
            theMagicWord: '',
            deleteConfirm: ''
        }
        this.changeWindow = this.changeWindow.bind(this)
        this.visitGallery = this.visitGallery.bind(this)
        this.deleteGallery = this.deleteGallery.bind(this)
    }

    componentDidMount() {
        //Validate User on Page as being logged in with session. If not, send back to landingPage; otherwise retrieve user's existing galleries and favorited galleries.
        let user = this.props.match.params.username
        axios.get(`/api/checkUser/`).then(res => {
            if (res.data !== user) {
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

    changeNav = current => {
        document.querySelectorAll('[data-tab]').forEach(tab => {
            if (tab.innerText === current) {
                tab.classList.add('menu-back')
            }
            else {
                tab.classList.remove('menu-back')
            }
        })

    }

    changeWindow(magicWord) {
        const { theMagicWord } = this.state
        if (magicWord === theMagicWord) return;
        switch (magicWord) {
            case "Create":
                this.setState({ theMagicWord: 'create' }, () => this.changeNav(magicWord))
                break;
            case "Galleries":
                this.setState({ theMagicWord: 'galleries' }, () => this.changeNav(magicWord))
                break;
            case "Favorites":
                this.setState({ theMagicWord: 'favorites' }, () => this.changeNav(magicWord))
                break;
            case 'Account':
                this.setState({ theMagicWord: 'account' }, () => this.changeNav(magicWord))
                break;
            case 'Help':
                this.setState({ theMagicWord: 'help' }, () => this.changeNav(magicWord))
                break;
        }
    }


    logout() {
        // destroys sessions and redirects user to landing page.
        axios.post('/api/logout')
            .then(this.props.history.push('/'))
    }

    visitGallery(galleryName, author) {
        this.props.history.push(`/${author}/${galleryName}/`)
    }

    editGallery(id) {

    }

    deleteGallery(id, galleryName) {
        if (window.confirm('Are you sure you want to delete this gallery?')) {
            let galleries = [...this.state.usersGalleries];
            let index;
            for (let i = 0; i < galleries.length; i++) {
                if (galleries[i].id === id) {
                    index = i
                }
            }
            if (index !== -1) {
                galleries.splice(index, 1);
                console.log(galleries)
                this.setState({ usersGalleries: galleries })
            }
            axios.delete(`/api/deleteGallery/${id}`).then(res => {
                this.setState({ deleteConfirm: `${galleryName} was successfully deleted.` })
            })
        } else {
            this.setState({ deleteConfirm: `${galleryName} was not deleted.` })
        }
    }

    render() {
        console.log(this.state)
        const { favoritedGalleries, usersGalleries, theMagicWord } = this.state
        //Map over list of favorites and existing galleries, pass to separate components for styling them as distinct sections, 
        const listOfFavorites = favoritedGalleries.map((e) => {
            const image = e.thumbnail;
            const key = e.id;
            const views = e.views;
            const shares = e.shares;
            const favoriteNum = e.times_favorited;
            // const galleryName = e.gallery_name;
            const galleryName = e.gallery_name
            const galleryAuthor = e.author;
            return (
                    <Favorites
                        id={key}
                        image={image}
                        views={views}
                        shares={shares}
                        favoriteNum={favoriteNum}
                        galleryName={galleryName}
                        visitGallery={this.visitGallery}
                        author={galleryAuthor}
                    />
            )
        })

        const galleryContainers = usersGalleries.map((e) => {
            // const is_private_string = e.is_private.toString();
            const key = e.id;
            const image = e.thumbnail;
            const views = e.views;
            const favoriteNum = e.times_favorited;
            const author = e.author
            const galleryName = e.gallery_name
            return (
                    <Galleries
                        galleryName={galleryName}
                        // private={is_private_string}
                        id={key}
                        image={image}
                        views={views}
                        author={author}
                        favoriteNum={favoriteNum}
                        visitGallery={this.visitGallery}
                        editGallery={this.editGallery}
                        deleteGallery={this.deleteGallery}
                    />
            )
        })
        return (
            <main id="Lobby">
                <section className="side-menu">
                    <div id="menu-lobby">
                        <div className='menu-header center'>
                            <span>VR<span className='lighttext'>ART GALLERY</span></span>
                            <img src={Icon} className="icon" onClick={() => this.props.history.push('/')} />
                        </div>
                        <span data-tab className="menu-btn" onClick={() => this.changeWindow('Create')}>Create</span>
                        <span data-tab className="menu-btn" onClick={() => this.changeWindow('Galleries')}>Galleries</span>
                        <span data-tab className="menu-btn" onClick={() => this.changeWindow('Favorites')}>Favorites</span>
                        <span data-tab className="menu-btn" onClick={() => this.changeWindow('Account')}>Account</span>
                        <span data-tab className="menu-btn" onClick={() => this.changeWindow('Help')}>Help</span>
                        <span className="menu-btn" onClick={() => this.logout()}>Logout</span>
                    </div>
                </section>

                <section style={{overflowX: 'hidden'}}>
                    <div>
                        {/* Conditionally rendering based on magicWord */}
                        {
                            theMagicWord === 'create' ?
                                <div>
                                    <CreateGalleries 
                                    user={this.props.match.params.username}
                                    galleries={usersGalleries}
                                    />
                                </div>
                                : theMagicWord === 'galleries' ?
                                    <div className='lobby-container_gallery'>
                                        {galleryContainers}
                                    </div>
                                    : theMagicWord === 'favorites' ?
                                        <div className='lobby-container_gallery'>
                                            {listOfFavorites}
                                        </div>
                                        : theMagicWord === 'account' ?
                                            <div>
                                                <Account />
                                            </div>
                                            : theMagicWord === 'help' &&
                                            <div>
                                                <Help />
                                            </div>
                        }
                    </div>
                </section>
            </main>
        )
    }
}

export default withRouter(Lobby)