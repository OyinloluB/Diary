import React, { useEffect } from "react";
import Search from "../forms/search/Search";

import DeleteIcon from "@material-ui/icons/Delete";
import SendIcon from "@material-ui/icons/Send";
import EditIcon from "@material-ui/icons/Edit";

import Styles from "./note.module.scss";

const Notes = ({
  handleChange,
  deleteNote,
  searchDate,
  saveNote,
  search,
  form,
}) => {
  useEffect(() => {
    console.log(form);
  }, []);
  return (
    <div className={Styles.notes}>
      <Search search={search} searchDate={searchDate} />
      <div>
        <h3>Notes</h3>
      </div>
      <div className={Styles.notes_container}>
        {form
          ?.sort((a, b) => b.currentDate - a.currentDate)
          .map((item, index) => {
            return (
              <div
                className={Styles.notes_note}
                style={{ backgroundColor: `${item.color}` }}
                key={index}
              >
                <textarea
                  rows="50"
                  cols="25"
                  type="text"
                  name="note"
                  value={item.note}
                  placeholder="Note"
                  onChange={(e) => handleChange(index, e)}
                />
                <div className={Styles.dateAndActions}>
                  <span>{item.currentDate}</span>
                  <div>
                    <DeleteIcon
                      style={{
                        fontSize: "20px",
                        cursor: "pointer",
                        marginRight: "25px",
                      }}
                      onClick={(e) => deleteNote(e, index)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Notes;
