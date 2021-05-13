import React, { useEffect, useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes").then((response) =>
      response.json().then((data) => setNotes(() => data))
    );
    console.log(notes);
  }, []);

  return (
    <div>
      {notes.map((note) => {
        return <p key={note.id}>{note.title}</p>;
      })}
    </div>
  );
};

export default Notes;
