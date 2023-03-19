import React from "react";
import {
  SETTINGS_ACTIONS,
  useSettings,
  useSettingsDispatch,
} from "./SettingsContext";

function CheckBoxes({ categories }) {
  const settingsState = useSettings();
  const dispatch = useSettingsDispatch();

  const tickBoxHandler = (event) => {
    if (event.target.checked === true) {
      dispatch({
        type: SETTINGS_ACTIONS.SELECT_CATEGORY,
        category: event.target.name,
        categoryId: event.target.id,
      });
    } else {
      dispatch({
        type: SETTINGS_ACTIONS.UNSELECT_CATEGORY,
      });
    }
  };

  const cat = Object.keys(categories).map((c, index) => {
    const verbose_name = c
      .replaceAll("&", "and")
      .replaceAll(" ", "_")
      .toLowerCase();

    return (
      <div key={index}>
        <label htmlFor={index}>{c}</label>
        <input
          type="checkbox"
          id={index}
          name={verbose_name}
          value={verbose_name}
          checked={settingsState.categories
            .map((c1) => Number(c1.categoryId))
            .includes(index)}
          onChange={tickBoxHandler}
        />
      </div>
    );
  });
  return cat;
}

export default CheckBoxes;
