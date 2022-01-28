import React from 'react';
import './App.css';
import './App.scss';
import Main from './components/Main/index.js'
import NavBar from './components/NavBar/index.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
