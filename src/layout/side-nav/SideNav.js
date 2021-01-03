import React, { useState } from "react";

import AddIcon from "@material-ui/icons/Add";

import Styles from "./sidenav.module.scss";

const SideNav = ({ handleAddButton, colorPicker }) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <div>
      <div className={Styles.sidenav}>
        <div className={Styles.sidenav_logo}>
          <h4>Diary</h4>
        </div>
        <div className={Styles.sidenav_icon}>
          <AddIcon
            style={{ color: "#fff", fontSize: "30px" }}
            onClick={() => {
              setShowColorPicker(!showColorPicker);
            }}
          />
        </div>
        {showColorPicker && (
          <div className={Styles.sidenav_colorPickerContainer}>
            {colorPicker.map((index) => (
              <div
                className={Styles.colorPicker}
                onClick={() => {
                  handleAddButton(index);
                }}
                key={index}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SideNav;
