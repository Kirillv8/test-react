import { createContext, useReducer } from "react";

export const GenresContext = createContext(null);
export const ReducerContext = createContext(null);

export const GenresProvider = ({ children }) => {
  const [selectedGenres, dispatch] = useReducer(filterReducer, []);

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
    case "add-id": {
      return [...state, { id: action.payload }];
    }
    case "remove-id": {
      return state.filter((prev) => prev.id !== action.payload);
    }
    case "reset": {
      return [];
    }
    default:
      throw new Error(`${state} ${action.payload}`);
  }
};
