import React from "react";
import robo from "../../assets/images/events/robo.png";
import img1 from "../../assets/images/events/main.svg";
import tm1 from "../../assets/images/events/timer.svg"

const Hero = () => {
  return (
    <>
      <div className="w-full flex  justify-center relative h-screen">
       

        <img src={robo} alt="" className=" absolute w-full max-w-[800px]" />
       
      </div>
    </>
  );
};

export default Hero;
