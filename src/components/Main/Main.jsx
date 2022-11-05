import { Col, Row } from "antd";
import { PagePagination } from "./PagePagination/PagePagination";
import { CountryPhotos } from "./CountryPhotos/CountryPhotos";
import { Crumb } from "./Crumb/Crumb";

export const Main = () => {
  return (
    <>
      <h1>Title</h1>
      <Row wrap={false} justify="space-between">
        <Col className="main" flex="stretch">
          <Crumb />
        </Col>
        <Col flex="none">
          <PagePagination />
        </Col>
      </Row>

      <Row gutter={[8, 8]}>
        <CountryPhotos />
      </Row>
    </>
  );
};
