import {createSlice} from "@reduxjs/toolkit"
import {PayloadAction} from "@reduxjs/toolkit"



type initialStateType={
    cartItems:object[],
    numberOfItems:number,
    totalPrice:number
}

const initialState:initialStateType={
      cartItems:[],
      numberOfItems:0,
      totalPrice:0
}

const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
       addToCart(state,action:PayloadAction<object>){
          state.cartItems.push(action.payload)
       }
    }
})
export const {
    addToCart
}
=CartSlice.actions;
export default CartSlice.reducer;