import React from "react";

import { useQuery } from "react-query";

const Component1 = () => {
  const getFacts = async () => {
    const resp = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    console.log(resp.json());
    return resp.json();
  };

  const { data, error, isLoading, refetch } = useQuery(
    "randomFacts",
    getFacts,
    {
      enabled: false,
    }
  );

  if (error) return <div>Request Failed !</div>;

  return <div>{isLoading ? "Loading ..." : "Data loaded !"}</div>;
};

export default Component1;
