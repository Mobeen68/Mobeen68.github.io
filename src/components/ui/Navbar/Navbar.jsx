import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  // BookmarkSquareIcon,
  // CalendarIcon,
  // ChartBarIcon,
  // CursorArrowRaysIcon,
  // LifebuoyIcon,
  // PhoneIcon,
  // PlayIcon,
  // ShieldCheckIcon,
  // Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { config } from "../../../config";
import { Button, Navbar } from "flowbite-react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Navbar fluid={false} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="/img/logo.jpeg"
          className="mr-1 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-sm font-medium lg:text-xl dark:text-white">
          Positively Happy
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <div className="mx-2 lg:mx-0">
          <Button>Contact Us</Button>
        </div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {config.NAV_LINKS?.map(({ name, link }) => (
          <Navbar.Link href={link}>{name}</Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
