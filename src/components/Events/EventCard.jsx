import React from 'react';
import card from '../../assets/card.png';
import anushka from '../../assets/anushka.jpeg';
import Button from '../Buttons/Button';

const EventCard = ({name,image,time}) => {
    return (
        <div className="flex justify-center bg-[black] items-center min-h-screen">

        <div className=" relative">
            <img 
                src={card} 
                className="relative h-[450px] w-[300px]" 
                alt="card" 
            /> 

            
            <div className="absolute top-[30px] top-[20px] left-[45px] ">
                <img 
                    src={image} 
                    className="h-[225px] w-[200px] rounded-lg" 
                    alt="anushka" 
                />
            </div>

            <div className="absolute top-[270px] left-[0px] flex flex-col gap-[20px] ">
                <div className="flex flex-col gap-[20px] ml-[70px]">
              <div className="text-[20px] text-[white] font-bold text-[white]  ">{name}</div>
              <div className="text-[15px] text-[white] text-center  ml-[-160px] ">{time}</div>
              </div>
              <div className=" ml-[160px]">
                <Button name="know more"/>
                </div>
            </div>


        </div>
        </div>
    );
}

export default EventCard;
