/* eslint-disable react/prop-types */
import React from "react";
import { getData } from "../utils/data";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import Footer from "./Footer";
import Header from "./Header";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const noteModify = this.state.notes.filter((note) => note.id === id)[0];
    const archivedNote = { ...noteModify, archived: !noteModify.archived };
    this.setState((prevState) => {
      return {
        notes: [...prevState.notes.filter((note) => note.id !== id), archivedNote],
      };
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="note-app">
        <Header />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Active Notes</h2>
          <NoteList notes={this.state.notes.filter((note) => note.archived === false)} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
          <h2>Archive Notes</h2>
          <NoteList notes={this.state.notes.filter((note) => note.archived === true)} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default NoteApp;
