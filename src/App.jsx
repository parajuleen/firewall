import React from "react";           
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './context/progressContext.jsx';
import Navigation from './components/navigation.jsx';

import Home from './pages/Home/Home.jsx';
import Lessons from './pages/Lessons/Lessons.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import About from './pages/About/About.jsx';
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/Register.jsx';

export default function App() {
  return (
    <ProgressProvider>
      <BrowserRouter basename="/firewall">
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50">
          
          <Navigation />

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lessons" element={<Lessons />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>

        </div>
      </BrowserRouter>
    </ProgressProvider>
  );
}
