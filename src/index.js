// // import axios from 'axios';
// import Notiflix from 'notiflix';

// import renderCard from './js/renderCard';
// import { fetchImage } from './js/fetchImage';

// const form = document.querySelector('.search-form');
// const btn = document.querySelector('.load-more');
// const divBtn = document.querySelector('.button-more');
// const gallery = document.querySelector('.gallery');
// let page = 1;
// let inputSearch = '';

// form.addEventListener('submit', handleSubmit);
// btn.addEventListener('click', handleSubmit);

// btn.classList.add('is-hidden');
// divBtn.classList.add('is-hidden');

// function handleSubmit(event) {
//   event.preventDefault();
//   gallery.innerHTML = '';
//   // const {
//   //   elements: { searchQuery },
//   // } = event.currentTarget;

//   // inputSearch = searchQuery.value;
//   inputSearch = event.target.searchQuery.value;
//   page += 1;
//   if (!inputSearch) {
//     Notiflix.Notify.warning('The search does not have to be empty!');

//     btn.classList.remove('hidden');
//     divBtn.classList.remove('hidden');

//     return;
//   }

//   fetchImage(inputSearch, page)
//     .then(images => {
//       // consol.log(images);
//       if (!images.data.total) {
//         Notiflix.Notify.failure(
//           'Sorry, there are no images matching your search query. Please try again.'
//         );
//         return;
//       } else if (images.data.totalHits <= (page - 1) * 40) {
//         Notiflix.Notify.failure('O-o-ops, pictures are over');
//         btn.classList.remove('hidden');
//         divBtn.classList.remove('hidden');
//         return;
//       }
//       renderCard(images);
//       btn.classList.add('hidden');
//       divBtn.classList.add('hidden');

//       Notiflix.Notify.success(
//         `Hooray! We found pictures from ${images.data.totalHits} images.`
//       );
//     })
//     .catch(() => {
//       Notiflix.Notify.failure(
//         'Sorry, there are no images matching your search query. Please try again.'
//       );
//     });
// }
// const url = `https://pixabay.com/api/?q=cat&page=1&per_page=40`;
