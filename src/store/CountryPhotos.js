import { makeAutoObservable } from "mobx";

class CountryPhotos {
  loading = true;
  photosData = {};

  searchFields = {
    urlPage: "1",
    query: "police",
  };

  constructor() {
    makeAutoObservable(this, undefined, {
      autoBind: true,
    });
  }

  async getImg(obj) {
    this.searchFields = { ...this.searchFields, ...obj };

    const baseURL = `https://api.pexels.com/v1/search/?page=${this.searchFields.urlPage}&per_page=9&query=${this.searchFields.query}`;
    this.loadPhotos(baseURL);
  }

  async loadPhotos(baseURL) {
    const response = await fetch(baseURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "563492ad6f917000010000017bebf3a461ef4a8aa29c664153802a43",
      },
    });

    this.photosData = await response.json();
    this.loading = false;
  }
}

const countryPhotos = new CountryPhotos();
export { countryPhotos };
