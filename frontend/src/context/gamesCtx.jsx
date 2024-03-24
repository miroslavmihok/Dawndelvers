import React, { createContext, useContext } from "react";
import useGamesFetch from "../hooks/useGamesFetch";

const GamesContext = createContext();

export function useGamesData() {
  return useContext(GamesContext);
}

export function GamesDataProvider({ children }) {
  const { areGamesLoading, gamesError, games } = useGamesFetch();

  return (
    <GamesContext.Provider value={{ areGamesLoading, gamesError, games }}>
      {children}
    </GamesContext.Provider>
  );
}
