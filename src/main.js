import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { galleryRef } from './js/render-functions';
import { getPhotos } from './js/pixabay-api';
import { photoTemplate } from './js/render-functions';
import { renderPhotos } from './js/render-functions';

const inputRef = document.querySelector('#searchInput');
const btnRef = document.querySelector('button[type="submit"]');
const formRef = document.querySelector('.js-form');
const loaderRef = document.querySelector('.loader');
const loadMoreRef = document.querySelector('.load');
let query = '';
let currentPage = 1;
let totalResults = 0;
const pageSize = 15;

btnRef.addEventListener('click', onButtonSubmit);
loadMoreRef.addEventListener('click', onLoadMoreClick);

async function onButtonSubmit(e) {
  e.preventDefault();
  query = inputRef.value.trim();
  if (!query) return;
  loaderRef.classList.add('is-shown');
  galleryRef.innerHTML = '';
  formRef.reset();
  try {
    const photos = await getPhotos(query);
    if (photos.length === 0) {
      iziToast.error({
        title: 'Sorry',
        message:
          'There are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      loaderRef.classList.remove('is-shown');
      currentPage = 1;
      photoTemplate(photos);
      renderPhotos(photos);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

async function onLoadMoreClick() {
  currentPage += 1;
  const photos = await getPhotos(query, currentPage);
  photoTemplate(photos);
  renderPhotos(photos);
}
