import React, { useState, useEffect } from 'react';
import Axios from 'axios';

// API endpoint URL https://jsonplaceholder.typicode.com/posts/

const Data = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const response = await Axios.get('https://jsonplaceholder.typicode.com/posts/');

      setData(response.data);

      setLoading(true);
    };

    loadData();
  }, []);

  return <div className="Data">{loading ? <h4>Loading...</h4> : data.map((item) => <h4>{item.title}</h4>)}</div>;
};

export default Data