import Carousel from 'react-material-ui-carousel'
import data from "../../Data/carouselData.json"
import {Box,Typography} from "@mui/material"

export  function CarouselView() {
  return (
    <Carousel
    autoPlay
    indicators={false}
    >
        {
            data.carouselData.map((item,index)=>(
                <Box 
                display={"flex"} justifyContent={"center"}
                  alignItems={"center"} key={index} 
                  height="52vh" width={"100%"}>
                  <Typography 
                  color={"black"} 
                  fontSize={"3rem"}
                  position={"absolute"}
                 >
                    {item.title}
                  </Typography>
                  <img 
                  style={{
                    height:"50vh",width:"100%",
                    opacity:"0.7",
                    objectFit:"cover",objectPosition:"center"
                    }} 
                  src={item.img} alt={item.title}/>
                </Box>
            ))
        }
    </Carousel>
  )
}