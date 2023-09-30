import React from 'react';
import PieChart from './components/pieChart';

const customerData = [
  { category: 'Groceries', amount: 200 },
  { category: 'Dining Out', amount: 150 },
  { category: 'Fast Food', amount: 100 },
  // Add more categories and data as needed
];

const SpotifyWrapped = () => {
  return (
    <div>
      <h1>Spotify Wrapped</h1>
      <PieChart data={customerData} />
    </div>
  );
};

export default SpotifyWrapped;
