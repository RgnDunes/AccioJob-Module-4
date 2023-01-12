import React, { useEffect, useState } from "react";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [apiResp, setApiResp] = useState(null);
  const [postApiResp, setPostApiResp] = useState(null);

  useEffect(() => {
    asyncGetData();
    // getData();
    // postData();
    // deleteRequest();
  }, []);

  const asyncGetData = async () => {
    try {
      const response = await fetch(`${baseUrl}?_limit=10`, {
        method: "GET",
      });
      const data = await response.json();
      setApiResp(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((resp) => resp.json())
      .then((data) => {
        setApiResp(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // someUrl/:{id}

  const postData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        userId: Math.random().toString(36).slice(2),
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setPostApiResp(data);
        // console.log(data);
        // setApiResp(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteRequest = () => {
    const id = "1";
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((resp) => {
        if (resp.status === 200) {
          setApiResp(
            apiResp.filter((post) => {
              return post.id !== id;
            })
          );
          // getData();
        } else {
          return;
        }
      })
      .catch();
  };

  return (
    <div>
      {apiResp?.map((item, index) => {
        return (
          <div key={item.id}>
            UserId : {item.userId}
            ID : {item.userId}
            Title : {item.userId}
            Body: {item.userId}
          </div>
        );
      })}
      <hr />
      <div>
        UserId : {postApiResp?.userId}
        ID : {postApiResp?.userId}
        Title : {postApiResp?.userId}
        Body: {postApiResp?.userId}
      </div>
    </div>
  );
}

export default App;
