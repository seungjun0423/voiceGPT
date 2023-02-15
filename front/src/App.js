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
  width:100%;
  height:100%;
  bottom:0px;
  border: solid 1px #cbcbcb;
  font-family: 'Nanum Gothic', sans-serif;
  background-color:#cbcbcb;
  font-size:25px;
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
const URL = styled.a`
  color:#cdb4db;
  text-decoration:none;
`
const Mail =styled.a`
  margin-top:5px;
  display:block;
  text-decoration:none;
  color:#ffafcc;
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

          안녕하세요 저는 어플을 만든 개발자 이승준입니다 <br/>
          이 서비스는 chatGPT를 이용하기 힘든 취약 계층들을 위해 만들었습니다.<br/><br/><br/>
          이런분들에게 좋아요!
          <li>
            컴퓨터를 다루는데 어려움이 있는 어르신
          </li>
          <li>
            세상에 궁금한게 많은 유아,어린이,청소년
          </li>
          <li>
            키보드를 이용하는데 어려움이 있는 분들
          </li>
          <br/><br/>
          꾸준히 업데이트를 하고 애플워치, 갤럭시워치 버전도 만들 예정입니다 <br/>
          저와 연락하고 싶으신분들은 아래를 참고해주세요! <br/>
          <URL 
            href='https://github.com/seungjun0423'
            title="개발자 승준의 깃허브로 이동"
            target='_blank'
          >
            GitHub
          </URL>
          <Mail href="mailto:'tmdwns0423@nate.com'">
            Mail
          </Mail>
        </Footer>
      </Div>
    </>

  );
}

export default App;
