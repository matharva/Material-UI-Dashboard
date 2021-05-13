import React from "react";
import {
  Typography,
  Button,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  btn: {
    fontSize: "40px",
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "green",
    },
  },
  field: {
    marginTop: "10px",
    marginBottom: "20px",
    display: "block",
  },
});

const Create = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [category, setCategory] = useState("todos");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDescriptionError(false);
    console.log("Watashi ga kita");

    if (title == "") {
      setTitleError(true);
    }
    if (description == "") {
      setDescriptionError(true);
    }

    if (title && description) {
      console.log(title, description, category);
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, description, category }),
      }).then(() => history.push("/"));
    }
  };
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create New App
      </Typography>
      {/* Form  */}
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          variant="outlined"
          className={classes.field}
          label="Title"
          required
          size="medium"
          fullWidth
          color="secondary"
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
        />

        <TextField
          variant="outlined"
          className={classes.field}
          label="Description"
          required
          rows="4"
          multiline
          color="secondary"
          fullWidth
          onChange={(e) => setDescription(e.target.value)}
          error={descriptionError}
        />
        <FormControl className={classes.field}>
          <FormLabel> Notes Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" label="Money" control={<Radio />} />
            <FormControlLabel value="todos" label="Todos" control={<Radio />} />
            <FormControlLabel
              value="reminders"
              label="Reminders"
              control={<Radio />}
            />
            <FormControlLabel value="work" label="Work" control={<Radio />} />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<ArrowForwardIosIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
