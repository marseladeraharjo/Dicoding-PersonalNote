/* eslint-disable react/prop-types */
import React from "react";

function ArchiveButton({ item, id, onArchive }) {
  if (item.archived === true)
    return (
      <button className="note-item__archive-btn" onClick={() => onArchive(id)}>
        Unarchive
      </button>
    );
  return (
    <button className="note-item__archive-btn" onClick={() => onArchive(id)}>
      Archive
    </button>
  );
}

export default ArchiveButton;
