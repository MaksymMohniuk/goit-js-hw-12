import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const galleryRef = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function photoTemplate(photo) {
  return `
    <li class="gallery-item">
      <a href="${photo.largeImageURL}">
      <img src="${photo.webformatURL}" alt="${photo.tags}">
      <div class="card-body">
        <p class="card-text">Likes: ${photo.likes}</p>
        <p class="card-text">Views: ${photo.views}</p>
        <p class="card-text">Comments: ${photo.comments}</p>
        <p class="card-text">Downloads: ${photo.downloads}</p>
      </div>
      </a>
    </li>`;
}

export function renderPhotos(photos) {
  const markup = photos.map(photo => photoTemplate(photo)).join('');
  galleryRef.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}
