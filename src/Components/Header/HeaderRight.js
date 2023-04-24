import React, { useEffect, useState } from "react";
import styled from "styled-components";

function HeaderRight() {
  //  const [Day,setDay] = useState("00");
  const [Hour, setHour] = useState("00");
  const [Minute, setMinute] = useState("00");
  const [Second, setSecond] = useState("00");

  useEffect(() => {
    setInterval(() => {
      const Dday = new Date("2023-03-01T00:00:00+0900");
      const now = new Date();

      const dis = Dday.getTime() - now.getTime(); // 잔여시간(ms단위)
      const min = 1000 * 60; //1000ms => 1s , 1s*60 = 1m
      // setDay(String(Math.floor(dis/(min*60*24))).padStart(2,'0'))
      setHour(
        String(Math.floor((dis % (min * 60 * 24)) / (min * 60))).padStart(
          2,
          "0"
        )
      );
      setMinute(String(Math.floor((dis % (min * 60)) / min)).padStart(2, "0"));
      setSecond(String(Math.floor((dis % min) / 1000)).padStart(2, 0));
    }, 1000);
  }, [Minute, Second]);

  return (
    <ContentContainer>
      <img src={require("../../assets/dz.jpg")} alt="" />
      <Title>
        <span>SEASON 2</span>
        <span className="text">마감까지</span>
      </Title>
      <Description>
        <Timer>
          [<span>{Hour}</span>:<span>{Minute}</span>:<span>{Second}</span>]
        </Timer>
        {/* 타이머 구현필요 */}
        <DownButton>
          <span>다운로드</span>
        </DownButton>
        <Sns>
          <img
            src={require("../../assets/insta.png")}
            alt=""
            onClick={() => {
              window.open("http://www.naver.com");
            }}
          />
          <img
            src={require("../../assets/kakao.png")}
            alt=""
            onClick={() => {
              window.open("http://www.naver.com");
            }}
          />
        </Sns>
      </Description>
    </ContentContainer>
  );
}

export default HeaderRight;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  gap: 8px;
  width: 468px;
  height: 238px;

  > img {
    visibility: hidden;
  }

  @media screen and (max-width: 800px) {
    gap: 25px;

    > img {
      width: 120px;
      height: 63.04px;
      visibility: visible;
    }
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 408px;
  height: 36px;

  > span {
    width: 150px;
    height: 36px;
    font-family: "SF Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    display: flex;
    align-items: flex-end;
    color: #ff477e;
  }

  > span.text {
    width: 70px;
    height: 23px;
    font-family: "SF Pro";
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
      width: 125px;
      height: 29px;
      font-size: 24px;
      line-height: 29px;
      /* identical to box height */

      display: flex;
      align-items: flex-end;
    }

    > span.text {
      width: 65px;
      height: 23px;
      font-family: "SF Pro";
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
  align-items: flex-start;
  width: 408px;
  height: 194px;
  border-radius: 10px;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 150px;
    align-items: center;
  }
`;

const Timer = styled.div`
  width: 408px;
  height: 80px;
  font-family: "PFStardust";
  font-style: normal;
  font-weight: 500;
  font-size: 80px;
  line-height: 80px;
  color: #ff477e;

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
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 22px 0px;
  gap: 30px;
  width: 408px;
  height: 94px;

  > img {
    :active {
      opacity: 0.5;
    }

    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 800px) {
    display: flex;
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
    }
  }
`;

const DownButton = styled.div`
  visibility: hidden;

  @media screen and (max-width: 800px) {
    visibility: visible;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    gap: 10px;
    width: 330px;
    height: 48px;
    background: #ff477e;
    border-width: 1px 2px 2px 1px;
    border-style: solid;
    border-color: #49516f;
    border-radius: 6px;

    > span {
      width: 70px;
      height: 26px;
      font-family: "PFStardust";
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
