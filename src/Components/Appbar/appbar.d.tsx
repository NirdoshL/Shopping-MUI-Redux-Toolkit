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


export  function AppbarView() {
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
                <IconButton color='inherit' sx={{marginLeft:"5px"}}>
                    <BsCartCheck/>
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