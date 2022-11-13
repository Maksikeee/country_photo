import { Breadcrumb } from "antd";
import React, { useContext } from "react";
import { countryPhotos } from "../../../store/CountryPhotos";
import { Context } from "../../../store/Context";

export const Crumb = () => {
  const { setCurrent, setMainTitle, breadCrumb, handleBreadCrumb } =
    useContext(Context);

  const { getImg } = countryPhotos;

  const onClick = (searchCountry) => {
    getImg({ query: searchCountry.target.textContent, urlPage: 1 });
    setMainTitle(searchCountry.target.textContent);
    setCurrent(1);
    handleBreadCrumb(searchCountry.target.textContent);
  };

  const breadCrumbView = () => {
    return (
      <div>
        <Breadcrumb>
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
        {/* <Breadcrumb>
          {pathnames.length > 0 ? (
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          )}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <Breadcrumb.Item>{name}</Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item>
                <Link onClick={onClick} to={`${routeTo}`}>
                  {name}
                </Link>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb> */}
      </div>
    );
  };
  return (
    // <Breadcrumb separator={<RightOutlined style={{ fontSize: "14px" }} />}>
    //   <Breadcrumb.Item>Home</Breadcrumb.Item>
    //   <Breadcrumb.Item>
    //     <a href="">Application Center</a>
    //   </Breadcrumb.Item>
    //   <Breadcrumb.Item>
    //     <a href="">Application List</a>
    //   </Breadcrumb.Item>
    //   <Breadcrumb.Item>An Application</Breadcrumb.Item>
    // </Breadcrumb>

    <>{breadCrumbView()}</>
  );
};
