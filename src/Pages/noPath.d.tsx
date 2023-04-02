import {Box,Button} from "@mui/material"
import Error from "../assests/error.gif"
import {Link} from "react-router-dom"


export default function ErrorScreen() {
  return (
    <Box position={"fixed"} height={"100vh"} width={"100%"}>
    <Button
    component={Link}
    to="/" >Go Back</Button>
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} width={"100%"}>
       <img src={Error} alt="404"/>
    </Box>
    </Box>
  )
}