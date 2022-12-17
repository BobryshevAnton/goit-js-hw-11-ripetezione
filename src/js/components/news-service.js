export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    const url = `https://pixabay.com/api/?key=32040937-f5067777972aaaf890ed94a62&q=${this.searchQuery}&image_type=photo&page=${this.page}&per_page=40
`;

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.incrementPage();

        return data;
      });
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  get numberPage() {
    return this.page;
  }

  set numberPage(newPage) {
    this.page = newPage;
  }
}
