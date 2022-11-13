import React, { useState, useContext } from "react";
import { Menu } from "antd";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import { Context } from "../../store/Context";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});

export const Continents = ({ onChange, searchValue }) => {
  const [continentsQuery, setContinentsQuery] = useState(`{
    continents {
      name
      code
      countries {
        name
        code
      }
    }
  }`);

  const { handleBreadCrumb } = useContext(Context);

  const LIST_COUNTRIES = gql`
    ${continentsQuery}
  `;

  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });
  const onClick = (e) => {
    onChange(e.key);
    handleBreadCrumb(e.key);
  };

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  if (loading || error) {
    return <p>{error ? error.message : "Loading..."}</p>;
  }

  // let arr = [];

  // const items =
  //   searchValue === ""
  //     ? data.continents.map((continent) => {
  //         return getItem(
  //           continent.name,
  //           continent.code,
  //           null,
  //           continent.countries.map((country) => {
  //             if (country.name.toLowerCase().includes(searchValue)) {
  //               arr = [...arr, getItem(country.name, country.name)];
  //               return getItem(country.name, country.name);
  //             }
  //           })
  //         );
  //       })
  //     : arr;

  const items = () => {
    let arr = [];
    let items = [];
    if (searchValue === "") {
      items = data.continents.map((continent) => {
        return getItem(
          continent.name,
          continent.code,
          null,
          continent.countries.map((country) => {
            if (country.name.toLowerCase().includes(searchValue)) {
              arr = [...arr, getItem(country.name, country.name)];
              return getItem(country.name, country.name);
            }
          })
        );
      });
      return items;
    } else {
      data.continents.map((continent) => {
        return getItem(
          continent.name,
          continent.code,
          null,
          continent.countries.map((country) => {
            if (country.name.toLowerCase().includes(searchValue)) {
              arr = [...arr, getItem(country.name, country.name)];
              return getItem(country.name, country.name);
            }
          })
        );
      });
      return arr;
    }
  };

  // console.log(arr);
  console.log(items());

  return (
    <>
      <Menu
        onClick={onClick}
        mode="inline"
        style={{
          width: 234,
          margin: "0 -24px",
        }}
        items={items()}
      />
    </>
  );
};
