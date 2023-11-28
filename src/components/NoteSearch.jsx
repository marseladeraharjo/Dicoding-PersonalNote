/* eslint-disable react/prop-types */
import React from "react";

function NoteSearch({ onSearch }) {
  const onSearchChangeEventHandler = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="note-search">
      <input type="text" placeholder="Search note ..." onChange={onSearchChangeEventHandler} />
    </div>
  );
}

export default NoteSearch;
