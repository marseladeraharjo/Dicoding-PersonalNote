import React from "react";

function NoteItemContent({ title, date, note }) {
  return (
    <div className="note-item__content">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{date}</p>
      <p className="note-item__note">{note}</p>
    </div>
  );
}

export default NoteItemContent;
