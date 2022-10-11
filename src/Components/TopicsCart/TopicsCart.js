import React from 'react';
import {useContext} from 'react'
import { CartContext } from '../Main/Main';
import Cart from './Cart/Cart';
const TopicsCart = () => {
    const carts = useContext(CartContext)
//   console.log(carts)
const handleAddToCart = () =>{
    console.log('clicked');
}


    return (
        
        <div className='px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='grid gap-8 row-gap-5 mb-10 lg:grid-cols-2 lg:row-gap-8'>
  
  {
      carts.map (cart =>(
  <Cart key={cart.id}
   cart={cart}
   handleAddToCart={handleAddToCart}
   ></Cart> 
  
      ))
  }
          
        </div>
      </div>
    );
};

export default TopicsCart;