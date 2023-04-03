import React from 'react'
import {Box, Typography,Card,CardContent,CardActions,CardMedia,Button} from '@mui/material'

type Props = {
    items:object[],
}

export default function PerCart({items}: Props) {
  return (
    <>
  {
    items.length===0 ?
    <>
    <Typography color={"inherit"} fontSize={"2rem"}>Cart</Typography>
    <Box display={"flex"} justifyContent={"center"} justifyItems={"center"}>
        Your Cart is Empty!
    </Box>
    </>
    :
    <>
     <Typography color={"inherit"} fontSize={"2rem"}>Cart</Typography>
    <Box display={"flex"} justifyContent={"center"} 
    flexWrap={"wrap"} justifyItems={"center"}>
       {
        items.map((item,index)=>(
            <Card key={index} sx={{ width: '250px' ,margin:"5px"}}>
            <CardMedia
              component="img"
              alt={item.title}
              height="140px"
              image={item.img}
            />
            <CardContent>
              <Box 
              display={"inherit"}
               flexWrap={"inherit"}
                justifyContent={'space-between'}>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Rs:{item.price}
              </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
              {item.desc}
              </Typography>
              <Box display={"flex"} flexWrap={"wrap"} justifyContent={'space-between'}>
              <Typography gutterBottom variant="body2" component="div">
                by {item.name}
              </Typography>
              <Typography gutterBottom variant="body2" component="div">
                on {item.date}
              </Typography>
              </Box>
            </CardContent>
            <CardActions sx={{justifyContent:"space-between"}}>
              <Button size="small" color='inherit'>Remove</Button>
              <Button size="small" color='inherit'>Add more</Button>
            </CardActions>
          </Card>  
        ))
       }
    </Box>
    <Box display={"flex"} justifyContent={"space-between"} justifyItems={"center"} margin={"20px"}>
    <Typography variant="h6" fontWeight={"bold"} color="red">Total Price: Rs 3000</Typography>
    <Button variant="contained">Buy All</Button>
    </Box>
    </>
}
</>
  )
}