import React, { useContext } from 'react';
import {LineChart,Line,XAxis,YAxis,Tooltip } from 'recharts';
import { CartContext } from '../Main/Main';

const Recharts = () => {
    const carts = useContext(CartContext)
    // console.log(carts)


    return (
        <div className='lg:py-10 lg:px-10 '>
           
    <p className='pb-6 text-2xl  text-gray-900  '>Assignment Analytics</p>   
<LineChart  width={330}
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
