import React from 'react';
import { useState, useEffect } from 'react';
import styled from "styled-components";

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import useTextToSpeech from 'react-hook-text-to-speech'




const Main = styled.div`
  width:100%;
  height:600px;
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
  color:#343a40;
`

const Div = styled.div`
  box-sizing:border-box;
  background-color:#ff9f1c;
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
  margin-top:50px;
  @media(max-width:520px){
    font-size:40px;
  }

`

const Button = styled.button`
  width:120px;
  height:80px;
  border-radius:10px;
  margin:30px 10px 10px 10px;
  font-weight:bold;
  font-size:16px;
  font-family: 'Nanum Gothic', sans-serif;
  cursor:pointer;
  border:none;
  background-color:#A99;
  color:white;
`

const Footer = styled.div`
  display:flex;
  width:100%;
  height:100%;
  bottom:0px;
  font-family: 'Nanum Gothic', sans-serif;
  background-color:#cbcbcb;
  font-size:22px;
  padding-top:50px;
  padding-bottom:50px;
  @media(max-width:520px){
    font-size:16px;
  }
`


const Text = styled.p`
  fontSize:"20px";
  margin:20px;
`

const App = () => {
  // speech-recognition 
  const { transcript,listening,resetTranscript,browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  // text-to-speech
  const [text, setText] = useState('');
  const convert=useTextToSpeech();

  // speech-recognition
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }


  return (
    <>
      <Div>
        <Title>
          음성인식 GPT
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
                검색은 되도록 짧고 명확하게 발음해주세요.
              </li>
              <li>
                마이크를 켜고 2초 후 원하는 검색어를 말하세요.
              </li>
              <li>
                검색어를 말하면 버튼아래 텍스트로 보여요.
              </li>
            </Des>
            <div style={{ paddingTop:'100px'}}>
              마이크 : {listening ? 'on' : 'off'}
            </div>
            <Button 
              onClick={SpeechRecognition.startListening}>
              마이크 켜기
            </Button>
            <Button onClick={SpeechRecognition.stopListening}>
              마이크 끄기 
            </Button>
            <Button onClick={resetTranscript}>
              초기화
            </Button>
            <Text>
              {transcript}
            </Text>
              <input 
              onChange={(e)=>setText(e.target.value)}
              />
              <button 
                onClick={()=>convert(text)}
              >
                click
              </button>

          </Wrap>
        </Main>
    
        <Footer>

        </Footer>
      </Div>
    </>

  );
}

export default App;
