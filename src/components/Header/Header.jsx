import { Col, Row, Divider } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import React, { useContext } from "react";

import { Context } from "../../store/Context";

export const Header = () => {
  const { open, showDrawer } = useContext(Context);

  return (
    <div className="header">
      <Row wrap={false} align="middle" style={{ height: "45px" }}>
        <Col flex="none" style={{ fontSize: "20px" }}>
          {React.createElement(open ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: "trigger",
            onClick: showDrawer,
          })}
        </Col>
        <Col
          flex="auto"
          justify="center"
          align="middle"
          style={{ fontWeight: "900", fontSize: "20px" }}
        >
          Country photos
        </Col>
      </Row>
      <Divider style={{ margin: "0" }} />
    </div>
  );
};
