import React, { createContext, useContext } from "react";
import useGamesFetch from "../hooks/useGamesFetch";

const GamesContext = createContext();

export function useGamesData() {
  return useContext(GamesContext);
}

export function GamesDataProvider({ children }) {
  const { refetchGames, areGamesLoading, gamesError, games } = useGamesFetch(
    `${process.env.REACT_APP_GAMES_URL}`,
  );

  return (
    <GamesContext.Provider
      value={{ refetchGames, areGamesLoading, gamesError, games }}
    >
      {children}
    </GamesContext.Provider>
  );
}
