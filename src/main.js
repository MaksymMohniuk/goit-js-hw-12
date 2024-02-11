import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getPhotos } from './js/pixabay-api';
import { photoTemplate } from './js/render-functions';
import { renderPhotos } from './js/render-functions';

const inputRef = document.querySelector('#searchInput');
const btnRef = document.querySelector('button[type="submit"]');
const formRef = document.querySelector('.js-form');
const loaderRef = document.querySelector('.loader');

btnRef.addEventListener('click', onButtonSubmit);

function onButtonSubmit(e) {
  e.preventDefault();
  const value = inputRef.value.trim();
  if (!value) return;
  loaderRef.classList.add('is-shown');
  formRef.reset();
  try {
    const photos = getPhotos(value);
    if (!photos.data.hits.length) {
      iziToast.error({
        title: 'Sorry',
        message:
          'There are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      loaderRef.classList.remove('is-shown');
      photoTemplate(photo);
      renderPhotos(photos.data.hits);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
