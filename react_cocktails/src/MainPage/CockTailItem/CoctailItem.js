import { Container } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

export default function CoctailItem(props) {
  const selectedDrink = props.selectedDrink;
  const a = Object.keys(selectedDrink);
  const ingredients = [];
  a.forEach((element) => {
    const elem = element.toLowerCase();
    if (elem.includes("ingredient") && selectedDrink[element]) {
      ingredients.push(<li key={element}>{selectedDrink[element]}</li>);
    }
  });
  const instructionsStr = selectedDrink["strInstructions"];
  const instructionsArr = instructionsStr.split(". ");
  const instructions = instructionsArr.map((item) => <li>{item}</li>);
  return (
    <Container sx={{ boxShadow: 10, mb: 2 + "em", py: 2 + "em" }}>
      <Box>
        <h5>Ingredients</h5>
        <Ingredients ingredients={ingredients} />
      </Box>
      <hr />
      <Box>
        <h5>Instructions</h5>
        <Instructions instructions={instructions} />
      </Box>
    </Container>
  );
}
