// src/pages/Home.tsx
import React from 'react';
import useRedirect from '../hooks/useRedirect';

const Home: React.FC = () => {
  const { handleRedirect } = useRedirect('/login');

  return (
    <div className="flex flex-col items-center justify-between h-screen bg-gradient-standard">
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-screen-sm mx-auto">
        <h1 className="text-4xl font-bold text-white font-poppins text-center">Welcome to FitAdmin</h1>
        <p className="mt-2 text-lg font-poppins text-gray-700">Training starts with planning</p>
      </div>
      <div className="flex justify-center mb-16 w-full max-w-screen-sm mx-auto">
        <button
          className="w-full mx-4 px-20 h-16 bg-white font-poppins text-gradient-standard rounded-full flex items-center justify-center shadow-lg"
          onClick={handleRedirect}
        >
          <span className="text-transparent text-xl font-semibold bg-clip-text bg-gradient-standard">
            Get Started
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
