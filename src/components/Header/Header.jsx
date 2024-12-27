import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="relative">
            <div className="image h-full w-full bg-black md:p-[45px]">
            </div>

            {/* Laptop View */}
            <div className="absolute md:block hidden z-[10px] top-[10px] right-[10px] left-[10px]">
                <div className="tab flex flex-row justify-center items-center gap-[370px]">
                    <div className="menu text-white font-semibold text-[20px] mt-[0px]">Menu</div>
                    <div className="teck text-white font-semibold text-[40px] ml-[-50px] mt-[-15px]">Teckzite</div>
                    <div className="login text-white font-semibold text-[20px] mt-[0px]">login</div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="absolute md:hidden block z-[10px] top-[0px] right-[0px] left-[0px]">
                <div className="flex flex-row justify-center items-center gap-[80px]">
                    <div className="text-white font-semibold text-[10px] mt-[5px]">Menu</div>
                    <div className="text-white font-semibold ml-[-10px] mt-[-3px]">Teckzite</div>
                    <div className="text-white font-semibold text-[10px] mt-[5px]">login</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
