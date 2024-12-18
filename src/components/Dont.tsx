import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Dont = () => {
  return (
    <div>

        <div className='mt-28 mb-7'>
          <span className='text-xl font-semibold px-10 lg:px-16'>{`Don't`} Miss</span>
        </div>

        <div className='flex justify-center px-10'>
    <Image
    className=''
    src={'/images/dnt1.png'}
    alt='banner'
    width={1200}
    height={600}
    />
    </div>


    <div className='text-center text-black mt-16'>
        

        <span className=' text-3xl sm:text-3xl md:4xl text-[#111111] lg:text-5xl font-semibold uppercase '>flight essentials</span><br /><br />

        <span>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</span><br />

        <Button className='bg-[#111111] text-white hover:bg-slate-200 hover:text-black mt-4 '>shop</Button>
        
    </div>





    </div>
  )
}

export default Dont
