import { searchImages } from 'pixabay-api'
var AUTH_KEY = '8825240-c7cbb4a0c138d3f87d226a813';


function findImage() {
  searchImages(AUTH_KEY, 'brown puppy').then((res) => {
    let imgs = res.hits.map(hit => {
      return hit.largeImageURL
    })
  })
}

export default findImage;