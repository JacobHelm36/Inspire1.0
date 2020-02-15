import image from "../models/image.js"
import store from "../store.js"
// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  imgBack(){
  imgApi
    .get("")
    .then(res => {
      let imgGround = new image(res.data)
      store.commit("image", imgGround)
    })
    
  }
}

const imageService = new ImageService();
export default imageService;
