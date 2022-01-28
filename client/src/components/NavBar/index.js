import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.scss';

export const NavBar =() => {
    return (
    <div 
        style={{
        padding: "20px",
        backgroundColor: "white"
      }}>        
        <nav
            style={{
                float: "right"
            }}
        >
        <Link to="/">Home</Link> |{" "}
        <Link to="/services">Services</Link> |{" "}
        <Link to="/technologies">Technologies</Link> |{" "}
        <Link to="/ContactUs">Contact Us</Link>
      </nav>
    </div>
    )
}

export default NavBar;



    