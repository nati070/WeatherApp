const axios = require("axios");

const ServerPath = "http://localhost:8000/api";

exports.getWeatherData = async (city) => {
  try {
    const weatherData = await axios.post(ServerPath + "/get-city-weather", {
      city: city,
    });
    return weatherData.data;
  } catch (err) {
    console.error("problem with post get-city-weather", err);
  }
};

exports.fixTime = (timestr) => {
  const time = new Date(timestr);
  return (
    time.getDate() +
    "/" +
    ((time.getMonth() + 1) % 12) +
    "/" +
    (time.getYear() % 100)
  );
};

exports.get5DaysList = (allDayList) => {
  const s = new Date(Date.now()).getHours();
  const dayList = [
    allDayList[(s - 2 + 24) % 24],
    allDayList[(s - 1 + 24) % 24],
    allDayList[s],
    allDayList[(s + 1) % 24],
    allDayList[(s + 2) % 24],
  ];
  const data = dayList.map((day) => {
    const time = new Date(day.time).getHours() + ":00";
    return { time: time, temp_c: day.temp_c };
  });
  return data;
};

exports.getAutoComplite = async (text) => {
  try{
    const optionsData = await axios.post(ServerPath + "/get-options-autocomplite" , {text : text});
    return optionsData.data;
  }
  catch(err){
    console.error("problem with get-options-autocomplite" ,err)
  }
};
