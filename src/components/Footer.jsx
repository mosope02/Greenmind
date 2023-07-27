import React from 'react'
import fb from '../assets/gg_facebook.png'
import ig from '../assets/ri_instagram-fill.png'
import tweet from '../assets/Group 13.png'

export const Footer = () => {
  return (
    <div className='mt-32 bg-[#c1dcdc] py-6 md:py-10 md:px-12 px-6'>
        <div className=' md:flex justify-between'>
            <div className='mb-8'>
                <h2 className='font-playfair font-bold text-2xl mb-4'>GREENMIND</h2>
                <p className='font-poppins text-[#1e1e1e80] max-w-[170px] mb-4'>We help you find your dream plant</p>
                <div className='flex gap-2'>
                    <div className='border border-solid border-[#1e1e1e80] rounded-full flex justify-center items-center h-10 w-10'><img src={fb} alt="" /></div>
                    <div className='border border-solid border-[#1e1e1e80] rounded-full flex justify-center items-center h-10 w-10'><img src={ig} alt="" /></div>
                    <div className='w-10 h-10'><img src={tweet} alt="" /></div>
                </div>
            </div>

            <div className='md:flex gap-16'>
                <div className='mb-6'>
                    <h2 className='font-semibold text-lg mb-2 font-poppins'>Information</h2>
                    <ul className='text-[#1e1e1e80] font-poppins'>
                        <li className='mb-2'><a href="/">About</a></li>
                        <li className='mb-2'><a href="/">Product</a></li>
                        <li className='mb-2'><a href="/">Blog</a></li>
                    </ul>
                </div>

                <div className='mb-6'>
                    <h2 className='font-semibold text-lg mb-2 font-poppins'>Company</h2>
                    <ul className='text-[#1e1e1e80] font-poppins'>
                        <li className='mb-2'><a href="/">Community</a></li>
                        <li className='mb-2'><a href="/">Career</a></li>
                        <li className='mb-2'><a href="/">Our Story</a></li>
                    </ul>
                </div>

                <div className='mb-6'>
                    <h2 className='font-semibold text-lg mb-2 font-poppins'>Contact</h2>
                    <ul className='text-[#1e1e1e80] font-poppins'>
                        <li className='mb-2'><a href="/">Getting Started</a></li>
                        <li className='mb-2'><a href="/">Pricing</a></li>
                        <li className='mb-2'><a href="/">Resources</a></li>
                    </ul>
                </div>
            </div>
            
        </div>

        <p className='text-[#1e1e1e80] font-poppins md:mt-8 mt-12 '>2023 All Rights Reserved. Terms of Use GREENMIND</p>
    </div>
  )
}
