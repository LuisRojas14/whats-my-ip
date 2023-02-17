import React, { useState, useEffect } from "react";

const CountryInfo = ({ countryCode, accessKey }) => {
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `"https://api.countrylayer.com/v2/alpha/DE?access_key=cb50a13914ac99215a59cfd93e8c1096"`
        );
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
