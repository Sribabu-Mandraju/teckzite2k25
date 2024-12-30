
import React from 'react';
import Workshopcardimage from '../../assets/Workshopcardimage.png';
import anushka from '../../assets/anushka.jpeg';
import Button from '../Buttons/Button';
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import './Workshopcard.css';
const Workshopcard = () => {
    return (
        <div className="flex justify-center bg-[black] items-center min-h-screen ">

        <div className=" relative image-container">
            <img 
                src={Workshopcardimage} 
                className="relative h-[450px] w-[300px]" 
                alt="card" 
            /> 
            <div className="absolute top-[30px] top-[20px] left-[45px] ">
                <img 
                    src={anushka} 
                    className="h-[225px] w-[200px] rounded-lg anush" 
                    alt="anushka" 
                />
            </div>
            <div className="overlay text-white flex flex-row justify-center items-center gap-4">
                <a href="#"><FaInstagram className="w-[30px] h-[30px] text-[#0A69A5]"/></a>
                <a href="#"><RiFacebookCircleLine className="w-[30px] h-[30px] text-[#0A69A5]"/></a>
                
            </div>

            <div className="absolute top-[270px] left-[0px] flex flex-col gap-[20px] ">
                <div className="flex flex-col gap-[20px] ml-[70px]">
              <div className="text-[20px] text-[white] font-bold text-[white]  titlename">anushka</div>
              <div className="text-[15px] text-[white] text-center  ml-[-160px] ">4.00</div>
              </div>
              <div className=" ml-[160px]">
                <Button name="know more"/>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Workshopcard;
