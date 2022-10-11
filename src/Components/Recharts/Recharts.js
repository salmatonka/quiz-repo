import React, { useContext } from 'react';
import {LineChart,Line,XAxis,YAxis,Tooltip } from 'recharts';
import { CartContext } from '../Main/Main';

const Recharts = () => {
    const carts = useContext(CartContext)
    // console.log(carts)


    return (
        <div className='px-4  py-16 mx-auto sm:max-w-xl sm:w-50 md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
       
<LineChart  width={400}
          height={300}
          data={carts}>

<Line type="monotone" dataKey="total" stroke="#82ca9d"></Line>
<XAxis dataKey="name"></XAxis>
<YAxis></YAxis>
<Tooltip></Tooltip>
          </LineChart>

       </div>
     
           


          
    );
};

export default Recharts;
