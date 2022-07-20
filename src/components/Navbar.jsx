import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Logo from "../assets/logo.png";
import ProfileImage from "../assets/profile.png";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  return (
    <>
      <nav className="bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                  <img className="h-8 w-8" src={Logo} alt="Logo" />
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-40 flex items-baseline">
                  <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </a>

                  <a href="#" className="text-gray-300 hover:text-white hover:font-medium px-3 py-2 rounded-md text-sm font-regular">
                    Series
                  </a>

                  <a href="#" className="text-gray-300 hover:text-white hover:font-medium px-3 py-2 rounded-md text-sm font-regular">
                    Movies
                  </a>

                  <a href="#" className="text-gray-300 hover:text-white hover:font-medium px-3 py-2 rounded-md text-sm font-regular">
                    New and Popular
                  </a>

                  <a href="#" className="text-gray-300 hover:text-white hover:font-medium px-3 py-2 rounded-md text-sm font-regular">
                    My List
                  </a>
                </div>
              </div>
            </div>
            {/* User Desktop  */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="ml-3 relative">
                  <div>
                    <button
                      type="button"
                      onClick={() => setIsUserOpen(!isUserOpen)}
                      className="max-w-xs bg-neutral-900 rounded-lg flex items-center text-sm focus:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-offset-neutral-900 hover:ring-white text-gray-300 hover:text-white font-regular hover:font-medium"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      <p className="mx-2">
                        <a href="">emailuser@gmail.com</a>
                      </p>
                      <img className="h-8 w-8 rounded-lg" src={ProfileImage} alt="Profile Photo" />
                    </button>
                  </div>
                  {isUserOpen && (
                    <div
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-neutral-700 ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex="-1"
                    >
                      <a href="#" className="block px-4 py-2 text-sm text-white" role="menuitem" tabIndex="-1" id="user-menu-item-2">
                        Logout
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Button Mobile  */}
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="bg-neutral-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <Transition
          show={isMobileOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">
                Home
              </a>

              <a href="#" className="text-gray-300 hover:font-medium hover:text-white block px-3 py-2 rounded-md text-base font-regular">
                Series
              </a>

              <a href="#" className="text-gray-300 hover:font-medium hover:text-white block px-3 py-2 rounded-md text-base font-regular">
                Movies
              </a>

              <a href="#" className="text-gray-300 hover:font-medium hover:text-white block px-3 py-2 rounded-md text-base font-regular">
                New and Popular
              </a>

              <a href="#" className="text-gray-300 hover:font-medium hover:text-white block px-3 py-2 rounded-md text-base font-regular">
                My List
              </a>
            </div>
            {/* User Mobile  */}
            <div className="pt-4 pb-3 border-t border-neutral-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-lg" src={ProfileImage} alt="Profile Photo" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">DTS Member</div>
                  <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <a href="#" className="block px-3 py-2 rounded-md text-base font-regular text-gray-400 hover:text-white hover:bg-neutral-700">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </Transition>
      </nav>
    </>
  );
};

export default Navbar;
