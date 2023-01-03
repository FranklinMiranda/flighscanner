import React, { useState, useEffect } from 'react';
import axios from 'axios';

// API endpoint URL https://jsonplaceholder.typicode.com/posts/

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {

      const response = await axios.get('https://the-cocktail-db.p.rapidapi.com/search.php');
        console.log(response)
      //setData(response.data);

    };

    loadData();
  });

  return <div className="Data">{data.map((item) => <h4>{item.title}</h4>)}</div>;
};

export default Data

