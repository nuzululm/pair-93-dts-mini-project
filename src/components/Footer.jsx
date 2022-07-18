import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-center lg:text-left bg-neutral-900 text-gray-300">
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="mx-auto">
              <p className="mb-4">
                <a href="#!" className="text-gray-400 hover:text-gray-300 text-sm">
                  Audio and Subtitles
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-gray-400 hover:text-gray-300 text-sm">
                  Media Center
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-gray-400 hover:text-gray-300 text-sm">
                  Security
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-gray-400 hover:text-gray-300 text-sm">
                  Contact Us
                </a>
              </p>
              <div className="border-solid border-2 border-gray-400 py-2 px-2 flex aligns-center justify-center">
                <p className="text-gray-400 hover:text-gray-300 text-sm">Service Code</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center p-4 text-xs text-gray-400">
          <span>© 2022 Movies, All Right Reserved</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
