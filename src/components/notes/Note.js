import React, { useState, useRef } from "react";

import DeleteIcon from "@material-ui/icons/Delete";
import SendIcon from "@material-ui/icons/Send";
import EditIcon from "@material-ui/icons/Edit";

import Styles from "./note.module.scss";

const Note = ({
  handleChange,
  deleteNote,
  item,
  key,
  saveAllNotes,
  handleDate,
}) => {
  const [isNoteSaved, setIsNoteSaved] = useState(false);
  const noteRef = useRef(null);

  const saveNote = () => {
    saveAllNotes();
    setIsNoteSaved(true);
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
      <input
        type="date"
        name="date"
        disabled={!isNoteSaved ? false : true}
        value={item.date}
        placeholder="Note"
        onChange={(e) => handleDate(item.id, e.target.value)}
      />
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
              onClick={(e) => deleteNote(e, key)}
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
                onClick={(e) => saveNote()}
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
                onClick={(e) => editNote()}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Note;
