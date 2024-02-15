import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { galleryRef } from './js/render-functions';
import { totalResults } from './js/pixabay-api';
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
    if (!photos.length) {
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
      loadMoreRef.classList.remove('hidden');
    }
  } catch (error) {
    console.error('Error:', error);
  }
  checkBtnStatus();
}

async function onLoadMoreClick() {
  currentPage += 1;
  const photos = await getPhotos(query, currentPage);
  photoTemplate(photos);
  renderPhotos(photos);
  checkBtnStatus();
}

function checkBtnStatus() {
  const maxPage = Math.ceil(totalResults / pageSize);
  const isLastPage = maxPage <= currentPage;
  if (isLastPage) {
    loadMoreRef.classList.add('hidden');
    iziToast.error({
      title: 'Sorry',
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
  } else {
    loadMoreRef.classList.remove('hidden');
  }
}
