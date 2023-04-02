import { 
    Drawer, 
    Typography, 
    Box, 
    Avatar,
    IconButton,
    Button } from "@mui/material";
import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi"
import {Link} from "react-router-dom"



export function SidebarView() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const ButtonText=["Home","About-us","Contact","Sign-Out"];
    const Path=["/","about","/contact","/signout"];
    const date=new Date().getHours().toString();
    return (
        <div>
            <IconButton
                color='inherit'
                onClick={()=>setIsDrawerOpen(true)}>
                <BiMenuAltLeft />
            </IconButton>
            <Drawer 
            elevation={0}
            PaperProps={{style:{
                width:"240px"
            }}}
            anchor="left" 
            open={isDrawerOpen} 
            onClose={() => setIsDrawerOpen(false)}>
                <Box sx={{
                    display:"flex",flexDirection:"column",
                    alignItems:"center"}}>
                    <Typography>
                        {
                            (parseInt(date)<=12)?"Good Morning":"Good Evening"
                        }
                        <br/> 
                        Nirdosh
                    </Typography>
                    <Avatar sx={{
                        margin:"10px", height:"120px", 
                        width:"120px"}} 
                        src={process.env.REACT_APP_AVATAR_IMG_URL} />
                    <Box marginBottom={"40%"}/>
                    {
                      ButtonText.map((item,index)=>(
                       <Button 
                       sx={{margin:"10px"}}
                       color="inherit"
                       key={index}
                       component={Link}
                       to={Path[index]}
                       >
                        {item}
                       </Button>
                      ))
                    }
                </Box>
            </Drawer>
        </div>
    )
}