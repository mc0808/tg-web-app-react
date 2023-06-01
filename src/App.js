import { useEffect } from 'react';
import './App.css';
// import { useTelegram } from './hooks/useTelegram';
import Header from './components/header/header';
// import {Route, Routes } from 'react-router-dom';
// import Productlist from './components/productlist/productlist';
// import Form from './components/form/form';

const tg = window.Telegram.WebApp;

function App() {

  //  const {onToggleButton} = useTelegram();

  useEffect( () => {
    tg.ready();
  })
  
  

  return (
    <div className="App">
     <Header/>

    {/* <Routes>
      <Route index element = {<Productlist />} />
      <Route path = {'form'} element = {<Form />} />
    </Routes> */}
    
    </div>
  );
}

export default App;
