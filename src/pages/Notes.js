import React, { useEffect, useState } from "react";
import { Paper, Grid, Container } from "@material-ui/core";
import NoteCard from "../components/NoteCard";
import Mansory from "react-masonry-css";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes").then((response) =>
      response.json().then((data) => setNotes(() => data))
    );
    console.log(notes);
  }, []);

  const handleDelete = async (id) => {
    // console.log("Watashi ga kita" + id);
    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);

    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item xs={12} md={6} lg={4} key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Notes;
