import React from "react";
import { getData } from "../utils/data";
import NoteList from "./NoteList";
import NoteSearch from "./NoteSearch";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getData(),
    };
  }

  render() {
    return (
      <div className="note-app">
        <div className="note-app__header">
          <h1>EmNotes</h1>
          <NoteSearch />
        </div>
        <div className="note-app__body">
          <h2>Active Notes</h2>
          <NoteList notes={this.state.notes} />
          <h2>Archive Notes</h2>
          <NoteList notes={this.state.notes} />
        </div>
      </div>
    );
  }
}

export default NoteApp;
