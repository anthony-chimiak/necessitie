import React, {useState, useEffect} from "react";
import './App.css';
import './App.scss';
import 'semantic-ui-css/semantic.min.css'
import Main from './components/Main'
import NavBar from './components/NavBar'




export const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Main />
    </div>
  );
}

export default App;
