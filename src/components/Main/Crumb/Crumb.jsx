import { Breadcrumb } from "antd";
import React from "react";
import { RightOutlined } from "@ant-design/icons";

export const Crumb = () => (
  <Breadcrumb separator={<RightOutlined style={{ fontSize: "14px" }} />}>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application Center</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
);
