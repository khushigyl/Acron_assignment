import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className="flex flex-col w-80">
      <div className="bg-gray-100 p-4">
        <h2 className="font-bold text-lg mb-4">The Overflow Blog</h2>
        <p className="flex items-center mt-3">
          <FontAwesomeIcon icon={faPencilAlt} className="text-gray-600" />
          <span className="p-2">The unexpected benefit of mentoring others</span>
        </p>
        <p className="flex items-center mt-3">
          <FontAwesomeIcon icon={faPencilAlt} className="text-gray-600" />
          <span className="p-2">
            Podcast 354 Building for AR with Niametic Labs' augmented reality
            SDK
          </span>
        </p>
      </div>
      <div className=" bg-gray-100 p-4">
        <h2 className="font-bold text-lg mb-4">Featured & meta</h2>
        <p className="flex items-center mt-3">
          <img
            src="imges/stack-overflow-sideBar-logo.png"
            alt="Stack Overflow Logo"
            className="w-12 h-8"
          />
          <span className="p-2">
            Beta releases of Collectives<sup>TM</sup> on Stack Overflow
          </span>
        </p>
      </div>
      <div className=" bg-gray-200 p-4">
        <h2 className="font-bold text-lg mb-4">Hot meta post</h2>
        <p className="flex items-center mt-3">
          <h3 className="font-bold">8</h3>
          <span className="p-2">Tags [driver] and [device-driver]appear to be redundant</span>
        </p>
        <p className="flex items-center mt-3">
          <h3 className="font-bold">27</h3>
          <span className="p-2">
            How to handle dupes where A is closed as dup of B but i have an
            answer that..
          </span>
        </p>
        <p className="flex items-center mt-3">
          <h3 className="font-bold">27</h3>
          <span className="p-2">Ambiguous tag[containers]</span>
        </p>
      </div>
      <div className="mt-7">
        <h2 className="font-bold text-lg ">Custom Filter</h2>
        <input
          type="text"
          placeholder="add custom filter"
          className="w-[78] h-12 px-4 pr-10 text-gray-700 border border-gray-400 placeholder:text-blue-500 mb-4"
        />
      </div>
    </div>
  );
};

export default SideBar;
