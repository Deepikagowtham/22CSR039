import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/evaluation-service/stocks';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ3MDMxMzE5LCJpYXQiOjE3NDcwMzEwMTksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImYzYjI4ZDY0LThmNWUtNDA3ZS04MmY2LTNjZDUzMGEyZTgyMSIsInN1YiI6ImRlZXBpZ2FwLjIyY3NlQGtvbmd1LmVkdSJ9LCJlbWFpbCI6ImRlZXBpZ2FwLjIyY3NlQGtvbmd1LmVkdSIsIm5hbWUiOiJkZWVwaWdhIHAiLCJyb2xsTm8iOiIyMmNzcjAzOSIsImFjY2Vzc0NvZGUiOiJqbXBaYUYiLCJjbGllbnRJRCI6ImYzYjI4ZDY0LThmNWUtNDA3ZS04MmY2LTNjZDUzMGEyZTgyMSIsImNsaWVudFNlY3JldCI6ImZZemZKZEJ2TkdLc1BwaEQifQ.5VjigDZiZqUQFbZEHCyEG4Wm7ALXkG7Z7ILi_xNGNs0';
// Function to fetch the stock data
export const fetchStocks = async () => {
  try {
    const response = await axios.get(API_BASE_URL, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`, // Adding the authorization header
      },
    });
    return response.data; // Handle the data as needed
  } catch (error) {
    console.error("Error fetching stocks", error);
    throw error;
  }
};

// Function to fetch stock data with specific ticker and minutes
export const fetchStockData = async (ticker, minutes) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${ticker}?minutes=${minutes}`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`, // Adding the authorization header
      },
    });
    return response.data; // Handle the data as needed
  } catch (error) {
    console.error("Error fetching stock data", error);
    throw error;
  }
};
