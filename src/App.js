import { GameContextProvider } from 'contexts/GameContext';
import Router from './router';

function App() {
  return (
    <GameContextProvider>
      <Router />
    </GameContextProvider>
  );
}

export default App;
