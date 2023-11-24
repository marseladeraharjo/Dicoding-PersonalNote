import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
  if (notes.length === 0) return <p className="note-list__empty-message">No notes here</p>;

  return (
    <>
      <div className="note-list">
        {notes.map((note) => (
          <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
        ))}
      </div>
    </>
  );
}

export default NoteList;
