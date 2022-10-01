import { Navbar } from "flowbite-react";
import React from "react";

const Header = () => {
  return (
    <div className="">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="#">
          <img src="/img/logo.jpeg" className="mr-3 h-6 sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-sm lg:text-xl font-semibold dark:text-white">
            Positively Happy
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars">Home</Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
