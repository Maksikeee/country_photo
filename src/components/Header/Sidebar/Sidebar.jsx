import { Input, Drawer } from "antd";
import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Continents } from "../../Continents/Continents";

const { Search } = Input;

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(!open);
  };

  const onSearch = (value) => console.log(value);

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

        <Continents />
      </Drawer>
    </div>
  );
};
