import axios from 'axios';

export let totalResults = 0;

export async function getPhotos(data, page = 1) {
  const url = `https://pixabay.com/api/?key=33929638-3d09c2b606ca8b58d00360aed&q=${data}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=15`;
  const response = await axios.get(url);
  totalResults = response.data.totalHits;
  return response.data.hits;
}
