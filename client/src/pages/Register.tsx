// src/pages/Register.tsx
import React from 'react';
import useRedirect from '../hooks/useRedirect';
import { faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'font-awesome/css/font-awesome.min.css';

const Register: React.FC = () => {
    const { handleRedirect } = useRedirect('/register/step-2');

    return (
        <div className="flex flex-col justify-between h-screen bg-white text-gray-800">
            {/* Título e Subtítulo */}
            <div className="text-center mt-16">
                <h2 className="text-lg text-gray-600">Hey there,</h2>
                <h1 className="text-4xl font-bold mt-2">Create an Account</h1>

                {/* Formulário de Registro */}
                <div className="flex flex-col mt-8 items-center px-6 w-full">
                    <div className="relative w-full max-w-md mb-4 flex items-center">
                        <i className="fa fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                        <input
                            type="text"
                            placeholder="Name *"
                            className="w-full pl-12 p-4 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="relative w-full max-w-md mb-4 flex items-center">
                        <i className="fa fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                        <input
                            type="email"
                            placeholder="Email *"
                            className="w-full pl-12 p-4 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="relative w-full max-w-md mb-4 flex items-center">
                        <i className="fa fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                        <input
                            type="password"
                            placeholder="Password *"
                            className="w-full pl-12 p-4 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="relative w-full max-w-md mb-4 flex items-center">
                        <FontAwesomeIcon icon={faUser} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <select
                            className="w-full pl-12 pr-10 p-4 rounded-xl bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:gradient-standard appearance-none"
                            defaultValue=""
                        >
                            <option value="" disabled>Choose activity *</option>
                            <option value="running">User</option>
                            <option value="cycling">Personal</option>
                            {/* Adicione outras atividades conforme necessário */}
                        </select>
                        <FontAwesomeIcon icon={faChevronDown} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                </div>
            </div>

            {/* Botão de Próxima Etapa e link de Login */}
            <div className="flex items-center mx-4 mb-10 flex-col">
                <button 
                className="w-full max-w-md py-4 bg-gradient-standard rounded-full text-white font-semibold text-lg hover:bg-gradient-standard transition-colors duration-300"
                onClick={handleRedirect}
                >
                    Next Step
                </button>
                <p className="mt-4 text-lg text-gray-600">
                    Already have an account?{' '}
                    <a href="/login" className="text-blue-500 hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;
