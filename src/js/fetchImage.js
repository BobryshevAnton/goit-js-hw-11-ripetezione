import axios from 'axios';

async function fetchImage(inputSearch, page) {
  page -= 1;
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
    page += 1;
    return response;
  } catch (error) {
    console.log(error.message);
  }
}
export { fetchImage };
