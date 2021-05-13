import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { IconButton, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const NoteCard = ({ note, handleDelete }) => {
  console.log(note);
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <DeleteIcon onClick={() => handleDelete(note.id)} />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
