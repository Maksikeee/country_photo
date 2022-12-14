import { makeAutoObservable, runInAction } from "mobx";

class CountryPhotos {
  loading = true;
  photosData = {};

  searchFields = {
    urlPage: "1",
    query: "Angola",
  };

  constructor() {
    makeAutoObservable(this, undefined, {
      autoBind: true,
    });
  }

  async getImg(obj) {
    this.loading = true;

    this.searchFields = { ...this.searchFields, ...obj };

    const baseURL = `https://api.pexels.com/v1/search/?page=${this.searchFields.urlPage}&per_page=9&query=${this.searchFields.query}`;
    this.loadPhotos(baseURL);
  }

  async loadPhotos(baseURL) {
    fetch(baseURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "563492ad6f917000010000017bebf3a461ef4a8aa29c664153802a43",
      },
    })
      .then((response) => response.json())
      .then((data) =>
        runInAction(() => {
          this.photosData = data;
          this.loading = false;
        })
      );
  }

  open = true;
  showDrawer() {
    this.open = !this.open;
  }

  mainTitle = "Angola";
  setMainTitle(searchCountry) {
    this.mainTitle = searchCountry;
  }

  current = "1";
  setCurrent(page) {
    this.current = page;
  }

  breadCrumb = [this.mainTitle];
  setBeadCrumb(historyValue) {
    if (this.breadCrumb.length >= 5) {
      this.breadCrumb.pop();
      this.breadCrumb = [historyValue, ...this.breadCrumb];
    } else {
      this.breadCrumb = [historyValue, ...this.breadCrumb];
    }
  }
}

const countryPhotos = new CountryPhotos();
export { countryPhotos };
