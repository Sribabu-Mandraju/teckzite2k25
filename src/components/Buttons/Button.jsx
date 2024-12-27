import React from 'react';
import button from '../../assets/button.png';
import {useNavigate} from 'react-router-dom';
const Button = ({ name, text, action }) => {
      const navigate=useNavigate();
    const handleClick = () => {
        if (action === "console") {
            console.log(text); 
        } else if (action === "alert") {
            alert(text); 
        } else if (action === "navigate") {
            navigate('./footer');
        } else if (action === "print") {
            console.log(text); 
        }
    };

    return (
        <div className="bg-[black] flex justify-center items-center">
            <div className="relative">
                <img src={button} className="h-auto w-auto" />
                <div
                    className="absolute text-[20px] font-bold text-white flex justify-center items-center z-[10px] top-[50px] right-[10px] left-[10px]"
                   onClick={handleClick}
                >
                    {name}
                </div>
            </div>
        </div>
    );
};

export default Button;
