import React from 'react'
import cart from  '../assets/Cart.png'
import person from '../assets/Person.png'
import filter from '../assets/FilterRight.png'

export const Topbar = () => {
  return (
    <div className='w-11/12 mx-auto mt-4 flex justify-between items-center'>
        <div className='flex gap-24'>
            <h1 className='font-playfair text-2xl'>GREENMIND</h1>
            <div className=' hidden md:flex gap-12 items-center'>
              <a className='text-[#1e1e1e80] hover:text-[#1E1E1E] inline-block text-lg duration-300' href="./">Home</a>
              <a className='text-[#1e1e1e80] hover:text-[#1E1E1E] inline-block text-lg duration-300' href="./">Products</a>
              <a className='text-[#1e1e1e80] hover:text-[#1E1E1E] inline-block text-lg duration-300' href="./">Contacts</a>
            </div>
        </div>

        <div className='flex gap-8 md:gap-10 lg:gap-12 lg:mx-2'>
          <div><img src={cart} alt="cart" /></div>  
          <div><img src={person} alt="profile" /></div>
          <div className=''><img src={filter} alt="open" /></div>
        </div>
    </div>
  )
}
