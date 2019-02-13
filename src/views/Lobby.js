import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import CreateGalleries from '../components/Lobby/createGalleries'
import Galleries from '../components/Lobby/galleries'
import Favorites from '../components/Lobby/favorites'
import Notifications from '../components/Lobby/notifications'
import Account from '../components/Lobby/account'
import About from '../components/Lobby/about'
import '../styles/Views/Lobby.css'
import Icon from '../styles/Media/Icon.png'
import Profile from '../styles/Media/defaultProfile.png'

class Lobby extends Component {
    constructor() {
        super()
        this.state = {
            user: '',
            accountInfo: [],
            usersGalleries: [],
            favoritedGalleries: [],
            theMagicWord: '',
            deleteConfirm: '',
            loading: true,
            galleryCopy: [],
            favoritesCopy: [],
            searchInput: '',
            galleryId: 0,
            galleryName: '',
            queue: [],
            popping: false,
            notifications: 0,
            galleryId: '',
            id: 0,
            name: '',
            usersWhoLiked: []
        }
        this.refresh = this.refresh.bind(this)
    }

    async componentDidMount() {
        if (document.querySelector('html').classList.contains('a-html')) {
            window.location.reload(true)
        }
        //Validate User on Page as being logged in with session. If not, send back to landingPage; otherwise retrieve user's existing galleries and favorited galleries.
        const user = this.props.match.params.username,
            userData = await axios.get(`/api/checkUser/`)
        if (userData.data !== user) this.props.history.push('/')
        else {
            //Retrieve user's galleries, those who favorited user's galleries, user's favorited galleries, and then account information
            const userGalleries = await axios.get('/api/retrieveGalleries/')
            this.setState({ usersGalleries: userGalleries.data, galleryCopy: userGalleries.data, user }, async () => {
                const galleryIds = this.state.usersGalleries.map(a => a.id),
                    otherFavorites = await axios.get(`/api/getUsersWhoFavorited/?galleryIds=${galleryIds}`)
                this.setState({ usersWhoLiked: otherFavorites.data }, async () => {
                    const userFavorites = await axios.get('/api/getFavorites/')
                    this.setState({ favoritedGalleries: userFavorites.data, favoritesCopy: userFavorites.data, loading: false }, async () => {
                        const accountInfo = await axios.get('/api/getAccountInfo')
                        this.setState({ accountInfo: accountInfo.data[0] })
                        this.changeWindow('Galleries')
                    })
                })
            })
        }
        window.addEventListener('resize', this.checkSize)
    }

    async refresh() {
        const userGalleries = await axios.get('/api/retrieveGalleries/')
        this.setState({ usersGalleries: userGalleries.data, galleryCopy: userGalleries.data }, async () => {
            const galleryIds = this.state.usersGalleries.map(a => a.id),
                otherFavorites = await axios.get(`/api/getUsersWhoFavorited/?galleryIds=${galleryIds}`)
            this.setState({ usersWhoLiked: otherFavorites.data }, async () => {
                const userFavorites = await axios.get('/api/getFavorites/')
                this.setState({ favoritedGalleries: userFavorites.data, favoritesCopy: userFavorites.data, loading: false }, async () => {
                    const accountInfo = await axios.get('/api/getAccountInfo')
                    this.setState({ accountInfo: accountInfo.data[0] })
                }
                )
            })
        })
    }

    resettingGalleryId() {
        this.setState({ galleryId: 0 })
    }

    componentWillUnmount() {
        const body = document.querySelector('html'),
            overlay = document.querySelector('.lobby-overlay')
        body.classList.remove('lobby-main-hide')
        overlay.removeEventListener('click', () => this.toggleMenu())
        window.removeEventListener('resize', this.checkSize)
    }

    checkSize = () => {
        if (!this.state.loading) {
            const image = document.querySelector('#header-image'),
                name = document.querySelector('#header-name'),
                header = document.querySelector('.lobby-header_left')
            if (!window.matchMedia("(min-width: 620px)").matches && (this.state.theMagicWord === 'galleries' || this.state.theMagicWord === 'favorites')) {
                image.classList.add('lobby-header_hidden')
                name.classList.add('lobby-header_hidden')
                header.style.width = '50px'
            }
            else {
                image.classList.remove('lobby-header_hidden')
                name.classList.remove('lobby-header_hidden')
                header.style.width = 'auto'
            }
        }
    }

    changeNav = current => {
        document.querySelectorAll('[data-tab]').forEach(tab => {
            const title = tab.innerText.split(' ')
            console.log(title[0], current)
            if (title[0] === current) tab.classList.add('menu-back')
            else tab.classList.remove('menu-back')
        })
    }

    resetSearch = () => {
        const search = document.querySelector('#lobby-searchbar')
        search.value = ''
        search.focus()
        this.setState({ usersGalleries: [...this.state.galleryCopy], favoritedGalleries: [...this.state.favoritesCopy], searchInput: '' })
    }

