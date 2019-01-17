import React from 'react'
import '../Styles/galleries.css'

const Galleries = (props) => {
    let {id, image, views, shares, favoriteNum, galleryName, author, visitGallery, editGallery, deleteGallery, isPrivate } = props
    return(
        <div key={id} className="gallery-container">
            <img src={image} alt="gallery thumbnail" className="gallery-thumbnail" />
            <div className='gallery-text'>
                <h1 className='gallery-title'>{galleryName}</h1>
                <h3 className='gallery-author'>BY: {author}</h3>
                <div className='gallery-stats'>
                {/* if isPrivate is truthy, then lock icon will appear. If false, it will be unlocked icon. */}
                    {isPrivate ? <i className="fas fa-lock stat"></i> : <i className="fas fa-unlock stat"></i>}
                    <i className="fas fa-eye stat"></i>
                    <span>{views}</span>
                    <i className="fas fa-heart stat"></i>
                    <span>{favoriteNum}</span>
                    <i className="fas fa-share stat"></i>
                    <span>{shares}</span>
                </div>
            </div>
            <span className="gallery-view" onClick={() => visitGallery(galleryName,author)}>Visit Gallery</span>
            <span className="gallery-view" onClick={() => editGallery(id)}>Edit Gallery</span>
            <span className="gallery-view" onClick={() => deleteGallery(id, galleryName)}>Delete Gallery</span>
        </div>
    )
}

export default Galleries