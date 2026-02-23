import { createContext, useReducer } from "react";

export const GenresContext = createContext(null);
export const ReducerContext = createContext(null);

const initialState = {
  genres: [],
  sortBy: "popularity.desc",
};

export const FilterProvider = ({ children }) => {
  const [selectedGenres, dispatch] = useReducer(filterReducer, initialState);

  return (
    <GenresContext.Provider value={selectedGenres}>
      <ReducerContext.Provider value={dispatch}>
        {children}
      </ReducerContext.Provider>
    </GenresContext.Provider>
  );
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_GENRES": {
      return { ...state, genres: action.payload };
    }
    case "SET_SORT": {
      return { ...state, sortBy: action.payload };
    }
    case "reset": {
      return initialState;
    }
    default:
      throw new Error(`${state} ${action.payload}`);
  }
};
