import React, { useState } from 'react';
import { Notifications } from '@mui/icons-material';

const NotificationDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const messages = [
    'Message 1',
    'Message 2',
    'Message 3',
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center text-gray-600 hover:text-gray-900 focus:outline-none"
        onClick={toggleDropdown}
      >
        <Notifications className="w-6 h-6" /> 0
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white border rounded shadow">
          <ul className="py-2">
            {messages.map((message, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-100">
                {message}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;