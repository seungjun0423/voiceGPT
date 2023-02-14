import { useState, useEffect } from 'react';
import styled from "styled-components";

const Html = styled.div`
  width:100%;
  height:100%;
`

const Nav = styled.div`
  box-sizing:border-box;
  height:150px;
  background-color:orange;
  position: -webkit-sticky;
  position: sticky;
  top:0;
  border: solid 0.1px orange ;
  text-align:center;
  font-weight:bold;
  font-size:50px;
  padding-top:30px;
  font:pr
`

const App = () => {
  return (
    <>
      <Html>
        <Nav>
          음성GPT
        </Nav>
      </Html>
    </>

  );
}

export default App;
