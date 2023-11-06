import React from "react";
import NoteItemContent from "./NoteItemContent";

function NoteItem({ title, date, note }) {
  return (
    <div className="contact-item">
      <NoteItemContent title={title} date={date} note={note} />
    </div>
  );
}

export default NoteItem;
