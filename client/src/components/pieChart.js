import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { motion, AnimatePresence } from 'framer-motion';

const PieChart = ({ data }) => {
  const [selectedData, setSelectedData] = useState(null);

  const chartData = {
    labels: data.map((item) => item.category),
    datasets: [
      {
        data: data.map((item) => item.amount),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          // Add more colors as needed
        ],
      },
    ],
  };

  return (
    <div>
      <h2>Customer Food Spending</h2>
      <Pie
        data={chartData}
        options={{
          maintainAspectRatio: false, // Adjust as needed
        }}
        onElementsClick={(elems) => {
          if (elems.length > 0) {
            const clickedDataIndex = elems[0]._index;
            setSelectedData(data[clickedDataIndex]);
          } else {
            setSelectedData(null);
          }
        }}
      />

      <AnimatePresence>
        {selectedData && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: '0%' }}
            exit={{ opacity: 0, x: '-100%' }}
          >
            <h5>{selectedData.category}</h5>
            <h2>{selectedData.amount}</h2>
            <button onClick={() => setSelectedData(null)}>Close</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PieChart;
