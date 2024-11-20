import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faMessage,
  faTrophy,
  faFileLines,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex flex-wrap items-center">
      {/* Logo */}
      <img
        src="imges/Stack_Overflow-Logo.png"
        alt="Stack Overflow Logo"
        className="w-[200px] h-[200px] sm:w-[150px] md:w-[200px]" // Custom size
      />

      {/* Search Bar */}
      <div className="relative w-[300px] ml-20">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-[40px] px-4 pr-10 text-gray-700 border border-gray-400 rounded-md"
        />
        {/* Search Icon */}
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute top-3 right-3 text-orange-500 h-5 w-5"
        />
      </div>

      {/* Products Text */}
      <p className="ml-24 text-lg font-medium">Products</p>

      {/* Icons on the Right */}
      <div className="flex space-x-6 ml-auto">
        {/* Message Icon */}
        <FontAwesomeIcon
          icon={faMessage}
          className="text-gray-600 h-6 w-6 hover:text-orange-500"
        />
        {/* Trophy Icon */}
        <FontAwesomeIcon
          icon={faTrophy}
          className="text-gray-600 h-6 w-6 hover:text-orange-500"
        />
        {/* File Lines Icon */}
        <FontAwesomeIcon
          icon={faFileLines}
          className="text-gray-600 h-6 w-6 hover:text-orange-500"
        />
        {/* User Icon */}
        <FontAwesomeIcon
          icon={faUser}
          className="text-gray-600 h-6 w-6 hover:text-orange-500"
        />
      </div>
      
    </div>
  );
};

export default Header;
