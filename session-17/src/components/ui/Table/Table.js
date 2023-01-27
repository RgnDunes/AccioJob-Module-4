import React from "react";

import "./Table.css";

const Table = ({ tableData, apiData }) => {
  return (
    <div className="table-container">
      <div className="table-body">
        <table>
          <tr>
            {tableData?.map((tableRow) => {
              return <th>{tableRow[0]}</th>;
            })}
          </tr>

          {tableData?.map((tableRow) => {
            return (
              <td>
                {apiData?.map((indivData) => {
                  return <tr>{tableRow[1](indivData)}</tr>;
                })}
              </td>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Table;
