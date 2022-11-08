import { Pagination } from "antd";
import React, { useEffect, useContext } from "react";
import { countryPhotos } from "../../../store/CountryPhotos";
import { Context } from "../../../store/Context";
import { observer } from "mobx-react-lite";

export const PagePagination = observer(() => {
  const { photosData, getImg } = countryPhotos;

  const { current, setCurrent } = useContext(Context);

  useEffect(() => {
    getImg();
    setCurrent(1);
  }, []);

  const onChange = (page) => {
    getImg({ urlPage: page });
    setCurrent(page);
  };
  return (
    <Pagination
      style={{
        width: "260px",
        display: "flex",
        justifyContent: "space-between",
      }}
      current={current}
      size="small"
      onChange={onChange}
      total={photosData.total_results}
    />
  );
});
