import { Breadcrumb } from "antd";
import React, { useContext } from "react";
import { countryPhotos } from "../../../store/CountryPhotos";
import { Context } from "../../../store/Context";
import { RightOutlined } from "@ant-design/icons";

export const Crumb = () => {
  // const { breadCrumb, handleBreadCrumb } = useContext(Context);

  const { getImg, setMainTitle, setCurrent, breadCrumb, setBeadCrumb } =
    countryPhotos;

  const onClick = (searchCountry) => {
    if (breadCrumb[0] !== searchCountry.target.textContent) {
      getImg({ query: searchCountry.target.textContent, urlPage: 1 });
      setMainTitle(searchCountry.target.textContent);
      setCurrent(1);
      setBeadCrumb(searchCountry.target.textContent);
    }
  };

  const breadCrumbView = () => {
    return (
      <div>
        <Breadcrumb separator={<RightOutlined style={{ fontSize: "14px" }} />}>
          {breadCrumb.map((crumbItem, index) => {
            if (index !== 0) {
              return (
                <Breadcrumb.Item
                  onClick={(crumbItem) => onClick(crumbItem)}
                  key={crumbItem}
                >
                  {crumbItem}
                </Breadcrumb.Item>
              );
            }

            if (index === 0) {
              return (
                <Breadcrumb.Item key={crumbItem}>{crumbItem}</Breadcrumb.Item>
              );
            }
          })}
        </Breadcrumb>
      </div>
    );
  };
  return <>{breadCrumbView()}</>;
};
