import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg'
import './App.css';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Card/> */}
      <h1 className="bg-green-400">Tailwind CSS</h1>
      <img src={reactLogo} alt="React Logo" className="w-16 h-16 mx-auto mt-4" />
      <img src={viteLogo} alt="Vite Logo" className="w-16 h-16 mx-auto mt-4" />
    </div>
  );
}

export default App;
