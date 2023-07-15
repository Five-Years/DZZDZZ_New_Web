import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Appstore } from "../../../assets/appstore.svg";
import { ReactComponent as Androidstore } from "../../../assets/androidstore.svg";
function CountTimer() {
  const [Day, setDay] = useState("00");
  const [Hour, setHour] = useState("00");
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
  return (
    <CountTimerContainer>
      <TitleContainer>
        <Title>
          <span>매칭진행중 </span>
          <span className="text"> 마감까지</span>
        </Title>
        <Timer>
          {Day >= 1 ? (
            <>
              [<span>{Day}</span>:<span>{Hour}</span>:<span>{Minute}</span>]
            </>
          ) : (
            <>
              [<span>{Hour}</span>: <span>{Minute}</span>:<span>{Second}</span>]
            </>
          )}
        </Timer>
      </TitleContainer>
      <Description>
        <DownButton>
          <span>다운로드</span>
        </DownButton>
        <Sns>
          <span>단짠단짠 앱 다운로드</span>
          <div>
            <div>
              <Appstore
                width="100%"
                height="auto"
                onClick={() => {
                  alert("배포 준비중입니다!");
                }}
              />
            </div>
            <div>
              <Androidstore
                width="100%"
                height="auto"
                onClick={() => {
                  alert("배포 준비중입니다!");
                }}
              />
            </div>
          </div>
        </Sns>
      </Description>
      <MobileSns>
        <SnsContainer>
          <img
            onClick={() => {
              window.open("https://www.instagram.com/dzzdzz_official/");
            }}
            src={require("../../../assets/insta.png")}
            alt="이미지"
          />
          <img
            onClick={() => {
              window.open("http://pf.kakao.com/_Wgxgxmb");
            }}
            src={require("../../../assets/kakao.png")}
            alt="이미지"
          />
        </SnsContainer>
      </MobileSns>
    </CountTimerContainer>
  );
}

export default CountTimer;

const CountTimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 800px) {
    height: 50%;
    position: relative;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 47.67%;
  height: 19.71%;
  min-width: 572px;
  min-height: 135px;

  @media screen and (max-width: 800px) {
    min-width: 0px;
    min-height: 0px;
    width: 100%;
    height: 15%;
    position: relative;
  }
`;

const MobileSns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;

  width: 98.33%;
  height: 12.55%;
  margin-top: 20px;

  @media screen and (max-width: 800px) {
    display: flex;
    position: relative;
    width: 100%;
    height: 10%;
    margin-top: 0px;
    align-items: center;
    justify-content: center;
  }
`;

const SnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;

  > img {
    width: 34px;
    height: 34px;
    cursor: pointer;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60%;
  height: 26.67%;

  > span {
    height: 36px;
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    display: flex;
    align-items: flex-end;
    color: #ff477e;
  }

  > span.text {
    height: 23px;
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 150%;
    letter-spacing: 0.5px;
    color: #231815;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    width: 330px;
    height: 29px;

    > span {
      height: 29px;
      font-size: 24px;
      line-height: 29px;
      /* identical to box height */

      display: flex;
      align-items: flex-end;
    }

    > span.text {
      height: 23px;
      font-family: var(--font-Pretendard);
      font-style: normal;
      font-weight: bold;
      font-size: 15px;
      line-height: 150%;
    }
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25.25%;
  height: 10.22%;
  min-width: 303px;
  min-height: 70px;
  border-radius: 10px;

  @media screen and (max-width: 800px) {
    min-width: 0px;
    min-height: 0px;
    width: 100%;
    height: 40%;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: r;
  }
`;

const Timer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 79%;
  height: 67.41%;

  font-family: var(--font-Pretendard);
  font-style: normal;
  font-weight: 800;
  font-size: 80px;
  line-height: 80px;
  color: #ff477e;
  text-align: start;
  letter-spacing: 0.05em;

  > span {
    color: black;
  }

  @media screen and (max-width: 800px) {
    width: 330px;
    height: 75px;
    font-size: 50px;
    line-height: 70px;
    text-align: center;
    border-radius: 10px;
    font-size: 50px;
    line-height: 70px;
  }
`;

const Sns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: start;
  width: 100%;
  height: 100%;
  margin-top: 20px;

  > span {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    font-weight: bold;
  }

  > div {
    display: flex;
    width: 100%;
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    gap: 10px;
  }
  > div > div {
    width: 45%;
    cursor: pointer;
  }
  > img {
    :active {
      opacity: 0.5;
    }
  }

  @media screen and (max-width: 800px) {
    display: none;
    /* display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 147.92px;
    height: 40px;
    gap: 40px;

    > img {
      :active {
        opacity: 0.5;
      }
      width: 40px;
      height: 40px;
    }*/
  }
`;

const DownButton = styled.div`
  visibility: hidden;

  @media screen and (max-width: 800px) {
    visibility: visible;
    display: flex;
    width: 64.1%;
    height: 33%;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: var(--dzz-pink, #ff477e);

    > span {
      width: 70px;
      height: 26px;
      font-family: var(--font-Pretendard);
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      line-height: 150%;
      letter-spacing: 0.05em;
      text-transform: capitalize;
      color: #ffffff;
    }
  }
`;