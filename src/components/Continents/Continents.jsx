import React from "react";
import { Menu } from "antd";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});

const LIST_COUNTRIES = gql`
  {
    continents {
      name
      code
      countries {
        name
        code
      }
    }
  }
`;

export const Continents = () => {
  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });

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
  const items = data.continents.map((continent) =>
    getItem(
      continent.name,
      continent.code,
      null,
      continent.countries.map((country) => getItem(country.name, country.code))
    )
  );

  return (
    <>
      <Menu
        mode="inline"
        style={{
          width: 234,
          margin: "0 -24px",
        }}
        items={items}
      />
    </>
  );
};
