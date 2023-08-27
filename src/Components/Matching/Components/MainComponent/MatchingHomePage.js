import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MatchingProgressHeader from "../HeaderComponent/MatchingProgressHeader";
import { ReactComponent as ToggleRight } from "../../../../assets/toggle-right.svg";
import MatchingHeaderNew from "../HeaderComponent/MatchingHeaderNew";
import StateSlice from "features/State/StateSlice";
import MyTicket from "Components/Matching/Components/ReusableComponents/MyTicket";
import { AxiosInstanse, setHeader } from "../../../../utils/AxiosInstance";
import Lottie from "lottie-react";
import newLogo from "assets/newLogo.json";

// 자원로딩 뷰 추가

function MatchingHomePage(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  //@ 커플매칭, 친구매칭 신청여부, true => 신청가능(미신청), false => 신청불가능(신청))
  //사용자의 at,rt정보를 userToken에 저장한다, 테스트용 코드
  // useEffect(() => {
  //   dispatch(
  //     StateSlice.actions.userToken({
  //       accessToken: ""
  //       refreshToken: ""
  //     })
  //   );
  // }, []);
  const [Day, setDay] = useState("00");
  const [Hour, setHour] = useState("00");
  const [Minute, setMinute] = useState("00");
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

  // @ 사용자 정보를 가져와 userInfo에 넣은후 리덕스에 저장. (엑세스,리프래시토큰은 웹뷰통신으로 리덕스에 저장)
  const getData = async (at, rt) => {
    try {
      const Response = await AxiosInstanse.get(`/login/token`, {
        headers: {
          Authorization: at,
          "x-refresh-token": rt,
          fcmToken: "123",
          "content-type": "application/json",
        },
      });

      dispatch(StateSlice.actions.userInfo(Response.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  //사용자 정보를 가져온다

  const getAsset = async (at, rt) => {
    try {
      const Response = await AxiosInstanse.get(`/item/remain`, {
        headers: {
          Authorization: at,
          "x-refresh-token": rt,
          fcmToken: "123",
          "content-type": "application/json",
        },
      });

      dispatch(StateSlice.actions.userAsset(Response.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  // @ 현재 시즌 상태를 가져오고 리듀서에 저장한다
  // (현재 시즌상태, 마감일에 대한 정보)
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
      //isProd
      if (isProd) {
        //운영 바꾸면안됨!!
        if (Response.data.data.status === "Register") {
          //@ 접수기간
          dispatch(StateSlice.actions.SeasonStep(0));
        } else if (Response.data.data.status === "Matching") {
          //@ 매칭기간
          dispatch(StateSlice.actions.SeasonStep(1));
        } else if (Response.data.data.status === "None") {
          //@ 휴식기간
          dispatch(StateSlice.actions.SeasonStep(2));
        }
      } else {
        //개발일때
        if (Response.data.data.status === "Register") {
          //@ 접수기간
          dispatch(StateSlice.actions.SeasonStep(1));
        } else if (Response.data.data.status === "Matching") {
          //@ 매칭기간
          dispatch(StateSlice.actions.SeasonStep(1));
        } else if (Response.data.data.status === "None") {
          //@ 휴식기간
          dispatch(StateSlice.actions.SeasonStep(1));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // @ 사용자의 매칭 정보를 가져온다
  // @ 친구매칭, 커플 매칭 신청 정보를 가져와 리듀서에 저장한다
  const getMatchStatus = async (at, rt) => {
    try {
      const Response = await AxiosInstanse.get(`/matching/participate/status`, {
        headers: {
          Authorization: at,
          "x-refresh-token": rt,
          fcmToken: "123",
          "content-type": "application/json",
        },
      });
      dispatch(StateSlice.actions.matchParticipate(Response.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  //@ 사용자의 매칭 결과 상태를 가져온다.
  // 접수단계에서 매칭 접수를 안한 상태라면 None, 매칭을 접수했다면 waiting, 진행단계에서 실패했다면 ??? 성공했다면 ??? 등으로 나올듯
  const getMatchResult = async (at, rt) => {
    try {
      const CoupleResponse = await AxiosInstanse.get(
        `/matching/user/result?matchingType=Couple`,
        {
          headers: {
            Authorization: at,
            "x-refresh-token": rt,
            fcmToken: "123",
            "content-type": "application/json",
          },
        }
      );

      dispatch(StateSlice.actions.CouplematchResult(CoupleResponse.data.data));
      // 커플 매칭 성사 조회
    } catch (error) {
      console.log(error);
    }

    try {
      const FriendResponse = await AxiosInstanse.get(
        `/matching/user/result?matchingType=Friend`,
        {
          headers: {
            Authorization: at,
            "x-refresh-token": rt,
            fcmToken: "123",
            "content-type": "application/json",
          },
        }
      );

      dispatch(StateSlice.actions.FriendmatchResult(FriendResponse.data.data));
      //친구매칭 성사 조회
    } catch (error) {
      console.log(error);
    }
  };

  //@ 개발/상용 여부
  const isProd = useSelector((state) => {
    return state.Popup.isProd;
  });

  //@ 사용자 정보가 담기는 리듀서
  const userInfo = useSelector((state) => {
    return state.Popup.userInfo;
  });

  //@ 사용자 이름
  const Name = useSelector((state) => {
    return state.Popup.name;
  });

  //매칭진행 결과 관련데이터, 친구매칭 결과 (접수안했다면 상태가 None, 접수했다면 waiting, 실패했다면, ??? 성공했다면 기타 등등)
  const FriendmatchResult = useSelector((state) => {
    return state.Popup.FriendmatchResult;
  });

  //매칭진행 결과 관련데이터, 커플매칭 결과  (접수안했다면 상태가 None, 접수했다면 waiting, 실패했다면, ??? 성공했다면 기타 등등)
  const CouplematchResult = useSelector((state) => {
    return state.Popup.CouplematchResult;
  });

  //@ 현재 시즌 회차 (삭제 예정)
  const Season = useSelector((state) => {
    return state.Popup.Season;
  });

  const userAt = useSelector((state) => {
    return state.Popup.userToken.accessToken;
  });

  const userRt = useSelector((state) => {
    return state.Popup.userToken.refreshToken;
  });

  const userAsset = useSelector((state) => {
    return state.Popup.userAsset;
  });

  //@ 현재 시즌 상태 (접수중, 매칭중, 접수완료)
  const SeasonStep = useSelector((state) => {
    return state.Popup.seasonStep;
  });

  const matchParticipate = useSelector((state) => {
    return state.Popup.matchParticipate;
  });

  //@ 현재 시즌상태가 언제 끝나는지에 대한 정보가 담긴 리듀서 (매칭접수, 매칭진행 등 언제까지 진행하는지)
  const SeasonTimer = useSelector((state) => {
    return state.Popup.seasonTimer;
  });

  const cantApplyPopup = () => {
    window.ReactNativeWebView?.postMessage(
      JSON.stringify({ type: "applicationEnd", data: "" })
    );
  };

  const seasonBreaking = () => {
    window.ReactNativeWebView?.postMessage(
      JSON.stringify({ type: "seasonEnd", data: "" })
    );
  };

  //@ 현재 시즌상태 없다면 시즌상태를 가져온다, 시즌상태가 있다면 매칭 결과를 가져온다
  //접수를 안한 상태라면 상태가 None이 나온다, 접수를 한 상태라면 waiting, 매칭결과는 기타 등등

  useEffect(() => {
    if (typeof isProd !== "undefined") {
      if (SeasonStep === -1 && userAt != null) {
        getSeason();
        getAsset(userAt, userRt);
        getData(userAt, userRt);
      } else if (SeasonStep !== -1 && userAt != null) {
        // 만약 현재 시즌진행중이라면 매칭 결과정보를 가져온다.
        getMatchStatus(userAt, userRt);
        getMatchResult(userAt, userRt);
      }
    }
  }, [SeasonStep, userAt, isProd]);

  // //@ 시즌타이머 정보를 서버로부터 받아 왔다면 타이머 실행.
  useEffect(() => {
    if (SeasonTimer !== null) StartTimer();
  }, [SeasonTimer]);

  // //@ 만약 사용자 정보가 있다면 닉네임, 티켓수 등 최신화. (아직 티켓수는 반영안됨.)
  useEffect(() => {
    if (userInfo) {
      dispatch(StateSlice.actions.Name(userInfo.nickname));
    }
  }, [userInfo]);

  //@웹뷰 통신을 하기위한 리스너 이벤트들

  // pc환경 테스트를 위한 강제 환경 설정

  const listener = (event) => {
    const { data, type } = JSON.parse(event);

    switch (type) {
      // @ 사용자 토큰을 받아 리덕스에 저장
      case "loginToken":
        if (Name === "anonymous") {
          dispatch(
            StateSlice.actions.userToken({
              accessToken: data.accessToken,
              refreshToken: data.refreshToken,
            })
          );
          setHeader(data.isProd ?? false);
          dispatch(StateSlice.actions.setIsProd(data.isProd ?? false));
        }
        break;

      //@초기화면으로 되돌리는 이벤트
      case "onBlur":
        navigate("/matching");
        break;

      //@ 상점페이지로 이동하는 이벤트
      case "store":
        navigate("/purchasing", { state: { title: "충전하기", direct: true } });
        break;

      //@ 뒤로가기 이벤트, 뒷페이지로 이동한다.
      case "back": {
        navigate(-1);
        break;
      }
      default:
        break;
    }
  };

  useEffect(() => {
    setHeader(false);
    dispatch(StateSlice.actions.setIsProd(false));
  }, []);

  // 만약 시즌이 진행중인데 매칭이 실패하였다면 웹뷰로 티켓을 돌려드린다는 팝업을 띄워줌 둘중 하나라도 실패했을때
  useEffect(() => {
    if (
      (SeasonStep === 1 &&
        FriendmatchResult.matchingResult === "RoundFail" &&
        FriendmatchResult.myChoice === null) ||
      (CouplematchResult.matchingResult === "RoundFail" &&
        CouplematchResult.myChoice === null)
    ) {
      window.ReactNativeWebView?.postMessage(
        JSON.stringify({
          type: "giveBack",
          data: new Date(SeasonTimer).toISOString(),
        })
      );
    }
  }, [FriendmatchResult, CouplematchResult]);

  const Description = (props) => {
    //@ 접수중 상태일때
    if (props === 0) {
      //@ 매칭 접수를 안한 상태인 경우
      if (
        matchParticipate.friendMatchingAvailable &&
        matchParticipate.coupleMatchingAvailable // 친구매칭, 이성매칭 둘다 신청가능한상태라면
      ) {
        return (
          <EventTextContainer>
            {" "}
            <EventText>
              <text>아직 신청하지 않으셨네요!</text>
            </EventText>
            <EventTextTime>
              <text>
                {Day}일 {Hour}시간 {Minute}분 뒤에 접수가 끝나요.
              </text>
            </EventTextTime>
          </EventTextContainer>
        );
      }
      //@ 매칭 접수를 한 경우
      else {
        return (
          <EventTextContainer>
            {" "}
            <EventText>
              <text>정상적으로 매칭 신청이 되었어요</text>
            </EventText>
            <EventTextTime>
              <text>
                {Day}일 {Hour}시간 {Minute}분 뒤에 매칭이 시작돼요.
              </text>
            </EventTextTime>
          </EventTextContainer>
        );
      }
    }
    //@ 매칭 시작!
    else if (props === 1) {
      if (
        CouplematchResult.matchingResult === "WaitRoundResult" ||
        CouplematchResult.matchingResult === "WaitChoice" ||
        CouplematchResult.matchingResult === "RoundSuccess" ||
        CouplematchResult.matchingResult === "NoneWithHistory" ||
        FriendmatchResult.matchingResult === "WaitRoundResult" ||
        FriendmatchResult.matchingResult === "WaitChoice" ||
        FriendmatchResult.matchingResult === "RoundSuccess" ||
        FriendmatchResult.matchingResult === "NoneWithHistory"
      ) {
        return (
          <EventTextContainer>
            {" "}
            <EventText>
              <text>매칭시작</text>
            </EventText>
            <EventTextTime>
              <text>
                {" "}
                {Day}일 {Hour}시간 {Minute}분 까지 매칭이 진행될 예정이에요
              </text>
            </EventTextTime>
          </EventTextContainer>
        );
      }

      // 접수를 한상태, 정상적으로 매칭이 진행중인경우 => 각 단계별 케이스 추가 필요
      else {
        return (
          <EventTextContainer>
            {" "}
            <EventText>
              <text>지금은 매칭중!</text>
            </EventText>
            <EventTextTime>
              <text>다음 매칭접수 일정을 기다려주세요.</text>
            </EventTextTime>
          </EventTextContainer>
        );
      }
    } else if (props === 2) {
      // 웹뷰 팝업 필요
      return (
        <EventTextContainer>
          {" "}
          <EventText>
            <text>지금은 준비중</text>
          </EventText>
          <EventTextTime>
            <text>
              {Day}일 {Hour}시간 {Minute}분 뒤에 접수가 시작돼요.
            </text>
          </EventTextTime>
        </EventTextContainer>
      );
    }
  };

  useEffect(() => {
    //android
    document.addEventListener("message", (e) => listener(e.data));
    //ios
    window.addEventListener("message", (e) => listener(e.data));

    window.ReactNativeWebView?.postMessage(
      JSON.stringify({ type: "onLoad", data: "" })
    );
  }, []);

  useEffect(() => {
    if (
      userAt &&
      Name !== "anonymous" &&
      SeasonStep !== -1 &&
      matchParticipate &&
      userInfo &&
      userAsset
    ) {
      setLoading(false);
    }
  }, [userAt, Name, SeasonStep, matchParticipate, userAsset, userInfo]);

  return (
    <>
      {loading ? (
        <LoadingContainer>
          <LottieContainer>
            <Lottie animationData={newLogo} />
          </LottieContainer>
        </LoadingContainer>
      ) : (
        <MobileContainer>
          {/* <Lottie animationData={newLogo} /> */}
          <HeaderContainer>
            <ToggleContainer>
              <MatchingProgressHeader isFirst={true} />
            </ToggleContainer>
            <ProfileContainer>
              <MatchingHeaderNew isFirst={true} />
            </ProfileContainer>
          </HeaderContainer>
          <CouponContainer>
            <MyTicket />
          </CouponContainer>
          <SelectionContainer>
            <Selection
              theme={0}
              onClick={() => {
                if (
                  SeasonStep === 1 &&
                  matchParticipate.coupleMatchingAvailable
                ) {
                  cantApplyPopup();
                } else if (SeasonStep === 2) {
                  seasonBreaking();
                }
                navigate("/matchingpage", {
                  state: {
                    theme: 0,
                    // 이성매칭으로 들어갔는지, 혼성매칭으로 들어갔는지에대한 정보 theme
                    season: Season,
                    // 현재 시즌이 진행중인지 아닌지에 대한 정보 season
                  },
                });
              }}
            >
              <SelectionTitle>
                <text>
                  {SeasonStep === 1 &&
                  (CouplematchResult.matchingResult === "WaitChoice" ||
                    CouplematchResult.matchingResult === "RoundSuccess" ||
                    CouplematchResult.matchingResult === "NoneWithHistory") ? (
                    <>
                      {" "}
                      <span>#</span> <span>확인하러가기</span>
                    </>
                  ) : (
                    <>
                      {" "}
                      <span>#</span> 소개팅을 원해요 (커플매칭)
                    </>
                  )}
                </text>
              </SelectionTitle>
              <MoveContainer>
                <KeyboardArrowRightIcon />
              </MoveContainer>
            </Selection>
            <Selection
              theme={1}
              onClick={() => {
                if (
                  SeasonStep === 1 &&
                  matchParticipate.friendMatchingAvailable
                ) {
                  cantApplyPopup();
                } else if (SeasonStep === 2) {
                  seasonBreaking();
                }
                navigate("/matchingpage", {
                  state: {
                    theme: 1,
                    // 이성매칭으로 들어갔는지, 혼성매칭으로 들어갔는지에대한 정보 theme
                    season: Season,
                    // 현재 시즌이 진행중인지 아닌지에 대한 정보 season
                  },
                });
              }}
            >
              <SelectionTitle>
                {/*  className="disalbed" */}
                <text>
                  {SeasonStep === 1 &&
                  (FriendmatchResult.matchingResult === "WaitChoice" ||
                    FriendmatchResult.matchingResult === "RoundSuccess" ||
                    FriendmatchResult.matchingResult === "NoneWithHistory") ? (
                    <>
                      {" "}
                      <span className="friend">#</span>{" "}
                      <span className="friend">확인하러가기</span>
                    </>
                  ) : (
                    <>
                      {" "}
                      <span className="friend">#</span> 친구를 원해요 (친구매칭)
                    </>
                  )}
                </text>
              </SelectionTitle>
              <MoveContainer>
                <KeyboardArrowRightIcon />
              </MoveContainer>
              {/* color="disabled" */}
            </Selection>
          </SelectionContainer>
          <MatchingOptionContainer></MatchingOptionContainer>
          <BottomContainer>
            <BottomContents>
              {/* 추후 지원예정 */}
              {/* <HistoryButton
            onClick={() => {
              navigate("/MatchHistory", { state: { title: "히스토리" } });
            }}
          >
            <text>히스토리 보기</text>
          </HistoryButton> */}
            </BottomContents>
            <BottomContents>
              <CalenderContainer
                onClick={() => {
                  window.ReactNativeWebView?.postMessage(
                    JSON.stringify({ type: "calender", data: "" })
                  );
                }}
              >
                <CalenderTextContainer>
                  <text>이번 매칭 일정이 궁금하다면?</text>
                </CalenderTextContainer>
                <CalenderIconContainer>
                  <CalenderButton>
                    <text>단짠 캘린더</text>
                  </CalenderButton>
                  <ToggleRight />
                </CalenderIconContainer>
              </CalenderContainer>
            </BottomContents>
          </BottomContainer>
          <EventContainer>
            {matchParticipate != null ? Description(SeasonStep) : <></>}
          </EventContainer>
        </MobileContainer>
      )}
    </>
  );
}

export default MatchingHomePage;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const LottieContainer = styled.div`
  width: 30px;
  height: 30px;
`;

const CalenderButton = styled.div`
  display: flex;
  width: 69.37%;
  height: 100%;
  border-radius: 19px;
  border: 0.5px;
  gap: 10px;
  background: #ff477e;
  align-items: center;
  justify-content: center;

  > text {
    font-family: var(--font-Pretendard);
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
    color: #ffffff;
  }
`;

const CalenderIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 42.69%;
  height: 100%;
  gap: 10px;
`;

const CalenderTextContainer = styled.div`
  display: flex;
  width: 30.38%;
  height: 100%;
  align-items: center;
  justify-content: center;

  > text {
    font-family: var(--font-Pretendard);
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: #6c6c70;
  }
`;

const CalenderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 66.66%;
  height: 44.44%;
`;

const BottomContents = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  gap: 4px;
  align-items: center;
  justify-content: center;
`;
const BottomContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 20.285%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  top: 67.285%;
  flex-shrink: 0;
`;
const HistoryButton = styled.div`
  display: flex;
  width: 66.66%;
  height: 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 13px;
  background: var(--system-gray-100, #ebebf0);

  :active {
    opacity: 50%;
  }

  > text {
    color: var(--system-gray-800, #48484a);
    text-align: center;
    font-size: 16px;
    font-family: var(--font-Pretendard);
    line-height: 150%;
    letter-spacing: 0.8px;
    text-transform: capitalize;
  }
`;

const EventTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: start;
  width: 80%;
  height: 60.98%;
  left: 7.43%;
  top: 23%;
`;

const ToggleContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 5.143%;
  top: 3px;
  gap: 8px;
`;

const ProfileContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 15.43%;
  gap: 15px;
  top: 7.857%;
`;

const EventContainer = styled.div`
  width: 100%;
  height: 12.3%;
  background-color: white;
  position: fixed;
  /* top: 88%; */
  bottom: 0px;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 0px -4px 23px -3px rgba(0, 0, 0, 0.15);
`;

const EventText = styled.div`
  display: flex;
  position: relative;
  > text {
    font-family: var(--font-Pretendard);
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #888888;
  }
`;
const EventTextTime = styled.div`
  display: flex;
  position: relative;

  > text {
    color: var(--text-black, #000);
    font-family: var(--font-Pretendard);
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 700px;
  /* max-width: 412px;
  max-height: 915px; */
  position: absolute;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 25.86%;
`;

const CouponContainer = styled.div`
  display: flex;
  width: 100%;
  height: 6.14%;
  gap: 10px;
`;

const MatchingContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 26.14%;
  gap: 3px;
  top: 36.29%;
  background-color: blue;
`;

const ContentContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 6%;
`;

const MatchingOptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 100%;
  height: 4.57%;
  top: 60.43%;
`;

const MatchingOption = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 70.66%;
  height: 100%;
  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  > input {
    width: 20px;
    height: 20px;
  }

  > text {
    width: 74.9%;
    height: 100%;
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    /* identical to box height, or 200% */
    display: flex;
    align-items: center;
    /* SystemGray/300 */
    color: #d8d8dc;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  height: 100%;
  width: 20px;
  align-items: center;
  justify-content: center;
  margin-right: 0;
  right: 0;
`;

const CardTicket = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 31px;

  width: 66.66%;
  min-width: 260px;
  height: 100%;
`;

const Highlight = styled.div`
  right: 27.56%;
  width: 54px;
  height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: capitalize;

  > text {
    font-family: var(--font-Pretendard-SemiBold);
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 150%;
  }

  color: #ff0000;
`;

const PurchaserButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 70px;
  height: 37px;
  /* dzz_pink */
  background: #ff477e;
  border-radius: 30px;

  > text {
    font-family: var(--font-Pretendard-SemiBold);
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 150%;
    /* or 18px */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: #ffffff;
  }
`;

const MoveContainer = styled.div`
  position: relative;
  width: 19px;
  height: 21px;
  right: 16.67%;
`;

const Confirmation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 58.85%;
  height: 100%;

  > img {
    width: 24px;
    height: 24px;
  }
`;

const Ticketviewer = styled.div`
  width: 77.78%;
  min-width: 119px;

  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: #000000;
  }
`;

// export const HeaderContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;

//   position: absolute;
//   width: 100%;
//   height: 24.29%;
//   left: 0px;
//   top: 4.29%;
// `;

const HeaderName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;

  width: 100%;
  height: 73.91%;

  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }

  > text.name {
    font-family: var(--font-Pretendard-SemiBold);
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
  }
`;

// const HeaderTop = styled.div`
//   width: 100%;
//   height: 51.76%;
// `;

// const HeaderBox = styled.div`
//   position: relative;
//   width: 60.36%;
//   min-width: 230px;
//   height: 100%;
//   left: 16.67%;
// `;

// const HeaderProfile = styled.div`
//   width: 66.98%;
//   min-width: 142px;
//   height: 78.41%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const HeaderSeason = styled.div`
//   width: 100%;
//   min-width: 250px;
//   height: 21.59%;
//   min-height: 19px;
//   background-color: white;

//   > text {
//     font-family: var(--font-Pretendard);
//     font-style: normal;
//     font-weight: 400;
//     font-size: 14px;
//     line-height: 19px;
//     color: #000000;
//   }

//   > text > span {
//     font-family: var(--font-Pretendard-SemiBold);
//     color: ${(props) =>
//       props.theme === 1
//         ? "#0094FF"
//         : props.theme === 2
//         ? "#888888"
//         : "#FF477E"};
//     font-weight: 600;
//     font-size: 14px;
//   }
// `;

export const HeaderBoarder = styled.div`
  width: 100%;
  height: 22.35%;
`;

// const Boarder = styled.div`
//   position: relative;
//   top: 50%;
//   box-sizing: border-box;
//   border-bottom: 0.3px solid #888888;
// `;

// const HeaderBottom = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 10px;

//   width: 100%;
//   height: 25.88%;
// `;

const SelectionTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 0px;
  gap: 10px;
  left: 16.67%;
  width: 55.9%;
  min-width: 140px;
  height: 16.32%;
  min-height: 31px;

  > text > span {
    margin-right: 10px;
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    /* dzz_pink */
    color: #ff477e;

    &.friend {
      color: #0094ff;
    }
  }

  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;

    /* Text Black */

    color: #000000;

    &.disalbed {
      color: grey;
    }
  }
`;

const SelectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 18.14%;
  top: 36.29%;
  /* background-color: red; */
`;
const Selection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  width: 100%;

  height: 50%;

  :active {
    background: ${(props) => (props.theme === 1 ? "#EFF6FC" : "#FEF1F5")};
  }
`;
