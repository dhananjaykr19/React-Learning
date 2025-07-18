import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className='shadow sticky z-50 top-0'>
            <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5'>
                <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                    <Link to="/" className="flex items-center">
                        <img    
                            src='https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png'
                            className='mr-3 h-12'
                            alt="logo"
                        />
                    </Link>
                    <div className='flex items-center lg:order-2'>
                        <Link
                            to="#"
                            className='text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className='text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'
                        >
                            Get started
                        </Link>
                    </div>
                    <div 
                        className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header

/*

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        // Logo 
        <Link to="/" className="flex items-center space-x-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-xl text-orange-700">ReactLearn</span>
        </Link>

        // Desktop Nav 
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-orange-700 font-medium">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-orange-700 font-medium">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-orange-700 font-medium">Contact</Link>
        </nav>

        // Mobile Menu Button 
        <button
          className="md:hidden text-gray-700 hover:text-orange-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      // Mobile Nav 
      {menuOpen && (
        <nav className="md:hidden bg-white border-t">
          <Link to="/" className="block px-4 py-2 text-gray-700 hover:text-orange-700 font-medium">Home</Link>
          <Link to="/about" className="block px-4 py-2 text-gray-700 hover:text-orange-700 font-medium">About</Link>
          <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:text-orange-700 font-medium">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;

*/