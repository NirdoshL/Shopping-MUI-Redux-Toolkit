import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'

type props={
    title:string,
    desc:string,
    img:string,
    type:string,
    
}

export default function CardView({title,desc,type,img}:props) {
  return (
    <Card sx={{ maxWidth: '300px' ,margin:"5px"}}>
      <CardMedia
        sx={{ height: '140px' }}
        image={img}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={"/catagories/"+type} size="small" color="inherit">View</Button>
      </CardActions>
    </Card>
  );
}