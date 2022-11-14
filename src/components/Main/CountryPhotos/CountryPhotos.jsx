import { countryPhotos } from "../../../store/CountryPhotos";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Image, Col, Row, Modal, Button, Select } from "antd";
import { SaveOutlined } from "@ant-design/icons";

export const CountryPhotos = observer(() => {
  const { loading, photosData, getImg } = countryPhotos;
  const [srcOptions, setSrcOptions] = useState([]);
  const [imgLink, setImgLink] = useState("original");

  function saveImg(blob) {
    let link = document.createElement("a");
    link.setAttribute("href", URL.createObjectURL(blob));
    link.setAttribute("download", `${Date.now()}`);
    link.click();
  }

  const handleSetImgLink = (value) => {
    setImgLink(value);
  };

  useEffect(() => {
    getImg();
  }, []);

  const [open, setOpen] = useState(false);

  const showModal = (photoData) => {
    setOpen(true);
    console.log(photoData.src);

    handleSetSrcOptions(photoData.src);
  };

  const handleSetSrcOptions = (photoSrc) => {
    console.log(photoSrc);
    setSrcOptions({ ...srcOptions, ...photoSrc });
    // console.log(srcOptions);
  };

  const handleChange = (value) => {
    handleSetImgLink(value);
  };

  const handleLoad = () => {
    console.log(srcOptions);
    console.log(imgLink);
    console.log(srcOptions[`${imgLink}`]);

    fetch(`${srcOptions[`${imgLink}`]}`)
      .then((resp) => resp.blob())
      .then((blob) => saveImg(blob));

    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

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
              <p style={{ margin: "0", fontWeight: "500" }}>
                {photo.photographer}
              </p>
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <SaveOutlined
                  onClick={() => showModal(photo)}
                  style={{ fontSize: "20px" }}
                />
              </button>
              <Modal
                maskStyle={{
                  backdropFilter: "blur(1px)",
                  background: "rgba(255, 255, 255, 0.1)",
                }}
                closable={false}
                open={open}
                title="Выберите размер фотографии, котору следует загрузить"
                footer={[
                  <Button key="back" onClick={handleCancel}>
                    Отменить
                  </Button>,
                  <Button key="link" type="primary" onClick={handleLoad}>
                    Загрузить
                  </Button>,
                ]}
              >
                <Select
                  defaultValue="original"
                  style={{
                    width: 120,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      label: "landscape",
                      value: "landscape",
                    },
                    {
                      label: "large",
                      value: "large",
                    },
                    {
                      label: "large2x",
                      value: "large2x",
                    },
                    {
                      label: "medium",
                      value: "medium",
                    },
                    {
                      label: "original",
                      value: "original",
                    },
                    {
                      label: "portrait",
                      value: "portrait",
                    },
                    {
                      label: "small",
                      value: "small",
                    },
                    {
                      label: "tiny",
                      value: "tiny",
                    },
                  ]}
                />
              </Modal>
            </Row>
          </Col>
        ))}
    </>
  );
});
