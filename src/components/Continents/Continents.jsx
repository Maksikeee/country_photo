import React, { useState, useContext } from "react";
import { Menu, Skeleton } from "antd";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import { Context } from "../../store/Context";
import { countryPhotos } from "../../store/CountryPhotos";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});

export const Continents = ({ onChange, searchValue }) => {
  const [continentsQuery] = useState(`{
    continents {
      name
      code
      countries {
        name
        code
      }
    }
  }`);

  // const { handleBreadCrumb, breadCrumb } = useContext(Context);
  const { breadCrumb, setBeadCrumb } = countryPhotos;

  const LIST_COUNTRIES = gql`
    ${continentsQuery}
  `;

  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });

  const onClick = (e) => {
    if (breadCrumb[0] !== e.key) {
      onChange(e.key);
      setBeadCrumb(e.key);
    }
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
    return (
      <div>
        {error ? (
          error.message
        ) : (
          <Skeleton
            active
            title={false}
            paragraph={{
              rows: 7,
            }}
          />
        )}
      </div>
    );
  }

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

  return (
    <>
      <Menu onClick={onClick} mode="inline" items={items()} />
    </>
  );
};
