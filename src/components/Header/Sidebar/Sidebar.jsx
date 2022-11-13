import { Input, Drawer } from "antd";
import React, { useState, useContext } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Continents } from "../../Continents/Continents";
import { countryPhotos } from "../../../store/CountryPhotos";

import { Context } from "../../../store/Context";

const { Search } = Input;

export const Sidebar = () => {
  const { setCurrent, setMainTitle } = useContext(Context);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(!open);
  };

  const { getImg } = countryPhotos;

  const [searchValue, setSearchValue] = useState("");

  const onSearch = (value) => {
    // getImg({ query: value, urlPage: 1 });
    // setCurrent(1);
    setSearchValue(value.toLowerCase());
  };

  const onChange = (searchCountry) => {
    getImg({ query: searchCountry, urlPage: 1 });
    setMainTitle(searchCountry);
    setCurrent(1);
  };

  return (
    <div>
      <MenuOutlined onClick={showDrawer} style={{ fontSize: "30px" }} />
      <Drawer
        closable={false}
        placement="left"
        open={open}
        width={260}
        style={{ top: "45px" }}
        getContainer=".main"
        mask={false}
        height={300}
      >
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
          style={{ marginBottom: "10px" }}
        />

        <Continents onChange={onChange} searchValue={searchValue} />
      </Drawer>
    </div>
  );
};
