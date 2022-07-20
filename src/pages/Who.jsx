import React from "react";
import Profile1 from "../assets/profile1.png";
import Profile2 from "../assets/profile2.png";
import Profile3 from "../assets/profile3.png";
import Profile4 from "../assets/profile4.png";
import { Link } from "react-router-dom";
import NavLogo from "../components/NavLogo";

const Who = () => {
  return (
    <>
      <NavLogo />
      <div className="flex justify-center py-32 ">
        <Link to="/login">
          <img className="px-6" src={Profile1} alt="profile1" />
          <p className="text-center my-4 text-xl text-gray-200">Murat</p>
        </Link>
        <Link to="/login">
          <img className="px-6" src={Profile2} alt="profile2" />
          <p className="text-center my-4 text-xl text-gray-200">Umut</p>
        </Link>
        <Link to="/login">
          <img className="px-6" src={Profile3} alt="profile3" />
          <p className="text-center my-4 text-xl text-gray-200">Kemal</p>
        </Link>
        <Link to="/login">
          <img className="px-6" src={Profile4} alt="profile4" />
          <p className="text-center my-4 text-xl text-gray-200">Cocuk</p>

        </Link>
      </div>
    </>
  );
};

export default Who;
