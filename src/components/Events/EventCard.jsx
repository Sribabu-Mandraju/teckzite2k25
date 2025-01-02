import React from "react";
import card from "../../assets/card.png";
import anushka from '../../assets/anushka.jpeg';
import Button from "../Buttons/Button";
import { CardContainer, CardBody, CardItem } from "../../utils/3Dcard";

const EventCard = ({ name, image, time }) => {
  return (
    <CardContainer className="flex justify-center items-center">
      <CardBody className="relative h-[450px] w-[300px]">
        {/* Background Card */}
        <CardItem
          translateZ={-20}
          className="relative h-full w-full"
        >
          <img
            src={card}
            className="h-full w-full object-cover rounded-lg"
            alt="card background"
          />
        </CardItem>

        {/* Inner Content */}
        <CardItem
          translateZ={30}
          className="absolute top-[30px] left-[45px] h-[225px] w-[200px]"
        >
          <img
            src={image}
            className="h-full w-full rounded-lg object-cover"
            alt="event"
          />
        </CardItem>

        <CardItem
          translateZ={40}
          className="absolute top-[270px] left-0 flex flex-col gap-[20px]"
        >
          <div className="flex flex-col gap-[20px] ml-[70px]">
            <div className="text-[20px] text-white font-bold">{name}</div>
            <div className="text-[15px] text-white text-center ml-[-50px]">
              {time}
            </div>
          </div>
        </CardItem>

        <CardItem
          translateZ={50}
          className="absolute top-[350px] left-[160px]"
        >
          <Button name="know more" />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default EventCard;
