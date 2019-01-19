import React from 'react'

const Favorites = (props) => {
   let { id, image, views, shares, favoriteNum, visitGallery, galleryName, author } = props
   return (
      <div key={id} className="gallery-container">
         <img src={image} alt="gallery thumbnail" className="gallery-thumbnail" />
         <div className='gallery-text'>
            <h1 className='gallery-title'>{galleryName}</h1>
            <h3 className='gallery-author'>BY: {author}</h3>
            <div className='gallery-stats'>
               <i className="fas fa-eye stat"></i>
               <span>{views}</span>
               <i className="fas fa-heart stat make-red"></i>
               <span>{favoriteNum}</span>
               <i className="fas fa-share stat"></i>
               <span>{shares}</span>
            </div>
            <div className='gallery-view center' onClick={() => visitGallery(galleryName, author)}>Visit Gallery</div>
         </div>
      </div>
   )
}

export default Favorites