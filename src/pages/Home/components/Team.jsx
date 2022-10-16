import { Carousel } from "flowbite-react";
import React from "react";
import { config } from "../../../config";
import TeamCard from "./TeamCard";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const Team = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div className="uppercase text-center text-4xl font-bold pt-2">
        Our team
      </div>
      <div style={{ height: "70vh" }} className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel
          leftControl={<BsArrowLeftCircle size={"2rem"} color="grey" />}
          rightControl={<BsArrowRightCircle size={"2rem"} color="grey" />}
        >
          {config.Team.map(({ name, category, description }) => (
            <div className="flex justify-center ">
              <TeamCard name={name} cat={category} des={description} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Team;
