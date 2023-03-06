import React, { useEffect, useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import axios from "axios";
const url = "https://api.chucknorris.io/jokes/random";

export default function Jokes() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = () => {
    setLoading(true);
    axios.get(url).then((response) => {
      setJoke(response.data.value);
      setLoading(false);
    });
  };
  return (
    <Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          backgroundColor: "aliceblue",
          p: "2em",
        }}
      >
        <Typography alignSelf="center">Cuck Norris Generator</Typography>
        {joke && (
          <Typography flexWrap="wrap" alignSelf="center">
            {joke}
          </Typography>
        )}
        {
          <Button variant="outlined" onClick={getJoke}>
            {loading ? "GENERATING" : "GENERATE"}
          </Button>
        }
      </Container>
    </Container>
  );
}
