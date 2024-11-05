import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Bem-vindo ao meu projeto!</h1>
      <p className="mt-4 text-lg text-gray-700">Esta é a primeira página do projeto.</p>
    </div>
  );
};

export default Home;
