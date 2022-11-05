import { makeAutoObservable } from "mobx";

class CountryPhotos {
  loading = true;
  photosData = {};

  constructor() {
    makeAutoObservable(this, undefined, {
      autoBind: true,
    });
  }

  async loadPhotos() {
    const response = await fetch(
      "https://api.pexels.com/v1/curated?page=3&per_page=6",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization:
            "563492ad6f917000010000017bebf3a461ef4a8aa29c664153802a43",
        },
      }
    );

    this.photosData = await response.json();
    this.loading = false;
  }
}

const countryPhotos = new CountryPhotos();
export default countryPhotos;
