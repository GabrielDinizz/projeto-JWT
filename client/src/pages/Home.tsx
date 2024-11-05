import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between h-screen bg-gradient-standard">
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold text-white">Welcome to FitAdmin</h1>
        <p className="mt-4 text-lg text-gray-700">Training starts with planning</p>
      </div>
      <div className="flex justify-center mb-16">
        <button className="w-full px-20 h-16 bg-white text-gradient-standard rounded-full flex items-center justify-center shadow-lg">
          <span className="text-transparent text-xl font-semibold bg-clip-text bg-gradient-to-r from-[#92A3FD] to-[#9DCEFF]">
            Get Started
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
