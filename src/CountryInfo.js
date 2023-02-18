import React, { useState, useEffect } from "react";

const CountryInfo = ({ countryCode, accessKey }) => {
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://ipapi.co/8.8.8.8/country/`);
        const data = await response.json();
        setCountryData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [countryCode, accessKey]);

  return (
    <div>
      <h1>Country Information</h1>
      <p>Country Code: {countryData.alpha2Code}</p>
      <p>Country Name: {countryData.name}</p>
      <p>Capital: {countryData.capital}</p>
      <p>Population: {countryData.population}</p>
      <p>
        Currency: {countryData.currencies && countryData.currencies[0].name}
      </p>
    </div>
  );
};

export default CountryInfo;
