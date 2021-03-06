import React, { useEffect, useState } from "react";
import Notes from "../components/notes/Notes";
import SideNav from "../layout/side-nav/SideNav";

import Styles from "./main.module.scss";

const Main = () => {
  const [form, setForm] = useState([]);
  const [sort, setSort] = useState("Newest");
  const [filter, setFilter] = useState("Year");
  const [search, setSearch] = useState("");
  const colorPicker = ["#f5972c", "#f3542a", "#bec5d7", "#0aa4f6", "#c6d947"];

  let sample;
  useEffect(() => {
    sample = localStorage.getItem("Form");
    if (sample) {
      setForm(JSON.parse(sample));
    }
    console.log(form.find((item) => console.log(item)));
  }, []);

  const handleAddButton = (index) => {
    const inputState = {
      note: "",
      date: "",
      color: index,
      currentDate: new Date(),
      id: form.length + 1,
      saved: false,
    };

    setForm((prev) => [...prev, inputState]);
  };

  const handleChange = (noteId, noteValue) => {
    setForm(
      form.map((item) =>
        item.id === noteId ? { ...item, note: noteValue } : item
      )
    );
  };

  const handleDate = (noteId, inputedDate) => {
    setForm(
      form.map((item) =>
        item.id === noteId ? { ...item, date: inputedDate } : item
      )
    );
  };

  const saveAllNotes = (noteId) => {
    localStorage.setItem(
      "Form",
      JSON.stringify(
        form.map((item) =>
          item.id === noteId ? { ...item, saved: true } : item
        )
      )
    );
  };

  const handleSort = (e) => {
    setSort(e.target.value);
    console.log(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
    console.log(e.target.value);
  };

  const deleteNote = (e, index) => {
    e.preventDefault();

    localStorage.setItem(
      "Form",
      JSON.stringify([...form].filter((item) => item !== form[index]))
    );
    setForm([...form].filter((item) => item !== form[index]));
  };

  const searchDate = (e) => {
    setSearch(e.target.value);

    const filtered = form.filter((entry) =>
      Object.values(entry).some(
        (val) => typeof val === "string" && val.toLowerCase().includes(search)
      )
    );

    setForm(filtered);
  };

  return (
    <div className={Styles.container}>
      <SideNav colorPicker={colorPicker} handleAddButton={handleAddButton} />
      <Notes
        saveAllNotes={saveAllNotes}
        handleChange={handleChange}
        handleFilter={handleFilter}
        handleDate={handleDate}
        deleteNote={deleteNote}
        searchDate={searchDate}
        handleSort={handleSort}
        setForm={setForm}
        search={search}
        filter={filter}
        sort={sort}
        form={form}
      />
    </div>
  );
};

export default Main;
