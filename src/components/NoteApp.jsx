import React from "react";
import { getData } from "../utils/data";
import NoteList from "./NoteList";
import NoteSearch from "./NoteSearch";

function NoteApp() {
  const notes = getData();

  return (
    <div className="note-app">
      <div className="note-app__header">
        <h1>EmNotes</h1>
        <NoteSearch />
      </div>
      <div className="note-app__body">
        <h2>Catatan Aktif</h2>
        <NoteList notes={notes} />
      </div>
    </div>
  );
}

export default NoteApp;
