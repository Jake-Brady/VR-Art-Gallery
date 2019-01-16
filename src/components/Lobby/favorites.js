import React from 'react'
import '../Styles/favorites.css'

const Favorites = (props) => {
let {key, image, views, shares, favoriteNum, visitGallery, galleryName, author } = props
return(
<div key={key} className="gallery-container">
   <img src={image} alt="gallery thumbnail" className="gallery-thumbnail" />
   <div className='gallery-text'>
      <h1 className='gallery-title'>{galleryName}</h1>
      <h3 className='gallery-author'>BY: {galleryName}</h3>
      <div className='gallery-stats'>
         <i className="fas fa-eye stat"></i>
         <span>{views}</span>
         <i className="fas fa-heart stat"></i>
         <span>{favoriteNum}</span>
         <i className="fas fa-share stat"></i>
         <span>{shares}</span>
       </div>
   </div>
   <span className="gallery-view" onClick={() => visitGallery(galleryName,author)}>Visit Gallery</span>
</div>
)
}

export default Favorites