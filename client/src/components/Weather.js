import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const utils = require("../utils/utils");

function WeatherComp(props) {
  const [weatherData, setWeatherData] = useState();
  const selectorCity = useSelector((state) => state.city);
  console.log(selectorCity);
  useEffect(async () => {
    const data = await utils.getWeatherData(selectorCity);
    setWeatherData(data);
  }, [selectorCity]);
  console.log(1);
  useEffect(async () => {
    let time;
    if (weatherData) {
      time = setTimeout(async () => {
        const data = await utils.getWeatherData(selectorCity);
        setWeatherData(data);
      }, 3000);
    }
    return () => {
      clearTimeout(time);
    };
  }, [weatherData]);

  const city = weatherData ? weatherData.location.name : "null";
  const country = weatherData ? weatherData.location.country : "null";
  const localtime = weatherData
    ? utils.fixTime(weatherData.location.localtime)
    : "null";
  const temp_c = weatherData ? weatherData.current.temp_c : "null";
  const condition = weatherData ? weatherData.current.condition.text : "null";
  const precip_mm = weatherData ? weatherData.current.precip_mm : "null";
  const humidity = weatherData ? weatherData.current.humidity : "null";
  const wind_kph = weatherData ? weatherData.current.wind_kph : "null";

  const daylist = weatherData
    ? utils.get5DaysList(weatherData.forecast.forecastday[0].hour)
    : [];

  const TableDays =
    daylist.length > 0 ? (
      <DivTable>
        <TableHours>
          <tbody>
            <Row>
              <HeadCell>{daylist[0].time}</HeadCell>
              <HeadCell>{daylist[1].time}</HeadCell>
              <HeadCell>{daylist[2].time}</HeadCell>
              <HeadCell>{daylist[3].time}</HeadCell>
              <HeadCell>{daylist[4].time}</HeadCell>
            </Row>
            <Row>
              <Cell>{daylist[0].temp_c}&deg;</Cell>
              <Cell>{daylist[1].temp_c}&deg;</Cell>
              <Cell>{daylist[2].temp_c}&deg;</Cell>
              <Cell>{daylist[3].temp_c}&deg;</Cell>
              <Cell>{daylist[4].temp_c}&deg;</Cell>
            </Row>
          </tbody>
        </TableHours>
      </DivTable>
    ) : (
      <></>
    );

  return weatherData ? (
    <Div>
      <TextCity>{city}</TextCity>
      <br />
      <TextCounrty>{country}</TextCounrty>
      <br />
      <TextDate>{localtime}</TextDate>
      <br />
      <DDiv>
        <TextDegree>{temp_c}&deg;</TextDegree>
        <TextCondition>{condition}</TextCondition>
      </DDiv>
      <br />

      <DivTable>
        <TableDetails>
          <tbody>
            <Row>
              <HeadCell>precipitation</HeadCell>
              <HeadCell>humidity</HeadCell>
              <HeadCell>wind</HeadCell>
            </Row>
            <Row>
              <Cell>{precip_mm} mm</Cell>
              <Cell>{humidity}%</Cell>
              <Cell>{wind_kph} km/h</Cell>
            </Row>
          </tbody>
        </TableDetails>
      </DivTable>
      {TableDays}
    </Div>
  ) : (
    <DivNull>Please Insert City</DivNull>
  );
}
export default WeatherComp;

const Div = styled.div`
    background-color: #27737D;
    padding 40px 10px 2px 10px;
    color: white;
    border-radius: 15px;
    text-align: center;
    min-width: 80%;
    min-height: 80%;

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
      font-size: 4px;
      max-width: 60%;
    max-height: 60%;
    }
    
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      font-size: 4px;
    }
    
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      font-size: 6px;
    } 
    
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      justify-content: center;
      font-size: 8px;
    } 
    
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      font-size: 8px;
    }
    @media only screen and (min-width: 1400px) {
      font-size: 20px;
    }
    
`;
const TextCity = styled.label`
  font-size: 2em;
`;
const TextCounrty = styled.label`
  color: #a8c6cb;
  font-size: 2em;
`;
const TextDate = styled.label`
  color: #a8c6cb;
  font-size: 2em;
`;
const TextDegree = styled.div`
  font-size: 10em;
  letter-spacing: -8px;
`;
const TextCondition = styled.div`
  position: absolute;
  font: normal 100 25px Heebo;
  color: #e8f1f2;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  font-size: 3em;
`;
const DDiv = styled.div`
  position: relative;
`;

const TableDetails = styled.table`
  font-size: 2em;
  margin: 10px 0 20px 0;

  @media only screen and (max-width: 600px) {
    margin: 1px 0 1px 0;
  }
`;
const Row = styled.tr``;
const HeadCell = styled.th`
  padding: 2px 15px;
  color: #a8c6cb;

  @media only screen and (max-width: 600px) {
    padding: 2px 5px;
  }
`;
const Cell = styled.td``;
const TableHours = styled.table`
  font-size: 2em;
`;
const DivTable = styled.div`
  font-size: 1em;
  display: flex;
  justify-content: center;
`;
const DivNull = styled.div`
  background-color: #27737D;
  padding 40px 10px 2px 10px;
  color: white;
  border-radius: 15px;
  text-align: center;
  font-size: 40px;
  display: flex;
  width: 70%;
  min-height: 200px;
  max-height: 80%;
`;
