import React from 'react'
import {Button} from "@mui/material"
import {Link} from 'react-router-dom'


type Props = {
    path:string[],
    item:string,
    index:number
}

export default function ButtonView({path,item,index}: Props) {
  return (
         <Button 
            color="inherit"
            component={Link} 
            to={path[index]}
            sx={{fontSize:"0.7rem"}}
            >
                {item}
         </Button>
  )
}