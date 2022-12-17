import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix';
import { renderCardContainer } from './js/renderCardContainer';

import NewsApiService from './js/components/news-service';

const refs = {
  searchForm: document.querySelector('#search-form'),
  galleryContainer: document.querySelector('.gallery'),
  loadMoreButton: document.querySelector('.load-more'),
  searchButton: document.querySelector('#search-form>button'),
  buttonDiv: document.querySelector('.button-more'),
};

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', handleSubmit);
refs.loadMoreButton.addEventListener('click', onLoadMore);
refs.loadMoreButton.classList.add('is-hidden');
refs.buttonDiv.classList.add('is-hidden');

function handleSubmit(event) {
  event.preventDefault();

  newsApiService.query = event.currentTarget.searchQuery.value;
  newsApiService.resetPage();
  if (newsApiService.query === '') {
    failureMessege(newsApiService.query);
    return;
  }

  newsApiService.fetchArticles().then(data => {
    // console.log(newsApiService.numberPage);
    cleanConteiner();
    renderCardContainer(data.hits);
    console.log(data);
    offButton();
  });

  //   newsApiService.fetchArticles().then(data => {
  //     console.log(data.totalHits);
  //   if (!data.hits) {
  //     Notiflix.Notify.failure(
  //       'Sorry, there are no images matching your search query. Please try again.'
  //     );
  //     return;
  //   } else if (data.totalHits <= page * 40) {
  //     Notiflix.Notify.failure('O-o-ops, pictures are over');
  //     return;
  //   }
  //   cleanConteiner();
  //   renderCardContainer(data.hits);
  //   offButton();
  // })
  // .catch(() => {
  //   Notiflix.Notify.failure(
  //     'Sorry, there are no images matching your search query. Please try again.'
  //   );
  //   });
}

function onLoadMore() {
  newsApiService.fetchArticles().then(data => renderCardContainer(data.hits));
}

function cleanConteiner() {
  refs.galleryContainer.innerHTML = '';
}
function offButton() {
  refs.loadMoreButton.classList.add('hidden');
  refs.loadMoreButton.textContent = 'Load More ...';
  refs.buttonDiv.classList.add('hidden');
}
// function onButton() {
//   refs.searchButton.classList.remove('is-hidden');
// }

function failureMessege() {
  Notiflix.Notify.warning('The search does not have to be empty!');
  refs.galleryContainer.innerHTML = '';
}
