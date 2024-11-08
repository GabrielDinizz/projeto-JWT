import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import RegisterStep2 from './pages/RegisterStep2'
import PersonalDashboard from './pages/PersonalDashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/step-2" element={<RegisterStep2 />} />
        <Route path="/personal/dashboard" element={<PersonalDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
