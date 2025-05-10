import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, UserIcon, TrophyIcon, FlagIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-800">
                Positive Play
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              <HomeIcon className="h-6 w-6" />
            </Link>
            <Link to="/missions" className="text-gray-600 hover:text-gray-900">
              <FlagIcon className="h-6 w-6" />
            </Link>
            <Link to="/rewards" className="text-gray-600 hover:text-gray-900">
              <TrophyIcon className="h-6 w-6" />
            </Link>
            <Link to="/profile" className="text-gray-600 hover:text-gray-900">
              <UserIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 