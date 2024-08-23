import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the auth token exists in localStorage
    const token = localStorage.getItem('auth-token');
    setIsLoggedIn(token !== null);
  }, []);

  const handleLogout = async () => {
    try {
      // Call the API to log out the user
      await fetch('http://localhost:5000/api/users/logout', { method: 'POST' });

      // Clear the local storage
      localStorage.removeItem('auth-token');
      
      // Update state
      setIsLoggedIn(false);
      
      // Redirect to the homepage
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="bg-neutral-950 p-4">
      <div className="container mx-auto flex items-center">
        <div className="text-white text-lg">JSP</div>
        <div className="flex-grow flex justify-center space-x-4">
          <a href="/" className="text-white hover:bg-gray-700 p-2 rounded">Jobs</a>
          <a href="/dashboard" className="text-white hover:bg-gray-700 p-2 rounded">Dashboard</a>
          <a href="/services" className="text-white hover:bg-gray-700 p-2 rounded">Services</a>
        </div>
        <div className="flex space-x-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-white hover:bg-red-700 p-2 rounded bg-red-600"
            >
              Logout
            </button>
          ) : (
            <>
              <a href="/option" className="text-white hover:bg-blue-700 p-2 rounded bg-blue-600">Login/Register</a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
