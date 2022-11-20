import { Col, Row } from "antd";
import { PagePagination } from "./PagePagination/PagePagination";
import { Context } from "../../store/Context";
import { useContext } from "react";

import { CountryPhotos } from "./CountryPhotos/CountryPhotos";
import { Crumb } from "./Crumb/Crumb";

export const Main = () => {
  const { mainTitle } = useContext(Context);

  return (
    <div className="main">
      <h2>{mainTitle}</h2>
      <Row
        className="main__top"
        wrap={false}
        justify="space-between"
        style={{ padding: "30px 0" }}
      >
        <Col className="main__crumbs" flex="stretch">
          <Crumb />
        </Col>
        <Col flex="none">
          <PagePagination />
        </Col>
      </Row>

      <Row className="image-area" gutter={[8, 0]} justify="space-between">
        <CountryPhotos />
      </Row>
    </div>
  );
};
