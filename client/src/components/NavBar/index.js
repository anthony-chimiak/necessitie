import React from 'react';
import { Link } from 'react-router-dom';
// import TemporaryDrawer from './TemporaryDrawer'
import './navbar.scss';

export const NavBar = () => {

    return (
    <div 
        className="navbar"
        // style={{
        //   padding: "20px",
        //   backgroundColor: "white"
        // }}
    >        
        <nav
            style={{
                float: "right"
            }}
        >
        <Link to="/">Home</Link> |{" "}
        <Link to="/services">Services</Link> |{" "}
        <Link to="/technologies">Technologies</Link> |{" "}
        <Link to="/ContactUs">Contact Us</Link> 
        {/* <TemporaryDrawer /> */}
      </nav>
    </div>
    )
}

export default NavBar;