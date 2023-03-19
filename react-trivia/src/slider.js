import { Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  SETTINGS_ACTIONS,
  useSettings,
  useSettingsDispatch,
} from "./SettingsContext";

export default function InputSlider() {
  const settingsState = useSettings();
  const dispatch = useSettingsDispatch();

  const sliderHandler = (event) => {
    dispatch({
      type: SETTINGS_ACTIONS.SELECT_LIMIT,
      limit: event.target.value,
    });
  };

  return (
    <Box>
      <Typography id="limit-slider" gutterBottom>
        Limit
      </Typography>
      <Slider
        min={1}
        value={settingsState.limit}
        max={20}
        aria-label="Amount"
        aria-labelledby="limit-slider"
        valueLabelDisplay="auto"
        onChange={sliderHandler}
      />
    </Box>
  );
}
