import React from 'react';
import button from '../../assets/button.png';
const Button = ({ name, text, action }) => {
    return (
        <div className=" flex justify-center items-center">
            <div className="relative">
                <img src={button} className="h-[50px] w-[100px]" />
                <div
                    className="absolute text-[10px] font-bold text-white flex justify-center items-center z-[10px] top-[10px] right-[10px] left-[10px]"
                >
                    {name}
                </div>

            </div>
        </div>
    );
};

export default Button;
