import React from 'react'
import plantA from '../assets/Frame 36.png'
import plantB from '../assets/Frame 37.png'
import plantC from '../assets/Frame 38.png'
import arrow from '../assets/Vector.png'

export const Categories = () => {
  return (
    <div className='mt-8'>
        <div className='text-center'>
            <h2 className=' font-poppins text-2xl font-bold'>Categories</h2>  
            <p className='font-poppins text-base font-normal mt-1'>Find what you're looking for</p>
        </div>

        {/* Layers */}

        <div className='bg-[#C1DCDC] py-4 md:py-8 mt-4 md:mt-10'>
            {/* screens */}
            <div className='flex justify-center md:justify-around gap-5 flex-wrap'>
                <div className='md:relative md:bottom-14'>
                  <img className='block w-60 lg:w-[21rem]' src={plantA} alt="" />
                  <p className='text-center font-poppins font-semibold pb-4 py-4'>Natural Plants</p>
                </div>

                <div>
                  <img className='block w-60 lg:w-[21rem]' src={plantC} alt="" />
                  <p className='text-center font-poppins font-semibold pb-4 py-4'>Plant Accessories</p>
                </div>

                <div className='md:relative md:bottom-14'>
                  <img className='block w-60 lg:w-[21rem]' src={plantB} alt="" />
                  <p className='text-center font-poppins font-semibold pb-4 py-4'>Artificial Plants</p>
                </div>
            </div>
            {/* Screens end */}


            {/* button */}
            <div className='text-center '>
              <p className='md:w-1/4 w-full mx-auto pb-3 font-medium text-[#1e1e1e80] font-poppins'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p className='flex justify-center'><button className='bg-[#fff] items-center gap-2 flex px-2 py-2 rounded-lg w-fit'>Explore <img src={arrow} alt="" /></button></p>
            </div>

        </div>
    </div>
  )
}
