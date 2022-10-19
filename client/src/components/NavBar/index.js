import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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

  const pages = ['Services', 'Industries', 'Technologies', 'Company', 'Contact'];
  let location = useLocation();


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

        const handleClickScroll = (event) => {
            const anchor = (event.target.ownerDocument || document).querySelector(
              '#main-menu-dropdown-button',
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
      
      
    return (
        <>
          <ThemeProvider theme={mainTheme}>
            <span id="back-to-top-anchor"></span>
            <HideOnScroll {...props}>
              <AppBar color="navbar">
                <Toolbar variant="dense" disableid="back-to-top-anchor" >
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton edge="end" color="action" aria-label="menu" sx={{  display: {xs: 'flex', md: 'none'}}} onClick={handleClick}>
                    <MenuIcon
                        id="main-menu-dropdown-button"
                        aria-controls={open ? 'main-menu-dropdown' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    />
                  </IconButton> 
                  
                </Box>
                <Box className="logo-box" sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <Link to="/Home"><img src={logo} className="logo"/></Link>
                  
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
                      <Link
                        key={page}
                        className={page + '-nav-link nav-link ' + (location.pathname === `/${page}`?'active':'')}
                        // onClick={handleCloseNavMenu}
                        to={`/${page}`}
                      >
                        {page}
                        {(location.pathname === `/${page}`?<KeyboardArrowUpIcon />:<KeyboardArrowDownIcon />)}
                      </Link>
                    ))}
                  </Box>

                  
                  <img src={logo} className="logo"/>
                  <Menu
                      id="main-menu-dropdown"
                      aria-labelledby="main-menu-dropdown-button"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      disableScrollLock={true}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      PaperProps={{
                        style: {
                          left: '-50%',
                          transform: 'translateX(%0) translateY(-0%)',
                        }
                      }}
                      className="mobile"
                  >
                      <MenuItem onClick={handleClose}><Link to="/Home">Home</Link></MenuItem>
                      {pages.map((page) => (
                        <MenuItem key={page} onClick={handleClose}><Link to={`${page}`}>{page}</Link></MenuItem>
                      ))}
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