import {
  Alert,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { fruitsVeggie } from "../data/fruit_veggie_data";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFound, setIsFound] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const typeHandler = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
    setShowAlert(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      fruitsVeggie.fruits.includes(searchQuery) ||
      fruitsVeggie.vegetables.includes(searchQuery)
    ) {
      setIsFound(true);
    } else {
      setIsFound(false);
    }
    setShowAlert(true);
  };

  return (
    <Box component="div">
      <Stack sx={{ width: "100%" }} spacing={2}>
        <SearchBox onType={typeHandler} onSubmit={submitHandler} />
        {showAlert && <ResultBox searchQuery={searchQuery} isFound={isFound} />}
      </Stack>
    </Box>
  );
}

function SearchBox(props) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: "25ch",
        },
        "& .MuiInputLabel-root": { color: "inherit" },
        "& .MuiOutlinedInput-root": {
          color: "inherit",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "initial",
        },
        ":hover": {
          "& .MuiOutlinedInput-root": {
            color: "inherit",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1976d2",
            color: "#1976d2",
          },
        },
      }}
      noValidate
      autoComplete="off"
      onSubmit={props.onSubmit}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
        }}
      >
        <TextField
          id="outlined"
          label="Search fruits and vegetables"
          placeholder="apple"
          onChange={props.onType}
        />
        <Button
          type="submit"
          sx={{ my: ".57em" }}
          size="small"
          variant="outlined"
        >
          search
        </Button>
      </Box>
    </Box>
  );
}

function ResultBox(props) {
  function AlertText(props) {
    let text = "";
    if (fruitsVeggie.fruits.includes(props.searchQuery)) {
      text = `${props.searchQuery} is a fruit!`;
    } else if (fruitsVeggie.vegetables.includes(props.searchQuery)) {
      text = `${props.searchQuery} is a vegetable!`;
    } else {
      text = `${props.searchQuery} does not exist`;
    }
    return <Typography>{text}</Typography>;
  }

  return (
    <Alert variant="filled" severity={props.isFound ? "success" : "error"}>
      <AlertText searchQuery={props.searchQuery} />
    </Alert>
  );
}
export default Search;
