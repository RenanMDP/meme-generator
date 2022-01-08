import React, {useState} from 'react';
import './style.css';
import Header from './components/Header';
import Meme from './components/Meme';

const App = () => {
  return (
    <>
      <Header />
      <Meme />
    </>
  );
};

export default App;