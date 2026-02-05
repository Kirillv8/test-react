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
