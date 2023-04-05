import {  useParams } from "react-router-dom"
import React from 'react'
import data from '../../../Data/data.json'
import ShoppingCard from "../../ShopItems/shopCard.d";
import {Box,Typography} from "@mui/material"




export default function SpecificCatagory() {
    const {id}=useParams();
    


  return (
    <div>
    <Typography sx={{margin:"5px"}} fontSize={"2rem"}>Catagory: {id}</Typography>
    <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-evenly"}>
        {
            
                data.data.filter((item)=>(
                     item.type===id
                 )).map((itm)=>(
              <ShoppingCard 
              address={itm.address}
              forWhom={itm.forWhom}
              subType={itm.subType}
              type={itm.type}
              name={itm.name} 
              item={itm} 
              date={itm.date} 
              title={itm.title} 
              desc={itm.desc} 
              img={itm.img} 
              price={itm.price}
              />
            ))
        }
        </Box>
    </div>
  )
}
