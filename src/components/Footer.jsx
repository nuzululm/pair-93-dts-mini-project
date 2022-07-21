import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-neutral-900">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between h-100 pt-4">
            <div className="mx-auto my-4">
              <p className="mb-4">
                <button className="text-gray-400 hover:text-gray-300 text-sm cursor-pointer">Audio and Subtitles</button>
              </p>
              <p className="mb-4">
                <button className="text-gray-400 hover:text-gray-300 text-sm cursor-pointer">Media Center</button>
              </p>
              <p className="mb-4">
                <button className="text-gray-400 hover:text-gray-300 text-sm cursor-pointer">
                  Security
                </button>
              </p>
              <p className="mb-4">
                <button className="text-gray-400 hover:text-gray-300 text-sm cursor-pointer">
                  Contact Us
                </button>
              </p>
              <div className="border-solid border-2 border-gray-400 py-2 px-2 flex aligns-center justify-center cursor-pointer">
                <p className="text-gray-400 hover:text-gray-300 text-sm">Service Code</p>
              </div>
            </div>

            <div className="mx-auto my-4">
              <p className="mb-4">
                <button className="text-gray-400 hover:text-gray-300 text-sm cursor-pointer">Audio Description</button>
              </p>
              <p className="mb-4">
                <button className="text-gray-400 hover:text-gray-300 text-sm cursor-pointer">Investor Relations</button>
              </p>
              <p className="mb-4">
                <button className="text-gray-400 hover:text-gray-300 text-sm cursor-pointer">Legal Provisions</button>
              </p>
            </div>

            <div className="mx-auto my-4">
              <p className="mb-4">
                <button className="text-gray-400 hover:text-gray-300 text-sm cursor-pointer">Help center</button>
              </p>
              <p className="mb-4">
                <button className="text-gray-400 hover:text-gray-300 text-sm cursor-pointer">Jobs</button>
              </p>
              <p className="mb-4">
                <button className="text-gray-400 hover:text-gray-300 text-sm cursor-pointer">Cookie Preferences</button>
              </p>
            </div>

            <div className="mx-auto my-4">
              <p className="mb-4">
                <button className="text-gray-400 hover:text-gray-300 text-sm cursor-pointer">Gift Cards</button>
              </p>
              <p className="mb-4">
                <button className="text-gray-400 hover:text-gray-300 text-sm cursor-pointer">Terms of Use</button>
              </p>
              <p className="mb-4">
                <button className="text-gray-400 hover:text-gray-300 text-sm cursor-pointer">Corporate Information</button>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-center p-4 text-xs text-gray-400">
              <span>© 2022 Movies, All Right Reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
