import React from "react";
import Logo from "../assets/logo.png";

const NavLogo = () => {
  return (
    <nav className="bg-neutral-900">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <p className="text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                <img className="h-8 w-8" src={Logo} alt="Logo" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavLogo;
