import React  from 'react'
import UploadImage from './uploadImage'

const UploadGalleryImages = (props) => {
let {retrievingImages} = props
console.log(retrievingImages)
    return(
    <section id="image-uploaders">
    <h2>User-Uploaded Image Section</h2>
        <UploadImage 
        retrievingImages={retrievingImages}
        />
        <UploadImage
        retrievingImages={retrievingImages}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        />
    </section>
    )
}


export default UploadGalleryImages