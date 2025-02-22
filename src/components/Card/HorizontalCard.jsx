import React, { useState } from 'react';
import Horizontalcard from '../../assets/Horizontalcard.png';
import anushka from '../../assets/anushka.jpeg';
import Button from '../Buttons/Button';
import Horizontal2 from '../../assets/Horizontal2.png';
import EventButton from '../Buttons/EventButton';
import './Horizontal.css';

const HorizontalCard = () => {
  const [activeSection, setActiveSection] = useState('about');
  const navigationItems = [
    { name: 'About', id: 'about' },
    { name: 'Structure', id: 'structure' },
    { name: 'Time', id: 'time' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="flex justify-center bg-black items-center min-h-screen">
      <div className="relative">
        {/* Desktop View */}
        <img
          src={Horizontalcard}
          className="h-[450px] w-[850px] md:block hidden"
          alt="card"
        />
        {/* Mobile View */}
        <img
          src={Horizontal2}
          className="md:hidden block w-[350px] h-[650px]"
          alt="card"
        />

        {/* Navigation Section */}
        <div className="md:block hidden">
          <div className="absolute top-[60px] left-[80px] flex flex-row gap-[100px]">
            {navigationItems.map((item) => (
              <div
                key={item.id}
                className={`cursor-pointer ${
                  activeSection === item.id ? 'underline' : ''
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                <EventButton name={item.name} isActive={activeSection === item.id} />
              </div>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="absolute md:top-[130px] top-[70px] left-[50px] flex md:flex-row flex-col md:gap-[50px] gap-[20px]">
          {/* Image of Anushka */}
          <div className="flex flex-col gap-[5px] md:ml-[0px] ml-[10px]">
            <img
              src={anushka}
              className="h-[230px] w-[230px] rounded-lg"
              alt="anushka"
            />
            {/* Button below the image */}
            <div className="md:ml-[0px] ml-[-30px]">
              <Button name="Register" />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden block">
            <div className="absolute left-[-30px] flex flex-row gap-[10px]">
              {navigationItems.map((item) => (
                <div
                  key={item.id}
                  className={`cursor-pointer ${
                    activeSection === item.id ? 'underline' : ''
                  }`}
                  onClick={() => setActiveSection(item.id)}
                >
                  <EventButton name={item.name} isActive={activeSection === item.id} />
                </div>
              ))}
            </div>
          </div>

          {/* Text Content with Scroll */}
          <div className="overflow-auto no-scrollbar h-[200px] w-[250px] md:h-[200px] md:w-[500px] md:mt-[0px] mt-[30px] flex flex-col gap-[4px] md:gap-[7px]">
            <div className="text-white font-bold text-[15px] md:text-[25px] md:ml-[0px] ml-[30px]">
              SOLVE FOR TOMORROW
            </div>
            {/* Conditional Content Based on Active Section */}
            {activeSection === 'about' && (
              <div>
                <div className="text-white">Team Size: 1</div>
                <div className="text-white">Description</div>
                <p className="text-white">
                  <span className="ml-[30px]">
                    Solve for Tomorrow aims to make visible the positive impact
                  </span>{' '}
                  of technological solutions designed by young people on the
                  development of society and the environment.
                </p>
                <div className="text-white">Rules</div>
                <div className="flex flex-col gap-[3px] ml-[25px]">
                  <div className="text-white">
                    1. Individuals or teams of up to five people can apply for the challenge.
                  </div>
                  <div className="text-white">
                    2. The concept should be original in terms of science and technology or
                    should be a wholly new product with a social or economic consequence.
                  </div>
                  <div className="text-white">
                    3. No one can participate in two different teams.
                  </div>
                  <div className="text-white">
                    4. English language should be used in the PowerPoint proposal.
                  </div>
                  <div className="text-white">5. Each Applicant/Team shall submit one idea only.</div>
                </div>
              </div>
            )}
            {activeSection === 'structure' && (
              <div className="flex flex-col gap-[10px] mt-[25px]">
                <div className="text-[white] font-bold">Round 1</div>
                <div className="text-[white] font-bold">Round 2</div>
              </div>
            )}
            {activeSection === 'time' && (
              <div className="flex flex-col gap-[10px] mt-[25px]">
                <div className="text-[white] font-bold">13-04-2024</div>
                <div className="text-[white] font-bold">Round 2: 2:00-5:00</div>
              </div>
            )}
            {activeSection === 'contact' && (
              <div>
                <div className="text-[white] font-bold mt-[25px]">
                  <p>
                    Event organizer: <br className="md:hidden block" />
                    <span className="md:mt-[0px] mt-[10px] md:ml-[0px] ml-[40px]">
                      B.Rithwik 7075124507
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
