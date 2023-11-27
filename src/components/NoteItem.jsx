/* eslint-disable react/prop-types */
import React from "react";
import NoteItemContent from "./NoteItemContent";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItem({ title, createdAt, body, id, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} createdAt={createdAt} body={body} />
      <div className="note-item__action">
        <ArchiveButton id={id} onArchive={onArchive} />
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default NoteItem;
