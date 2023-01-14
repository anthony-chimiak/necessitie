import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import { isMobile } from "react-device-detect";

import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Zoom from '@mui/material/Zoom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import { ThemeProvider } from "@mui/material/styles";
import mainTheme from "./../Themes/themes";
import logo from "./../../assets/images/logo_pic.png"
import companyName from "./../../assets/images/necessitie_word_logo.png"






// import TemporaryDrawer from './TemporaryDrawer'
import './navbar.scss';
import './../../App.scss';

export const NavBar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [scrolled, setScrolled] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);
  };
  const navigate = useNavigate();
  const toContact = () => {
      navigate(`/Contact`);
  };

  const { isMobile } = props;
  const navBarHeight = isMobile?"60px":"80px";

  const heightTrigger = useScrollTrigger({
    // disableHysteresis: true,
    threshold: 100,
    // target: props.window ? window() : undefined
  });

  const pages = ['Home', 'Services', 'Industries', 'Technologies', 'Company', 'Contact'];
  let location = useLocation();

  function getScrollPosition() {
    return window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  }

  function updateScrolledState() {
    if (getScrollPosition() > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

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
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100,
    });


  const handleClickScroll = (event) => {
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
            onClick={handleClickScroll}
            role="presentation"
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
            {children}
            </Box>
        </Zoom>
        );
    }
      
    useEffect(() => {
      updateScrolledState();
      window.addEventListener('scroll', updateScrolledState);
      return () => window.removeEventListener('scroll', updateScrolledState);
    }, []);

    return (
        <>
          <ThemeProvider theme={mainTheme}>
            <span id="back-to-top-anchor"></span>
            <HideOnScroll {...props}>
              <AppBar 
                color={scrolled?"navbar":"navbarClear"} 
                // classes={scrolled?'past-top':''} 
                sx={{
                  boxShadow:scrolled?'box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)':'none',
                  height: {navBarHeight},
                }}
                // transition="box-shadow 4s"
              >
                <Toolbar variant="dense" disableid="back-to-top-anchor" >

                <Box className="logo-box" sx={{ 
                  opacity:heightTrigger?'0':'0', 
                  // transition: 'opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
                  flexGrow: 3, 
                  display: { xs: 'none', md: 'flex' } 
                  }}>
                  <Link to="/Home"><img loading="lazy" src={logo} className="logo"/></Link>
                  
                </Box>
                <Box                    
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 4,
                    color: 'inherit',
                  }}
                >
                  <img loading="lazy" src={companyName} className="company-name"/>
                </Box>
                  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                      <Link
                        key={page}
                        className={page + '-nav-link nav-link ' + (location.pathname === `/${page}`?'active':'')}
                        // onClick={handleCloseNavMenu}
                        to={`/${page}`}
                      >
                        {page}
                        {/* {(location.pathname === `/${page}`?<KeyboardArrowUpIcon />:<KeyboardArrowDownIcon />)} */}
                      </Link>
                    ))}
                  </Box>
                  <Button className="action-btn outline tablet" onClick={toContact} sx={{
                    border:'1px solid black',
                    width: '13vw',
                    height: '5.5vh',
                    fontSize: '1.3rem',
                    borderRadius: '10px',
                    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                    textTransform: 'none',
                    height: '5.5vh',
                    minHeight: '50px',
                    padding: '0',
                    border: '2px solid #4539CF',
                    color: "#4539CF",
                    }}>Get a quote</Button>
                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent:"right"}}>
                    <IconButton edge="end"  color="action" aria-label="menu" sx={{  display: {xs: 'flex', md: 'none'}, }} onClick={handleClick}>
                      <MenuIcon
                          id="main-menu-dropdown-button"
                          aria-controls={open ? 'main-menu-dropdown' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                      />
                    </IconButton> 
                  </Box>

                  {/* <img loading="lazy" src={logo} className="logo"/> */}
                  <Menu
                      id="main-menu-dropdown"
                      aria-labelledby="main-menu-dropdown-button"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      disableScrollLock={true}
                      // width={600}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      PaperProps={{
                        style: {
                          width: "80vw",
                          left: '-50%',
                          transform: 'translateX(%0) translateY(-0%)',
                          padding: "2vh 3vw"
                        }
                      }}
                      // PopoverClasses={'TEST'}
                      className="mobile"
                  >
                      <MenuItem><img loading="lazy" src={companyName} className="company-name-menu"/></MenuItem>

                      {/* <MenuItem onClick={handleClose}><Link to="/Home">Home</Link></MenuItem> */}
                      {pages.map((page) => (
                        <MenuItem key={page} onClick={handleClose} className="nav-menu-item-container">
                          <Link to={`${page}`} className="nav-menu-item"><span>{page}</span> <ArrowForwardIcon className="menu-arrow"/></Link></MenuItem>
                      ))}
                      <MenuItem><Button className="action-btn">Let's work together</Button></MenuItem>
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
    )
}

export default NavBar;