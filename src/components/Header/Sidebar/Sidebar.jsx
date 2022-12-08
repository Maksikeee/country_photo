import { Input, Drawer } from "antd";
import React, { useState, useContext } from "react";
import { Continents } from "../../Continents/Continents";
import { countryPhotos } from "../../../store/CountryPhotos";

const { Search } = Input;

export const Sidebar = () => {
  const { getImg, open, setMainTitle, setCurrent } = countryPhotos;

  const [searchValue, setSearchValue] = useState("");

  const onSearch = (value) => {
    setSearchValue(value.toLowerCase());
  };

  const onChange = (searchCountry) => {
    getImg({ query: searchCountry, urlPage: 1 });
    setMainTitle(searchCountry);
    setCurrent(1);
  };

  return (
    <div className="super">
      <Drawer
        width="260px"
        style={{
          position: "absolute",
          overflow: "hidden",
        }}
        contentWrapperStyle={{ boxShadow: "none" }}
        getContainer=".super"
        mask={false}
        placement="left"
        open={!open}
        closable={false}
      >
        <Search
          placeholder="Filter by name"
          onSearch={onSearch}
          enterButton
          style={{ marginBottom: "10px" }}
        />

        <Continents onChange={onChange} searchValue={searchValue} />
      </Drawer>
    </div>
  );
};
