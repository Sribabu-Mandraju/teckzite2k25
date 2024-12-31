import React, { useState } from 'react';
import EventButton from '../Buttons/EventButton';
import { Eventslist } from './Eventslist'; 
import EventCard from './EventCard'; 

const Events = () => {
  const [activeSection, setActiveSection] = useState('open');
  const [select, setSelect] = useState('open');

  const navigation = [
    { name: 'OPEN', id: 'open' },
    { name: 'PUC', id: 'puc' },
    { name: 'CSE', id: 'cse' },
    { name: 'ECE', id: 'ece' },
    { name: 'EEE', id: 'eee' },
    { name: 'CIVIL', id: 'civil' },
    { name: 'CHEM', id: 'chem' },
    { name: 'MME', id: 'mme' },
    { name: 'MECH', id: 'mech' },
    { name: 'ROBOTICS', id: 'robotics' },
  ];

  const filteredData = select === 'All' ? Eventslist : Eventslist.filter((item) => item.category?.toLowerCase() === select.toLowerCase());

  return (
    <div className="bg-black  justify-center items-center min-h-screen">
      <div className="flex flex-col gap-[20px] justify-center items-center ">

        <div className="text-white text-[30px] font-bold">Events</div>
        <div className="flex flex-row justify-center items-center lg:flex-wrap flex-wrap p-[20px]">
          {navigation.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setSelect(item.id);
              }}
              className={`text-[15px] font-bold text-white cursor-pointer ${
                activeSection === item.id ? 'underline' : ''
              }`}
            >
              <EventButton name={item.name} isActive={activeSection === item.id} />
            </div>
          ))}
        </div>
        <div className=" flex md:flex-row flex-col justify-center items-center md:gap-[70px] gap-[40px] md:flex-wrap">
        {filteredData.map((item) => (
          <EventCard
            key={item.id} 
            name={item.name}
            image={item.photo}
            time={item.time}
          />
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default Events;
