import { Col, Row } from "antd";
import { Sidebar } from "./Sidebar/Sidebar";

export const Header = () => {
  return (
    <>
      <Row wrap={false} align="middle" style={{ height: "45px" }}>
        <Col flex="none">
          <div style={{ padding: "0 16px" }}>
            <Sidebar />
          </div>
        </Col>
        <Col
          flex="auto"
          justify="center"
          align="middle"
          style={{ fontWeight: "900", fontSize: "20px" }}
        >
          {/* <p className="header__title">Country photos</p> */}
          Country photos
        </Col>
      </Row>
    </>
  );
};
