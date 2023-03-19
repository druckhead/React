import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  SETTINGS_ACTIONS,
  useSettings,
  useSettingsDispatch,
} from "./SettingsContext";

export default function DificultyDropDown() {
  const settingsState = useSettings();
  const dispatch = useSettingsDispatch();

  const handleChange = (event) => {
    dispatch({
      type: SETTINGS_ACTIONS.SELECT_DIFFICULTY,
      difficulty: event.target.value,
    });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
        <Select
          labelId="difficulty-select-label"
          id="difficulty-select"
          value={settingsState.difficulty}
          label="Difficulty"
          onChange={handleChange}
        >
          <MenuItem value={"easy"}>Easy</MenuItem>
          <MenuItem value={"medium"}>Medium</MenuItem>
          <MenuItem value={"hard"}>Hard</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
