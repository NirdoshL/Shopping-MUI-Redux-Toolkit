import { 
    AppBar,
    Typography,
    Toolbar,
    IconButton,
    Button,
    Avatar,
    Box,
    Menu,
    MenuItem
} 
from '@mui/material'
import React from 'react'
import {BsCartCheck} from "react-icons/bs"
import {FiSettings} from "react-icons/fi"
import { SidebarView } from '../Sidebar/sidebar.d'
import { useAppSelector } from '../../App/hooks.d'
import { Link, Outlet } from 'react-router-dom'


export  function AppbarView() {
    const count=useAppSelector((state)=>state.cart.cartItems.length)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
        setAnchorEl(null);
      };    
  return (
    <Box>
    <Box sx={{flexGrow:1}}>
        <AppBar 
        position='static' 
        color='secondary' 
        elevation={0}>
            <Toolbar>
                <SidebarView/>
                <Typography sx={{flexGrow:1}}>
                Sabai Ko Shopping
                </Typography>
                <IconButton component={Link} to="/cart" color='inherit' sx={{marginLeft:"5px"}}>
                    <BsCartCheck/>
                    <sup style={{color:'red',fontSize:"0.9rem"}}>{count}</sup>
                </IconButton>
                <IconButton color='inherit'sx={{marginLeft:"5px"}}>
                    <FiSettings onClick={()=>alert("You Clicked Setting")}/>
                </IconButton>
                <Box>
              <IconButton
                size="large"
                aria-label="account of current user"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Typography>Hey, Nirdosh</Typography>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </Box>
            </Toolbar>
        </AppBar>
    </Box>
    <Outlet/>
    </Box>
  )
}