import React, {useState} from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import Logo from '../../images/logo.svg';
import {  Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import '../../styles/HeaderStyle.css';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  //Menu Drawer

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const drawer = (
  <Box onClick={handleDrawerToggle} sx={{textAlign:"center"}}>
    <Typography color={'goldenrod'} variant="h6" component="div" sx={{flexGrow:1  }}>
        <Link to={'/'}><img src={Logo} alt="logo" height={'70'} width={'200'}/></Link>
        </Typography>
        <Divider/>
          <ul className="mobile-navigation">
            <li>
              <NavLink activeClassName="active" to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/menu'}>Menu</NavLink>
            </li>
            <li>
              <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
              <NavLink to={'/contact'}>Contact</NavLink>
            </li>
          </ul>
    </Box>
  )
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{bgcolor:"black"}}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{mr:2, display:{sm:"none"},}} onClick={handleDrawerToggle}>
              <MenuIcon/>
            </IconButton>
            <Typography color={'goldenrod'} variant="h6" component="div" sx={{flexGrow:1}}>
            <Link to={'/'}><img src={Logo} alt="logo" height={'70'} width={'250'}/></Link>
            </Typography>
            <Box sx={{display:{xs:'none', sm:'block'}}}>
              <ul className="navigation-menu">
                <li>
                  <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={'/menu'}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                  <NavLink to={'/contact'}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{xs:'block',sm:'none'}, "& .MuiDrawer-paper":{boxSizing:'border-box', width:"250px",}}}>
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar/>
        </Box>
      </Box>
    </>
  )
}

export default Header