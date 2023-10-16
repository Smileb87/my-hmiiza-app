"use client";

import React, { useState } from "react";
import {
  FaHome,
  FaSearch,
  FaUser,
  FaBars,
  FaTimes,
  FaWindowClose,
} from "react-icons/fa"; // Import desired icons from react-icons
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between p-4">
        <button
          className="text-white focus:outline-none"
          onClick={toggleNavbar}
        >
          <FaBars size={24} />
        </button>
      </div>
      {isOpen && (
        <nav className="fixed inset-0 flex flex-col w-32 p-8">
          <button
            className="text-white focus:outline-none"
            onClick={toggleNavbar}
          >
            <FaWindowClose className="mr-2" size={30} />
          </button>
          <Link href="#" className="flex items-center text-white py-2">
            <FaHome className="mr-2" size={30} />
          </Link>
          <Link href="#" className="flex items-center text-white py-2">
            <FaSearch className="mr-2" size={30} />
          </Link>
          <Link href="#" className="flex items-center text-white py-2">
            <FaUser className="mr-2" size={30} />
          </Link>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
