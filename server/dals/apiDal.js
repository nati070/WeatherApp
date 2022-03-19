const axios = require("axios");

const apiWether = "http://api.weatherapi.com/v1";
const keyWeatherApi = "?key=0d7f16e2c1eb488987e114556221503";

exports.getDataWeather = async (city) => {
  try {
    const query = "&q=" + city + "&days=1&aqi=no&alerts=no";
    const WeatherData = await axios.get(
      apiWether + "/forecast.json" + keyWeatherApi + query
    );
    return WeatherData.data;
  } catch (err) {
    console.error("error with the api weather", err);
  }
};

exports.getAutoComplite = async (str) => {
  //console.log(str);
  const query = "&q=" + str;
  try {
    const autoCompliteData = await axios.get(
      apiWether + "/search.json" + keyWeatherApi + query
    );
    return autoCompliteData.data
  } catch (err) {
    console.error("error with the api auto complite", err);
  }
};
