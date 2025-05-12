import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchStockData } from './Service';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const StockChart = ({ ticker, minutes }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const getStockData = async () => {
      const data = await fetchStockData(ticker, minutes);
      const prices = data.map(item => item.price);
      const labels = data.map(item => new Date(item.lastUpdatedAt).toLocaleTimeString());

      setChartData({
        labels,
        datasets: [
          {
            label: `${ticker} Price`,
            data: prices,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
          },
        ],
      });
    };

    getStockData();
  }, [ticker, minutes]);

  return chartData ? <Line data={chartData} /> : <p>Loading...</p>;
};

export default StockChart;
