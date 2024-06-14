import React, { useState } from 'react';
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { CiSquareChevRight, CiSquareChevLeft } from 'react-icons/ci';
import { BsTable } from "react-icons/bs";
import Simpledropdown from './Simpledropdown';

const FinanceToolbar = () => {
  const items = [
    'Total Revenues',
    'Cost of Sales %',
    'Expenses %',
    'EBIT %',
    'NPAT %',
    'Return on Equity',
    'Return on Capital',
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [activeIcon, setActiveIcon] = useState('table'); // 'table' or 'bar'
  const [hoveredIcon, setHoveredIcon] = useState(null); // To track which icon is being hovered
  const [selectedItem, setSelectedItem] = useState(items[0]); // Track the selected item

  const handleLeftClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (startIndex < items.length - 4) {
      setStartIndex(startIndex + 1);
    }
  };

  const handleTableHover = () => {
    setHoveredIcon('table');
  };

  const handleBarHover = () => {
    setHoveredIcon('bar');
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  const handleTableClick = () => {
    setActiveIcon('table');
  };

  const handleBarClick = () => {
    setActiveIcon('bar');
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex justify-between items-center p-2 border-b border-gray-200">
      {/* Slider Section */}
      <div className="flex items-center  flex-1 relative">
        <CiSquareChevLeft
          onClick={handleLeftClick}
          className={`cursor-pointer h-10 w-10 ml-20 text-gray-500 hover:text-blue-500 absolute left-0 ${startIndex === 0 ? 'opacity-50 pointer-events-none' : ''}`}
        />
        <ul className="flex space-x-4 mx-auto">
          {items.slice(startIndex, startIndex + 4).map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer flex items-center px-5 ${
                selectedItem === item ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
              }`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
        <CiSquareChevRight
          onClick={handleRightClick}
          className={`cursor-pointer h-10 w-10 text-gray-500 hover:text-blue-500 absolute mr-20 right-0 ${startIndex >= items.length - 4 ? 'opacity-50 pointer-events-none' : ''}`}
        />
      </div>

      {/* Years and Icons Section */}
      <div className="flex  ml-4">
        <div className="flex flex-col  mr-4">
          <p className="text-gray-500">Years</p>
          <Simpledropdown  items={['1', '5', '10', 'ALL']} />
        </div>
        <div className="flex space-x-2 mt-7 border p-1 rounded">
          <div
            className="relative"
            onMouseEnter={handleTableHover}
            onMouseLeave={handleIconLeave}
          >
            <BsTable
              onClick={handleTableClick}
              className={`border-r pr-1 border-black cursor-pointer h-6 w-6 ${
                activeIcon === 'table' ? 'text-blue-500 hover:text-blue-500' : 'text-gray-500 hover:text-blue-500'
              }`}
            />
            {hoveredIcon === 'table' && (
              <div className="absolute top-8 left-0 bg-white border border-gray-300 shadow-lg p-2 rounded-md">
                Table View
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={handleBarHover}
            onMouseLeave={handleIconLeave}
          >
            <BiSolidBarChartAlt2
              onClick={handleBarClick}
              className={`cursor-pointer h-6 w-6 ${
                activeIcon === 'bar' ? 'text-blue-500 hover:text-blue-500' : 'text-gray-500 hover:text-blue-500'
              }`}
            />
            {hoveredIcon === 'bar' && (
              <div className="absolute top-8 left-0 bg-white border border-gray-300 shadow-lg p-2 rounded-md">
                Graph View
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceToolbar;
