import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";

function renderRow(props) {
  const { index, data, style } = props;

  const drinkName = data.drinks.map((drink) => drink.strDrink);

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
        onClick={() => {
          console.log(`clicked ${drinkName[index]}`);
          data.setSelectedDrink(data.drinks[index]);
        }}
      >
        <ListItemText primary={`${index + 1}. ${drinkName[index]}`} />
      </ListItemButton>
    </ListItem>
  );
}

export default function CocktailsList(props) {
  const data = props.data;
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
        itemCount={data.drinks.length}
        itemData={data}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
