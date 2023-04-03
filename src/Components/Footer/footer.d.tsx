import {Box,Typography,styled} from '@mui/material'
import ButtonView from './button.d';
import AppleImage from "../../assests/app-store-logo.png";
import GoogleImage from "../../assests/google-store-logo.png";
import HuwaiImage from "../../assests/huwai-store-logo.png";
import BelowContent from './belowContent.d';


const Image=styled('img')({
     height:"80px",
     width:"120px",
     objectFit:"contain",
     objectPosition:"center",
     margin:"5px"
})

export  function Footer() {
    const CustomerCare=["How to Buy","Contact Us"];
    const CustomerCarePath=["/help-buy","/contact"];
    const Earn=["Sale on Sabai Ko Shopping","Code of Conduct"]
    const EarnPath=["/sale","/code"]
    const AboutSabai=["About us","Terms & Conditions","Privacy Policy"]
    const AboutSabaiPath=["/about","/terms","/privacypolicy"]

  return (
    <>
    <Box 
    height={"100%"} width={"100%"} 
    bgcolor={"purple"} color="white"
    display={"flex"} flexDirection={"row"}
    justifyContent={"space-between"}
    >
    <Box display={"inherit"} flexDirection={"column"} margin={"5px"}>
      <Typography fontSize={"0.9rem"}><u>Customer Care</u></Typography>
    {  
      CustomerCare.map((item,index)=>(
        <ButtonView key={index} item={item} path={CustomerCarePath} index={index}/>
      ))
    }
      <Typography fontSize={"0.9rem"} sx={{marginTop:"20%"}}><u>Earn with Sabai Ko Shopping</u></Typography>
      {  
      Earn.map((item,index)=>(
        <ButtonView key={index} item={item} path={EarnPath} index={index}/>
      ))
    }
    </Box>
    <Box display={"inherit"} flexDirection={"column"}>
     
      <Typography fontSize={"0.9rem"}><u>Sabai Ko Shopping</u></Typography>
      {  
      AboutSabai.map((item,index)=>(
        <ButtonView key={index} item={item} path={AboutSabaiPath} index={index}/>
      ))
    }
    </Box>
    <Box>
        <Image src={AppleImage}/>
        <Image src={GoogleImage}/>
        <Image src={HuwaiImage}/>
    </Box>
      
    </Box>
    <BelowContent/>
    </>
  )
}