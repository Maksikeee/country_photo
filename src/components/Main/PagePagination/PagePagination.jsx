import { Pagination } from "antd";
import React, { useState } from "react";
export const PagePagination = () => {
  const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <Pagination
      style={{
        width: "260px",
        display: "flex",
        justifyContent: "space-between",
      }}
      current={current}
      size="small"
      onChange={onChange}
      total={50}
    />
  );
};
