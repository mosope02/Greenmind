import React from 'react'
import arrow from '../assets/Vector.png'
import plant1 from '../assets/Frame 9.png'
import plant2 from '../assets/Frame 7.png'
import plant3 from '../assets/Frame 8.png'

export const Bestselling = () => {
  return (
    <div className='w-11/12 mx-auto mt-4 '>

        <div className='flex flex-wrap justify-around lg:grid lg:grid-cols-4'>
        <div className='max-w-[165px] lg:max-w-[230px] flex flex-col justify-center'>
            <h2 className='font-poppins font-semibold lg:font-bold text-xl lg:text-3xl pb-2 lg:pb-4'>Best Selling Plants</h2>
            <p className='font-poppins font-normal text-[#1e1e1e80] text-sm md:text-base pb-3 max-w-[150px] lg:max-w-[175px]'>Easiest way to healthy life by buying your favorite plants.</p>
            <button className='bg-[#C1DCDC] items-center gap-2 flex px-2 py-2 rounded-lg w-fit'>See more <img src={arrow} alt="" /></button>
        </div>

          <div className=' max-w-[165px] lg:max-w-[299px]'>
            <div><img src={plant1} alt="" /></div>
            <div><h3 className=' font-semibold text-[#1e1e1e] font-poppins'>Natural Plants</h3><p className='font-poppins text-[#1e1e1e80] font-normal'>£1,400.00</p></div>
          </div>

          <div className=' max-w-[165px] lg:max-w-[299px]'>
            <div><img src={plant2} alt="" /></div>
            <div><h3 className=' font-semibold text-[#1e1e1e] font-poppins'>Artificial Plants</h3><p className='font-poppins text-[#1e1e1e80] font-normal'>£900.00</p></div>
          </div>

          <div className=' max-w-[165px] lg:max-w-[299px]'>
            <div><img src={plant3} alt="" /></div>
            <div><h3 className=' font-semibold text-[#1e1e1e] font-poppins'>Artificial Plants</h3><p className='font-poppins text-[#1e1e1e80] font-normal'>£3,500.00</p></div>
          </div>
        </div>
    </div>
  )
}
