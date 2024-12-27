import React from 'react';
import Horizontalcard from '../../assets/Horizontalcard.png';
import anushka from '../../assets/anushka.jpeg';
import Button from '../Buttons/Button';

const HorizontalCard = () => {
  return (
    <div className="flex justify-center bg-black items-center min-h-screen">
      <div className="relative bg-black">
        <img 
          src={Horizontalcard} 
          className="h-[450px] w-[750px]" 
          alt="card" 
        />

        <div className="absolute top-[130px] left-[50px] flex flex-col gap-[5px]">
          {/* Image of Anushka */}
          <img 
            src={anushka} 
            className="h-[230px] w-[230px] rounded-lg" 
            alt="anushka" 
          />

          {/* Button below the image */}
          <div >
            <Button name="Register" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
