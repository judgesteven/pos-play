import React from 'react';

const Rewards: React.FC = () => {
  const rewards = [
    {
      id: 1,
      title: 'Free Game Credit',
      description: 'Get $10 in game credit',
      points: 1000,
      available: true,
    },
    {
      id: 2,
      title: 'VIP Status',
      description: 'Unlock VIP features for 1 month',
      points: 2000,
      available: true,
    },
    {
      id: 3,
      title: 'Exclusive Avatar',
      description: 'Unlock a special avatar',
      points: 500,
      available: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Rewards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewards.map((reward) => (
          <div key={reward.id} className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{reward.title}</h2>
            <p className="text-gray-600 mb-4">{reward.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-blue-600">{reward.points} points</span>
              <button
                className={`px-4 py-2 rounded-md text-white ${
                  reward.available
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
                disabled={!reward.available}
              >
                {reward.available ? 'Redeem' : 'Not Available'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rewards; 