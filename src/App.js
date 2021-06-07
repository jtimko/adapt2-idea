import './App.css';
//import Button from './components/Button'
import Nav from './components/Nav'
import Main from './components/Main'
import BackgroundVideo from './components/BackgroundVideo'
import data from './components/data.json'
//import { useState } from 'react'
//import Bootstrap from 'bootstrap'



function App() {
  return (
    <div className="App" style={{position: 'relative', zIndex: 1}}>
      <BackgroundVideo />
      <Nav />
      <Main data={data} />
    </div>
  );
}

export default App;
