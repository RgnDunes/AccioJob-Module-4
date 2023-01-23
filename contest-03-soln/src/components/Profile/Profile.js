import React, { useState, useEffect } from "react";

import "./Profile.css";

const Profile = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const id = localStorage.getItem("id");

    fetch(`https://dummyjson.com/users/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="user-container">
      <div className="user-img">
        <img src={data?.image} />
      </div>
      <div className="user-body">
        <div className="user-name">
          Name : {`${data?.firstName} ${data?.maidenName} ${data?.lastName}`}
        </div>
        <div className="user-email">Email : {data?.email}</div>
        <div className="user-address">
          Address :{" "}
          {`${data?.address?.address} ${data?.address?.city} ${data?.address?.state} ${data.address?.postalCode}`}
        </div>
      </div>
    </div>
  );
};

export default Profile;
