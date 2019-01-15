import React from 'react'
import '../Styles/favorites.css'

const Favorites = (props) => {
let {key, image, views, favoritedNum, visitGallery } = props
return(
<section key={key} className="favorites-section">
   <image src={image} alt="Gallery thumbnail" />
   <p>Views: {views}</p>
   <p>Favorites: {favoritedNum}</p>
   <span onClick={() => visitGallery()}>Visit Gallery</span>
</section>
)
}

export default Favorites