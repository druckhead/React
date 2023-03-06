import {
  Box,
  Button,
  Container,
  TextField,
  Paper,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

export default function Countries() {
  const [query, setQuery] = useState(null);
  const [countriesList, setCountriesList] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = serializeFormQuery(event.target);
    const countryName = formData.country;

    const url = `https://restcountries.com/v3.1/name/${countryName}`;
    axios
      .get(url)
      .then((data) => {
        setCountriesList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChangeSearch = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        gap: 5,
      }}
    >
      <Box
        component="form"
        id="search-form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          justifyContent: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <TextField
          fullWidth={true}
          name="country"
          helperText="Please enter a country"
          id="country-searchbar"
          label="Country"
          onInput={handleChangeSearch}
          value={query ? query : ""}
        />
      </Box>
      <Button
        id="submit-btn"
        type="submit"
        variant="outlined"
        color="info"
        fullWidth={true}
      >
        {!loading ? "Search" : "loading..."}
      </Button>
      {countriesList && <CountryGrid data={countriesList} />}
    </Container>
  );

  function serializeFormQuery(formData) {
    const form = new FormData(formData);
    const params = { country: form.get("country") };
    return params;
  }
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function CountryGrid(props) {
  const data = props.data;

  return (
    <Container sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.data.map((country, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Link
              to={`${country.name.common.toLowerCase()}`}
              state={country.name.official}
              style={{ textDecoration: "none" }}
            >
              <Item>
                <Container
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Container
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Typography width={"100%"}>
                      {country.name.official}
                    </Typography>
                    <Container>
                      <img
                        src={country.flags.png}
                        alt={country.flags.alt}
                        width="100%"
                      />
                    </Container>
                  </Container>
                </Container>
              </Item>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
