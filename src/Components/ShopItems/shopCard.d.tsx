import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {MdAddShoppingCart} from "react-icons/md"


type props={
    name:string,
    address:string,
    date:string,
    title:string,
    desc:string,
    forWhom:string,
    img:string,
    price:string,
    type:string,
    subType:string
}

export default function ShoppingCard({name,address,date,title,desc,forWhom,img,price,type,subType}:props) {
  return (
    <Card sx={{ width: '250px' ,margin:"5px"}}>
      <CardMedia
        component="img"
        alt={title}
        height="140px"
        image={img}
      />
      <CardContent>
        <Box display={"flex"} flexWrap={"wrap"} justifyContent={'space-between'}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Rs:{price}
        </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
        {desc}
        </Typography>
        <Box display={"flex"} flexWrap={"wrap"} justifyContent={'space-between'}>
        <Typography gutterBottom variant="body2" component="div">
          by {name}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          on {date}
        </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{justifyContent:"space-between"}}>
        <IconButton size="small"><MdAddShoppingCart/></IconButton>
        <Button size="small" color='inherit'>Buy Now</Button>
      </CardActions>
    </Card>
  );
}