import React, { useState } from 'react';
import Singledropbutton from './Singledropbutton';
import { FaTableCells } from 'react-icons/fa6';
import { VscGraph } from 'react-icons/vsc';
import { CiSquareChevRight, CiSquareChevLeft } from 'react-icons/ci';

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

  return (
    <div className="flex justify-between p-2 border-b border-gray-200">
      <div className="flex items-center">
        <CiSquareChevLeft
          onClick={handleLeftClick}
          className="cursor-pointer h-6 w-6 text-gray-500 hover:text-blue-500"
        />
        <ul className="flex space-x-4 ml-2">
          {items.slice(startIndex, startIndex + 4).map((item, index) => (
            <li
              key={index}
              className={`${
                index === 0 ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
        <CiSquareChevRight
          onClick={handleRightClick}
          className="cursor-pointer h-6 w-6 text-gray-500 hover:text-blue-500 ml-2"
        />
      </div>
      <div className="flex items-center">
        <div className="flex flex-col items-center mr-4">
          <p className="text-gray-500">Years</p>
          <Singledropbutton items={['1', '5', '10', 'ALL']} option="year" />
        </div>
        <div className="flex space-x-2">
          <FaTableCells className="cursor-pointer h-6 w-6 text-gray-500 hover:text-blue-500" />
          <VscGraph className="cursor-pointer h-6 w-6 text-gray-500 hover:text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default FinanceToolbar;
