import React from 'react'
import Group from '../../assets/Group 133.svg'
const WebCard = ({mem,title}) => {
  return (
    <div className='flex  justify-center lg:w-[24%] md:w-[40%] w-[85%] h-[350px]  relative'>
    <img src={Group} className='w-full' />
    <img src={mem} className="absolute top-[24px] h-[63%]" />
    <h1 className='absolute   text-white font-semibold bottom-4 md:text-md sm:text-sm lg:text-lg'>{title}</h1>

 </div>
  )
}

export default WebCard
