import React from 'react'
import { useAppSelector } from '../../App/hooks.d'
import {Box} from '@mui/material'
import PreCart from './percart.d'


export function CartView() {
    const cartItem=useAppSelector((state)=>state.cart.cartItems)
    const totalPrice=useAppSelector((state)=>state.cart.totalPrice)
  return (
    <Box> 
     <PreCart items={cartItem} total={totalPrice} /> 
    </Box>
  )
}