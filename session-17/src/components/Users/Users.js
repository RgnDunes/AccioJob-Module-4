import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Table from "../ui/Table/Table";
import { axiosClient } from "../../axiosClient";
import { ADD_USERS_LIST } from "../../store/actions";
import Input from "../ui/Input/Input";

const Users = () => {
  const [id, setId] = useState("");
  const [collection, setCollection] = useState([]);

  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    axiosClient.get("users?page=2").then((resp) => {
      dispatch({ type: ADD_USERS_LIST, payload: resp.data });
      setCollection(resp?.data?.data);
    });
  }, []);

  const tableData = [
    [
      "ID",
      (item) => {
        return item.id;
      },
    ],
    [
      "Email",
      (item) => {
        return item.email;
      },
    ],
    [
      "First Name",
      (item) => {
        return item.first_name;
      },
    ],
    [
      "Last Name",
      (item) => {
        return item.last_name;
      },
    ],
  ];

  const handleFiltersChange = (e) => {
    const { name, value } = e.target;
    let newCollection = [...collection];

    if (name === "id") {
      newCollection = collection.filter((dataRow) => {
        if (dataRow.id === parseInt(value)) return dataRow;
      });
    }

    setCollection(newCollection);
  };

  return (
    <div>
      <div className="table-filters">
        <Input name="id" value={id} onChange={handleFiltersChange} label="ID" />
      </div>
      <Table tableData={tableData} apiData={collection} />
    </div>
  );
};

export default Users;
