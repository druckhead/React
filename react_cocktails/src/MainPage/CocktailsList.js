import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";

function renderRow(props) {
  const { index, data, style } = props;

  return (
    <ListItem
      style={style}
      key={index}
      component="div"
      disablePadding
      sx={{
        "&:hover": {
          boxShadow: 10,
        },
      }}
    >
      <ListItemButton
        sx={{
          textAlign: "center",
        }}
      >
        <ListItemText primary={`${index + 1}. ${data[index]}`} />
      </ListItemButton>
    </ListItem>
  );
}

export default function CocktailsList(props) {
  const drinks = props.drinks;
  const data = drinks.map((drink) => drink.strDrink);
  return (
    <Box
      sx={{
        width: "100%",
        height: 400,
        maxWidth: 100 + "%",
        bgcolor: "background.paper",
        border: "1px solid lightgray",
        boxShadow: 5,
      }}
    >
      <FixedSizeList
        height={400}
        width={100 + "%"}
        itemSize={46}
        itemCount={drinks.length}
        itemData={data}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
