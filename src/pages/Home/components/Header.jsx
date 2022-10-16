import { Dropdown, Navbar } from "flowbite-react";
import React from "react";

const Header = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="#">
        <img src="/img/logo.jpeg" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <div className="flex flex-col">
          <span className="self-center whitespace-nowrap text-sm lg:text-xl font-semibold dark:text-white">
            Positively Happy
          </span>
          <span className="text-xs font-extralight">Be Positive Be Happy</span>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/navbars">Home</Navbar.Link>
        <Navbar.Link>
          <Dropdown arrowIcon={true} inline={true} label={"Professionals"}>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
