import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-neutral-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between">
            <div className="mx-auto">
              <p className="mb-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
                  Audio and Subtitles
                </a>
              </p>
              <p className="mb-4">
                <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
                  Media Center
                </a>
              </p>
              <p className="mb-4">
                <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
                  Security
                </a>
              </p>
              <p className="mb-4">
                <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
                  Contact Us
                </a>
              </p>
              <div className="border-solid border-2 border-gray-400 py-2 px-2 flex aligns-center justify-center">
                <p className="text-gray-400 hover:text-gray-300 text-sm">Service Code</p>
              </div>

              <div className="pt-4 pb-4 text-xs text-gray-400">
                <span>© 2022 Movies, All Right Reserved</span>
              </div>
            </div>

            <div className="mx-auto">
              <p className="mb-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
                  Audio Description
                </a>
              </p>
              <p className="mb-4">
                <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
                  Investor Relations
                </a>
              </p>
              <p className="mb-4">
                <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
                  Legal Provisions
                </a>
              </p>
            </div>

            <div className="mx-auto">
              <p className="mb-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
                  Help center
                </a>
              </p>
              <p className="mb-4">
                <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
                  Jobs
                </a>
              </p>
              <p className="mb-4">
                <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
                  Cookie Preferences
                </a>
              </p>
            </div>

            <div className="mx-auto">
              <p className="mb-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
                  Gift Cards
                </a>
              </p>
              <p className="mb-4">
                <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
                  Terms of Use
                </a>
              </p>
              <p className="mb-4">
                <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
                  Corporate Information
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
