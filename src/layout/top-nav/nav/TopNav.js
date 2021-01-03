import React from "react";
import Filter from "../buttons/Filter";
import Sort from "../buttons/Sort";
import Search from "../search/Search";

import Styles from "./topnav.module.scss";

const TopNav = ({ search, searchDate, handleSort, handleFilter }) => {
  return (
    <div className={Styles.topnav}>
      <div>
        <Search search={search} searchDate={searchDate} />
      </div>
      <div className={Styles.topnav_buttons}>
        <Filter handleFilter={handleFilter} />
        <Sort handleSort={handleSort} />
      </div>
    </div>
  );
};

export default TopNav;
