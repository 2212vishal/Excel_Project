import React, { useState } from 'react';
import { PiSpeedometer } from "react-icons/pi";
import { GiRecycle } from "react-icons/gi";
import { SiLevelsdotfyi } from "react-icons/si";
import { TbReportSearch } from "react-icons/tb";
import { GoLaw } from "react-icons/go";
import { RiSettingsLine } from "react-icons/ri";
import { FaSackDollar } from "react-icons/fa6";
import { CiDollar } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = [
    { name: 'Scorecard', icon: <PiSpeedometer /> },
    { name: 'Business Life Cycle', icon: <GiRecycle /> },
    { name: 'Market Capital Growth', icon: <SiLevelsdotfyi /> },
    { name: 'Valuation', icon: <TbReportSearch /> },
    { name: 'Capital Structure', icon: <GoLaw /> },
    { name: 'Operational Metrics', icon: <RiSettingsLine /> },
    { name: 'Profitability', icon: <FaSackDollar /> },
    { name: 'Cash Flow', icon: <CiDollar /> },
  ];

  return (
    <div className="flex flex-col gap-2 h-max bg-white p-6">
      <div className="flex gap-2">
      <div 
        className="flex flex-col items-start space-y-2 mb-4 cursor-pointer relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className={`text-lg border rounded-full p-2 ${isHovered ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}>
          <FaArrowLeft />
        </span>
        {isHovered && (
          <div className="absolute top-12 left-0 bg-white border border-gray-300 shadow-lg p-2 rounded-md">
            Back to Analytics
          </div>
        )}
       
      </div>
      <h1 className="text-2xl pl-4 font-semibold">Benchmark</h1>
      </div>
      
      <p className="text-gray-500 mb-6">Compare performance of company against suppliers, competitors and customers.</p>
      <h2 className="text-gray-600 mb-2">Content Menu</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`flex gap-2  items-center p-4 rounded cursor-pointer 
              ${activeIndex === index ? 'bg-blue-100 text-blue-600' : 'text-gray-700'}
              hover:bg-gray-100`}
            onClick={() => setActiveIndex(index)}
          >
            <span className="mr-2">{item.icon}</span>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
