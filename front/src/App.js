import React from 'react';
import { useState, useEffect } from 'react';
import styled from "styled-components";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const Main = styled.div`
  width:100%;
  height:100%;
  position:relative;
  display:flex;
`

const Wrap = styled.div`
  margin-right:auto;
  margin-left:auto;
`

const Des = styled.div`
  width:100%;
  font-size:20px;
  color:grey;
  font-family: 'Nanum Gothic', sans-serif;
  margin-top:30px;
`

const Div = styled.div`
  box-sizing:border-box;
  background-color:orange;
  position: -webkit-sticky;
  position: sticky;
  top:0;
  border: solid 0.1px orange ;
  text-align:center;
  font-weight:bold;
  font-size:50px;
  font-family: 'Nanum Gothic', sans-serif;
  color:#ffffff;
  /* @media(max-width:520px){
    font-size:40px;
  } */
`

const Title = styled.div`
  font-family: 'Nanum Gothic', sans-serif;
  color:#ffffff;
  font-size:100px;
  @media(max-width:520px){
    font-size:40px;
  }

`

const Button = styled.button`
  display:block;
  width:50px;
  height:40px;
  border-radius:10px;
  margin-top:10px;
`


const Footer = styled.div`
  width:100%;
  height:100px;
  bottom:0px;
  border: solid 1px #cbcbcb;
  font-family: 'Nanum Gothic', sans-serif;
  background-color:#cbcbcb;
  font-size:25px;
  padding-top:50px;

  @media(max-width:520px){
    font-size:16px;
  }
`

const App = () => {
  const { transcript,listening,resetTranscript,browserSupportsSpeechRecognition
  } = useSpeechRecognition();


  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
      <Div>
        <Title>
          voice GPT
        </Title>
        <Main>
          <Wrap>
            <Des>
              사용시 숙지 사항<br/>
              AI를 쉽고 간편하게 이용해보세요<br/><br/>
              <li>
                버튼을 눌러 음성 인식을 켜고 끌수 있습니다.
              </li>
              <li>
                검색은 단어로 짧고 명확하게 발음해주세요.
              </li> 
            </Des>
            <div style={{ paddingTop:'100px'}}>
              {listening ? 'on' : 'off'}
            </div>
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
            <p style={{ fontSize:"20px" }}>
              {transcript}
            </p>
          </Wrap>
        </Main>
    
        <Footer>
          안녕하세요 저는 어플을 만든 개발자 이승준입니다! <br/>
          저에 대해 궁금하시다면 여기를 클릭해주세요!
        </Footer>
      </Div>
    </>

  );
}

export default App;
