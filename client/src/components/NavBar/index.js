import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem';
// import { Menu } from '@mui/icons-material';
// import TemporaryDrawer from './TemporaryDrawer'
import './navbar.scss';


export const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
    const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <>
        <AppBar>
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon
                        id="main-menu-dropdown-button"
                        aria-controls={open ? 'main-menu-dropdown' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick} />
                </IconButton>
                <Menu
                    id="main-menu-dropdown"
                    aria-labelledby="main-menu-dropdown-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={handleClose}>Home</MenuItem>
                    <MenuItem onClick={handleClose}>Services</MenuItem>
                    <MenuItem onClick={handleClose}>Technologies</MenuItem>
                    <MenuItem onClick={handleClose}>Industries</MenuItem>
                    <MenuItem onClick={handleClose}>Contact Us</MenuItem>
                </Menu>
                <Typography variant="h6" color="inherit" component="div">
                Menu
                </Typography>
            </Toolbar>
        </AppBar>
        </>

    //</> <div 
    //     className="navbar"
    // >        
    //     <nav
    //         style={{
    //             float: "right"
    //         }}
    //     >
        // <Link to="/">Home</Link> |{" "}
        // <Link to="/services">Services</Link> |{" "}
        // <Link to="/technologies">Technologies</Link> |{" "}
        // <Link to="/ContactUs">Contact Us</Link>
        
      /* </nav> */
    // </div>
    )
}

export default NavBar;