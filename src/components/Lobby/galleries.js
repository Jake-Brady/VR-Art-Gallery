import React, { Component } from 'react'

class Galleries extends Component {

    toggleDrop = id => {
        const pop = [...document.querySelectorAll('[data-pop]')],
        index = pop.map(pop => pop.dataset.pop).findIndex(index => index == id),
        filtered = pop.filter(pop => pop.dataset.pop != id),
        target = pop[index]
        target.classList.contains('gallery-pop_show') ? target.classList.remove('gallery-pop_show') : target.classList.add('gallery-pop_show')
        filtered.map(pop => pop.classList.remove('gallery-pop_show'))
    }

    render() {
        let { id, image, views, shares, favoriteNum, galleryName, author, visitGallery, editGallery, deleteGallery, isPrivate } = this.props
        return (
            <div key={id} className='gallery-container'>
                <img src={image} alt='Card Thumbnail' className='gallery-thumbnail' />
                <div className='gallery-text'>
                    <h1 className='gallery-title'>{galleryName}</h1>
                    <h3 className='gallery-author'>BY:{author}</h3>
                    <div className='gallery-stats'>
                        {isPrivate ? <><i className="fas fa-lock stat"></i> <span>Private</span></> : <><i className="fas fa-unlock stat"></i> <span>Public</span> </>}
                        <i className="fas fa-eye stat"></i><span>{views}</span>
                        <i className="fas fa-heart stat"></i><span>{favoriteNum}</span>
                        <i className="fas fa-share stat"></i><span>{shares}</span>
                        <i className="fas fa-ellipsis-v gallery-option" onClick={() => this.toggleDrop(id)}></i>
                        <div className='gallery-pop' data-pop={id}>
                            <div className='center' onClick={() => editGallery()}>EDIT</div>
                            <div className='center' onClick={() => deleteGallery()}>DELETE</div>
                        </div>
                    </div>
                    <div onClick={() => visitGallery(galleryName, author)} className='gallery-view center'>Visit Gallery</div>
                </div>
            </div>
        )
    }
}

export default Galleries