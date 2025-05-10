import React from 'react';

const Missions: React.FC = () => {
  const missions = [
    {
      id: 1,
      title: 'Daily Check-in',
      description: 'Log in to the app for 7 consecutive days',
      points: 100,
      progress: 5,
      total: 7,
    },
    {
      id: 2,
      title: 'Responsible Gaming Quiz',
      description: 'Complete the responsible gaming knowledge quiz',
      points: 200,
      progress: 0,
      total: 1,
    },
    {
      id: 3,
      title: 'Community Engagement',
      description: 'Participate in 3 community discussions',
      points: 150,
      progress: 1,
      total: 3,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Missions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {missions.map((mission) => (
          <div key={mission.id} className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{mission.title}</h2>
            <p className="text-gray-600 mb-4">{mission.description}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-500">
                Progress: {mission.progress}/{mission.total}
              </span>
              <span className="text-sm font-medium text-blue-600">{mission.points} points</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${(mission.progress / mission.total) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Missions; 