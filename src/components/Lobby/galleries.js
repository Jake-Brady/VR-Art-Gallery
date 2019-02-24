import React, { Component } from 'react'

class Galleries extends Component {

    toggleDrop = (id, e) => {
        e.stopPropagation()
        const pop = [...document.querySelectorAll('[data-pop]')],
        index = pop.map(pop => pop.dataset.pop).findIndex(index => index == id),
        filtered = pop.filter(pop => pop.dataset.pop != id),
        target = pop[index]
        target.classList.contains('gallery-pop_show') ? target.classList.remove('gallery-pop_show') : target.classList.add('gallery-pop_show')
        filtered.map(pop => pop.classList.remove('gallery-pop_show'))
    }

    render() {
        let { id, image, views, shares, favoriteNum, galleryName, author, visitGallery, editGallery, deleteGallery, isPrivate, share } = this.props
        return (
            <div key={id} className='gallery-container gallery-card-anim'>
                <img src={image} alt='Card Thumbnail' className='gallery-thumbnail' />
                <div className='gallery-text'>
                    <h1 className='gallery-title'>{galleryName.length > 15 ? galleryName.slice(0,15) + '...' : galleryName}</h1>
                    <div className='gallery-title-hover'>{galleryName}</div>
                    <h3 className='gallery-author'>BY:{author}</h3>
                    <div className='gallery-stats'>
                        {isPrivate ? <><i className="fas fa-lock stat"></i> <span>Private</span></> : <><i className="fas fa-unlock stat"></i> <span>Public</span> </>}
                        <i className="fas fa-eye stat"></i><span>{views}</span>
                        <i className="fas fa-heart stat"></i><span>{favoriteNum}</span>
                        <i className="fas fa-share stat" onClick={(e) => share({galleryName, color: 'blue'}, e.target, galleryName, author)}></i><span>{shares}</span>
                        <i className="fas fa-ellipsis-v gallery-option" onClick={e => this.toggleDrop(id, e)}></i>
                        <div className='gallery-pop' data-pop={id}>
                            <div className='center' onClick={() => editGallery(id)}>EDIT</div>
                            <div className='center' onClick={() => deleteGallery(id, galleryName)}>DELETE</div>
                        </div>
                    </div>
                    <div onClick={() => visitGallery(galleryName, author)} className='gallery-view center'>Visit Gallery</div>
                </div>
            </div>
        )
    }
}

export default Galleries