import React, { useEffect, useState } from "react";
import Notes from "../components/notes/Notes";
import SideNav from "../components/side-nav/SideNav";

import Styles from "./main.module.scss";

const Main = () => {
  const [form, setForm] = useState([]);
  const [search, setSearch] = useState("");
  const colorPicker = ["#f5972c", "#f3542a", "#bec5d7", "#0aa4f6", "#c6d947"];

  let sample;
  useEffect(() => {
    sample = localStorage.getItem("Form");
    if (sample) {
      setForm(JSON.parse(sample));
    }
  }, []);

  const handleAddButton = (index) => {
    const inputState = {
      note: "",
      color: index,
      currentDate: new Date().toDateString(),
    };

    setForm((prev) => [...prev, inputState]);
  };

  const handleChange = (index, e) => {
    setForm((prev) => {
      return prev.map((item, i) => {
        if (i !== index) {
          return item;
        }

        return {
          ...item,
          [e.target.name]: e.target.value,
        };
      });
    });
  };

  const saveNote = (e, index) => {
    e.preventDefault();

    localStorage.setItem("Form", JSON.stringify(form));
  };

  const deleteNote = (e, index) => {
    e.preventDefault();

    setForm((prev) => prev.filter((item) => item !== prev[index]));
    localStorage.setItem("Form", JSON.stringify(form));
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
        handleChange={handleChange}
        deleteNote={deleteNote}
        searchDate={searchDate}
        saveNote={saveNote}
        search={search}
        form={form}
      />
    </div>
  );
};

export default Main;
