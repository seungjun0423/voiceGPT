import React from 'react';
import { useState, useEffect } from 'react';
import styled from "styled-components";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const Main = styled.div`
  width:100%;
  height:100vh;
  position:relative;
  display:flex;
  justify-content:center;
`

const Wrap = styled.div`
  margin-right:auto;
  margin-left:auto;
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
  z-index:1;
`

const Button = styled.button`
  width:50px;
  height:40px;
  border-radius:10px;
  background:skyblue;
`


const Footer = styled.div`
  width:100%;
  height:100%;
  bottom:0px;
  border: solid 1px #cbcbcb;
  font-family: 'Nanum Gothic', sans-serif;
  background-color:#cbcbcb;
`

const App = () => {
  const { transcript,listening,resetTranscript,browserSupportsSpeechRecognition
  } = useSpeechRecognition();


  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
      <Nav>
        음성GPT
      </Nav>
      <Main>
        <Wrap>
          <p style={{ textAlign:'center' }}>
            {listening ? 'on' : 'off'}
          </p>
          <Button 
            onClick={SpeechRecognition.startListening}>
            Start
          </Button>
          <Button onClick={SpeechRecognition.stopListening}>
            Stop
          </Button>
          <Button onClick={resetTranscript}>
            Reset
          </Button>
          <p>
            {transcript}
          </p>
        </Wrap>
      </Main>

      <Footer>
        안녕하세요 저는 이승준입니다! <br/>
        저는 웹 개발자입니다.
      </Footer>
    </>

  );
}

export default App;
