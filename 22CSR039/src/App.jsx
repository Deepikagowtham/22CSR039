import React, { useState } from 'react';
import { fetchStocks } from './Service';
import StockChart from './StockChart.jsx';
import Correlation from './Correlation.jsx';


const App = () => {
  const [ticker, setTicker] = useState('AAPL');
  const [minutes, setMinutes] = useState(60);
  const [stockOptions, setStockOptions] = useState([]);
  
  React.useEffect(() => {
    const getStocks = async () => {
      const stocks = await fetchStocks();
      setStockOptions(Object.keys(stocks));
    };
    getStocks();
  }, []);

  return (
    <div>
      <h1>Stock Price Aggregation</h1>

      <div>
        <label>
          Select Stock:
          <select onChange={(e) => setTicker(e.target.value)} value={ticker}>
            {stockOptions.map((stock) => (
              <option key={stock} value={stock}>
                {stock}
              </option>
            ))}
          </select>
        </label> <br/><br/>
      </div>

      <div>
        <label>
          Time Interval (minutes):
          <select onChange={(e) => setMinutes(e.target.value)} value={minutes}>
            <option value={30}>30</option>
            <option value={60}>60</option>
            <option value={120}>120</option>
          </select>
        </label>
      </div>

      <div>
        <StockChart ticker={ticker} minutes={minutes} />
      </div>

      <div>
        <Correlation minutes={minutes} />
      </div>
    </div>
  );
};

export default App;
