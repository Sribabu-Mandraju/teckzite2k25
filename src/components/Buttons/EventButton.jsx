import React from 'react';
import Eventbutton from '../../assets/Eventbutton.png';

const EventButton = ({ name, isActive }) => {
  return (
    <div className="flex justify-center items-center">
      {isActive ? (
        <div className="relative">
          <img
            src={Eventbutton}
            className="h-[50px] w-[100px]"
            alt="Active Event Button"
          />
          <div className="absolute text-[15px] font-bold text-white flex justify-center items-center z-[10px] top-[15px] right-[10px] left-[10px]">
            {name}
          </div>
        </div>
      ) : (
        <div className="text-white text-[20px] font-bold">{name}</div>
      )}
    </div>
  );
};

export default EventButton;
