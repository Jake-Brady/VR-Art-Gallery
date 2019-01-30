const initialState = {
    images: [],
    imagesHaveLoaded: false
  }
  
  const SET_IMAGES = 'SET_IMAGES'
  const SET_IMAGES_HAVE_LOADED = 'SET_IMAGES_HAVE_LOADED'
       
  export function setImages (images) {
    return {
      type: SET_IMAGES,
      payload: images
    }
  }

  export function imagesHaveLoaded(truth){
    return{
      type: SET_IMAGES_HAVE_LOADED,
      payload: truth
    }
  }
  
function reducer (state = initialState, action) {
    switch(action.type) {
      case SET_IMAGES:
        return Object.assign({}, state, {images: action.payload})
      case SET_IMAGES_HAVE_LOADED:
        return Object.assign({}, state, {imagesHaveLoaded: action.payload})
      
      default: return state
    }
  }
  
  export default reducer