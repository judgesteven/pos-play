import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center space-x-4">
          <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-4xl text-gray-500">👤</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
            <p className="text-gray-600">Level 5 Explorer</p>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900">Points</h3>
            <p className="text-3xl font-bold text-blue-600">1,250</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900">Missions Completed</h3>
            <p className="text-3xl font-bold text-green-600">12</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900">Rewards Earned</h3>
            <p className="text-3xl font-bold text-purple-600">8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 