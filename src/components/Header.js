import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-md">
      {/* Logo and Title */}
      <div className="flex items-center space-x-2">
        <Link to="/newpage" className="flex items-center space-x-2">
          <img
            src="gitar.png"
            alt="Welcome"
            className="w-10 h-10 rounded-full border-2 border-white shadow-md"
          />
          <span className="text-xl font-semibold">Guitarist Hub</span>
        </Link>
      </div>

      {/* Navigation and Dropdown */}
      <nav className="flex items-center space-x-5">
        <div className="relative">
          <button
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-medium transition duration-200 transform hover:scale-105"
            onClick={toggleDropdown}
          >
            Menu
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg border border-gray-200 z-10">
              <Link
                to="/"
                className="block px-4 py-3 hover:bg-indigo-100 transition duration-150"
              >
                Favorite Guitarist
              </Link>
              <Link
                to="/band"
                className="block px-4 py-3 hover:bg-indigo-100 transition duration-150"
              >
                Favorite Band
              </Link>
              <Link
                to="/reason"
                className="block px-4 py-3 hover:bg-indigo-100 transition duration-150"
              >
                Reasons for Creating a Website
              </Link>
            </div>
          )}
        </div>

        {/* Logout Button */}
        <button
          className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition duration-200 transform hover:scale-105"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>
    </header>
  );
}

export default Header;
