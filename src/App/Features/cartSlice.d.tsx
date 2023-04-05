import {createSlice} from "@reduxjs/toolkit"
import {PayloadAction} from "@reduxjs/toolkit"

export type obj={
    id:string,
    name:string,
    address:string,
    date:string,
    title:string,
    desc:string,
    forWhom:string,
    img:string,
    price:string,
    type:string,
    subType:string,
    item:object,
    numberOfItems:number,
}


type initialStateType={
    cartItems:obj[],
    totalPrice:number
}

const initialState:initialStateType={
      cartItems:[],
      totalPrice:0
}

const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        //logic to add items in cart and to increase its associated price.
       addToCart(state,action:PayloadAction<obj>){
          const itemIndex=state.cartItems.findIndex(
            (item)=>item.id===action.payload.id
          )
          if(itemIndex>=0){
          state.cartItems[itemIndex].numberOfItems+=1;
          const total=parseInt(state.cartItems[itemIndex].price);
          console.log(total)
          state.totalPrice+=total;
          }else{
           const cartItem={...action.payload,numberOfItems:1}
           state.totalPrice+=parseInt(action.payload.price)
           state.cartItems.push(cartItem);
          }
       },

       //logic to remove cart item and its asssociated Price.
       removeCartItems(state,action){
        const itemIndex=state.cartItems.findIndex(
            (item)=>item.id===action.payload.id
        )
        const removingItem=state.cartItems.filter((item)=>item.id!==action.payload.id);
        state.totalPrice-=(state.cartItems[itemIndex].numberOfItems*parseInt(action.payload.price));
        state.cartItems=removingItem;
       },


    }
})
export const {
    addToCart,
    removeCartItems
}
=CartSlice.actions;
export default CartSlice.reducer;