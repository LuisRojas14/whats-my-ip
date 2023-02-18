import React, { useState, useEffect } from "react";

const Geolocation = () => {
  const [ip, setIp] = useState("");
  const [location, setLocation] = useState({});
  const [time, setTime] = useState("");

  useEffect(() => {
    // Get the user's location information
    fetch("https://api.ipify.org/?format=json")
      .then((res) => res.json())
      .then((data) => {
        setIp(data.ip);
        fetch(`https://ipapi.co/json/`)
          .then((res) => res.json())
          .then((data) => {
            setLocation({
              city: data.city,
              region: data.region,
              country: data.country_name,
              timezone: data.timezone,
            });
          });
      });
  }, []);

  useEffect(() => {
    // Get the current time for the user's timezone
    if (location.timezone) {
      fetch(`https://worldtimeapi.org/api/timezone/${location.timezone}`)
        .then((res) => res.json())
        .then((data) => {
          setTime(data.datetime);
        });
    }
  }, [location.timezone]);

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
