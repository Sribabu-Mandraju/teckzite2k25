import React from 'react'
import h1 from '../../assets/images/header/main.svg'

const Header = () => {
  return (
    <>
      <div className="w-full fixed top-0 text-white">
        <div className="w-full relative  h-auto flex items-center justify-between z-[5]">
            <div className="relative">
                <div className="absolute left-[20px] md:left-[180px] top-4 rounded-md border-white border px-2 py-1 font-bold">MENU</div>
            </div>
            <div className="mt-[0px] text-3xl md:text-5xl  font-bold ">Hello</div>
            <div className="mt-[30px] ">Hello</div>
            <img src={h1} alt="" className='w-full h-auto absolute top-0 left-0' />
        </div>
      </div>
    </>
  )
}

export default Header
