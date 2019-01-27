import React from 'react'
import UploadImage from './uploadImage'

const UploadGalleryImages = (props) => {
    let { retrievingImageData, existingImages, existingCaptions, finalCountdown } = props
    // existingImages array elements are being passed via props to each respective UploadImages component's state to be displayed so user can see what is currently existing in this gallery.
    return (
        <section className="image-uploaders">
            <UploadImage
                finalCountdown={finalCountdown}
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[0]}
                imageCaption={existingCaptions[0]}
            />
            <UploadImage
                finalCountdown={finalCountdown}
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[1]}
                imageCaption={existingCaptions[1]}
            />
            <UploadImage
                finalCountdown={finalCountdown}
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[2]}
                imageCaption={existingCaptions[2]}
            />
            <UploadImage
                finalCountdown={finalCountdown}
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[3]}
                imageCaption={existingCaptions[3]}
            />
            <UploadImage
                finalCountdown={finalCountdown}
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[4]}
                imageCaption={existingCaptions[4]}
            />
            <UploadImage
                finalCountdown={finalCountdown}
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[5]}
                imageCaption={existingCaptions[5]}
            />
            <UploadImage
                finalCountdown={finalCountdown}
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[6]}
                imageCaption={existingCaptions[6]}
            />
            <UploadImage
                finalCountdown={finalCountdown}
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[7]}
                imageCaption={existingCaptions[7]}
            />
            <UploadImage
                finalCountdown={finalCountdown}
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[8]}
                imageCaption={existingCaptions[8]}
            />
            <UploadImage
                finalCountdown={finalCountdown}
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[9]}
                imageCaption={existingCaptions[9]}
            />
            <UploadImage
                finalCountdown={finalCountdown}
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[10]}
                imageCaption={existingCaptions[10]}
            />
            <UploadImage
                finalCountdown={finalCountdown}
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[11]}
                imageCaption={existingCaptions[11]}
            />
            <UploadImage
                finalCountdown={finalCountdown}
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[12]}
                imageCaption={existingCaptions[12]}
            />
            <UploadImage
                finalCountdown={finalCountdown}
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[13]}
                imageCaption={existingCaptions[13]}
            />
            <UploadImage
                finalCountdown={finalCountdown}
                retrievingImageData={retrievingImageData}
                imageURL={existingImages[14]}
                imageCaption={existingCaptions[14]}
            />
        </section>
    )
}


export default UploadGalleryImages