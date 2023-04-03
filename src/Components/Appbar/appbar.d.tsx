import { 
    AppBar,
    Typography,
    Toolbar,
    IconButton,
    Button,
    Avatar,
    Box 
} 
from '@mui/material'
import {BsCartCheck} from "react-icons/bs"
import {FiSettings} from "react-icons/fi"
import { SidebarView } from '../Sidebar/sidebar.d'
import { useAppSelector } from '../../App/hooks.d'
import { Link } from 'react-router-dom'


export  function AppbarView() {
    const count=useAppSelector((state)=>state.cart.cartItems.length)
  return (
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
                    <FiSettings/>
                </IconButton>
                <Button color='inherit' sx={{marginLeft:"5px"}}>
                    <Avatar src={process.env.REACT_APP_AVATAR_IMG_URL}>
                    </Avatar>
                </Button>
            </Toolbar>
        </AppBar>
    </Box>
  )
}