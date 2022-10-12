import { Card } from "flowbite-react";
import React from "react";
import { config } from "../../../config";

const Hero = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Payments tool for software companies
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4  focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get started
          </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="./img/miss.png" alt="mockup" />
        </div>
      </div>
    </section>
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
