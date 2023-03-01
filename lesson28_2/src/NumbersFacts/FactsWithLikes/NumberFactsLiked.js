import { Box, Button, LinearProgress, Stack } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import ActiveLikedFact from "./ActiveLikedFact";
import FactWithLike from "./FactWithLike";

import LikedList from "./LikedList";

export default function NumbersFactsLiked(props) {
  console.log("Rendering NumbersFactsLiked with props", props);

  const [factData, setFactData] = useState({
    text: null,
    loading: false,
  });
  const [likedNumbers, setLikedNumbers] = useState([]);
  const [lastLikedNumber, setLastLikedNumber] = useState(null);
  const [activeFact, setActiveFact] = useState(null);
  const [isActive, setIsActive] = useState(null);

  const getFact = () => {
    setFactData({ ...factData, loading: true });
    setLastLikedNumber(null);
    axios.get("http://numbersapi.com/random/math").then((responseData) => {
      console.log("Received a new fact:", responseData);
      setFactData({
        text: responseData.data,
        loading: false,
      });
    });
  };

  const handleLikedNumber = (number) => {
    const newArray = [
      ...likedNumbers,
      { number: number, factText: factData.text },
    ];
    setLikedNumbers(newArray);
    setLastLikedNumber(number);
  };

  const onLikeClicked = (number, selected) => {
    console.log("Clicked liked fact #" + number);
    console.log("fact: " + selected.fact);
    setActiveFact(selected.fact);
    if (activeFact === null) {
      setIsActive(true);
    } else if (selected.fact !== activeFact) {
      setActiveFact(selected.fact);
    } else {
      setIsActive(null);
      setActiveFact(null);
    }
  };

  const onDeleteClicked = (number, selected) => {
    console.log("delete clicked #" + number);
    if (lastLikedNumber === number) {
      setLastLikedNumber(null);
    }
    const newArray = likedNumbers.slice();
    const index = newArray.map((item) => item.number).indexOf(number);
    newArray.splice(index, 1);
    setLikedNumbers(newArray);
    if (selected.fact === activeFact) {
      setActiveFact(null);
      setIsActive(null);
    }
  };

  return (
    <Box
      sx={{
        width: "50%",
        margin: "auto",
        marginTop: "1em",
      }}
    >
      <h5 align="center">Welcome to Numbers Facts!</h5>

      <Stack spacing={2} marginY="2rem">
        <Button variant="contained" onClick={getFact}>
          GET INTERESTING FACT!
        </Button>
      </Stack>
      <LinearProgress hidden={!factData.loading} />

      {factData.text && (
        <FactWithLike
          factText={factData.text}
          onLikedNumber={handleLikedNumber}
          isLastNumber={Boolean(lastLikedNumber)}
        />
      )}

      {likedNumbers.length > 0 && (
        <Stack spacing={2} marginY="1em">
          <hr />
          <h5>Numbers you liked:</h5>
          <LikedList
            numbers={likedNumbers}
            onClick={onLikeClicked}
            onDelete={onDeleteClicked}
          />
        </Stack>
      )}
      {isActive && activeFact && <p>{activeFact}</p>}
    </Box>
  );
}
