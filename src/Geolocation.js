// import React, { useState, useEffect } from "react";

// const Geolocation = () => {
//   const [ip, setIp] = useState("");
//   const [location, setLocation] = useState({});
//   const [time, setTime] = useState("");
//   //   const [countryInfo, setCountryInfo] = useState({});

//   useEffect(() => {
//     // Get the user's IP address
//     fetch(
//       `https://geo.ipify.org/api/v2/country?apiKey=at_ozfXLIhA38p1caXiWjc64BSzlv8PK`

//       // `https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_KEY}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setIp(data.ip);
//       })
//       .then((res) => res.json())
//       .then((data) => {
//         setLocation({
//           city: data.city,
//           region: data.region,
//           country: data.country_name,
//         });
//         setTime(new Date().toLocaleString());

//         // Get additional information about the country
//         // fetch( )
//         //   .then((res) => res.json())
//         //   .then((data) => {
//         //     setCountryInfo({
//         //       currency: data.currency,
//         //       language: data.language,
//         //       capital: data.capital,
//         //     });
//         //   });
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Your IP Address</h1>
//       <p>{ip}</p>
//       <h1>Location Information</h1>
//       <p>City: {location.city}</p>
//       <p>Region: {location.region}</p>
//       <p>Country: {location.country}</p>
//       <h1>Country Information</h1>
//       {/* <p>Currency: {countryInfo.currency}</p>
//       <p>Language: {countryInfo.language}</p>
//       <p>Capital: {countryInfo.capital}</p> */}
//       <h1>Time Information</h1>
//       <p>{time}</p>
//     </div>
//   );
// };

// export default Geolocation;

import React, { useState, useEffect } from "react";

const Geolocation = () => {
  const [ip, setIp] = useState("");
  const [location, setLocation] = useState({});
  const [time, setTime] = useState("");
  const [countryInfo, setCountryInfo] = useState({});

  useEffect(() => {
    // Get the user's location information
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setIp(data.ip);
        setLocation({
          city: data.location.city,
          region: data.location.region,
          country: data.location.country,
        });

        
        setTime(data.location.timezone);
        // setCountryInfo({
        //   currency: data.location.currency.code,
        //   language: data.location.languages[0].name,
        //   capital: data.location.capital,
        // });
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
      {/* <h1>Country Information</h1> */}
      {/* <p>Currency: {countryInfo.currency}</p>
      <p>Language: {countryInfo.language}</p>
      <p>Capital: {countryInfo.capital}</p> */}
      <h1>Time Zone</h1>
      <p>{time}</p>
    </div>
  );
};

export default Geolocation;
