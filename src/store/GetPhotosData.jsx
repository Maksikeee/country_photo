import { useState, useEffect } from "react";
const BASE_URL = "https://api.pexels.com/v1/search?";

export const GetPhotosData = () => {
  const [query, setQuery] = useState("people");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(BASE_URL + `page=${page}` + "per_page=9" + `query=${query}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "563492ad6f917000010000017bebf3a461ef4a8aa29c664153802a43",
      },
    });
  }, [query, page]);
};
