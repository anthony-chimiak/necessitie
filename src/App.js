import React, {useState, useEffect, useRef, useLayoutEffect} from "react";
import './App.css';
import './App.scss';
import 'semantic-ui-css/semantic.min.css'
import Main from './components/Main'
import NavBar from './components/NavBar'




export const App = () => {
  const mainRef = useRef(null)
  const [landingWidth, setLandingWidth] = useState(0);
  let isMobile=landingWidth<=480;

    useLayoutEffect(() => {
        setLandingWidth(mainRef?.current?.offsetWidth);
      }, []);

      window.addEventListener('resize', () => {
        setLandingWidth(mainRef?.current?.offsetWidth);
      });
  return (
    <div className="App" ref={mainRef}>
      <NavBar isMobile={isMobile}/>
      <Main isMobile={isMobile}/>
    </div>
  );
}

export default App;
