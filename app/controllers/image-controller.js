import ImageService from "../services/image-service.js";
import store from "../store.js"

function _drawImage() {
  let imgs = store.State.image
  document.querySelector("body").style.background = `url(${imgs.url})`
}
//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
export default class ImageController {
constructor(){
  ImageService.imgBack()
  store.subscribe("image", _drawImage)
}
}
