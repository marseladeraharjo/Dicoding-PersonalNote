/* eslint-disable react/prop-types */
import NoteSearch from "./NoteSearch";

export default function Header({ onSearch }) {
  return (
    <div className="note-app__header">
      <h1>notes.co</h1>
      <NoteSearch onSearch={onSearch} />
    </div>
  );
}
