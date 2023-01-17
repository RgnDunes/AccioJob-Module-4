import React from "react";

import { useSearchParams } from "react-router-dom";

const SearchParamaeters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return <div>SearchParamaeters : {searchParams.get("n")}</div>;
};

export default SearchParamaeters;
