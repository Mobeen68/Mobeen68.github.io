import { Card } from "flowbite-react";
import React from "react";

const Info = () => {
  return (
    <div className="text-center">
      <Card>
        <div className="flex flex-col items-center">
          <img
            className="mb-3 h-72 w-72 rounded-full shadow-lg"
            src="/img/miss.png"
            alt="founder"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Dr Zainab Javed
          </h5>
          <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
            Founder Of Positively Happy
          </span>
        </div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Clinical and Applied Psychologist <br />
          <span className="text-base font-bold"> Phd, MPhil, Adcp, Msc</span>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
    </div>
  );
};

export default Info;
