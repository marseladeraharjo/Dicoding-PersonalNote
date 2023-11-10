import React from "react";
import { getData } from "../utils/data";
import NoteList from "./NoteList";
import NoteSearch from "./NoteSearch";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, note }) {
    this.setState((prevState) => {
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      const currentDate = new Date();

      const dayOfWeek = daysOfWeek[currentDate.getDay()];
      const dayOfMonth = currentDate.getDate();
      const month = months[currentDate.getMonth()];
      const year = currentDate.getFullYear();

      const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;

      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            date: formattedDate,
            note,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="note-app">
        <div className="note-app__header">
          <h1>notes.co</h1>
          <NoteSearch />
        </div>
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Active Notes</h2>
          <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
          <h2>Archive Notes</h2>
          <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
        </div>
        <div className="note-app__footer">
          <p>
            Made by{" "}
            <a href="https://github.com/marseladeraharjo" target="_blank" rel="noreferrer">
              @marseladeraharjo
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default NoteApp;
