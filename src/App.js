import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/header/header';

const tg = window.Telegram.WebApp;

function App() {

  const {onToggleButton} = useTelegram();

  useEffect( () => {
    tg.ready();
  })
  
  

  return (
    <div className="App">
     <Header/>
     <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
