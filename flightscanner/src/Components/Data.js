import React, { useState, useEffect } from 'react';
import axios from 'axios';

// API endpoint URL
const BASE_URL = 'https://restcountries.com/v3.1/all';

function ListCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(BASE_URL);

      console.log(response.data);

      setCountries(response.data);
    };

    loadData();
  }, []);

  return (
    <div>
      {countries.map((item) => {
        return <h1>{item.name.common}</h1>;
      })}
    </div>
  );
}

export default ListCountries;
