import React from 'react'
import UploadImage from './uploadImage'

const UploadGalleryImages = (props) => {
    let { retrievingImageData, existingImages, existingCaptions } = props
    // existingImages array elements are being passed via props to each respective UploadImages component's state to be displayed so user can see what is currently existing in this gallery.
    return (
        <section className="image-uploaders">
            <UploadImage
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[0]}
                imageCaption={existingCaptions[0]}
            />
            <UploadImage
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[1]}
                imageCaption={existingCaptions[1]}
            />
            <UploadImage
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[2]}
                imageCaption={existingCaptions[2]}
            />
            <UploadImage
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[3]}
                imageCaption={existingCaptions[3]}
            />
            <UploadImage
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[4]}
                imageCaption={existingCaptions[4]}
            />
            <UploadImage
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[5]}
                imageCaption={existingCaptions[5]}
            />
            <UploadImage
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[6]}
                imageCaption={existingCaptions[6]}
            />
            <UploadImage
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[7]}
                imageCaption={existingCaptions[7]}
            />
            <UploadImage
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[8]}
                imageCaption={existingCaptions[8]}
            />
            <UploadImage
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[9]}
                imageCaption={existingCaptions[9]}
            />
            <UploadImage
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[10]}
                imageCaption={existingCaptions[10]}
            />
            <UploadImage
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[11]}
                imageCaption={existingCaptions[11]}
            />
            <UploadImage
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[12]}
                imageCaption={existingCaptions[12]}
            />
            <UploadImage
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[13]}
                imageCaption={existingCaptions[13]}
            />
            <UploadImage
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[14]}
                imageCaption={existingCaptions[14]}
            />
        </section>
    )
}


export default UploadGalleryImages