// Footer.js
// Starts at 2:48:55

import logo from '../images/dapp-architects-website-logo.png';
import React from 'react';

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img
            src={logo}
            alt="logo"
            style={{ width: '350px', borderRadius: '6px' }}
          />
        </div>
        <div className="flex flex-1 justify-evenly item-center flex-wrap sm:mt-0 mt-5 w-full">
          <p className="text-white text-base tex-center mx-2 cursor-pointer">
            Market
          </p>
          <p className="text-white text-base tex-center mx-2 cursor-pointer">
            Exchange
          </p>
          <p className="text-white text-base tex-center mx-2 cursor-pointer">
            Tutorials
          </p>
          <p className="text-white text-base tex-center mx-2 cursor-pointer">
            Wallets
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-sm text-center">Come join us</p>
        <p className="text-white text-sm text-center">
          info@dapparchitects.com
        </p>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-sm text-center">@dapparchitects</p>
        <p className="text-white text-sm text-center">All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
