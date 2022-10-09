import { Card } from "flowbite-react";
import React from "react";

const Hero = () => {
  return (
    <div className=" md:h-[600px] bg-happyRed bg-opacity-70">
      <div className=" grid grid-cols-2 py-3 h-full ">
        <div className="flex flex-col justify-center h-full items-center">
          <h3 className="text-white mx-10 my-10 font-bold text-6xl">
            <span className="text-black font-serif">I am a</span>
            <span className=" px-20 block text-center cursor-pointer   hover:text-happyRed hover:drop-shadow-xl decoration-pink-600 ">
              PSYCHOLOGIST ,
            </span>
          </h3>
          <p className=" text-xl mx-16 bg-transparent drop-shadow-lg text-center normal-case"></p>

          <div className="cursor-pointer ease-in-out delay-150 hover:animate-pulse hover:bg-white hover:bg-opacity-20 hover:backdrop-blur-lg rounded drop-shadow-lg">
            <p class="mb-4 mx-16 bg-transparent  drop-shadow-lg  normal-case text-xl">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="quote-left"
                className="w-10 pr-2 block"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#E01C1D"
                  d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                ></path>
              </svg>
              <span className="mx-10">
                yes I get sad, angry and afraid I can listen to you for hours
                but I can also laugh for hours I am needed 24/7 but I need
                personal space I am brave but I can be broken I am a
                PSYCHOLOGIST but yes I am a Human Being the heart and mind is
                same as yours
              </span>
            </p>
          </div>
        </div>

        <div className=" place-self-end mr-10 flex flex-col justify-center h-full items-center">
          <img
            className="mb-3 h-72 w-72 rounded-full hover:shadow-lg"
            src="/img/miss.png"
            alt="founder"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

// <Card>
//   <h5 className="text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
//     Founders Message
//   </h5>
//   <p className="font-bold text-lg text-gray-700 dark:text-gray-400">
//     I am a PSYCHOLOGIST, yes
//     <span className="text-red-600"> I get sad, angry and afraid</span>
//     <br /> I can listen to you for hours but
//     <span className="text-red-600"> I can also laugh for hours</span>
//     <br /> I am needed 24/7 but
//     <span className="text-red-600"> I need personal space</span>
//     <br /> I am brave but
//     <span className="text-red-600"> I can be broken</span>
//     <br /> I am a PSYCHOLOGIST but
//     <span className="text-red-600"> yes I am a Human Being</span>
//     <br /> I achieved a degree but
//     <span className="text-red-600">
//       {" "}
//       the heart and mind is same as yours
//     </span>
//   </p>
//   <h5 className="text-center text-2xl font-bold tracking-tight text-red-700 dark:text-white">
//     Dedicated to Mental Health Professionals
//   </h5>
// </Card>
