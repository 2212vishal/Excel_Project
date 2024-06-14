import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Simpledropdown = ({ items, option }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleItem = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative max-w-sm w-full mt-1">
      <div className="relative w-full">
        <div
          className="flex items-center justify-between py-1 px-4 bg-white rounded shadow cursor-pointer select-btn"
          onClick={toggleDropdown}
          style={{ width: '100px' }} // Fixed width for the dropdown button
        >
          <span className="text-gray-700 truncate">
            {selectedItem ? selectedItem : `Select Option`}
          </span>
          <span className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform ${isOpen ? 'rotate-180' : ''}`}>
            <FaChevronDown />
          </span>
        </div>
        {isOpen && (
          <div
            className="absolute right-0 mt-2 bg-white rounded shadow list-items z-50"
            style={{ width: '100px' }} // Adjusted width for the dropdown options
          >
            <ul className="max-h-60 overflow-y-auto">
              {items.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center h-10 px-4 cursor-pointer transition-colors hover:bg-blue-100`}
                  onClick={() => toggleItem(item)}
                >
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Simpledropdown;
