import React from "react";

import "./button.module.scss";

const Filter = ({ handleFilter }) => {
  return (
    <div style={{ marginRight: "10px" }}>
      <select defaultValue="Filter" onChange={(e) => handleFilter(e)}>
        <option value="Filter">Filter</option>
        <option value="Month">Month</option>
        <option value="Year">Year</option>
      </select>
    </div>
  );
};

export default Filter;
