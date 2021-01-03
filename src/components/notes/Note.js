import React, { useState, useEffect } from "react";

import DeleteIcon from "@material-ui/icons/Delete";
import SendIcon from "@material-ui/icons/Send";
import EditIcon from "@material-ui/icons/Edit";

import Styles from "./note.module.scss";

const Note = ({
  handleChange,
  deleteNote,
  item,
  index,
  saveAllNotes,
  handleDate,
}) => {
  const [isNoteSaved, setIsNoteSaved] = useState(false);

  let noteSavedStatus;
  useEffect(() => {
    noteSavedStatus = localStorage.getItem("saved");

    setIsNoteSaved(noteSavedStatus);
  }, []);
  console.log(noteSavedStatus);

  const saveNote = () => {
    saveAllNotes();
    setIsNoteSaved(true);
    localStorage.setItem("saved", isNoteSaved);
  };

  const editNote = () => {
    setIsNoteSaved(false);
  };

  return (
    <div
      className={Styles.notes_note}
      style={{ backgroundColor: `${item.color}` }}
    >
      <textarea
        rows="50"
        cols="25"
        type="text"
        name="note"
        disabled={!isNoteSaved ? false : true}
        value={item.note}
        placeholder="Note"
        onChange={(e) => handleChange(item.id, e.target.value)}
      />
      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          disabled={!isNoteSaved ? false : true}
          value={item.date}
          placeholder="Date"
          onChange={(e) => handleDate(item.id, e.target.value)}
        />
      </div>
      <div className={Styles.dateAndActions}>
        <span>{new Date(item.currentDate).toDateString()}</span>
        <div className={Styles.dateAndActions_actions}>
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
          {!isNoteSaved ? (
            <div>
              <SendIcon
                style={{
                  fontSize: "20px",
                  cursor: "pointer",
                  marginRight: "25px",
                }}
                onClick={() => saveNote()}
              />
            </div>
          ) : (
            <div>
              <EditIcon
                style={{
                  fontSize: "20px",
                  cursor: "pointer",
                  marginRight: "25px",
                }}
                onClick={() => editNote()}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Note;
