import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "51abb9d6d5aefe531f7f91e1f94dc59e";
const API_CITY = "Lviv";
const API_COUNTRY_CODE = "+380";

const Weatherinfo = () => {
  const [info, setInfo] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${API_CITY},${API_COUNTRY_CODE}uk&APPID=${API_KEY}&units=metric`
      )
      .then((res) => setInfo(res.data.main.temp));
    //.then((res) => console.log(res.data.main.temp));
  }, []);

  return (
    <div>
      <h1 className="weather">Temp in Lviv now: {info}°</h1>
    </div>
  );
};

export default Weatherinfo;
