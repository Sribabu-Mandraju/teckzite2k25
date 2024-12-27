import React from 'react';
import card from '../../assets/card.png';
import anushka from '../../assets/anushka.jpeg';
import Button from '../Buttons/Button';
const Card = () => {
    return (
        <div className="flex justify-center bg-[black] items-center min-h-screen">

        <div className="bg-black relative">
            <img 
                src={card} 
                className="relative h-[450px] w-[300px]" 
                alt="card" 
            /> 

            
            <div className="absolute top-[30px] top-[20px] left-[45px] ">
                <img 
                    src={anushka} 
                    className="h-[225px] w-[200px] rounded-lg" 
                    alt="anushka" 
                />
            </div>

            <div className="absolute top-[270px] left-[50px] flex flex-col gap-[20px] ">
              <div className="text-[20px] text-[white] font-bold text-[white] ml-[55px]">Anushka</div>
              <div className="text-[15px] text-[white] text-center ml-[45px]">small description</div>
              <div className=" ml-[50px]">
                <Button name="know more"/>
                </div>
            </div>


        </div>
        </div>
    );
}

export default Card;
