import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
  return (
    <>
      <div className="note-list">
        {notes.map((note) => (
          <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
        ))}
      </div>
      <p className="note-list__empty-message">No notes here</p>
    </>
  );
}

export default NoteList;
