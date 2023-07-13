import React, { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/dzzdzzNew.svg";
import { Navigate, useNavigate } from "react-router-dom";
function PCHome() {
  const [Day, setDay] = useState("00");
  const [Hour, setHour] = useState("01");
  const [Minute, setMinute] = useState("00");
  const [Second, setSecond] = useState("00");

  useEffect(() => {
    setInterval(() => {
      const Dday = new Date("2023-07-30T00:00:00+0900");
      const now = new Date();
      const dis = Dday.getTime() - now.getTime(); // 잔여시간(ms단위)
      const min = 1000 * 60; //1000ms => 1s , 1s*60 = 1m
      setDay(String(Math.floor(dis / (min * 60 * 24))).padStart(2, "0"));
      setHour(
        String(Math.floor((dis % (min * 60 * 24)) / (min * 60))).padStart(
          2,
          "0"
        )
      );
      setMinute(String(Math.floor((dis % (min * 60)) / min)).padStart(2, "0"));
      setSecond(String(Math.floor((dis % min) / 1000)).padStart(2, "0"));
    }, 1000);
  }, [Hour, Minute, Second]);

  const navigate = useNavigate();
  return (
    <BackgroundContainer>
      <ContentContainer>
        <Logo />
        <Timer>
          {Day >= 1 ? (
            <>
              [<span>{Day}</span>:<span>{Hour}</span>:<span>{Minute}</span>]
            </>
          ) : (
            <>
              [<span>{Hour}</span>:<span>{Minute}</span>:<span>{Second}</span>]
            </>
          )}
        </Timer>
        <ButtonContainer
          onClick={() => {
            navigate("/pc");
          }}
        >
          <text>홈페이지로 이동</text>
        </ButtonContainer>
      </ContentContainer>
    </BackgroundContainer>
  );
}

// 안드로이드는 open-sans Ios는 sf pro

export default PCHome;

const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #231815;

  @media screen and (max-width: 800px) {
    width: 100vw;
    height: 100vh;
    background: #231815;
    align-items: center;
    justify-content: center;
  }
`;

const Timer = styled.div`
  position: relative;
  width: 77.27%;
  height: 80px;
  font-family: "PFStardust";
  font-style: normal;
  font-weight: 500;
  font-size: 80px;
  line-height: 80px;
  color: #ff477e;
  align-items: center;
  justify-content: center;
  text-align: center;

  > span {
    color: white;
  }

  @media screen and (max-width: 800px) {
    position: relative;
    width: 70vw;
    height: 75px;
    font-size: 50px;
    line-height: 70px;
    text-align: center;
    border-radius: 10px;
    font-size: 50px;
    line-height: 70px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 48px;

  position: absolute;
  width: 528px;
  height: 372px;
  left: calc(50% - 528px / 2);
  top: calc(50% - 372px / 2 - 112px);

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 48px;

    position: absolute;
    top: 15%;
    left: 20%;
    right: 31.67%;
    width: 60%;
    height: 40%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 147px;
  height: 43px;

  background: #f2f3f6;
  border-radius: 8px;
  :hover {
    opacity: 50%;
    cursor: pointer;
  }

  > text {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: #000000;
  }
`;
