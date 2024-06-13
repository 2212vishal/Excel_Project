import React, { useState } from 'react';
import { FaChevronDown, FaCheck, FaSearch } from 'react-icons/fa';

const MultiSelectMenu = ({ items, option }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleItem = (item) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(item)) {
        return prevSelectedItems.filter((i) => i !== item);
      } else {
        return [...prevSelectedItems, item];
      }
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const deselectAll = () => {
    setSelectedItems([]);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative max-w-sm mt-1">
      <div className="relative">
        <div
          className="flex items-center justify-between h-12 px-4 bg-white rounded shadow cursor-pointer select-btn"
          onClick={toggleDropdown}
        >
          <span className="text-gray-700">
            {selectedItems.length > 0
              ? `${selectedItems.length} out of ${items.length} Selected`
              : `Select ${option}`}
          </span>
          <span
            className={`w-6 h-6  rounded-full flex items-center justify-center transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <FaChevronDown />
          </span>
        </div>
        {isOpen && (
          <div className="absolute left-0 w-full mt-2 bg-white rounded shadow list-items z-50 max-h-72 overflow-y-auto">
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
            <div
              className="px-4 py-2 border-b border-gray-300 cursor-pointer"
              onClick={deselectAll}
            >
              <span className="text-gray-700">Deselect All</span>
            </div>
            <ul className="max-h-48 overflow-y-auto">
              {filteredItems.slice(0, 5).map((item, index) => (
                <li
                  key={index}
                  className="flex items-center h-12 px-4 cursor-pointer transition-colors hover:bg-blue-100"
                  onClick={() => toggleItem(item)}
                >
                  <span
                    className={`w-4 h-4 border-2 border-gray-300 rounded mr-3 flex items-center justify-center transition-all ${
                      selectedItems.includes(item)
                        ? 'bg-blue-500 border-blue-500'
                        : ''
                    }`}
                  >
                    {selectedItems.includes(item) && (
                      <FaCheck className="text-white text-xs" />
                    )}
                  </span>
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

export default MultiSelectMenu;
