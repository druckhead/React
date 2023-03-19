import { createContext, useContext, useReducer } from "react";

const INITIAL_SETTINGS_STATE = {
  categories: [],
  limit: 5,
  difficulty: "easy",
  loading: false,
  errorMsg: null,
};

export const SETTINGS_ACTIONS = {
  CATEGORIES_FETCH_START: "categoriesFetchStart",
  CATEGORIES_FETCH_SUCCESS: "categoriesFetchSuccess",
  CATEGORIES_FETCH_ERROR: "categoriesFetchError",
  RESET_TO_DEFAULT: "resetToDefault",
  SELECT_DIFFICULTY: "setDifficulty",
  SELECT_CATEGORY: "setCategory",
  UNSELECT_CATEGORY: "setCategory",
  SELECT_LIMIT: "setLimit",
  SUBMIT_SETTINGS: "submitAnswers",
};

function settingsReducer(settingsState, action) {
  switch (action.type) {
    case SETTINGS_ACTIONS.CATEGORIES_FETCH_START: {
      return {
        ...settingsState,
        loading: true,
        errorMsg: null,
      };
    }

    case SETTINGS_ACTIONS.CATEGORIES_FETCH_SUCCESS: {
      return {
        ...settingsState,
        loading: false,
        errorMsg: null,
        categories: Object.keys(action.categories),
      };
    }

    case SETTINGS_ACTIONS.CATEGORIES_FETCH_ERROR: {
      return {
        ...settingsState,
        loading: false,
        errorMsg: action.msg,
        categories: [],
      };
    }

    case SETTINGS_ACTIONS.SUBMIT_SETTINGS: {
      return {
        ...settingsState,
      };
    }

    case SETTINGS_ACTIONS.RESET_TO_DEFAULT: {
      return INITIAL_SETTINGS_STATE;
    }

    case SETTINGS_ACTIONS.SELECT_DIFFICULTY: {
      return {
        ...settingsState,
        difficulty: action.difficulty,
      };
    }

    case SETTINGS_ACTIONS.SELECT_LIMIT: {
      return {
        ...settingsState,
        limit: action.limit,
      };
    }

    case SETTINGS_ACTIONS.SELECT_CATEGORY: {
      return {
        ...settingsState,
        categories: [
          ...settingsState.categories,
          {
            category: action.category,
            categoryId: action.categoryId,
          },
        ],
      };
    }

    case SETTINGS_ACTIONS.UNSELECT_CATEGORY: {
      return {
        ...settingsState,
        categories: [],
      };
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const SettingsContext = createContext(INITIAL_SETTINGS_STATE);
const SettingsDispatchContext = createContext(null);

export function SettingsProvider({ children }) {
  const [settingsState, dispatch] = useReducer(
    settingsReducer,
    INITIAL_SETTINGS_STATE
  );

  return (
    <SettingsContext.Provider value={settingsState}>
      <SettingsDispatchContext.Provider value={dispatch}>
        {children}
      </SettingsDispatchContext.Provider>
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}

export function useSettingsDispatch() {
  return useContext(SettingsDispatchContext);
}
