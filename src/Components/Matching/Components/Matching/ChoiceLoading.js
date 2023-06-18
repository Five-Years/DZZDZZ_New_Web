import React from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
var Spinner = require("react-spinkit");

function ChoiceLoading() {
  const {state} = useLocation();
  const [loading, setLoading] = useState(true);
  setInterval(() => {
    setLoading(false);
  }, 5000);
  const navigate = useNavigate();
  

  return (
    <MatchingContainer>
      {loading ? (
        <SpinnerContainer>
          <Spinners name="line-spin-fade-loader" />
        </SpinnerContainer>
      ) : (
        <></>
      )}
      <CardContainer>
        <CardContents theme = {state.theme}>
        {state.theme === 1 ? <img
                src={require("../../../assets/dzzdzz_logo.png")}
                alt="이미지"
              />       : <img
              src={require("../../../assets/dzzdzz_logo2.png")}
              alt="이미지"
            />       }  
                    <text>
              드디어<br></br>
              <span>매칭결과</span>가<br />
              나왔어요!
            </text>
        </CardContents>
      </CardContainer>
      <MatchingConfirmContainer theme = {state.theme}>
        {loading ? (
          <text>
            두근두근!<br/>
            결과를 가져오고 있어요.
          </text>
        ) : (
          <ConfirmButton onClick={()=>{navigate("/ChoiceResult")}} theme = {state.theme}>
            <text>확인하기</text>
          </ConfirmButton>
        )}
      </MatchingConfirmContainer>
    </MatchingContainer>
  );
}

export default ChoiceLoading;

const MatchingContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  //padding: 20px;
  //gap: 10px;
  position: absolute;
  width: 100px;
  height: 100px;
  top: 54.62%;

  border-radius: 5px;
`;

const CardContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 38px;
  top: 19.71%;
  width: 66.66%;
  height: 26%;
`;

const CardContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 30px;
  width: 46.9%;
  height: 100%;

  > text {
    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 34px;
    text-align: center;

    /* dzz_black */
    color: #333333;
  }

  > text > span {
    
    color: ${props=> props.theme === 1 ? "#0094FF" : "#FF477E" };  
  }

  > img {
    width: 50px;
    height: 50px;
  }
`;

const MatchingConfirmContainer = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 7.14%;
  min-height: 50px;
  top: 72.57%;
  /* or 156% */
  text-align: center;
  /* dzz_pink */

  > text {
    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    /* or 156% */
    text-align: center;
    /* dzz_pink */
    color: ${props=> props.theme === 1 ? "#0094FF" : "#FF477E" };  
  }
`;

const MatchingConfirm = styled.div``;

const ConfirmButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 10px;
  left: 16.67%;
  width: 66.66%;
  height: 100%;
  /* dzz_pink */
  background: ${props=> props.theme === 1 ? "#0094FF" : "#FF477E" };  
  border-radius: 13px;

  > text {
    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    /* identical to box height, or 24px */

    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: #ffffff;
  }
`;

export const Spinners = styled(Spinner)`
  display: "flex";
  left: 35px;
  top: 30px;
  color: lightgray;
  width: 80px;
  height: 80px;
`;
