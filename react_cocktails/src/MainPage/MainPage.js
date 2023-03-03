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
  const [errorMsg, setErrorMsg] = useState({
    errorMsg: "",
    showErrorMsg: false,
  });
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  useEffect(() => {
    if (currLetter) {
      setIsLoading(true);
      const endPoint = `search.php?f=${currLetter}`;
      const response = getCocktail(endPoint);
      response
        .then((response) => {
          console.log(response);
          const drinks = response.data.drinks;
          console.log(drinks);
          setIsLoading(false);
          if (!drinks) {
            console.log(`drinks is null`);
            setErrorMsg({
              errorMsg: `Can't find cocktails for letter "${currLetter}"`,
              showErrorMsg: true,
            });
            return;
          }
          setCurrDrinks(drinks);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
          setErrorMsg({
            errorMsg: `Network Error: No Internet Connection`,
            showErrorMsg: true,
          });
        });
    }
  }, [currLetter]);

  useEffect(() => {
    if (submittedQuery) {
      setIsLoading(true);
      setCurrLetter(null);
      const endPoint = `search.php?s=${submittedQuery}`;
      const response = getCocktail(endPoint);
      response
        .then((response) => {
          console.log(response);
          const drinks = response.data.drinks;
          console.log(drinks);
          setIsLoading(false);
          if (!drinks) {
            console.log(`drinks is null`);
            setErrorMsg({
              errorMsg: `Can't find cocktails for letter "${submittedQuery}"`,
              showErrorMsg: true,
            });
            return;
          }
          setCurrDrinks(drinks);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
          setErrorMsg({
            errorMsg: `Network Error: No Internet Connection`,
            showErrorMsg: true,
          });
        });
    }
  }, [submittedQuery]);

  const handleClickLetter = (letter) => {
    console.log(`clicked ${letter}`);
    setCurrLetter(letter);
    if (currDrinks.length === 0 && currLetter === letter) {
      setErrorMsg({
        errorMsg: `Can't find cocktails for letter "${letter}"`,
        showErrorMsg: true,
      });
      const timer = setTimeout(() => {
        setErrorMsg({
          errorMsg: "",
          showErrorMsg: false,
        });
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
        gap: 1 + "em",
      }}
    >
      <ButtonAppBar />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            alignItems: "center",
            fontSize: 2.4 + "em",
            rowGap: 0 + "em",
          }}
        >
          <SearchBox
            value={query}
            query={query}
            setQuery={setQuery}
            setSubmittedQuery={setSubmittedQuery}
          />
          <AlphabetFilterBox
            clickHandler={handleClickLetter}
            isActive={currLetter}
          />

          {isLoading && <CircularIndeterminate />}

          {!isLoading && currDrinks && currDrinks.length > 0 && (
            <CocktailsList drinks={currDrinks} />
          )}

          {errorMsg.showErrorMsg && (
            <ErrorAlert
              errorMsg={errorMsg.errorMsg}
              showErrorMsg={errorMsg.showErrorMsg}
              setErrorMsg={setErrorMsg}
            />
          )}
        </Container>
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
