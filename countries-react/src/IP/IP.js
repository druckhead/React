import axios from "axios";
import React, { useState } from "react";

function IP() {
  const [data, setData] = useState(null);

  const getIPData = async () => {
    const ipResponse = await axios.get(`https://api.ipify.org/?format=json`);
    const ip = ipResponse.data.ip;
    const geoResponse = await axios.get(`http://ip-api.com/json/${ip}`);
    return geoResponse.data;
  };

  const clickHandler = async () => {
    try {
      const ipData = await getIPData();
      setData(`${ipData.query} - ${ipData.country}, ${ipData.city}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={clickHandler}>GET MY IP INFO</button>
      {data}
    </div>
  );
}

export default IP;
