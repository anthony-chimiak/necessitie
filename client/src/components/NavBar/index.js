import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Zoom from '@mui/material/Zoom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import { ThemeProvider } from "@mui/material/styles";
import mainTheme from "./../Themes/themes";




// import TemporaryDrawer from './TemporaryDrawer'
import './navbar.scss';

export const NavBar = (props) => {

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
                <Toolbar variant="dense" id="back-to-top-anchor">
                  <Box display='flex' flexGrow={1}>
                    <Typography variant="h6" color="inherit" component="div">
                      <span className="title-first-letter">n</span>e<span className="title-c-letter">c</span>essitie
                    </Typography>
                  </Box>
                  <IconButton edge="end" color="action" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                  </IconButton>  
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