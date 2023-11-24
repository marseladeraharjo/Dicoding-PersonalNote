import React from "react";

function NoteItemContent({ title, createdAt, body }) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const currentDate = new Date(createdAt);

  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  const dayOfMonth = currentDate.getUTCDate();
  const month = months[currentDate.getUTCMonth()];
  const year = currentDate.getUTCFullYear();

  const formattedData = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
  return (
    <div className="note-item__content">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{formattedData}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

export default NoteItemContent;
