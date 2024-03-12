import React, { createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";

const GamesContext = createContext();

export function useGamesData() {
  return useContext(GamesContext);
}

export function GamesDataProvider({ children }) {
  const { isLoading, error, data } = useFetch(`/games`);

  return (
    <GamesContext.Provider value={{ isLoading, error, games: data }}>
      {children}
    </GamesContext.Provider>
  );
}
