import React from 'react'

import Sireesha from '../../assets/Sireeshaimg.png'
import WebCard from './WebCard';
const TeamData=[
   {
      id:1,
      member:Sireesha,
      title:"Frontened Developer"
   
   },
   {
      id:1,
      member:Sireesha,
      title:"Frontened Developer"
   
   },
   {
      id:1,
      member:Sireesha,
      title:"Frontened Developer"
   
   },
   {
      id:1,
      member:Sireesha,
      title:"Frontened Developer"
   
   },
   {
      id:1,
      member:Sireesha,
      title:"Frontened Developer"
   
   }
];
const WebTeam = () => {
  return (
    <div className='  bg-black  overflow-hidden'>
        <div className='flex flex-wrap gap-4 sm:gap-10 justify-center items-center m-1  lg:m-6 w-full h-full'>
           {
              TeamData.map((data)=>(
               
                  <WebCard mem={data.member} title={data.title}/>
                  
              ))
            }
        </div>
    </div>
  )
}

export default WebTeam