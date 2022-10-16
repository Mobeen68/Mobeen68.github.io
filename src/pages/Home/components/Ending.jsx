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
    <Footer container={true} >
      <div className="w-full">
        <div className="w-full flex flex-col justify-between items-center md:flex md:flex-row md:items-center md:justify-between">
          <Footer.Brand
            href="#"
            src="/img/logo.jpeg"
            alt="Flowbite Logo"
            name="Positively Happy"
          />
          <Footer.LinkGroup>
            <span className="text-center flex flex-col gap-1 md:flex md:flex-row">
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </span>
          </Footer.LinkGroup>
        </div>
        {/* <Footer.Divider /> */}
        <div className="w-full flex flex-col pt-2 items-center lg:flex gap-1 md:items-center md:justify-between">
          <div className="flex gap-2 justify-end space-x-6 md:flex md:mt-0 md:justify-end">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
          <Footer.Copyright href="#" by="Positively Happy™" year={2022} />
        </div>
      </div>
    </Footer>
  );
};

export default Ending;
