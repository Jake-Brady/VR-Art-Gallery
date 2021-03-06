import React from 'react'

const Favorites = (props) => {
   let { id, image, views, shares, favoriteNum, visitGallery, galleryName, author, removeFav, share } = props
   return (
      <div key={id} className="gallery-container" id='favorite-card'>
         <img src={image} alt="gallery thumbnail" className="gallery-thumbnail" />
         <div className='gallery-text'>
            <h1 className='gallery-title'>{galleryName.length > 20 ? galleryName.slice(0,20) + '...' : galleryName}</h1>
            <div className='gallery-title-hover'>{galleryName}</div>
            <h3 className='gallery-author'>BY: {author}</h3>
            <div className='gallery-stats'>
               <i className="fas fa-eye stat"></i>
               <span>{views}</span>
               <i className="fas fa-heart stat make-red" onClick={() => removeFav(id, galleryName)}></i>
               <span>{favoriteNum}</span>
               <i className="fas fa-share stat" onClick={(e) => share({galleryName, color: 'blue'}, e.target, galleryName, author)}></i>
               <span>{shares}</span>
            </div>
            <div className='gallery-view center' onClick={() => visitGallery(galleryName, author)}>Visit Gallery</div>
         </div>
      </div>
   )
}

export default Favorites