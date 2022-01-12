import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav
        style={{ 
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
        >
        <Link to="/services">Services</Link> |{" "}
        <Link to="/technologies">Technologies</Link> |{" "}
        <Link to="/ContactUs">Contact Us</Link>
      </nav>
    )
}

export default NavBar;



    