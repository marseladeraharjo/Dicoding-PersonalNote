/* eslint-disable react/prop-types */
import React from "react";

// class NoteSearch extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       searchInput: "",
//     };

//     this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
//   }

//   onSearchChangeEventHandler(event) {
//     // this.props.searchNote(this.state);
//     this.setState(() => {
//       return {
//         searchInput: event.target.value,
//       };
//     });
//   }

//   render() {
//     return (
//       <div className="note-search">
//         <input type="text" placeholder="Search note ..." value={this.state.searchInput} onChange={this.onSearchChangeEventHandler} />
//       </div>
//     );
//   }
// }

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
