import React from "react";
import TopNav from "../../layout/top-nav/nav/TopNav";

import Note from "./Note";

import Styles from "./note.module.scss";

const Notes = ({
  saveAllNotes,
  handleChange,
  isNoteSaved,
  handleFilter,
  handleDate,
  handleSort,
  deleteNote,
  searchDate,
  saveNote,
  setForm,
  search,
  filter,
  sort,
  form,
}) => {
  const sortedNotes = form.sort((a, b) => {
    if (sort === "Newest") {
      return (
        new Date(b.currentDate).getTime() - new Date(a.currentDate).getTime()
      );
    } else if (sort === "Oldest") {
      return (
        new Date(a.currentDate).getTime() - new Date(b.currentDate).getTime()
      );
    }
  });

  return (
    <div className={Styles.notes}>
      <TopNav
        searchDate={searchDate}
        search={search}
        handleSort={handleSort}
        handleFilter={handleFilter}
      />
      <div>
        <h3>Notes</h3>
        <p>Tap icon to write note and submit note.</p>
      </div>
      <div className={Styles.notes_container}>
        {sortedNotes.map((item, index) => {
          return (
            <Note
              item={item}
              key={index}
              form={form}
              index={index}
              setForm={setForm}
              handleDate={handleDate}
              saveAllNotes={saveAllNotes}
              handleChange={handleChange}
              isNoteSaved={isNoteSaved}
              deleteNote={deleteNote}
              saveNote={saveNote}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