    clearPresets = () => {
        document.querySelectorAll(`#wall img`).forEach(option => option.style.opacity = '.2')
        document.querySelectorAll(`#floor img`).forEach(option => option.style.opacity = '.2')
        document.querySelectorAll(`#music > div`).forEach(option => option.style.opacity = '.2')
    }

    changeWindow = magicWord => {
        const { theMagicWord } = this.state
        if (theMagicWord === 'create' && this.state.galleryId) {
            this.resettingGalleryId()
        }
        switch (magicWord) {
            case "Create":
                this.setState({ theMagicWord: 'create' }, () => {
                    const search = document.querySelector('.lobby-header_search')
                    search.style.visibility = 'hidden'
                    this.changeNav(magicWord)
                    this.checkSize()
                    this.toggleMenu()
                    this.clearPresets()
                })
                break;
            case "Notifications":
                this.setState({ theMagicWord: 'notifications' }, () => {
                    const search = document.querySelector('.lobby-header_search')
                    search.style.visibility = 'hidden'
                    this.changeNav(magicWord)
                    this.checkSize()
                    this.toggleMenu()
                })
                break;
            case "Galleries":
                this.pageTop(magicWord)
                this.setState({ theMagicWord: 'galleries' }, () => {
                    const search = document.querySelector('.lobby-header_search')
                    search.style.visibility = 'visible'
                    this.resetSearch()
                    this.changeNav(magicWord)
                    this.checkSize()
                    this.toggleMenu()
                })
                break;
            case "Favorites":
                this.pageTop(magicWord)
                this.setState({ theMagicWord: 'favorites' }, () => {
                    const search = document.querySelector('.lobby-header_search')
                    search.style.visibility = 'visible'
                    this.resetSearch()
                    this.changeNav(magicWord)
                    this.checkSize()
                    this.toggleMenu()
                })
                break;
            case 'Settings':
                this.setState({ theMagicWord: 'settings' }, () => {
                    const search = document.querySelector('.lobby-header_search')
                    search.style.visibility = 'hidden'
                    this.changeNav(magicWord)
                    this.checkSize()
                    this.toggleMenu()
                })
                break;
            case 'About':
                this.setState({ theMagicWord: 'about' }, () => {
                    const search = document.querySelector('.lobby-header_search')
                    search.style.visibility = 'hidden'
                    this.changeNav(magicWord)
                    this.checkSize()
                    this.toggleMenu()
                })
                break;
        }
    }


    logout() {
        // destroys sessions and redirects user to landing page.
        axios.post('/api/logout').then(this.props.history.push('/'))
    }

    visitGallery = (galleryName, author) => {
        this.props.history.push(`/${author}/${galleryName}/`)
    }

    editGallery = id => {
        this.setState({
            galleryId: id
        }, () => {
            this.changeWindow('Create')
        })
    }

    closeDelete = () => {
        const pop = document.querySelector('.gallery-delete'),
            overlay = document.querySelector('.gallery-dim'),
            body = document.querySelector('html')
        body.classList.remove('lobby-main-hide')
        overlay.style.visibility = 'hidden'
        pop.style.visibility = 'hidden'
    }

    deleteGallery = (id, galleryName) => {
        const pop = document.querySelector('.gallery-delete'),
            overlay = document.querySelector('.gallery-dim'),
            body = document.querySelector('html')
        overlay.style.visibility = 'visible'
        pop.style.visibility = 'visible'
        body.classList.add('lobby-main-hide')
        this.setState({ id, name: galleryName })
    }

