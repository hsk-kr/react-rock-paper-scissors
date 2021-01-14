import React, { useState, createContext } from 'react';

// Constants for navigation
export const ENTRY_PAGE = 1;
export const GAME_PAGE = 2;
export const RESULT_PAGE = 3;

const GameContext = createContext({});

const GameContextProvider = ({ children }) => {
  const [page, setPage] = useState(ENTRY_PAGE);
  const [round, setRound] = useState(0);
  const [result, setResult] = useState({
    round: 0,
    me: 0,
    com: 0,
  });

  const value = {
    round,
    setRound,
    page,
    setPage,
    result,
    setResult,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export { GameContext, GameContextProvider };
