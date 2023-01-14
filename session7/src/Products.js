import React, { useState } from "react";

import { Link, useParams, Prompt } from "react-router-dom";

const Products = () => {
  const [inp, setInp] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const params = useParams();

  const handleSubmit = () => {
    setIsFormSubmitted(true);
  };

  return (
    <div>
      Products : ID : {params.productId123} <br />
      <Link to="/about">About Page</Link>
      <br />
      <Link to={`/products/${params.productId123}`}>Products Page</Link>
      <br />
      <Link to="/">Home Page</Link>
      <br />
      <input
        type="text"
        value={inp}
        onChange={(e) => {
          setInp(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>submit</button>
      <Prompt
        when={!isFormSubmitted}
        message={"Are you sure you want to go to other route ?"}
      />
    </div>
  );
};

export default Products;
