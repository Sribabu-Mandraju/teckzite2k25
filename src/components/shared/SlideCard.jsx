import React from 'react'
import i1 from '../../assets/images/events/main.svg'

const SlideCard = () => {
  return (
    <>
      <div className="w-full bg-black flex items-center justify-between h-screen">
        <div className="w-full  max-w-[1100px] h-auto relative">
            <img src={i1} alt="" className="m-5 w-[320px] h-[150px] absolute left-0 top-0" />
        </div>
      </div>
    </>
  )
}

export default SlideCard
