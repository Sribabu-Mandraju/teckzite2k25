import React, { useState, useEffect } from "react";
import Humanhand from "../assets/Humanhand.png";
import Robohand from "../assets/Robohand.png";

const Animation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Update scroll position on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Wrapper for Animation */}
      <div className="relative w-full h-screen">
        {/* Animation Layer */}
        <div
          className="fixed top-0 left-0 w-full h-screen pointer-events-none"
          style={{ zIndex: 0 }}
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
      </div>

      {/* Bottom Content */}
      <div className="w-full h-screen bg-gray-800 flex items-center justify-center text-white text-2xl">
        Scroll down to interact with this content
      </div>
      <div className="w-full h-screen bg-blue-600 flex items-center justify-center text-white text-2xl">
        More interactive content
      </div>
      <div className="w-full h-screen bg-green-600 flex items-center justify-center text-white text-5xl">
        This is the final section
      </div>
    </>
  );
};

export default Animation;
