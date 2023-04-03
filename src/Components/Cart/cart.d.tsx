import React from 'react'
import { useAppSelector } from '../../App/hooks.d'
import {Box} from '@mui/material'
import PreCart from './percart.d'


export function CartView() {
    const cartItem=useAppSelector((state)=>state.cart.cartItems)
  return (
    <Box> 
     <PreCart items={cartItem} /> 
    </Box>
  )
}