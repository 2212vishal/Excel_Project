import React, { useState } from 'react';
import { FaChevronDown, FaCheck, FaSearch } from 'react-icons/fa';

const MultiSelectMenu = ({ items, option }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [deselectAllChecked, setDeselectAllChecked] = useState(false);

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
    setDeselectAllChecked(false); // Uncheck deselect all checkbox when any item is toggled
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const deselectAll = () => {
    if (deselectAllChecked) {
      setDeselectAllChecked(false);
      setSelectedItems([]);
    } else {
      setDeselectAllChecked(true);
      setSelectedItems([]);
    }
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative max-w-sm mt-1">
      <div className="relative w-full">
        <div
          className="flex items-center justify-between h-auto px-4 py-1 bg-white rounded shadow cursor-pointer select-btn"
          onClick={toggleDropdown}
        >
          <span className="text-gray-700">
            {selectedItems.length > 0
              ? `Companies (${selectedItems.length}/${items.length})`
              : `Companies (0/${items.length})`}
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
          <div className="absolute right-0 w-full mt-2 bg-white rounded shadow list-items z-50 max-h-72 overflow-y-auto" style={{ width: '200%' }}>
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
            <div
              className={`flex items-center justify-between px-4 py-1 border-b border-gray-300 cursor-pointer transition-colors ${
                deselectAllChecked ? 'bg-blue-100' : ''
              }`}
              onClick={deselectAll}
            >
              <span className="text-gray-700">Deselect All</span>
              <span
                className={`w-4 h-4 border-2 border-gray-300 rounded flex items-center justify-center transition-all ${
                  deselectAllChecked
                    ? 'bg-blue-500 border-blue-500'
                    : ''
                }`}
              >
                {deselectAllChecked && <FaCheck className="text-white text-xs" />}
              </span>
            </div>
            <ul className="max-h-48 overflow-y-auto">
              {filteredItems.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center justify-between h-12 px-4 cursor-pointer transition-colors ${
                    selectedItems.includes(item) ? 'bg-blue-100' : ''
                  } hover:bg-blue-100 whitespace-nowrap`}
                  onClick={() => toggleItem(item)}
                >
                  <span className="text-gray-700">{item}</span>
                  <span
                    className={`w-4 h-4 border-2 border-gray-300 rounded flex items-center justify-center transition-all ${
                      selectedItems.includes(item)
                        ? 'bg-blue-500 border-blue-500'
                        : ''
                    }`}
                  >
                    {selectedItems.includes(item) && (
                      <FaCheck className="text-white text-xs" />
                    )}
                  </span>
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
