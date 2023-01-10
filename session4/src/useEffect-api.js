import React, { useEffect, useState } from "react";

import axios from "axios";

const endpoint =
  "https://my-json-server.typicode.com/ifeanyidike/jsondata/users";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const { data } = await axios.get(endpoint);
    setUsers(data);
  };

  return (
    <div>
      {users.map((user) => {
        return (
          <div>
            <h2>{user.name}</h2>
            <p>Occupation : {user.job}</p>
            <p>Sex : {user.sex}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
