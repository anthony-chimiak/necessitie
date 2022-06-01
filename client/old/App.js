import React from 'react';
import './App.css';
import './App.scss';
import 'semantic-ui-css/semantic.min.css'
import Main from './components/Main'
import NavBar from './components/NavBar'
import AppBar from '@mui/material/AppBar';


export const App = () => {
  return (
    <div className="App">
      {/* <AppBar></AppBar> */}
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
