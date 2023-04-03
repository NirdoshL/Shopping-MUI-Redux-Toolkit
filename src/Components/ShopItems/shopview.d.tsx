import React from 'react'
import {Box,Typography} from '@mui/material'
import data from "../../Data/data.json"
import ShoppingCard from './shopCard.d'


export  function ShopView() {
  return (
    <Box>
    <Typography sx={{margin:"5px"}} fontSize={"2rem"}>Just For You</Typography>
    <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-evenly"}>
        {
            data.data.map((item,index)=>(
                <ShoppingCard 
                item={item}
                key={index}
                name={item.name}
                address={item.address}
                date={item.date}
                title={item.title}
                forWhom={item.forWhom} 
                desc={item.desc}
                img={item.img}
                price={item.price}
                subType={item.subType}
                type={item.type}
                
              />
            ))
        }
    </Box>
    </Box>
  )
}