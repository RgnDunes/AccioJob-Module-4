import React, { useEffect, useState } from "react";

import axios from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

const App = () => {
  const [apiResp, setapiResp] = useState(null);

  useEffect(() => {
    // getRequest();
    // postRequest();
    // deleteRequest();
    // getData();
    asyncGetRequest();
    getRequest();
  }, []);

  const getRequest = () => {
    client.get("?_limit=10").then((resp) => {
      console.log(resp);
      setapiResp(resp.data);
    });
  };

  const postRequest = () => {
    const body = {
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      userId: Math.random().toString(36).slice(2),
    };

    client.post("", { body: body }).then((resp) => console.log(resp.data));
  };

  const deleteRequest = () => {
    const id = 1;
    client.delete(`${id}`);
    // getRequest();
  };

  const asyncGetRequest = async () => {
    try {
      const resp = await client.get("?_limit=10");
      console.log(resp);
    } catch (error) {}
  };

  return <div>App</div>;
};

export default App;
