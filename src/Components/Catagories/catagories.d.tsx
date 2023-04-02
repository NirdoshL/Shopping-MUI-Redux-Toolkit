import {Box,Typography} from '@mui/material'
import data from "../../Data/catagories.json"
import CardView from './card.d'



export  function Catagories() {
  return (
    <Box>
    <Typography sx={{margin:"5px"}} fontSize={"2rem"}>Catagories</Typography>
    <Box display={"flex"} flexWrap={"wrap"}>
        {
            data.catagories.map((item,index)=>(
                <CardView 
                key={index}
                title={item.title} 
                desc={item.desc}
                img={item.img}
                type={item.type}
              />
            ))
        }
    </Box>
    </Box>
  )
}