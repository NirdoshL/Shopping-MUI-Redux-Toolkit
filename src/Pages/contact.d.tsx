import {
  Box,
  Button,
  FormGroup,
  FormLabel,
  TextField,
  Typography} from "@mui/material"
import data from "../Data/contact.json"



export default function Contact() {
  return (
    <Box 
    position={"fixed"} 
    height={"100vh"} width={"100%"} 
    justifyContent={"center"}>
      <Typography 
      fontSize={"2rem"}>
        {data.contact.title}
        </Typography>
      <img 
      src={data.contact.img} 
      style={{height:"50vh",width:"100%"}} 
      alt="contact" />
      <Box 
      display={"flex"}  
      margin={"10px"}
      justifyContent={"center"}
      justifyItems={"center"}>
        <FormGroup>
        <FormLabel>Your Message</FormLabel>
          <TextField 
          rows={'5'}
          multiline
          sx={{height:"10vh",width:"300px",margin:"20px"}}
          helperText="*Note: Your name and Email will automatically get sent."
          variant="standard"></TextField>
          <Button
          onClick={()=>{}}
          sx={{marginTop:"80px"}}
          color="inherit"
          >Send</Button>
        </FormGroup>
      </Box>
    </Box>
  )
}