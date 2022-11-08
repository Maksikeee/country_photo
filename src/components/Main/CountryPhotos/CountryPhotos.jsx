import { countryPhotos } from "../../../store/CountryPhotos";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Image, Col, Row } from "antd";
import { SaveOutlined } from "@ant-design/icons";

export const CountryPhotos = observer(() => {
  const { loading, photosData, getImg } = countryPhotos;

  useEffect(() => {
    getImg();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading &&
        photosData.photos.map((photo) => (
          <Col flex="stretch">
            <Image
              height={430}
              preview={false}
              style={{
                display: "flex",
                borderRadius: "30px",
                height: "430px",
                width: "400px",
                objectFit: "cover",
                position: "relative",
              }}
              src={photo.src.large}
            />

            <Row
              justify="space-between"
              style={{
                alignItems: "center",
                width: "100%",
                position: "absolute",
                bottom: "25px",
                color: "white",
                padding: "0 30px",
              }}
            >
              <p style={{ margin: "0" }}>{photo.photographer}</p>
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <SaveOutlined style={{ fontSize: "18px" }} />
              </button>
            </Row>
          </Col>
        ))}
    </>
  );
});
