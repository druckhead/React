import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

function AlphabetFilterBox(props) {
  return (
    <Box
      sx={{
        fontSize: 1.6 + "em",
        width: 100 + "%",
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <Typography paragraph={true} variant="body1">
        Or select by first letter:
      </Typography>
      <AlphabetList
        clickHandler={props.clickHandler}
        isActive={props.isActive}
      />
    </Box>
  );
}

function AlphabetList(props) {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  const letters = alphabet.map((elem) => (
    <AlphaLetter
      key={elem}
      letter={elem}
      clickHandler={props.clickHandler}
      isActive={props.isActive}
    />
  ));
  return (
    <Grid container justifyContent="center" gap={.25 + "em"} item xs={12}>
      {letters}
    </Grid>
  );
}

function AlphaLetter(props) {
  return (
    <Button
      disabled={props.isActive === props.letter}
      style={props.isActive === props.letter ? { border: "1px solid" } : {}}
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
