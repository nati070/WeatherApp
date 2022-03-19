import styled from "styled-components";
import { useState , useRef } from "react";
import UseOutsideClick from "../coustomHooks/useOutsideClick";
import { useDispatch } from "react-redux";
const utils = require("../utils/utils");

// change it to resize the length of the list result
const MAX_SIZE_AUTOFILL_LIST = 5;

// min letters to return list of result 
const MIN_LETTERS_TO_START_AUTOFILL = 3;


function SearchComp(props) {
  const [inputText, setInputText] = useState("");
  const [optionsList, setOptionsList] = useState([]);
  const boxRef  = useRef(null);
  const boxOutsideClick = UseOutsideClick(boxRef)

  const dispatch = useDispatch();

  const handleText = async (e) => {
    //inputText
    setInputText(e.target.value);
    if (inputText.length > MIN_LETTERS_TO_START_AUTOFILL) {
      try {
        const dataAutoComplite = await utils.getAutoComplite(inputText);
        setOptionsList(dataAutoComplite);
      } catch (err) {
        console.error("error with util getAutoComplite", err);
      }
    }
    else{
      setOptionsList([])
    }
  };

  const handelChooseLoction =(city)=>{
    setInputText(city)
    setOptionsList([]);
  }

  const dispatchCity = ()=>{
      dispatch({
        type: "CITY WEATHER",
        payload : inputText
      })
  }

  console.log(boxOutsideClick)
  const listLocations = optionsList.slice(0,MAX_SIZE_AUTOFILL_LIST).map(option => {
    return <LocationLi key={option.id} onClick={()=>handelChooseLoction(option.name)}>{option.name}</LocationLi>
  })
  

  return (
    <Div ref={boxRef}>
      <Label>City name</Label>
      <DivInput>
        <ButtonCheck
          onClick={() => {
            dispatchCity();
          }}
        >
          Check
        </ButtonCheck>
        <Input type="text" value={inputText} onChange={(e) => handleText(e)} />
        {(optionsList.length > 0 && !boxOutsideClick) ? <ListLocation>{listLocations}</ListLocation> : <></>}
      </DivInput>
    </Div>
  );
}
export default SearchComp;

const Div = styled.div`
max-width:80%;

`;
const Label = styled.div`
  padding: 5px;
  color: #707070;
`;
const Input = styled.input`
  padding: 14px 0px 14px 10px;
  border-radius: 8px;
  border: none;
  width: 100%;
  @media only screen and (min-width: 1400px) {
    font-size: 30px;
    
  }
  
`;

const ButtonCheck = styled.button`
  position: absolute;
  cursor: pointer;
  border: none;
  align-items: center;
  right: 0;
  margin: 8px;
  padding: 6px 12px;
  background-color: green;
  border-radius: 8px;
  color: #ffffff;
  @media only screen and (min-width: 1400px) {
    font-size: 30px;
    
  }
  
`;
const DivInput = styled.div`
  position: relative;
  width: 90%;
`;

const ListLocation = styled.ul`
  min-width: 250px;
  z-index: 1;
  position: absolute;
  top: 32px;
  list-style-type: none;
  padding: 6px;
  border: 1px solid;
  border-radius: 15px;
  border: 3px solid  #27737D;
`;
const LocationLi = styled.li`
  cursor: pointer;
  padding: 5px;
  &:hover {
    background: #B0E1AC;
  }
`;