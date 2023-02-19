import React from 'react';
import { useState, useEffect } from 'react';
import styled from "styled-components";

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useTextToSpeech from 'react-hook-text-to-speech';

import ic_mic_on from './img/ic_mic_on_180.png';
import ic_mic_off from './img/ic_mic_off_180.png';
import ic_trash from './img/ic_trash_180.png';

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
  width:100px;
  border-radius:30px;
  @media(max-width:520px){
    width:60px;
    border-radius:18px;
  }
`

const Button = styled.button`
  border-radius:30px;
  padding:0 0 0 0;
  margin:30px 10px 0px 10px;
  cursor:pointer;
  border:none;
  color:white;
  @media(max-width:520px){
    width:60px;
    border-radius:18px;
  }
`

const P = styled.p`
  font-size:16px;
`

const Input = styled.input`
  margin-top:30px;
  width:500px;
  height:100px;
  @media(max-width:520px){
    width:250px;
  }
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
  padding-bottom:200px;
  margin-top:100px;
  @media(max-width:520px){
    font-size:16px;
  } 
`

const Text = styled.p`
  fontSize:"20px";
  margin:20px;
`

const App = () => {
  const [mic, setMic] = useState(false);

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

  const intervalMicOn = () => {
    
  }

  return (
    <>
      <Div>
        <Title>
            무물보
        </Title>
        <Main>
          <Wrap>
            <Des>
              AI를 쉽고 편하게 이용해보세요<br/><br/>
              사용법<br/>
              1. 버튼을 눌러 마이크를 켭니다.<br/>
              2. 궁금한점을 물어봅니다.<br/>
              3. 답을 듣습니다<br/>
            </Des>

            <div style={{ marginTop:'40px'}}>
              마이크 : {listening ? '켜짐' : '꺼짐'}
            </div>
            {!listening?
              <Button onClick={SpeechRecognition.startListening}>
                <Img src={ic_mic_on}></Img>
              </Button>:
            <Button onClick={SpeechRecognition.stopListening}>
              <Img src={ic_mic_off}></Img>
            </Button>}
            <Button onClick={resetTranscript}>
              <Img src={ic_trash}></Img>
            </Button>
            <Text>
              {transcript}
            </Text>
              <Input onChange={(e)=>setText(e.target.value)} defaultValue={""}/>
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
