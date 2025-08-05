import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


import {
  FaUserCircle,
  FaSearch,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaChevronDown,
} from 'react-icons/fa';
import Category from '../section/Category';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [cartCount] = useState(0); // Static cart count
  const navigate = useNavigate();

  const categoryRef = useRef();

  const toggleCategories = () => setShowCategories((prev) => !prev);
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const linkStyles = ({ isActive }) =>
    `relative group transition text-sm font-medium py-1
     ${isActive ? 'text-rose-400 after:scale-x-100' : 'text-white hover:text-rose-300 after:scale-x-0'}
     after:content-[''] after:absolute after:-bottom-0.5 after:left-0 
     after:h-[2px] after:w-full after:bg-rose-400 after:origin-left 
     after:transition-transform after:duration-300`;

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setShowCategories(false);
      }
    };

    if (showCategories) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCategories]);

  return (
    <header className="bg-[#1a1a1d] text-white shadow-lg sticky top-0 z-50">
      {/* Search bar */}
      <div className="px-5 pt-3 pb-2">
        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-full text-sm text-black focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
        </div>
      </div>

      {/* Top Navigation */}
      <nav className="px-5 py-2 max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold tracking-wide text-rose-400">YourStore</div>

        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <div
            className="relative cursor-pointer text-2xl text-rose-400 hover:text-rose-300"
            onClick={() => navigate('/cart')}
          >
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-rose-400 text-white text-xs px-1 rounded-full">
              {cartCount}
            </span>
          </div>

          {/* User Profile Icon */}
          <div className="text-2xl text-rose-400 hover:text-rose-300 cursor-pointer">
            <FaUserCircle />
          </div>

          {/* Drawer Toggle */}
          <button onClick={toggleDrawer} className="md:hidden text-xl text-white">
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Drawer for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#1a1a1d] z-50 transform transition-transform duration-300 ease-in-out
        ${drawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <span className="text-rose-400 font-semibold text-xl">Menu</span>
          <button onClick={toggleDrawer} className="text-white text-xl">
            <FaTimes />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          <NavLink to="/" className={linkStyles} onClick={toggleDrawer}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkStyles} onClick={toggleDrawer}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkStyles} onClick={toggleDrawer}>
            Contact
          </NavLink>
          <button
            onClick={() => {
              toggleCategories();
              toggleDrawer();
            }}
            className="text-left text-white hover:text-rose-300"
          >
            Categories
          </button>
        </div>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex flex-row items-center justify-center px-5 md:px-0 mt-2 w-full gap-6">
        <NavLink to="/" className={linkStyles}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkStyles}>
          About
        </NavLink>
        <NavLink to="/contact" className={linkStyles}>
          Contact
        </NavLink>

        {/* Categories Dropdown */}
        <div className="relative" ref={categoryRef}>
          <button
            onClick={toggleCategories}
            className="hover:text-rose-300 flex items-center gap-1 text-sm font-medium relative group"
          >
            Categories
            <FaChevronDown
              className={`transition-transform duration-200 ${showCategories ? 'rotate-180' : 'rotate-0'
                }`}
            />
            <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-rose-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </button>

          {showCategories && (
            <div className="absolute mt-2 w-56 bg-white text-black py-4 px-3 rounded shadow-md z-50">
              <Category />
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default Header;
