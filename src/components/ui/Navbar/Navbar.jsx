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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10">
          {/* image section */}
          <div className="flex justify-start items-center lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">{config.APP.name}</span>
              <img style={{height:"60px"}} className="h-8 w-auto sm:h-10" src="/img/logo.jpeg" alt="" />
            </a>
            <h3 className="mx-1 font-black text-2xl font-serif hover:text-happyRed ">{config.APP.name}</h3>
          </div>

          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-happyRed">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          {/* desktop nav */}
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            {config.NAV_LINKS?.map(({ name, link }) => (
              <a
                href={link}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {name}
              </a>
            ))}
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/img/logo.jpeg"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-happyRed">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {config.NAV_LINKS?.map(({ name, link }) => (
                  <a
                    href={link}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
