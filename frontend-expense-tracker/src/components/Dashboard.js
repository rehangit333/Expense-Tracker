import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = ({ expenses }) => {
  const categoryData = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const monthData = expenses.reduce((acc, expense) => {
    const month = new Date(expense.date).toLocaleString('default', { month: 'short' });
    acc[month] = (acc[month] || 0) + expense.amount;
    return acc;
  }, {});

  const pieData = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        data: Object.values(categoryData),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#7FFF00', '#00FFFF', '#8A2BE2'],
      },
    ],
  };

  const barData = {
    labels: Object.keys(monthData),
    datasets: [
      {
        label: 'Monthly Expenses',
        data: Object.values(monthData),
        backgroundColor: '#36A2EB',
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h2>Expense Dashboard</h2>
      <div className="charts">
        <div className="chart">
          <h3>Category Distribution</h3>
          <Pie data={pieData} />
        </div>
        <div className="chart">
          <h3>Monthly Expenses</h3>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
