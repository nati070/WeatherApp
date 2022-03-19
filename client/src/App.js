import styled from "styled-components";
import MainComp from "./components/Main";

function App() {
  return (
    <Div>
      <MainComp/>
    </Div>
  );
}

export default App;

const Div = styled.div`

min-height: 100vh;
display: flex;
min-width: 100%;


`


