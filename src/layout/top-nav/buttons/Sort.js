import React from "react";

import "./button.module.scss";

const Sort = ({ handleSort }) => {
  return (
    <div>
      <select defaultValue="Sort" onChange={(e) => handleSort(e)}>
        <option value="Sort">Sort</option>
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
      </select>
    </div>
  );
};

export default Sort;
