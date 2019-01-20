import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import {v4 as randomStringGenerator} from 'uuid';
import {GridLoader} from 'react-spinners'
import axios from 'axios'

class UploadImage extends Component{
    constructor(props){
        super(props)
            this.state={
                imageURL: 'http://via.placeholder.com/450x450',
                imageCaption: 'create a caption or leave blank.',
                isUploading: false
            }
    }

componentDidMount(){
    //Needs to check for existing images associated with gallery.
    
}
    
onChangeHandler(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}

getSignedRequest = ([file]) => {
    console.log(this.state.url)
    console.log(file)
    this.setState({ isUploading: true });
    const fileName = `${randomStringGenerator()}-${file.name.replace(/\s/g, '-')}`;
    axios
    .get('/api/amazons3/images/', {params: {'file-name': fileName,'file-type': file.type},
    })
    .then(res => {
      const { signedRequest, url } = res.data;
      console.log(url)
      this.uploadFile(file, signedRequest, url);
    })
    .catch(err => {
      console.log(err);
    });
}
uploadFile = (file, signedRequest, url) => {
    console.log(url)
    const options = {
      headers: {
        'Content-Type': file.type,
      },
    };

    axios
      .put(signedRequest, file, options)
      .then(res => {
        console.log(url)
        this.setState({ isUploading: false, imageURL:url })
        // .then(console.log("this is the url",url))
        // THEN DO SOMETHING WITH THE URL. SEND TO DB 
      })
      
      .catch(err => {
        this.setState({
          isUploading: false,
        });
        if (err.response.status === 403) {
          alert(
            `Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${
              err.stack
            }`
          );
        } else {
          alert(`ERROR: ${err.status}\n ${err.stack}`);
        }
      });
      console.log(url)
      console.log(url)
      console.log(this.state.thumbnail)

  };


onCancel() {
    this.setState({
        files: []
    });
}


render(){
    let {imageURL, imageCaption, isUploading} = this.state
    let {retrievingImages} = this.props
    console.log(retrievingImages)
    return(
        <div className="img-block">
            <h3>Frame 1</h3>
            <img src={imageURL} alt="This is what is in frame 1" width="450px" />
            <Dropzone
                onDropAccepted={this.getSignedRequest.bind(this)}
                onFileDialogCancel={this.onCancel.bind(this)}
                accept="image/*"
                multiple={false}
            >
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()} style={{
                        position: 'relative',
                        width: 200,
                        height: 200,
                        borderWidth: 7,
                        borderColor: 'rgb(102, 102, 102)',
                        borderStyle: 'dashed',
                        borderRadius: 5,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: 28,
                    }}>
                        <input {...getInputProps()} />
                        { isUploading 
                        ?  <GridLoader />
                        : <p>Drop File or Click Here</p>
                        }
                    </div>
                )}
            </Dropzone>
            <input name="imageURL" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Address"></input>
            {imageCaption}
            <input name="imageCaption" onChange={(e) => this.onChangeHandler(e)} placeholder="Image Caption (30 character limit"></input>
        </div>
    )
}
}

export default UploadImage