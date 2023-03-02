import { Box, Button, Grid } from "@mui/material";
import React from "react";

function AlphabetFilterBox(props) {
  return (
    <Box>
      <p>Or select by first letter:</p>
      <AlphabetList clickHandler={props.clickHandler} />
    </Box>
  );
}

function AlphabetList(props) {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  const letters = alphabet.map((elem) => (
    <AlphaLetter key={elem} letter={elem} clickHandler={props.clickHandler} />
  ));
  return <Grid>{letters}</Grid>;
}

function AlphaLetter(props) {
  return (
    <Button
      onClick={() => props.clickHandler(props.letter)}
      variant="text"
      sx={{ p: 0.25 + "em", minWidth: 0, minHeight: 0 }}
      size="large"
    >
      {props.letter}
    </Button>
  );
}

export default AlphabetFilterBox;
