// src/pages/Login.tsx
import React from 'react';
import useRedirect from '../hooks/useRedirect';
import 'font-awesome/css/font-awesome.min.css';

const Login: React.FC = () => {
    const { handleRedirect } = useRedirect('/login');

    return (
        <div className="flex flex-col justify-between h-screen bg-white text-gray-800">
            {/* Título e Subtítulo */}
            <div className="text-center mt-16">
                <h2 className="text-lg text-gray-600">Hey there,</h2>
                <h1 className="text-4xl font-bold mt-2">Welcome Back!</h1>

                {/* Formulário de Login */}
                <div className="flex flex-col mt-8 items-center px-6 w-full">
                    <div className="relative w-full max-w-md mb-4 flex items-center">
                        <i className="fa fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full pl-12 p-4 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:gradient-standard"
                        />
                    </div>
                    {/* Campo de senha com ícone */}
                    <div className="relative w-full max-w-md mb-4 flex items-center">
                        <i className="fa fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                        <input
                            type="password"
                            placeholder="Senha"
                            className="w-full pl-12 p-4 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:gradient-standard"
                        />
                    </div>
                </div>
            </div>

            {/* Botão de Login e link de Registro */}
            <div className="flex items-center mx-4 mb-10 flex-col">
                <button 
                    className="w-full max-w-md py-4 bg-gradient-standard rounded-full text-white font-semibold text-lg"
                    onClick={handleRedirect}
                    >
                    Login
                </button>
                <p className="mt-4 text-lg text-gray-600">
                    Don’t have an account yet?{' '}
                    <a href="/register" className="text-blue-500 hover:underline">
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
