import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import './App.css';
import Flag from './Components/Flag';




const App = () => {
  const [ip, setIp] = useState('');
  const [location, setLocation] = useState({});
  const [time, setTime] = useState('');

  useEffect(() => {
    // const apiKey={key}
    // Get the user's IP address
    fetch(`https://geo.ipify.org/api/v2/country?apiKey= ${process.env.REACT_APP_KEY}`)
      .then(res => res.json())
      .then(data => setIp(data.ip));
console.log(ip)
    // Get the user's location and time information
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        setLocation({
          city: data.city,
          region: data.region,
          country: data.country_name,
        });
        setTime(new Date().toLocaleString());
      });
  }, []);

  return (
    <div className='App'>
      <Header />
      <h1>Your IP Address</h1>
      <p>{ip}</p>
      <h1>Location Information</h1>
      <Flag location={location.country}/>
      <p>City: {location.city}</p>
      <p>Region: {location.region}</p>
      <p>Country: {location.country}</p>
      <h1>Time Information</h1>
      <p>{time}</p>
    </div>
  );
};

export default App;