    confirmDelete = (id, galleryName) => {
        this.closeDelete()
        const index = this.state.usersGalleries.findIndex(gallery => gallery.id === id),
            card = document.querySelectorAll('.gallery-card-anim')[index]
        card.classList.add('lobby-leave-anim')
        setTimeout(() => {
            let galleries = [...this.state.usersGalleries];
            let index;
            for (let i = 0; i < galleries.length; i++) {
                if (galleries[i].id === id) {
                    index = i
                }
            }
            if (index !== -1) {
                galleries.splice(index, 1);
                this.setState({ usersGalleries: galleries, galleryCopy: galleries })
            }
            axios.delete(`/api/deleteGallery/${id}`).then(res => {
                this.setState({ deleteConfirm: `${galleryName} was successfully deleted.` })
            })
            this.removeFavPop({ name: galleryName, type: 'delete' })
        }, 400);
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

    checkUser = (loading, user) => {
        if (!loading && user !== this.props.match.params.username) this.props.history.push('/')
    }

    handleSearch = (filter, target) => {
        this.setState({ searchInput: target })
        target = target.toLowerCase()
        if (filter === 'galleries') {
            const galleries = this.state.galleryCopy.filter(gallery => gallery.gallery_name.toLowerCase().includes(target))
            this.setState({ usersGalleries: galleries })
        }
        else {
            const favorites = this.state.favoritesCopy.filter(gallery => gallery.gallery_name.toLowerCase().includes(target))
            this.setState({ favoritedGalleries: favorites })
        }
    }

    removeFav = (galleryId, galleryName) => {
        const input = document.querySelector('#lobby-searchbar').value,
            index = this.state.favoritedGalleries.findIndex(gallery => gallery.id === galleryId),
            card = document.querySelectorAll('#favorite-card')[index]
        card.classList.add('lobby-leave-anim')
        setTimeout(() => {
            const filtered = this.state.favoritesCopy.filter(gallery => gallery.id !== galleryId)
            this.setState({ favoritesCopy: filtered, favoritedGalleries: filtered, galleryName }, () => {
                this.handleSearch('favorites', input)
                this.removeFavPop(galleryName)
            })
            axios.put(`/api/adjustGalleryFavorites/${galleryId}`, { Decrease: 1 }).then(res => {
                // pass in ID to be deleted from favorites table
                axios.delete(`/api/deleteFromFavorites/${galleryId}`)
            })
        }, 400);
    }

    removeFavPop = name => {
        this.setState({ queue: [...this.state.queue, name] }, () => {
            if (!this.state.popping) this.startInterval()
        })
    }

    startInterval = () => {
        this.playAnim(this.state.queue[0])
        this.setState({ popping: true, queue: [...this.state.queue.slice(1)] }, () => {
            let interval = setInterval(() => {
                if (this.state.queue.length) {
                    this.playAnim(this.state.queue[0])
                    this.setState({ queue: [...this.state.queue.slice(1)] })
                }
                else this.setState({ popping: false }, () => clearInterval(interval))
            }, 2050)
        })
    }

    playAnim = name => {
        const pop = document.querySelector('.lobby-pop')
        pop.innerText = typeof name === 'object' ? `Deleted ${name.name} from galleries` : `Removed ${name} from favorites`
        pop.classList.add('lobby-pop-anim')
        setTimeout(() => {
            pop.classList.remove('lobby-pop-anim')
        }, 2000);
    }

    clearPop = () => {
        document.querySelectorAll('[data-pop]').forEach(pop => pop.classList.remove('gallery-pop_show'))
    }

    render() {
        const { favoritedGalleries, usersGalleries, theMagicWord, user, loading, usersWhoLiked, accountInfo } = this.state
        //Map over list of favorites, followers, and existing galleries, pass to separate components for styling them as distinct sections.
        const listOfFavorites = favoritedGalleries.map((e) => {
            const image = e.thumbnail,
                key = e.id,
                views = e.views,
                shares = e.shares,
                favoriteNum = e.times_favorited,
                galleryName = e.gallery_name,
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
                    removeFav={this.removeFav}
                />
            )
        })

        const galleryContainers = usersGalleries.map((e) => {
            const isPrivate = (e.is_private === 'true'),
                key = e.id,
                image = e.thumbnail,
                views = e.views,
                favoriteNum = e.times_favorited,
                author = e.author,
                galleryName = e.gallery_name
            return (
                <Galleries
                    galleryName={galleryName}
                    isPrivate={isPrivate}
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
            <>
                {loading ?
                    <div className='lobby-loading center'>
                        <div className='lobby-loading_content center'>
                            <span>VR<span className='lighttext'>ART GALLERY</span></span>
                            <div className='lobby-loading-grid center'>
                                <div />
                                <div />
                                <div />
                            </div>
                        </div>
                    </div>
                    :
                    <div className='lobby'>
                        <div className='lobby-overlay' />
                        <div className='gallery-dim' onClick={() => this.closeDelete()} />
                        <header className='lobby-header'>
                            <div className='lobby-header_left'>
                                <i className="fas fa-bars" onClick={() => this.toggleMenu('open')}></i>
                                <img id='header-image' src={Icon} onClick={() => this.props.history.push('/')} />
                                <span id='header-name' onClick={() => this.props.history.push('/')}>VR<span className='lighttext'>ART GALLERY</span></span>
                            </div>
                            <div className='lobby-header_search'>
                                <input onChange={e => this.handleSearch(theMagicWord, e.target.value)} type='text' placeholder={`Search ${theMagicWord.charAt(0).toUpperCase() + theMagicWord.slice(1)}`} id='lobby-searchbar' />
                                <div className='center'>
                                    <i className="fas fa-search"></i>
                                </div>
                            </div>
                            <div className='lobby-header_right center'>
                                <img src={Profile} alt='User Picture' />
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
                                <span data-tab className="menu-btn" onClick={() => this.changeWindow('Create')}><i className="fas fa-plus menu-icon"></i>Create ({12 - usersGalleries.length} Available)</span>
                                {/* <span data-tab className="menu-btn" onClick={() => this.changeWindow('Notifications')}><i className="far fa-bell menu-icon"></i>Notifications</span> */}
                                <span data-tab className="menu-btn" onClick={() => this.changeWindow('Galleries')}><i className="fas fa-image menu-icon"></i>Galleries ({this.state.galleryCopy.length})</span>
                                <span data-tab className="menu-btn" onClick={() => this.changeWindow('Favorites')}><i className="fas fa-heart menu-icon"></i>Favorites ({this.state.favoritesCopy.length})</span>
                                <span data-tab className="menu-btn" onClick={() => this.changeWindow('Settings')}><i className="fas fa-cog menu-icon"></i>Settings</span>
                                <span data-tab className="menu-btn" onClick={() => this.changeWindow('About')}><i className="fas fa-question menu-icon"></i>About</span>
                                <span className="menu-btn" onClick={() => this.logout()}><i className="fas fa-arrow-alt-circle-left menu-icon"></i>Logout</span>
                            </div>
                        </section>

                        <main className='lobby-main'>
                            <div>
                                {/* Conditionally rendering based on magicWord */}
                                {
                                    theMagicWord === 'create' ?
                                        <CreateGalleries
                                            user={this.props.match.params.username}
                                            galleries={usersGalleries}
                                            editGalleryId={this.state.galleryId}
                                            changeWindow={this.changeWindow}
                                            refresh={this.refresh}
                                        />
                                        : theMagicWord === 'notifications' ?
                                            <div>
                                                <Notifications
                                                    followersOfGalleries={this.state.usersWhoLiked}
                                                    galleries={usersGalleries}
                                                />
                                            </div>
                                            : theMagicWord === 'galleries' ?
                                                <div className='lobby-container_gallery' onClick={() => this.clearPop()}>
                                                    {this.state.usersGalleries.length ?
                                                        <div className='lobby-card-grid'>
                                                            <div className='gallery-delete'>
                                                                <div className='delete-header'>
                                                                    <span>Confirm</span>
                                                                    <i className="fas fa-times" onClick={() => this.closeDelete()}></i>
                                                                </div>
                                                                <div className='delete-content'>
                                                                    <p>Are you sure that you want to delete this gallery?</p>
                                                                    <p>You can't undo this action.</p>
                                                                    <i className="fas fa-exclamation-triangle"></i>
                                                                </div>
                                                                <div className='delete-options'>
                                                                    <div className='center' onClick={() => this.closeDelete()}>NO</div>
                                                                    <div className='center' onClick={() => this.confirmDelete(this.state.id, this.state.name)}>YES</div>
                                                                </div>
                                                            </div>
                                                            <>
                                                                {galleryContainers}
                                                            </>
                                                        </div>
                                                        :
                                                        this.state.searchInput ?
                                                            <div className='lobby-empty'>
                                                                <h1 style={{ fontFamily: 'sans-serif', color: 'rgb(110, 142, 254)' }}>‾ \_(ツ)_/ ‾</h1>
                                                                <h2>No results</h2>
                                                                <h2>Try broadening your search or checking your spelling</h2>
                                                            </div>
                                                            :
                                                            <div className='lobby-empty'>
                                                                <h1 style={{ color: 'rgb(110, 142, 254)' }}>:/</h1>
                                                                <h2>You don't have any galleries</h2>
                                                            </div>
                                                    }
                                                </div>
                                                : theMagicWord === 'favorites' ?
                                                    <div className='lobby-container_gallery'>
                                                        {this.state.favoritedGalleries.length ?
                                                            <div className='lobby-card-grid'>
                                                                {listOfFavorites}
                                                            </div>
                                                            :
                                                            this.state.searchInput ?
                                                                <div className='lobby-empty'>
                                                                    <h1 style={{ fontFamily: 'sans-serif', color: 'rgb(110, 142, 254)' }}>‾ \_(ツ)_/ ‾</h1>
                                                                    <h2>No results</h2>
                                                                    <h2>Try broadening your search or checking your spelling</h2>
                                                                </div>
                                                                :
                                                                <div className='lobby-empty'>
                                                                    <h1>&lt;/3</h1>
                                                                    <h2>You currently don't have any galleries favorited</h2>
                                                                </div>
                                                        }
                                                    </div>
                                                    : theMagicWord === 'settings' ?
                                                        <div>
                                                            <Account
                                                                accountInfo={this.state.accountInfo}
                                                            />
                                                        </div>
                                                        : theMagicWord === 'about' &&
                                                        <div>
                                                            <About />
                                                        </div>
                                }
                            </div>
                            <div className='lobby-pop center'>
                            </div>
                        </main>
                    </div>
                }
            </>
        )
    }
}

export default withRouter(Lobby)