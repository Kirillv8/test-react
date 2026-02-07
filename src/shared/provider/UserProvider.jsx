import { createContext } from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const TOKEN = import.meta.env.VITE_TMDB_TOKEN;
  return (
    <>
      <UserContext.Provider value={TOKEN}>{children}</UserContext.Provider>
    </>
  );
};

export default UserProvider;
