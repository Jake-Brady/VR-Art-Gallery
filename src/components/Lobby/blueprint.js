import React from 'react';
import '../Styles/blueprint.css'

const GalleryBluePrint = () => {
    return(
        <section id="blueprint">
            {/* Clicking Images enlarge them? Perhaps some other design for this window. */}
            <h2>Gallery Blueprint</h2>
            <h3>First Floor</h3>
            <img src="https://wcs.smartdraw.com/floor-plan/img/blueprint-example.png?bn=1510011143" alt="First floor blue print." />
            <h3>Second Floor</h3>
            <img src="https://wcs.smartdraw.com/floor-plan/img/house-design-blueprint-example.png?bn=1510011143" alt="Second floor blue print" />
        </section>
    )
}

export default GalleryBluePrint