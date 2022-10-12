import { Card } from "flowbite-react";
import React from "react";

const TeamCard = ({ name, cat, des }) => {
  return (
    <div className="max-w-sm mx-h">
      <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {cat}
        </p>
      </Card>
    </div>
  );
};

export default TeamCard;
