import axios from 'axios';

export async function getPhotos(data, page) {
  const url = `https://pixabay.com/api/?key=33929638-3d09c2b606ca8b58d00360aed&q=${data}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=15`;
  const response = await axios.get(url);
  return response.data.hits;
}
