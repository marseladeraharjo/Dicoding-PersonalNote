import NoteSearch from "./NoteSearch";

export default function Header() {
  return (
    <div className="note-app__header">
      <h1>notes.co</h1>
      <NoteSearch />
    </div>
  );
}
