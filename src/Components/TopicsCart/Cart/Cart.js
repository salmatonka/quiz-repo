import React from 'react';

const Cart = ({cart}) => {
   
  const { name, logo ,total} = cart
  return (
    <div className='bg-sky-400 p-6 rounded shadow-lg'>
      <img
        className=' w-full h-56 mb-6 rounded shadow-lg md:h-64 '
        src={logo}
        alt=''
      />
      <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{name}</p>
      <p className='text-gray-700 '>Name: {name}</p>
      <p className='text-gray-700 font-bold'>Total: {total}$</p>
      <button
        type='button'
        className='px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400'
      >
        Add To Cart
      </button>
    </div>
  )
};

export default Cart;