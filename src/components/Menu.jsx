import React from 'react'
import MenuButton from './Buttons/Menubuttons'
import teckzite from '../assets/images/menu/Teckzite.svg';
import image from '../assets/images/menu/image.svg';
import shadoweffect from '../assets/images/menu/shadoweffect.svg';
import Ellipse131 from '../assets/images/menu/Ellipse131.svg';
import Ellipse132 from '../assets/images/menu/Ellipse132.svg';
export const Menu = () => {
  return (
    <div className=' flex flex-col justify-center items-center md:overflow-hidden'>

<div className="main md:relative flex flex-col justify-center items-center"> 
          <div className="backgrounds md:flex flex-col justify-center items-center gap-0 relative hidden">    
          <img src={shadoweffect} className='h-[500px] w-full' />
          <img src={teckzite} className="absolute top-[60px] h-[30px]"/>
           <img src={image}  className="absolute top-[100px] h-[250px] w-[250px]"/>
           </div>
           <div className="circles relative mt-[-50px] hidden md:block">
           <img src={Ellipse131} className='h-[63px] w-[555px] '/>
           <img src={Ellipse132} className='h-[32px] w-[450px] absolute  left-[10%] top-[25%]'/>
           </div>
           <div className="left-buttons md:absolute md:left-[-70px] lg:left-[-150px] md:top-[30px] flex flex-col gap-[30px]">
           
        <div className="md:me-[-180px] lg:me-[-100px]"><MenuButton/></div>
        <div className="lg:me-[20px]"><MenuButton/></div>
        <div className="lg:me-[40px]"><MenuButton/></div>
        <div className="md:me-[-180px] lg:me-[-100px]"><MenuButton/></div>
       
        </div>
        <div className="right-buttons md:absolute right-[-70px] lg:right-[-170px] top-[30px] ">
        <div className="buttons relative  flex flex-col gap-[30px] ">
        <div className="md:me-[80px] lg:me-[100px]"><MenuButton/></div>
        <div className="md:me-[-80px] lg:me-[20px]"><MenuButton/></div>
        <div className="md:me-[-80px] lg:me-[40px]"><MenuButton/></div>
        <div className="md:me-[100px] lg:me-[100px]"><MenuButton/></div>
       </div>
        </div> 
           </div>  
      
       
    </div>
  )
}
