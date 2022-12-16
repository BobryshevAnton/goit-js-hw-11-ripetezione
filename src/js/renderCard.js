import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

export default function renderCard(images) {
  const arr = images.data.hits;
  const imageList = arr
    .map(item => {
      return `
    <div class="photo-card"> 
      <a href="${item.largeImageURL}">
        <img  src="${item.webformatURL}" alt="${item.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item">
          <b>Likes: ${item.likes}</b>
        </p>
        <p class="info-item">
          <b>Views: ${item.views}</b>
        </p>
        <p class="info-item">
          <b>Comments: ${item.comments}</b>
        </p>
        <p class="info-item">
          <b>Downloads: ${item.downloads}</b>
        </p>
      </div>
    </div>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', imageList);
  const lightbox = new SimpleLightbox('.gallery a', {
    /* options */
  });
}
