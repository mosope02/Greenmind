import React from 'react'
import search from '../assets/Search.png'
import plant from '../assets/unsplash_cLaaxa4DSnc-removebg-preview 1.png'
import dark from '../assets/Rectangle 2.png'
import arrowT from '../assets/Vector 187.png'
import arrowB from '../assets/Vector 186.png'

export const Thumbnail = () => {
  return (
    <div className='w-11/12 mx-auto bg-[#C1DCDC] mt-4 rounded-2xl pt-4 px-4 lg:px-12 md:grid grid-cols-5 justify-between lg:h-[520px]'>
        <div className='col-span-2 lg:mt-14'>
            <h2 className='font-bold text-4xl lg:text-7xl lg:w-auto w-9/12 lg:font-extrabold font-poppins'>Buy your dream plants</h2>
            <div className='flex w-9/12 justify-between mt-4 lg:max-w-[240px]'>
                <div className='text-4xl lg:font-medium border-r-[1px] border-solid border-black pr-6'>50+ <p className='text-lg lg:font-normal'>Plant species</p></div>
                <div className='text-4xl lg:font-medium'>100+ <p className='text-lg lg:font-normal'>Customers</p></div>
            </div>
            <form className='bg-white rounded-lg h-12 py-1 px-4 justify-between flex items-center mt-8 lg:w-11/12'>
                <input className='w-full h-full outline-none' type="text" placeholder='What are you looking for?' />
                <button className=''><img src={search} className="text-center " alt="search" /></button>
            </form>
        </div>

        <div className='hidden md:flex items-end md:h-4/5 col-span-1 '><img className='inline-block' src={arrowB} alt="" /></div>

        <div className='mt-2 col-span-2'>
            <div className=' hidden md:flex md:absolute right-[76px] justify-end'><img className='inline-block w-16' src={arrowT} alt="" /></div>
            <div className=' bg-no-repeat bg-bottom lg:bg-[bottom_center] bg-contain justify-center h-full flex md:max-h-[510px]' style={{backgroundImage: `url(${dark})`}} >
                <img className='block max-w-[320px]' src={plant} alt="" />
            </div>
        </div>
    </div>
  )
}
