import { Col, Row } from "antd";
import { PagePagination } from "./PagePagination/PagePagination";
import { Context } from "../../store/Context";
import { useContext } from "react";

import { CountryPhotos } from "./CountryPhotos/CountryPhotos";
import { Crumb } from "./Crumb/Crumb";

export const Main = () => {
  const { mainTitle } = useContext(Context);

  return (
    <>
      <h2>{mainTitle}</h2>
      <Row
        wrap={false}
        justify="space-between"
        style={{ padding: "30px 50px" }}
      >
        <Col className="main" flex="stretch">
          <Crumb />
        </Col>
        <Col flex="none">
          <PagePagination />
        </Col>
      </Row>

      <Row gutter={[8, 0]}>
        <CountryPhotos />
      </Row>
    </>
  );
};
