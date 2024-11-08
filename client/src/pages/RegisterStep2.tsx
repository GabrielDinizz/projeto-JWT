import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faWeightHanging, faChevronDown, faCalendar, faRuler } from '@fortawesome/free-solid-svg-icons';
import img from '../assets/images/girl-exercising.png'
import useRedirect from '../hooks/useRedirect';


const RegisterStep2: React.FC = () => {
    const { handleRedirect } = useRedirect('/personal/dashboard');

    return (
        <div className="flex flex-col justify-between h-screen bg-white text-gray-800">
            <div className="text-center flex flex-col items-center col gap-4">
                <img src={img} alt="" />
                <h1 className="text-4xl font-bold mt-2">Let’s complete your profile</h1>
                <h2 className="text-lg text-gray-600">It will help us to know more about you!</h2>

                <div className="flex flex-col mt-4 items-center px-6 w-full">
                    <div className="relative w-full max-w-md mb-4 flex items-center">
                        <FontAwesomeIcon icon={faUser} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <select
                            className="w-full pl-12 pr-10 p-4 rounded-xl bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:gradient-standard appearance-none"
                            defaultValue=""
                        >
                            <option value="" disabled>Choose activity</option>
                            <option value="running">User</option>
                            <option value="cycling">Personal</option>
                            {/* Adicione outras atividades conforme necessário */}
                        </select>
                        <FontAwesomeIcon icon={faChevronDown} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>

                    <div className="relative w-full max-w-md mb-4 flex items-center">
                        <FontAwesomeIcon icon={faCalendar} className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400' />
                        <input
                            type="date_birth"
                            placeholder="Date Of Birth"
                            className="w-full pl-12 p-4 rounded-xl bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:gradient-standard"
                        />
                    </div>
                    <div className="relative w-full max-w-md mb-4 flex items-center">
                        <FontAwesomeIcon icon={faWeightHanging} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="number"
                            placeholder="Your Weight"
                            className="w-full pl-12 pr-16 p-4 rounded-xl bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:gradient-standard"
                        />
                        <div className="right-4 bg-gradient-purple-pink text-white w-16 ml-2 rounded-xl border text-xs font-semibold h-full flex items-center justify-center">
                            KG
                        </div>
                    </div>
                    <div className="relative w-full max-w-md mb-4 flex items-center">
                        <FontAwesomeIcon icon={faRuler} className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400' />
                        <input
                            type="height"
                            placeholder="Height"
                            className="w-full pl-12 p-4 rounded-xl bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:gradient-standard"
                        />
                        <div className="right-4 bg-gradient-purple-pink text-white w-16 ml-2 rounded-xl border text-xs font-semibold h-full flex items-center justify-center">
                            CM
                        </div>
                    </div>
                </div>
            </div>

            {/* Botão de Próxima Etapa e link de Login */}
            <div className="flex items-center mx-4 mb-10 flex-col">
                <button className="w-full max-w-md py-4 bg-gradient-standard rounded-full text-white font-semibold text-lg hover:bg-gradient-standard transition-colors duration-300"
                onClick={handleRedirect}
                >
                    Register
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

export default RegisterStep2;
