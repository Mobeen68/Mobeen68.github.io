import React from "react";
import { Carousel } from "flowbite-react";
import { config } from "../../../config";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const Slider = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
      <Carousel
        leftControl={<BsArrowLeftCircle size={"2rem"} color="grey" />}
        rightControl={<BsArrowRightCircle size={"2rem"} color="grey" />}
      >
        {config.images.map(({ link }) => (
          <img src={link} alt="..." className="object-fill h-auto" />
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
