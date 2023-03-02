import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import AlphabetFilterBox from "./AlphabetFilterBox";
import CocktailsList from "./CocktailsList";
import ButtonAppBar from "./Navbar";
import SearchBox from "./SearchBox";
import axios from "axios";
import CircularIndeterminate from "./CircularIndeterminate";
import ErrorAlert from "./ErrorMessage";

function MainPage() {
  const [currLetter, setCurrLetter] = useState(null);
  const [currDrinks, setCurrDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  useEffect(() => {
    if (currLetter) {
      setIsLoading(true);
      const endPoint = `search.php?f=${currLetter}`;
      const response = getCocktail(endPoint);
      response.then((response) => {
        console.log(response);
        const drinks = response.data.drinks;
        console.log(drinks);
        setIsLoading(false);
        if (!drinks) {
          console.log(`drinks is null`);
          setShowErrorMsg(true);
          return;
        }
        setCurrDrinks(drinks);
      });
    }
  }, [currLetter]);

  useEffect(() => {
    if (submittedQuery) {
      setIsLoading(true);
      const endPoint = `search.php?s=${submittedQuery}`;
      const response = getCocktail(endPoint);
      response.then((response) => {
        console.log(response);
        const drinks = response.data.drinks;
        console.log(drinks);
        setIsLoading(false);
        if (!drinks) {
          console.log(`drinks is null`);
          setShowErrorMsg(true);
          return;
        }
        setCurrDrinks(drinks);
      });
    }
  }, [submittedQuery]);

  const handleClickLetter = (letter) => {
    console.log(`clicked ${letter}`);
    setCurrLetter(letter);
    if (currDrinks.length === 0 && currLetter === letter) {
      setShowErrorMsg(true);
      const timer = setTimeout(() => {
        setShowErrorMsg(false);
        clearTimeout(timer);
      }, 5 * 1000);
    } else if (currLetter !== letter) {
      setCurrDrinks([]);
    }
  };

  return (
    <Box
      sx={{
        fontSize: 10 + "px",
        display: "flex",
        flexDirection: "column",
        gap: 5 + "em",
      }}
    >
      <ButtonAppBar />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
          gap: 4 + "em",
        }}
      >
        <SearchBox
          value={query}
          query={query}
          setQuery={setQuery}
        //   submittedQuery={submittedQuery}
          setSubmittedQuery={setSubmittedQuery}
        />
        <AlphabetFilterBox clickHandler={handleClickLetter} />

        {isLoading && <CircularIndeterminate />}

        {!isLoading && currDrinks && currDrinks.length > 0 && (
          <CocktailsList drinks={currDrinks} />
        )}

        {showErrorMsg && (
          <ErrorAlert
            letter={currLetter}
            showErrorMsg={showErrorMsg}
            setShowErrorMsg={setShowErrorMsg}
          />
        )}
      </Container>
    </Box>
  );
}

async function getCocktail(endPoint) {
  const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/";
  try {
    const response = await axios.get(baseURL + endPoint);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default MainPage;