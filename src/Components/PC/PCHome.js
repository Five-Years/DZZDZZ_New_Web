import React, { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/dzzdzzNew.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StateSlice from "features/State/StateSlice";
// import axios from "axios";
import { AxiosInstanse } from "../../utils/AxiosInstance";

// 홈페이지가 로드되면 시즌 정보를 가져온다
// 시즌정보에는 현재의 시즌단계와 현재시즌의 마감정보가 담겨있다
// 현재 마감정보는 안나오니 일단 오늘날짜의 23:59분을 마감일로 담자
// 만약 리덕스에 현재 시즌정보가 있다면 안가져와도 되고
// 만약 리덕스에 현재 시즌정보가 없다면 시즌정보 가져오기 매소드를 이용해 시즌정보를 가져오자
// 가져온 시즌정보를 이용해 타이머의 내용을 구현해주자
// 타이머에는 현재 시즌단계와 남은시간을 useInterval메소드로 구현을 한다.

function PCHome() {
  const dispatch = useDispatch();
  const [Day, setDay] = useState("00");
  const [Hour, setHour] = useState("00");
  const [Minute, setMinute] = useState("00");
  const [Second, setSecond] = useState("00");
  const min = 1000 * 60; //1000ms => 1s , 1s*60 = 1m

  //@ 매칭타이머, 하단 팝업창 시간 표시용
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
    }, 1000);
  };

  const getSeason = async () => {
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
      const Response = await AxiosInstanse.get(
        `/matching/calendar?today=${`${todaytime.year}-${String(
          todaytime.month
        ).padStart(2, "0")}-${String(todaytime.date).padStart(2, "0")}`}`,

        {
          headers: {
            "content-type": "application/json",
          },
        }
      );

      dispatch(
        StateSlice.actions.seasonTimer(
          new Date(Response.data.data.endsAt).getTime()
        )
      );

      if (isProd) {
        //운영 바꾸면안됨!!
        if (Response.data.data.status === "Register") {
          //@ 접수기간
          dispatch(StateSlice.actions.SeasonStep(0));
        } else if (Response.data.data.status === "Matching") {
          {
            //@ 매칭기간
            dispatch(StateSlice.actions.SeasonStep(1));
          }
        } else if (Response.data.data.status === "None") {
          {
            //@ 휴식기간
            dispatch(StateSlice.actions.SeasonStep(2));
          }
        }
      } else {
        //개발일때
        if (Response.data.data.status === "Register") {
          //@ 접수기간
          dispatch(StateSlice.actions.SeasonStep(0));
        } else if (Response.data.data.status === "Matching") {
          {
            //@ 매칭기간
            dispatch(StateSlice.actions.SeasonStep(1));
          }
        } else if (Response.data.data.status === "None") {
          {
            //@ 휴식기간
            dispatch(StateSlice.actions.SeasonStep(2));
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isProd = useSelector((state) => {
    return state.Popup.isProd;
  });

  const SeasonTimer = useSelector((state) => {
    return state.Popup.seasonTimer;
  });

  useEffect(() => {
    if (SeasonTimer !== null) StartTimer();
  }, [SeasonTimer]);

  useEffect(() => {
    getSeason();
  }, []);

  const navigate = useNavigate();
  return (
    <BackgroundContainer>
      <ContentContainer>
        <Logo />
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
          {/* <text>
            [<span>??</span>:<span>??</span>:<span>??</span>]
          </text> */}
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
  display: flex;
  align-items: center;
  justify-content: center;

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
  display: flex;
  position: relative;
  width: 100%;
  height: 90px;
  align-items: center;
  justify-content: center;
  bottom: 35px;

  > text {
    display: flex;
    width: 80%;
    height: 90px;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 80px;
    color: #ff477e;
    /* text-align: center; */

    > span {
      width: 25%;
      text-align: center;
      overflow: hidden;
      color: white;
    }
  }

  @media screen and (max-width: 800px) {
    display: flex;
    position: relative;
    width: 100%;
    height: 90px;

    > text {
      font-family: var(--font-Pretendard);
      font-style: normal;
      font-weight: 400;
      font-size: 60px;
      line-height: 80px;
      color: #ff477e;
      /* text-align: center; */
    }

    align-items: center;
    justify-content: center;

    > span {
      width: 15%;
      text-align: center;
      overflow: hidden;
      color: white;
    }
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
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    top: 0%;
    left: 0%;
    right: 31.67%;
    width: 100%;
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
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: #000000;
  }
`;
