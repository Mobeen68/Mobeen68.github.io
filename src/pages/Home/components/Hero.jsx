import { Card } from "flowbite-react";
import React from "react";

const Hero = () => {
  return (
    <Card>
      <h5 className="text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        Founders Message
      </h5>
      <p className="font-bold text-gray-700 dark:text-gray-400">
        I am a PSYCHOLOGIST, yes
        <span className="text-red-600"> I get sad, angry and afraid</span>
        <br /> I can listen to you for hours but
        <span className="text-red-600"> I can also laugh for hours</span>
        <br /> I am needed 24/7 but
        <span className="text-red-600"> I need personal space</span>
        <br /> I am brave but
        <span className="text-red-600"> I can be broken</span>
        <br /> I am a PSYCHOLOGIST but
        <span className="text-red-600"> yes I am a Human Being</span>
        <br /> I achieved a degree but
        <span className="text-red-600">
          {" "}
          the heart and mind is same as yours
        </span>
      </p>
      <h5 className="text-center text-2xl font-bold tracking-tight text-red-700 dark:text-white">
        Dedicated to Mental Health Professionals
      </h5>
    </Card>
  );
};

export default Hero;
