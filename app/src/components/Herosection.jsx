import React from 'react';

const Herosection = () => {
  return (
    <div className="bg-customBlack h-screen flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-white text-6xl font-bold mt-[-50%] lg:mt-[-10%] sm:mt-[-30%]">
        The Future of Finance is{' '}
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
          Decentralized
        </span>
      </h1>
      <div className="flex mt-44 lg:mt-60">
        <a href="Transaction"className="font-semibold text-white text-2xl px-10 py-7 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br rounded-full mr-4">
          Transfer
        </a>
        <a className="font-semibold text-white text-2xl px-10 py-7 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br rounded-full ml-4">
          Swap
        </a>
      </div>
      <div className="text-white absolute bottom-0 mb-10">Made by Maushish😁</div>
    </div>
  );
};

export default Herosection;
