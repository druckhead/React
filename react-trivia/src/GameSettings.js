import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import CheckBoxes from "./CheckBoxes";
import DificultyDropDown from "./DificultyDropDown";
import {
  SETTINGS_ACTIONS,
  useSettings,
  useSettingsDispatch,
} from "./SettingsContext";
import InputSlider from "./slider";

const url = `https://the-trivia-api.com/api/categories`;

function GameSettings() {
  const [categories, setCategories] = useState({});

  const dispatch = useSettingsDispatch();

  useEffect(() => {
    const a = async () => {
      const getCategories = async () => {
        const response = await axios.get(url);
        return response.data;
      };
      const categories = await getCategories();
      setCategories(categories);
    };
    a();
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch({ type: SETTINGS_ACTIONS.SUBMIT_SETTINGS });
  };

  const resetHandler = () => {
    dispatch({ type: SETTINGS_ACTIONS.RESET_TO_DEFAULT });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", mt: 5, gap: 5 }}>
      <Typography
        component="div"
        variant="h1"
        fontSize="1em"
        textAlign="center"
      >
        GAME SETTINGS
      </Typography>
      <Container
        component="form"
        onSubmit={submitHandler}
        sx={{ display: "flex", flexDirection: "column", gap: 5 }}
      >
        <InputSlider />
        <CheckBoxes categories={categories} />
        <DificultyDropDown />
        <Container
          component="div"
          sx={{ display: "flex", gap: 5, justifyContent: "center" }}
        >
          <Button type="submit">SAVE</Button>
          <Button onClick={resetHandler} type="reset">
            RESET
          </Button>
        </Container>
      </Container>
    </Box>
  );
}

export default GameSettings;
