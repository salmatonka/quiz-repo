import React, { createContext } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Outlet, useLoaderData} from 'react-router-dom';
   
 export const CartContext = createContext([])

const Main = () => {
const topicsCart = useLoaderData()
console.log(topicsCart);
    return (
        <CartContext.Provider value={topicsCart}>

            <Header></Header>
            <Outlet></Outlet>

            <Footer></Footer>
   
        </CartContext.Provider>
    );
};

export default Main;