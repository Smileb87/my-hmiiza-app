"use client";

import React, { useState } from "react";
import { FaHome, FaSearch, FaUser, FaBars } from "react-icons/fa"; // Import desired icons from react-icons

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col lg:hidden">
      <div className="flex items-center justify-between p-4 bg-gray-800">
        <button
          className="text-white focus:outline-none lg:hidden"
          onClick={toggleNavbar}
        >
          <FaBars size={24} />
        </button>
      </div>
      {isOpen && (
        <nav className="fixed inset-0 flex flex-col bg-gray-800 p-8">
          <a href="#" className="flex items-center text-white py-2">
            <FaHome className="mr-2" />
            Home
          </a>
          <a href="#" className="flex items-center text-white py-2">
            <FaSearch className="mr-2" />
            Search
          </a>
          <a href="#" className="flex items-center text-white py-2">
            <FaUser className="mr-2" />
            Profile
          </a>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
