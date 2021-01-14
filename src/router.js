import React, { useContext } from 'react';
import {
  GameContext,
  ENTRY_PAGE,
  GAME_PAGE,
  RESULT_PAGE,
} from 'contexts/GameContext';

// Pages
import EntryPage from 'pages/EntryPage';
import GamePage from 'pages/GamePage';
import ResultPage from 'pages/ResultPage';

function Router() {
  const { page } = useContext(GameContext);

  switch (page) {
    case ENTRY_PAGE:
      return <EntryPage />;
    case GAME_PAGE:
      return <GamePage />;
    case RESULT_PAGE:
      return <ResultPage />;
  }

  return <div>ERROR</div>;
}

export default Router;
