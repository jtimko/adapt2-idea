import './App.css';
//import Button from './components/Button'
import Nav from './components/Nav'
import Main from './components/Main'
import BackgroundVideo from './components/BackgroundVideo'
import blogs from './components/data.json'
import { useState } from 'react'

function App() {
  const [data, setData] = useState(blogs)
  var newpost = {"title": "Can we go four?", "content": "Yes we can!"}

  const clicked = () => {
    setData([...data, newpost])
  }
  
  return (
    <div className="App" style={{position: 'relative', zIndex: 1}}>
      <BackgroundVideo />
      <Nav />
      <Main allblogs={data} />
      <button onClick={clicked}>Click me!</button>
    </div>
  );
}

export default App;
