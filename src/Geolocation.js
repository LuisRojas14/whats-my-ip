import React, { useState, useEffect } from "react";

const Geolocation = () => {
  const [ip, setIp] = useState("");
  const [location, setLocation] = useState({});
  const [time, setTime] = useState("");
  // const Key='at_i4HyY6XQX0seHbAUuz9Wc6cYUs1d6'

  useEffect(() => {
    // Get the user's IP address
    fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setIp(data.ip));

    // Get the user's location and time information
        fetch(`https://ipapi.co/json/`)
          .then((res) => res.json())
          .then((data) => {
            setLocation({
              city: data.city,
              region: data.region,
              country: data.country_name,
            });
            setTime(new Date().toLocaleString());
          });
  }, []);

  return (
    <div>
      <h1>Your IP Address</h1>
      <p>{ip}</p>
      <h1>Location Information</h1>
      <p>City: {location.city}</p>
      <p>Region: {location.region}</p>
      <p>Country: {location.country}</p>
      <h1>Time Information</h1>
      <p>{time}</p>
    </div>
  );
};

export default Geolocation;
