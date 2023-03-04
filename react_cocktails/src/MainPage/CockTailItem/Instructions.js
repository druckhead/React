import { Container } from "@mui/system";
import React from "react";

export default function Instructions(props) {
  return (
    <Container sx={{ m: 0, p: 0, pr: 2 + "em", fontSize: 1.5 + "em" }}>
      <ol>{props.instructions}</ol>
    </Container>
  );
}
