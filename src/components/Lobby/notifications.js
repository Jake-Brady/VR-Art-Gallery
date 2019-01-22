import React from 'react'

const Notifications = (props) => {
let {followersOfGalleries, galleries} = props
let galleryNames = galleries.map(e => e.gallery_name)
console.log(galleryNames)

// console.log(followersOfGalleries, galleries)
// let galleriesWithFollowers = [];
// for(let i = 0; i < galleries.length; i++){
//     for(let v = 0; v < followersOfGalleries.length; v++){
//         if(galleries[i].gallery_name === followersOfGalleries[v].gallery_name){
//             galleriesWithFollowers.push(galleries[i].gallery_name, followersOfGalleries[v].username)
//         }
//     }
// }
// console.log(galleriesWithFollowers)
return(
  <section>
    <div>
        <h2>Stats Section</h2>
    </div>
    <div>
        <h2>Notifications Section</h2>
    </div>
  </section>
)
}

export default Notifications