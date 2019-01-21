import React  from 'react'
import UploadImage from './uploadImage'

const UploadGalleryImages = (props) => {
let {retrievingImages, existingImages, existingCaptions} = props
// existingImages array elements are being passed via props to each respective UploadImages component's state to be displayed so user can see what is currently existing in this gallery.
console.log(existingImages)
    return(
    <section id="image-uploaders">
    <h2>User-Uploaded Image Section</h2>
        <UploadImage 
        retrievingImages={retrievingImages}
        imageURL={existingImages[0]}
        imageCaption={existingCaptions[0]}
        />
        <UploadImage
        retrievingImages={retrievingImages}
        imageURL={existingImages[1]}
        imageCaption={existingCaptions[1]}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        imageURL={existingImages[2]}
        imageCaption={existingCaptions[2]}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        imageURL={existingImages[3]}
        imageCaption={existingCaptions[3]}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        imageURL={existingImages[4]}
        imageCaption={existingCaptions[4]}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        imageURL={existingImages[5]}
        imageCaption={existingCaptions[5]}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        imageURL={existingImages[6]}
        imageCaption={existingCaptions[6]}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        imageURL={existingImages[7]}
        imageCaption={existingCaptions[7]}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        imageURL={existingImages[8]}
        imageCaption={existingCaptions[8]}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        imageURL={existingImages[9]}
        imageCaption={existingCaptions[9]}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        imageURL={existingImages[10]}
        imageCaption={existingCaptions[10]}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        imageURL={existingImages[11]}
        imageCaption={existingCaptions[11]}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        imageURL={existingImages[12]}
        imageCaption={existingCaptions[12]}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        imageURL={existingImages[13]}
        imageCaption={existingCaptions[13]}
        />
        <UploadImage 
        retrievingImages={retrievingImages}
        imageURL={existingImages[14]}
        imageCaption={existingCaptions[14]}
        />
    </section>
    )
}


export default UploadGalleryImages