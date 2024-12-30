import React, { useState, useEffect } from "react";
import Humanhand from "../assets/Humanhand.png";
import Robohand from "../assets/Robohand.png";

const Animation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Update scroll position on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      console.log(window.scrollY)
     
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      
    };
  }, []);

  return (
    <>
      <div
        style={{
          opacity: 1 - scrollPosition / 200,
        }}
        className={`${window.scrollY>270?'hidden':'block'} w-full fixed top-0 left-0 duration-300   h-screen overflow-hidden`}
      >
        <div className="w-screen h-screen relative">
          {/* Human Hand Image */}
          <img
            src={Humanhand}
            alt="Human Hand"
            style={{
              position: "absolute",
              top: -scrollPosition * 0.8, // Smoother parallax
              left: -scrollPosition * 0.6, // Reduced lateral movement
              transition: "top 0.1s, left 0.1s", // Smooth transitions
            }}
            className="w-[90%] h-[80%]"
          />

          {/* Robo Hand Image */}
          <img
            src={Robohand}
            alt="Robo Hand"
            style={{
              position: "absolute",
              bottom: -scrollPosition * 1, // Adjusted for smoother motion
              right: -scrollPosition * 0.4, // Reduced lateral movement
              transition: "bottom 0.1s, right 0.1s", // Smooth transitions
            }}
            className="w-[90%] h-[80%]"
          />
        </div>
      </div>
      <div className="w-full h-screen z-[-1]  "></div>
      <div className="w-full  text-5xl text-center text-white h-screen">sss</div>
    </>
  );
};

export default Animation;
