const refs = {
  galleryContainer: document.querySelector('.gallery'),
};

export function renderCardContainer(data) {
  const imageList = data
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

  refs.galleryContainer.insertAdjacentHTML('beforeend', imageList);
  const lightbox = new SimpleLightbox('.gallery a', {
    /* options */
  });
}
