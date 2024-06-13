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

  const clearSelection = () => {
    setSelectedItem(null);
    setIsOpen(false);
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative max-w-sm w-full mt-1">
      <div className="relative">
        <div className="flex items-center justify-between h-12 px-4 bg-white rounded shadow cursor-pointer select-btn" onClick={toggleDropdown}>
          <span className="text-gray-700">
            {selectedItem ? selectedItem : `Select ${option}`}
          </span>
          <span className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform ${isOpen ? 'rotate-180' : ''}`}>
            <FaChevronDown />
          </span>
        </div>
        {isOpen && (
          <div className="absolute left-0 w-full mt-2 bg-white rounded shadow list-items z-50">
            <div className="flex items-center px-4 py-2 border-b border-gray-300">
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
                <li key={index} className="flex items-center h-12 px-4 cursor-pointer transition-colors hover:bg-blue-100" onClick={() => toggleItem(item)}>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            {selectedItem && (
              <div className="flex justify-end px-4 py-2">
                <button className="text-blue-500 hover:text-blue-700 focus:outline-none" onClick={clearSelection}>
                  Clear Selection
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Singledropbutton;
