import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Appstore } from "../../../assets/appstore.svg";
import { ReactComponent as Androidstore } from "../../../assets/androidstore.svg";
import axios from "axios";
import { useDispatch } from "react-redux";
import StateSlice from "features/State/StateSlice";
import { useSelector } from "react-redux";

function CountTimer() {
  const dispatch = useDispatch();
  const [Day, setDay] = useState("00");
  const [Hour, setHour] = useState("00");
  const [Minute, setMinute] = useState("00");
  const [Second, setSecond] = useState("00");
  const min = 1000 * 60; //1000ms => 1s , 1s*60 = 1m
  const seasonlist = ["매칭 접수", "매칭 진행", "준비중"];

  const StartTimer = () => {
    setInterval(() => {
      const now = new Date();
      const dis = SeasonTimer - now.getTime(); // 잔여시간(ms단위)
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
  };

  // @ 현재 시즌 상태를 가져오는 매소드, 날짜 객체를 이용
  const getSeason = async () => {
    // @ 시즌 정보 통신을 위한 날짜 객체
    const today = new Date();
    const todaytime = {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      date: today.getDate(),
      hours: today.getHours(),
      minutes: today.getMinutes(),
      seconds: today.getSeconds(),
    };

    try {
      const Response = await axios.get(
        `${
          process.env.NODE_ENV === "development"
            ? ""
            : "https://dev.fiveyears.click"
        }/matching/calendar?today=${`${todaytime.year}-${String(
          todaytime.month
        ).padStart(2, "0")}-${String(todaytime.date).padStart(2, "0")}`}`,

        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      dispatch(
        StateSlice.actions.seasonTimer(new Date(Response.data.data.endsAt))
      );

      if (Response.data.data.status === "Register") {
        dispatch(StateSlice.actions.SeasonStep(0));
      } else if (Response.data.data.status === "Matching") {
        {
          dispatch(StateSlice.actions.SeasonStep(1));
        }
      } else if (Response.data.data.status === "None") {
        {
          dispatch(StateSlice.actions.SeasonStep(2));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const SeasonTimer = useSelector((state) => {
    return state.Popup.seasonTimer;
  });
  const season = useSelector((state) => {
    return state.Popup.seasonstep;
  });
  const SeasonStep = useSelector((state) => {
    return state.Popup.seasonStep;
  });
  useEffect(() => {
    if (SeasonTimer === null) {
      getSeason();
    }
  }, [SeasonTimer]);

  useEffect(() => {
    if (SeasonTimer !== null) StartTimer();
  }, [SeasonTimer]);

  return (
    <CountTimerContainer>
      <TitleContainer>
        <Title>
          <span>지금상태는 {seasonlist[SeasonStep]} </span>
          {SeasonStep === 2 ? <></> : <span className="text"> 종료까지</span>}
        </Title>
        <Timer>
          {Day >= 1 ? (
            <>
              <text>
                [<span>{Day}</span>:<span>{Hour}</span>:<span>{Minute}</span>]
              </text>
            </>
          ) : (
            <>
              <text>
                [<span>{Hour}</span>:<span>{Minute}</span>:<span>{Second}</span>
                ]
              </text>
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
                  window.open(
                    "https://apps.apple.com/us/app/단짠단짠/id6447145462"
                  );
                }}
              />
            </div>
            <div>
              <Androidstore
                width="100%"
                height="auto"
                onClick={() => {
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.fiveyears.dzzdzz"
                  );
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
  gap: 15px;
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
  align-items: end;
  width: 550px;
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
    margin-left: 10px;
    height: 23px;
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 600;
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
  margin-top: 10px;

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
  position: relative;
  width: 700px;
  height: 90px;
  align-items: center;
  justify-content: center;

  > text {
    display: flex;
    width: 80%;
    height: 90px;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 80px;
    color: #ff477e;
    /* text-align: center; */

    > span {
      width: 25%;
      text-align: center;
      overflow: hidden;
      color: black;
      /* letter-spacing: 2rem; */
    }
  }

  /* > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 800;
    font-size: 80px;
    color: #ff477e;
    letter-spacing: 0.05em;

    > span {
      width: 20%;
      color: black;
    }
  } */

  @media screen and (max-width: 800px) {
    display: flex;
    width: 100%;
    height: 75px;

    > text {
      font-size: 50px;
      line-height: 70px;
      text-align: center;
      border-radius: 10px;
      font-size: 50px;
      line-height: 70px;

      > span {
        color: black;
      }
    }
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
