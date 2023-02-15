import React from 'react';
import { useState, useEffect } from 'react';
import styled from "styled-components";


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

const About = () => {
  return (
    <>    
      <Footer>
        <p>
          안녕하세요 개발자 이승준입니다<br/>
          chatGPT를 이용하기 힘든 취약 계층들을 위해 만들었습니다.<br/>
          많은 분들에게 도움이 되면 좋겠습니다.
        </p>
        <div>
          이런분들에게 좋아요!
          <div style={{ margin:"10px" }}>
            <li>
              컴퓨터를 다루는데 어려움이 있는 어르신
            </li>
            <li>
              세상에 궁금한게 많은 유아,어린이,청소년
            </li>
            <li>
              키보드를 이용하는데 어려움이 있는 분들
            </li>
          </div>
        </div>
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
    </>

  );
}

export default About;
