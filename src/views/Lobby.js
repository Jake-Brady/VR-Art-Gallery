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
    }

    componentDidMount() {
        //Validate User on Page as being logged in with session. If not, send back to landingPage; otherwise retrieve user's existing galleries and favorited galleries.
        let user = this.props.match.params.username
        this.changeWindow('Favorites')
        axios.get(`/api/checkUser/`).then(res => {
            if (res.data !== user) {
                this.props.history.push('/')
            } else {
                //Retrieve user's galleries and then favorited galleries while setting the first middle window to 'Create'
                axios.get('/api/retrieveGalleries/').then(res => {
                    // this.setState({ usersGalleries: res.data, theMagicWord: 'create' }, () => {
                    //     axios.get('/api/getFavorites/').then(res => {
                    //         this.setState({ favoritedGalleries: res.data })
                    //     })
                    // })
                })
            }
        })
    }

    componentWillUnmount() {
        const body = document.querySelector('html'),
            overlay = document.querySelector('.lobby-overlay')
        body.classList.remove('lobby-main-hide')
        overlay.removeEventListener('click', () => this.toggleMenu())
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

    changeWindow = magicWord => {
        const { theMagicWord } = this.state
        if (magicWord === theMagicWord) return;
        switch (magicWord) {
            case "Create":
                this.setState({ theMagicWord: 'create' }, () => {
                    const header = document.querySelector('.lobby-header_search')
                    header.style.visibility = 'hidden'
                    this.changeNav(magicWord)
                    this.toggleMenu()
                })
                break;
            case "Galleries":
                this.pageTop(magicWord)
                this.setState({ theMagicWord: 'galleries' }, () => {
                    const header = document.querySelector('.lobby-header_search')
                    header.style.visibility = 'visible'
                    this.changeNav(magicWord)
                    this.toggleMenu()
                })
                break;
            case "Favorites":
                this.pageTop(magicWord)
                this.setState({ theMagicWord: 'favorites' }, () => {
                    const header = document.querySelector('.lobby-header_search')
                    header.style.visibility = 'visible'
                    this.changeNav(magicWord)
                    this.toggleMenu()
                })
                break;
            case 'Account':
                this.setState({ theMagicWord: 'account' }, () => {
                    const header = document.querySelector('.lobby-header_search')
                    header.style.visibility = 'hidden'
                    this.changeNav(magicWord)
                    this.toggleMenu()
                })
                break;
            case 'Help':
                this.setState({ theMagicWord: 'help' }, () => {
                    const header = document.querySelector('.lobby-header_search')
                    header.style.visibility = 'hidden'
                    this.changeNav(magicWord)
                    this.toggleMenu()
                })
                break;
        }
    }


    logout() {
        // destroys sessions and redirects user to landing page.
        axios.post('/api/logout')
            .then(this.props.history.push('/'))
    }

    visitGallery = (galleryName, author) => {
        this.props.history.push(`/${author}/${galleryName}/`)
    }

    editGallery = id => {

    }

    deleteGallery = (id, galleryName) => {
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

    toggleMenu = command => {
        const menu = document.querySelector('.side-menu'),
            overlay = document.querySelector('.lobby-overlay'),
            body = document.querySelector('html')
        if (command === 'open') {
            menu.classList.add('menu-toggle')
            menu.classList.remove('menu-slide')
            overlay.style.visibility = 'visible'
            body.classList.add('lobby-main-hide')
            overlay.addEventListener('click', () => this.toggleMenu())
        }
        else {
            menu.classList.add('menu-slide')
            overlay.style.visibility = 'hidden'
            body.classList.remove('lobby-main-hide')
            overlay.removeEventListener('click', () => this.toggleMenu())
            setTimeout(() => {
                menu.classList.remove('menu-toggle')
            }, 500);
        }
    }

    pageTop = word => {
        if (word.toLowerCase() !== this.state.theMagicWord) window.scrollTo(0, 0)
    }

    render() {
        const { favoritedGalleries, usersGalleries, theMagicWord } = this.state
        //Map over list of favorites and existing galleries, pass to separate components for styling them as distinct sections, 
        const listOfFavorites = favoritedGalleries.map((e) => {
            const image = e.thumbnail,
                key = e.id,
                views = e.views,
                shares = e.shares,
                favoriteNum = e.times_favorited,
                // const galleryName = e.gallery_name;
                galleryName = e.name,
                galleryAuthor = e.author;
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
            const key = e.id,
                image = e.thumbnail,
                views = e.views,
                favoriteNum = e.times_favorited,
                author = e.author,
                galleryName = e.gallery_name
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
            <div className='lobby'>
                <div className='lobby-overlay' />
                <header className='lobby-header'>
                    <div className='lobby-header_left'>
                        <i className="fas fa-bars" onClick={() => this.toggleMenu('open')}></i>
                        <img src={Icon} onClick={() => this.props.history.push('/')} />
                        <span>VR<span className='lighttext'>ART GALLERY</span></span>
                    </div>
                    <div className='lobby-header_search'>
                        <input name='header' type='text' placeholder='Search' />
                        <div className='center'>
                            <i className="fas fa-search"></i>
                        </div>
                    </div>
                    <div className='lobby-header_right center'>
                        <span onClick={() => this.logout()}>LOGOUT</span>
                    </div>
                </header>

                <section className="side-menu">
                    <div className="menu-column">
                        <div className='menu-header'>
                            <i className="fas fa-bars" onClick={() => this.toggleMenu()}></i>
                            <img src={Icon} onClick={() => this.props.history.push('/')} />
                            <span>VR<span className='lighttext'>ART GALLERY</span></span>
                        </div>
                        <span data-tab className="menu-btn menu-btn-first" onClick={() => this.props.history.push('/')}><i className="fas fa-home menu-icon"></i>Home</span>
                        <span data-tab className="menu-btn" onClick={() => this.changeWindow('Create')}><i className="fas fa-plus menu-icon"></i>Create</span>
                        <span data-tab className="menu-btn" onClick={() => this.changeWindow('Galleries')}><i className="fas fa-image menu-icon"></i>Galleries</span>
                        <span data-tab className="menu-btn" onClick={() => this.changeWindow('Favorites')}><i className="fas fa-heart menu-icon"></i>Favorites</span>
                        <span data-tab className="menu-btn" onClick={() => this.changeWindow('Account')}><i className="fas fa-user menu-icon"></i>Account</span>
                        <span data-tab className="menu-btn" onClick={() => this.changeWindow('Help')}><i className="fas fa-question menu-icon"></i>Help</span>
                        <span className="menu-btn" onClick={() => this.logout()}><i className="fas fa-arrow-alt-circle-left menu-icon"></i>Logout</span>
                    </div>
                </section>

                <main className='lobby-main'>
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
                                        <div className='lobby-card-grid'>
                                            {galleryContainers}
                                        </div>
                                    </div>
                                    : theMagicWord === 'favorites' ?
                                        <div className='lobby-container_gallery'>
                                            <div className='lobby-card-grid'>
                                                {listOfFavorites}
                                            </div>
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
                </main>
            </div>
        )
    }
}

export default withRouter(Lobby)