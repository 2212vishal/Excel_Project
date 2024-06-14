import React, { useState } from 'react';
import { FaChevronDown, FaSearch } from 'react-icons/fa';

const Singledropbutton = ({ items, option }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleItem = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
    setIsOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative max-w-sm w-full mt-1">
      <div className="relative w-full">
        <div
          className="flex items-center justify-between py-1 px-4 bg-white rounded shadow cursor-pointer select-btn"
          onClick={toggleDropdown}
          style={{ width: '200px' }} 
        >
          <span className="text-gray-700 truncate">
            {selectedItem ? selectedItem : `Select ${option}`}
          </span>
          <span className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform ${isOpen ? 'rotate-180' : ''}`}>
            <FaChevronDown />
          </span>
        </div>
        {isOpen && (
          <div
            className="absolute right-0 mt-2 bg-white rounded shadow list-items z-50"
            style={{ width: '400px' }} 
          >
            <div className="flex items-center px-4 py-1 border-b border-gray-300">
              <FaSearch className="mr-2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full px-2 py-1 focus:outline-none"
              />
            </div>
            <ul className="max-h-60 overflow-y-auto">
              {filteredItems.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center h-10 px-4 cursor-pointer transition-colors ${selectedItem === item ? 'bg-blue-100' : ''} hover:bg-blue-100`}
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

export default Singledropbutton;
