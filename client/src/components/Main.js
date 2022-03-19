import styled from "styled-components";
import { useRef } from "react";
import SearchComp from "./Search";
import WeatherComp from "./Weather";
//import SearchComp from "./components/Search";
const LogoIcon = require("../images/logo.png");

function MainComp() {

  return (
    <Div>  
      <DivLeft>
        <Logo src={LogoIcon} />

        <Paragraph>
          Use our weather app to see the weather around the world
        </Paragraph>
        <SearchComp/>
      </DivLeft>
      <DivRight>
        <WeatherComp />
      </DivRight>
    </Div>
  );
}
export default MainComp;

const Div = styled.div` 
  box-sizing: border-box;
  font-family: "Heebo", sans-serif;
  background-color: #f1f1f1;
  min-width: 100%;
  display: flex;
  flex-wrap:wrap;
  padding: 30px;
  /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  font-size: 7px;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  font-size: 10px;
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  font-size: 12px;
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  justify-content: center;
  font-size: 14px;
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  font-size: 16px;
  
}
@media only screen and (min-width: 1400px) {
  font-size: 20px;
  
}
`;

const DivLeft = styled.div`


@media only screen and (min-width: 1200px) {
 width: 50%;
}
  
`;

const DivRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dde4e6;
  padding: 30px;
  @media only screen and (max-width: 600px) {
    font-size: 7px;
    margin: 5px 0;
  }
  
`;

const Paragraph = styled.p`
  padding: 30px 132px 0 50px;
  color: #707070;
  font: normal 300 2em Heebo;
  width:40%;

`;

const Logo = styled.img`
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
  @media only screen and (min-width: 1400px) {
   width: 20%
    
  }
  
`;
