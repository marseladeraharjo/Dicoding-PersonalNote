/* eslint-disable react/prop-types */
import React from "react";
import NoteItemContent from "./NoteItemContent";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItem({ item, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <NoteItemContent title={item.title} createdAt={item.createdAt} body={item.body} />
      <div className="note-item__action">
        <ArchiveButton id={item.id} onArchive={onArchive} item={item} />
        <DeleteButton id={item.id} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default NoteItem;
