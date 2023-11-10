import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      note: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onNoteChangeEventHandler = this.onNoteChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onNoteChangeEventHandler(event) {
    this.setState(() => {
      return {
        note: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="note-input">
        <h2>Create Note</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title-char-limit">Remaining characters: 50</p>
          <input type="text" className="note-input__title" value={this.state.title} onChange={this.onTitleChangeEventHandler} placeholder="Title..." />
          <textarea cols="30" rows="10" className="note-input__body" value={this.state.note} onChange={this.onNoteChangeEventHandler} placeholder="Write your note here ..."></textarea>
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
