import React from 'react'
import '../Styles/favorites.css'

const Favorites = (props) => {
let {listOfFavorites} = props
return(
<section className="favorites-section">
    <h2>Favorites Section</h2>
    {listOfFavorites}
</section>
)
}

export default Favorites