import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faHouse,
  faUserPlus,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

const LeftSideBar = () => {
  const [active, setActive] = useState("Home");

  const handleClick = (section) => {
    setActive(section);
  };

  return (
    <div className="sidebar-container">
      <div className="mt-7">
        {[
          { label: "Home", icon: faHouse },
          {
            label: "Public",
            icon: faTag,
            subItems: ["Questions", "Tags", "Users"],
          },
          {
            label: "Collectives",
            icon: faBriefcase,
            subItems: ["Explore Jobs"],
          },
          {
            label: "Find Jobs",
            icon: faBriefcase,
            subItems: ["Jobs", "Companies"],
          },
          { label: "Teams", icon: faUserPlus, subItems: ["+Create a team"] },
        ].map(({ label, icon, subItems }) => (
          <div key={label} className="sidebar-item mb-4">
            <div
              className={`title px-4 py-2 rounded-lg ${
                active === label
                  ? "bg-orange-100 border-r-4 border-orange-500"
                  : ""
              }`}
              onClick={() => handleClick(label)}
            >
              <FontAwesomeIcon icon={icon} className="text-orange-500" />
              <span className="ml-2">{label}</span>
            </div>
            {subItems && (
              <div className="ml-6 mt-2">
                {subItems.map((sub) => (
                  <p key={sub} className="text-gray-600">
                    {sub}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
