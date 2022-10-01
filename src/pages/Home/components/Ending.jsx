import React from "react";
import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

const Ending = () => {
  return (
    <Footer container={true}>
      <div className="w-full">
        <div className="w-full flex flex-col justify-between items-center md:flex md:items-center md:justify-between">
          <Footer.Brand
            href="#"
            src="/img/logo.jpeg"
            alt="Flowbite Logo"
            name="Positively Happy"
          />
          <Footer.LinkGroup>
            <span className="text-center md:flex">
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </span>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <div className="w-full flex flex-col items-center lg:flex gap-1 md:items-center md:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="flex gap-2 justify-end space-x-6 md:flex md:mt-0 md:justify-end">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Ending;
