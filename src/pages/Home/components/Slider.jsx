import React from "react";
import { Carousel } from "flowbite-react";
import { config } from "../../../config";

const Slider = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
      <Carousel>
        {config.images.map(({ link }) => (
          <img src={link} alt="..." className="object-fill h-auto" />
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
