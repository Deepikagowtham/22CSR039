import React, { useEffect, useState } from 'react';
import { fetchStocks } from './Service';

const Correlation = ({ minutes }) => {
  const [stocks, setStocks] = useState([]);
  const [correlationData, setCorrelationData] = useState(null);

  useEffect(() => {
    const getStocks = async () => {
      const stocksList = await fetchStocks();
      setStocks(Object.entries(stocksList));
    };

    getStocks();
  }, []);

  useEffect(() => {
    const calculateCorrelation = async () => {
      setCorrelationData([
        [1, 0.8, -0.5],
        [0.8, 1, -0.2],
        [-0.5, -0.2, 1],
      ]);
    };

    if (stocks.length > 0) {
      calculateCorrelation();
    }
  }, [stocks, minutes]);

  return (
    <div>
      <h3>Correlation Heatmap</h3>
      <pre>{JSON.stringify(correlationData, null, 2)}</pre>
    </div>
  );
};

export default Correlation;
