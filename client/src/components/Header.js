import React from 'react';
import { Link } from "react-router-dom"


function Header() {
    return (
        <div 
            style={{
                height: '488px',
                backgroundColor: '#C4C4C4',
            }}
        >
            <Link to="/">
                <h1 classname="application-title">Page Heading Here</h1>
            </Link>
        </div>
    );
}

export default Header;