import axios from 'axios';

const form = document.querySelector('.search-form');
const btn = document.querySelector('.load-more');
const gallery = document.querySelector('.gallery');

let inputSearch = '';
let page = 1;
form.addEventListener('submit', handleSubmit);
btn.addEventListener('submit', handleSubmit);
btn.classList.add('is-hidden');

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { searchQuery },
  } = event.currentTarget;

  inputSearch = searchQuery.value;

  console.log(inputSearch);

  fetchImage(inputSearch, page)
    .then(images => {
      renderCard(images);
      page += 1;
      console.log(page);
      if (page > 1) {
        btn.textContent = 'Fetch more posts';
        btn.classList.remove('is-hidden');
      }
    })
    .catch(error => console.log(error));
}

async function fetchImage(inputSearch, page) {
  try {
    const response = await axios({
      url: `https://pixabay.com/api/`,
      params: {
        key: '28348938-0384dcc8789dbce7d9ed883a2',
        q: inputSearch,
        orientation: 'horizontal',
        image_type: 'photo',
        safesearch: true,
        page: page,
        per_page: 40,
      },
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
}
function renderCard(images) {
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
}
