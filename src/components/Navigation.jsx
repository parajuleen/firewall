import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Shield, Menu, X, LogOut, User } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthStatus();
  }, [location]);

  function checkAuthStatus() {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const user = localStorage.getItem('currentUser');
    
    setIsLoggedIn(loggedIn);
    setCurrentUser(user ? JSON.parse(user) : null);
  }

  function logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isLoggedIn');
    
    setIsLoggedIn(false);
    setCurrentUser(null);

    setMobileMenuOpen(false);
    window.dispatchEvent(new Event('authChange'));
    navigate('/');
  }

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/lessons', label: 'Lessons' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/about', label: 'About' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200">
      <nav className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Firewall Academy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-semibold relative group ${
                  isActive(link.path)
                    ? 'text-sky-600'
                    : 'text-slate-600 hover:text-sky-600'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-sky-600 to-blue-600 ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Desktop Auth */}
          <div className="hidden lg:flex items-center gap-4">
            {isLoggedIn && currentUser ? (
              <>
                <div className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl border border-sky-200">
                  <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">
                    {currentUser.name}
                  </span>
                </div>

                <button
                  onClick={logout}
                  className="px-5 py-2.5 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-xl"
                >
                  <LogOut className="w-4 h-4 inline-block" /> Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="px-5 py-2.5 text-sky-600 hover:bg-sky-50 rounded-xl">
                  Login
                </Link>
                <Link to="/register" className="px-6 py-2.5 bg-sky-600 text-white rounded-xl">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

        </div>
      </nav>
    </header>
  );
}
