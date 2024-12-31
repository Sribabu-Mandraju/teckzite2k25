import React from "react";
import desktop2 from "../../assets/desktop2.png";
import tab2 from "../../assets/tab2.png";
import mobile2 from "../../assets/mobile2.png"
import logo from "../../assets/logo.png"
const NewHeader = () => {
  return (
    <div>
      <div className="relative bg-black w-screen h-screen">
        <div className="hidden lg:block ">
          <div className="z-[100] fixed top-[26px] left-0 w-full h-auto">
            <img src={desktop2} className="w-full h-auto" />
          </div>
          <div className="fixed w-full h-auto top-0 left-0 text-white flex flex-row items-center justify-around">
            <div className='pb-[60px]'>Menu</div>
            <div className=''>
              <img src={logo}  className="h-[120px] w-[250px] pb-[14px]"/>

            </div>
            <div className='pb-[60px]'>Login</div>
          </div>
          <div className="z-[100] fixed bottom-[26px] right-0 w-full h-auto">
            <img src={desktop2} className="w-full h-auto scale-y-[-1]" />
          </div>
          <div className="fixed w-full h-auto bottom-[0px] right-0 text-white flex flex-row items-center  justify-around">
            <div>Instagram</div>
            <div className="text-6xl font-semibold">TZ</div>
            <div>Linkdin</div>
          </div>
        </div>
        <div className="hidden md:block lg:hidden">
          <div className="z-[100] fixed top-[20px] left-0 w-full h-auto">
            <img src={tab2} className="w-full h-auto" />
          </div>
          <div className="absolute w-full top-[14px] left-0 text-white flex flex-row justify-around">
            <div>Menu</div>
            <div className="text-2xl font-semibold">TECKZITE</div>
            <div>Login</div>
          </div>
          <div className="z-[100] fixed bottom-[25px] right-0 w-full h-auto">
            <img src={desktop2} className="w-full h-auto scale-y-[-1]" />
          </div>
          <div className="fixed w-full h-auto bottom-0 right-0 text-white flex flex-row items-center justify-around">
            <div>Instagram</div>
            <div className="text-3xl font-semibold py-2">TZ</div>
            <div>Linkdin</div>
          </div>
        </div>
        <div className=" sm:block md:hidden">
          <div className="z-[100] fixed top-[8px] left-0 w-full h-auto">
            <img src={mobile2} className="w-full h-auto" />
          </div>
          <div className="absolute w-full top-[6px] left-0 text-white flex flex-row justify-around">
            <div className="text-[12px]">Menu</div>
            <div className="text-lg font-semibold">TECKZITE</div>
            <div className="text-[12px]">Login</div>
          </div>
          <div className="z-[100] fixed bottom-[18px] right-0 w-full h-auto">
            <img src={desktop2} className="w-full h-auto scale-y-[-1]" />
          </div>
          <div className="fixed w-full h-auto bottom-0 right-0 text-white flex flex-row items-center justify-around">
            <div className="text-[12px]">Instagram</div>
            <div className="text-lg font-semibold ">TZ</div>
            <div className="text-[12px]">Linkdin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHeader;
