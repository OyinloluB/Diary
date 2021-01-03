import React from "react";

import SearchIcon from "@material-ui/icons/Search";

import "./search.module.scss";

const Search = ({ search, searchDate }) => {
  console.log("search", search);

  return (
    <div>
      <form>
        <div>
          <SearchIcon
            style={{ fontSize: "16px", color: " #bec5d7", marginRight: "5px" }}
          />
        </div>
        <input
          type="text"
          name="search"
          value={search}
          placeholder="Search notes by name "
          onChange={searchDate}
        />
      </form>
    </div>
  );
};

export default Search;
