import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="note-input">
        <h2>Create Note</h2>
        <form action="">
          <p className="note-input__title-char-limit">Remaining characters: 50</p>
          <input type="text" className="note-input__title" placeholder="Title..." />
          <textarea cols="30" rows="10" className="note-input__body" placeholder="Write your note here ..."></textarea>
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
