import React from 'react';
import { useState, useEffect } from 'react';
import styled from "styled-components";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const Body = styled.div`
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
  const { transcript,listening,resetTranscript,browserSupportsSpeechRecognition
  } = useSpeechRecognition();


  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
      <Body>
        <Nav>
          음성GPT
        </Nav>
        <div>
          <p>
            Microphone: {listening ? 'on' : 'off'}
          </p>
          <button onClick={SpeechRecognition.startListening}>
            Start
          </button>
          <button onClick={SpeechRecognition.stopListening}>
            Stop
          </button>
          <button onClick={resetTranscript}>
            Reset
          </button>
          <p>
            {transcript}
            {console.log(transcript)}
          </p>
        </div>
      </Body>
    </>

  );
}

export default App;
