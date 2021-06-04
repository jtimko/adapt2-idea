import './App.css';
import Button from './components/Button'
import Nav from './components/Nav'
import BackgroundVideo from './components/BackgroundVideo'
import { useState } from 'react'
import Bootstrap from 'bootstrap'


function App() {

  const [name, setName] = useState("Justin");

  return (
    <div className="App" style={{position: 'relative', zIndex: 1}}>
      <BackgroundVideo />
      <Nav />
      <p>Where do i appear? ohh there we go</p>
    </div>
  );
}

export default App;
