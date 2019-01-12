import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import {v4 as randomStringGenerator} from 'uuid';
import {GridLoader} from 'react-spinners'

class ImageUploads extends Component{
    constructor(){
        super()
            this.state={
                image1: '',
                image2: '',
                image3: '',
                image4: '',
                image5: '',
                image6: '',
                image7: '',
                image8: '',
                image9: '',
                image10: '',
                image11: '',
                image12: '',
                image13: '',
                image14: '',
                image15: '',
            }
    }

componentDidMount(){
// GET user's image URLs from their images table.
}

render(){
    return(
    <section className="image-uploads">
    <h2>User-Uploaded Image Section</h2>
        <div className="img-block">

        </div>
        <div className="img-block">

        </div>
        <div className="img-block">

        </div>
        <div className="img-block">

        </div>
        <div className="img-block">

        </div>
        <div className="img-block">

        </div>
        <div className="img-block">

        </div>
        <div className="img-block">

        </div>
        <div className="img-block">

        </div>
        <div className="img-block">

        </div>
        <div className="img-block">

        </div>
        <div className="img-block">

        </div>
        <div className="img-block">

        </div>
        <div className="img-block">

        </div>
        <div className="img-block">

        </div>
        <div className="img-block">

        </div>

    </section>
    )
}
}

export default ImageUploads