import React from 'react'
import manA from '../assets/unsplash_5aGUyCW_PJw-removebg-preview.png'
import manB from '../assets/unsplash_O3ymvT7Wf9U-removebg-preview.png'
import star from '../assets/StarFill.png'
export const Customers = () => {
  return (
    <div className='mt-10 w-11/12 mx-auto'>
        <h2 className='font-poppins font-bold text-2xl pb-10'>What customers say about GREENMIND?</h2>

        <div className='flex gap-4 justify-center pb-6'>
            <div className='w-3 h-3 rounded-full bg-[#c2e4e4]'></div>
            <div className='w-3 h-3 rounded-full bg-[#c2e4e4]'></div>
            <div className='w-3 h-3 rounded-full bg-[#c2e4e4]'></div>
        </div>

        <div className='overflow-x-scroll flex no-scrollbar scrollbar-hide'>
            <div className='flex flex-nowrap gap-8'>
                
            <div className='bg-[#C1DCDC] rounded-xl inline-block w-96 md:w-[40rem] h-fit'>
                <p className='py-4 px-4 font-poppins text-[#1e1e1ebf]'>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <div className='flex justify-between pr-5'>

                    <div className='flex items-center'>
                        <div>
                            <img className='z-100' src={manA} alt="" />
                        </div>
                        <div><h3>John Doe</h3> <p>Youtuber</p></div>
                    </div>
                    <div className='flex flex-wrap gap-2 items-center'><div><img src={star} alt="" /></div><div>4.5</div></div>
                </div>
            </div>

            <div className='bg-[#C1DCDC] rounded-xl inline-block w-96 md:w-[40rem] h-fit'>
                <p className='py-4 px-4 font-poppins text-[#1e1e1ebf]'>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <div className='flex justify-between pr-5'>

                    <div className='flex items-center'>
                        <div>
                            <img src={manB} alt="" />
                        </div>
                        <div><h3>John Doe</h3> <p>Youtuber</p></div>
                    </div>
                    <div className='flex flex-wrap gap-2 items-center'><div><img src={star} alt="" /></div><div>4.5</div></div>
                </div>
            </div>
            
            </div>
        </div>

    </div>
  )
}
