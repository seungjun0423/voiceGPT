import React from 'react';
import { useState, useEffect } from 'react';
import styled from "styled-components";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


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
  font-size:60px;
  padding-top:40px;
  font-family: 'Nanum Gothic', sans-serif;
  color:#ffffff;

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
