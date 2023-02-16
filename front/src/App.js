import React from 'react';
import { useState, useEffect } from 'react';
import styled from "styled-components";

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useTextToSpeech from 'react-hook-text-to-speech'

import git from './img/github-mark.svg'


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
  position: -webkit-sticky;
  position: sticky;
  top:0;
  border: solid 0.1px orange ;
  text-align:center;
  font-weight:bold;
  font-size:50px;
  font-family: 'Nanum Gothic', sans-serif;
  color:#343a40;
  @media(max-width:520px){
    font-size:40px;
  }
`

const Title = styled.div`
  font-family: 'Nanum Gothic', sans-serif;
  color:#343a40;
  font-size:100px;
  margin-top:20px;
  @media(max-width:520px){
    font-size:40px;
  }
`

const Img = styled.img`
  object-fit:cover;
  width:150px;
  border-radius:30px;
  margin-top:30px;
  @media(max-width:520px){
    width:80px;
  }
`

const Button = styled.button`
  width:120px;
  height:80px;
  border-radius:10px;
  margin:30px 10px 0px 10px;
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
  margin-top:100px;
  @media(max-width:520px){
    font-size:16px;
  } 
`

const Text = styled.p`
  fontSize:"20px";
  margin:20px;
`

const Input = styled.input`
  width:500px;
  height:300px;
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
        <Img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/640px-ChatGPT_logo.svg.png" />
        <Title>
            만물박사
        </Title>
        <Main>
          <Wrap>
            <Des>
              AI를 쉽고 편하게 이용해보세요<br/><br/>
              사용법<br/>
              1. 버튼을 눌러 마이크를 켭니다.<br/>
              2. 궁금한점을 대화하듯 물어봅니다.<br/>
              3. 척척박사의 답을 듣습니다<br/>
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
              <Input onChange={(e)=>setText(e.target.value)}/>
              <button onClick={()=>convert(text)}>
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
