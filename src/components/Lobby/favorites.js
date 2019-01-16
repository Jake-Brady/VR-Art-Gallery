import React from 'react'
import '../Styles/favorites.css'

const Favorites = (props) => {
let {key, image, views, favoritedNum, visitGallery, galleryName } = props
return(
<div key={key} className="favorites-section">
   <img src={image} alt="Gallery thumbnail" />
   <p>Name: {galleryName} </p>
   <p>Views: {views}</p>
   <p>Favorites: {favoritedNum}</p>
   <span onClick={() => visitGallery(galleryName)}>Visit Gallery</span>
</div>
)
}

export default Favorites