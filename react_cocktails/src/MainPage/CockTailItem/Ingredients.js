import { Container } from "@mui/system";
import React from "react";

export default function Ingredients(props) {
  return (
    <Container sx={{ m: 0, mb: 2 + "em", p: 0, fontSize: 1.5 + "em" }}>
      <ol>{props.ingredients}</ol>
    </Container>
  );
}
