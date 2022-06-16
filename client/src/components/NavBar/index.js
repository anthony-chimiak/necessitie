import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Zoom from '@mui/material/Zoom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import { ThemeProvider } from "@mui/material/styles";
import mainTheme from "./../Themes/themes";
import logo from "./../../assets/images/logo_pic.png"
import companyName from "./../../assets/images/necessitie_word_logo.png"






// import TemporaryDrawer from './TemporaryDrawer'
import './navbar.scss';

export const NavBar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);
  };

  const pages = ['Services', 'Industries', 'Technologies', 'Companies'];

    function HideOnScroll(props) {
        const { children } = props;
        const trigger = useScrollTrigger();
      
        return (
          <Slide appear={false} direction="down" in={!trigger}>
            {children}
          </Slide>
        );
      }

      function ScrollTop(props) {
        const { children } = props;
        const trigger = useScrollTrigger({
          disableHysteresis: true,
          threshold: 100,
        });

        const handleClick = (event) => {
            const anchor = (event.target.ownerDocument || document).querySelector(
              '#back-to-top-anchor',
            );
        
            if (anchor) {
              anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              });
            }
          };
        return (
        <Zoom in={trigger}>
            <Box
            onClick={handleClick}
            role="presentation"
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
            {children}
            </Box>
        </Zoom>
        );
    }
      
      
    return (
        <>
          <ThemeProvider theme={mainTheme}>
            <span id="back-to-top-anchor"></span>
            <HideOnScroll {...props}>
              <AppBar color="navbar">
                <Toolbar variant="dense" disableid="back-to-top-anchor" >
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
                  <img src={logo} className="logo"/>
                  </Box>
                  <Box                    
                    noWrap
                    component="a"
                    href=""
                    sx={{
                      mr: 2,
                      display: { xs: 'flex', md: 'none' },
                      flexGrow: 1,
                      color: 'inherit',
                    }}
                  >
                  <img src={companyName} className="company-name"/>

                  </Box>
                  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                      <Button
                        key={page}
                        // onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'black', display: 'block' }}
                      >
                        {page}
                      </Button>
                    ))}
                  </Box>
                  <IconButton edge="end" color="action" aria-label="menu" sx={{  display: {xs: 'flex', md: 'none'}}} onClick={handleClick}>
                    <MenuIcon
                        id="main-menu-dropdown-button"
                        aria-controls={open ? 'main-menu-dropdown' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    />
                  </IconButton> 
                  
                  
                  

                  
                  <Menu
                      id="main-menu-dropdown"
                      aria-labelledby="main-menu-dropdown-button"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      disableScrollLock={true}
                      className="mobile"
                  >
                      <MenuItem onClick={handleClose}>Home</MenuItem>
                      <MenuItem onClick={handleClose}>Services</MenuItem>
                      <MenuItem onClick={handleClose}>Technologies</MenuItem>
                      <MenuItem onClick={handleClose}>Industries</MenuItem>
                      <MenuItem onClick={handleClose}>Contact Us</MenuItem>
                  </Menu>
                </Toolbar>
              </AppBar>
            </HideOnScroll>
          </ThemeProvider>
        {/* <span id="back-to-top-anchor" /> */}
      
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
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