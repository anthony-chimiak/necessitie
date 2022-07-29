import React from 'react';
import './App.css';
import './App.scss';
import 'semantic-ui-css/semantic.min.css'
import Main from './components/Main'
import NavBar from './components/NavBar'
// import NetworkCluster from './components/Main/Home/Cluster/clusterTest'
import { ForceGraph2D } from "react-force-graph";




export const App = () => {
  return (
    <div className="App">

      {/* <AppBar></AppBar> */}
      {/* <NetworkCluster/> */}
      <NavBar />
      <Main />
      {/* <ForceGraph2D graphData={genRandomTree(30)} />; */}

      
    </div>
  );
}

export default App;
