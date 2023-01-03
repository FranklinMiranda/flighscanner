import React, { useState, useEffect } from 'react';
import axios from 'axios';

// API endpoint URL https://restcountries.com/v3.1/all

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      console.log(response);

      setData(response.data);
    };

    loadData();
  });

  return (
    <div className="Data">
      {data.map((item) => (
        <h4>{item.title}</h4>
      ))}
    </div>
  );
};

export default Data;
