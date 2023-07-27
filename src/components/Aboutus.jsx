import React from 'react'
import Plant from '../assets/Plant Vector.png'
import box from '../assets/Box Vector.png'
import phone from '../assets/Phone Vector.png'

export const Aboutus = () => {
  return (
    <div className='mt-6 mx-auto w-11/12'>
        <h2 className='font-poppins font-semibold lg:font-bold text-2xl lg:text-3xl text-center mx-auto'>About Us</h2>
        <p className='font-poppins lg:text-lg text-[#1e1e1e80] text-center w-9/12 mx-auto'>Order now and appreciate the beauty of nature</p>

        <div className='mt-6 lg:mt-10 md:grid grid-cols-3'>

            <div className='text-center'>
                <div className='bg-[#c1dcdc] rounded-full w-fit p-4 flex mx-auto'>
                    <img src={Plant} alt="" className='w-6' />
                </div>
                <p className='font-poppins font-semibold lg:text-lg mt-4 mb-2'>Large Assortment</p>
                <p className='text-[#1e1e1e80] font-poppins w-11/12 mx-auto'>We offer many different types of products with fewer variations in each category.</p>
            </div>

            <div className='text-center mt-6 md:mt-0'>
                <div className='bg-[#c1dcdc] rounded-full w-fit p-4 flex mx-auto'>
                    <img src={box} alt="" className='w-6' />
                </div>
                <p className='font-poppins font-semibold lg:text-lg'>Fast & Free Shipping</p>
                <p className='text-[#1e1e1e80] font-poppins w-11/12 mx-auto'>4-day or less delivery time, free shipping and an expedited delivery option.</p>
            </div>

            <div className='text-center mt-6 md:mt-0'>
                <div className='bg-[#c1dcdc] rounded-full w-fit p-4 flex mx-auto'>
                    <img src={phone} alt="" className='w-6' />
                </div>
                <p className='font-poppins font-semibold lg:text-lg'>Large Assortment</p>
                <p className='text-[#1e1e1e80] font-poppins w-11/12 mx-auto'>Answers to any business related inquiry 24/7 and in real-time.</p>
            </div>

        </div>

    </div>
  )
}
