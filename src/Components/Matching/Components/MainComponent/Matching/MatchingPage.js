import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import MatchingHeaderNew from "../../HeaderComponent/MatchingHeaderNew";
import MatchingProgressHeader from "../../HeaderComponent/MatchingProgressHeader";
import MyTicket from "../../ReusableComponents/MyTicket";
import axios from "axios";
import { useDispatch } from "react-redux";
import StateSlice from "features/State/StateSlice";

function MatchingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const Theme = location.state.theme; // Theme-> 0이면 커플, 1이면 친구
  const [can, setCan] = useState();
  const [status, setStatus] = useState({});
  const matchingType = ["Couple", "Friend"];

  // 접수단계라면 현재 카테고리에 대하여 신청가능한지 리덕스에서 불러와 로컬변수에 넣어준다.

  // const Name = useSelector((state) => {
  //   return state.Popup.name;
  // });
  // const Season = useSelector((state) => {
  //   return state.Popup.season;
  // });
  const SeasonStep = useSelector((state) => {
    return state.Popup.seasonStep;
  });

  const matchParticipate = useSelector((state) => {
    return state.Popup.matchParticipate;
  });

  const userAt = useSelector((state) => {
    return state.Popup.userToken.accessToken;
  });

  const userRt = useSelector((state) => {
    return state.Popup.userToken.refreshToken;
  });

  //매칭진행 결과 관련데이터, 친구매칭 결과 (접수안했다면 상태가 None, 접수했다면 waiting, 실패했다면, ??? 성공했다면 기타 등등)
  const FriendmatchResult = useSelector((state) => {
    return state.Popup.FriendmatchResult;
  });

  //매칭진행 결과 관련데이터, 커플매칭 결과  (접수안했다면 상태가 None, 접수했다면 waiting, 실패했다면, ??? 성공했다면 기타 등등)
  const CouplematchResult = useSelector((state) => {
    return state.Popup.CouplematchResult;
  });

  useEffect(() => {
    window.ReactNativeWebView?.postMessage(
      JSON.stringify({ type: "notfirst", data: "" })
    );
  }, []);

  const datalist = ["Couple", "Friend"];
  const GotoMatching = () => {
    navigate("/MatchingProgress", { state: { theme: Theme } });
  };

  useEffect(() => {
    //android
    document.addEventListener("message", (e) => listener(e.data));
    //ios
    window.addEventListener("message", (e) => listener(e.data));
  }, []);

  useEffect(() => {
    if (Theme === 0) {
      setCan(matchParticipate.coupleMatchingAvailable);
      setStatus(CouplematchResult);
    } else {
      setCan(matchParticipate.friendMatchingAvailable);
      setStatus(FriendmatchResult);
    }
  }, []);

  const listener = (event) => {
    const { data, type } = JSON.parse(event);
    switch (type) {
      case "back":
        if (this.props.navigation.isFirstRouteInParent()) {
          navigate("/Matching");
        } else {
          navigate(-1);
        }
        break;
      case "application": {
        GotoMatching();
      }
    }
  };

  const getMatchStatus = async (at, rt) => {
    try {
      const Response = await axios.get(
        `${
          process.env.NODE_ENV === "development"
            ? ""
            : "https://dev.fiveyears.click"
        }/matching/participate/status`,
        {
          headers: {
            Authorization: at,
            "x-refresh-token": rt,
            fcmToken: "123",
            "content-type": "application/json",
          },
        }
      );
      dispatch(StateSlice.actions.matchParticipate(Response.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  const Apply = async (at, rt) => {
    try {
      const Response = await axios.post(
        `${
          process.env.NODE_ENV === "development"
            ? ""
            : "https://dev.fiveyears.click"
        }/matching/participate?matchingType=${matchingType[Theme]}`, // 신청하기, 친구매칭 Friend, 커플매칭 Couple
        {},
        {
          headers: {
            Authorization: at,
            "x-refresh-token": rt,
            fcmToken: "123",
            "content-type": "application/json",
          },
        }
      );
      console.log(Response.data.data);
      alert("신청하였습니다!");
      navigate("/matching");
    } catch (error) {
      console.log(error);
    }
  };

  //상황별 버튼 제공해주는 함수, 신청접수기간 + 접수가능 => 신청하기 버튼, 접수불가능 => 지금은 신청할수 없어요 버튼
  //매칭진행기간 + 매칭성공 => 상대방확인하기 버튼, 매칭진행기간 + 매칭실패 또는 미신청 => 지금은 신청할수 없어요 버튼, => 그외 확인하기 버튼
  //매칭준비기간 => 지금은 신청할수 없어요 버튼

  const Button = () => {
    // @접수중, 접수가능일때는 신청하기 버튼을
    //테스트용, 추후 can으로 바꾸기
    if (SeasonStep === 0 && can) {
      //신청하기
      return (
        <EachButton
          className="activate"
          onClick={() => {
            Apply(userAt, userRt);
            window.ReactNativeWebView?.postMessage(
              JSON.stringify({
                type: "application",
                data: datalist[Theme],
              })
            );
          }}
          matching={Theme}
        >
          <text className="enter">신청하기</text>
        </EachButton>
      );
    }

    // @매칭중, 매칭상대가 존재하는 경우에는 상대방 확인하기 버튼 활성화
    else if (SeasonStep === 1 && status.matchingResult === "WaitChoice") {
      //매칭시작하기 버튼
      return (
        <EachButton
          className="activate"
          onClick={() => {
            window.ReactNativeWebView?.postMessage(
              JSON.stringify({
                type: "application",
                data: datalist[Theme],
              })
            );
            GotoMatching();

            // window.ReactNativeWebView?.postMessage(
            //   JSON.stringify({ type: "lackinfo", data: {photoauthen : bool, studentauthen : bool})
            // );
          }}
          matching={Theme}
        >
          <text className="enter">상대방 확인하기</text>
        </EachButton>
      );
    } else if (
      SeasonStep === 1 &&
      status.matchingResult === "WaitRoundResult"
    ) {
      //매칭시작하기 버튼
      return (
        <EachButton
          className="activate"
          onClick={() => {
            window.ReactNativeWebView?.postMessage(
              JSON.stringify({
                type: "application",
                data: datalist[Theme],
              })
            );
            GotoMatching();

            // window.ReactNativeWebView?.postMessage(
            //   JSON.stringify({ type: "lackinfo", data: {photoauthen : bool, studentauthen : bool})
            // );
          }}
          matching={Theme}
        >
          <text className="enter">결과 대기중</text>
        </EachButton>
      );
    } else if (
      SeasonStep === 1 &&
      (status.matchingResult === "RoundFail" ||
        status.matchingResult === "RoundSuccess") &&
      status.myChoice != null
    ) {
      //@ 결과대기중, 상대방 결정 확인 페이지로 이동
      return (
        <EachButton
          className="activate"
          onClick={() => {
            window.ReactNativeWebView?.postMessage(
              JSON.stringify({
                type: "application",
                data: datalist[Theme],
              })
            );
            GotoMatching();

            // window.ReactNativeWebView?.postMessage(
            //   JSON.stringify({ type: "lackinfo", data: {photoauthen : bool, studentauthen : bool})
            // );
          }}
          matching={Theme}
        >
          <text className="enter">결과 확인하러 가기</text>
        </EachButton>
      );
    } else {
      //신청할수없음 버튼
      return (
        <EachButton className="deactivate" matching={Theme}>
          <text className="enter">지금은 신청할 수 없어요.</text>
        </EachButton>
      );
    }
  };

  //@ 매칭 페이지
  //stepseason이 0이면 신청 하기 버튼 활성화 및 신청 가능, 신청한 사람은 중복 신청 불가토록 비활성화
  //stepseason1 && 미신청 => 지금은 신청 할 수 없어요, 버튼 비활성화
  //stepseason1 && 신청 => 매칭상대 확인하기 => 버튼 호라성화
  //stepseason2 => 지금은 신청 할 수 없어요, 버튼 비활성화
  return (
    <>
      <MobileContainer>
        <HeaderContainer>
          <ToggleContainer>
            <MatchingProgressHeader />
          </ToggleContainer>
          <ProfileContainer>
            <MatchingHeaderNew isFrist={false} theme={Theme} />
          </ProfileContainer>
        </HeaderContainer>
        <CouponContainer>
          <MyTicket />
        </CouponContainer>
        {/* theme={location.state.theme} */}
        <MatchingContainer>
          <MatchingCardContainer theme={Theme}>
            <CardContainer>
              <CardTitleContainer>
                <CardTag theme={Theme}>
                  {Theme === 0 ? (
                    <text>
                      <span>#</span>소개팅을 원해요
                    </text>
                  ) : (
                    <text>
                      <span>#</span>친구를 원해요
                    </text>
                  )}
                </CardTag>
                <CardTitle>
                  <TextField>
                    {Theme === 0 ? (
                      <text>
                        매칭의 정석 소개팅♥
                        <br />
                        <text className="highlight">
                          ‘대체 다들 어디서 만나?’
                          <br />
                          ‘연애 수문장 졸업기원..ㅠㅠ’
                        </text>
                        <br />
                        <span>더이상 고민 하지말고 입장!</span>
                      </text>
                    ) : (
                      <text>
                        나도 어쩌면
                        <br />
                        누군가의 소울메이트🥹?!
                        <br />
                        <text className="highlight">
                          ‘맛집 뿌실 단짝 어디 없나?’
                        </text>
                        <br />
                        <span>애매하게 서성이지 말고 입장!</span>
                      </text>
                    )}
                  </TextField>
                </CardTitle>
              </CardTitleContainer>
            </CardContainer>
          </MatchingCardContainer>
        </MatchingContainer>
        <ButtonContainer>
          <EachButtonContainer>
            {/* 
            버튼 눌렀을때 정보 충분하지 서버와 통신 확인, 부족하다면 부족한 정보를 웹뷰 통신으로 팝업창 띄우기 요청하기,  
              충분하다면 티켓수량이 충분한지 확인후 웹뷰통신으로 어떤매칭인지 정보와 확인요청 팝업 요청하기, 데이터가 true가 오면 서버에 매칭 신청
            */}
            {/*
            seasonstep == 0, 미접수 상태 
            => 신청하기 버튼

            seasonstep == 1, 접수안한 상태
            => 지금은 신청할 수 없어요

            seasonstep ==1, 접수한 상태
            => 매칭상대 확인하기

            seasonstep ==2, 지금은 신청할 수 없어요

            seasonstep == 0, 접수한 상태
            => 지금은 신청할 수 없어요

            seasonstep == 0, 접수불가능 상태??? 
            => 지금은 신청할 수 없어요

            */}
            {/* 접수중 기간인지,  신청가능한지 여부를 확인 */}
            {/* SeasonStep === 0 && */}
            {Button()}
            {/* {true ? (
              <EachButton
                className="activate"
                onClick={() => {
                  window.ReactNativeWebView?.postMessage(
                    JSON.stringify({
                      type: "application",
                      data: datalist[Theme],
                    })
                  );
                  GotoMatching();

                  // window.ReactNativeWebView?.postMessage(
                  //   JSON.stringify({ type: "lackinfo", data: {photoauthen : bool, studentauthen : bool})
                  // );
                }}
                matching={Theme}
              >
                <text className="enter">신청하기</text>
              </EachButton>
            ) : (
              <EachButton className="deactivate" matching={Theme}>
                <text className="enter">지금은 신청할 수 없어요.</text>
              </EachButton>
            )} */}
            {/* 
              <EachButton
                className="activate"
                onClick={() => {
                  navigate("/MatchingProgress", { state: { theme: Theme } });
                }}
                matching={Theme}
              >
                <text className="enter">지금은 매칭중</text>
              </EachButton>
               */}
          </EachButtonContainer>
          <EachButtonContainer>
            <EachButton
              onClick={() => {
                window.ReactNativeWebView?.postMessage(
                  JSON.stringify({ type: "modify", data: "" })
                );
              }}
            >
              <text>내 정보 수정하기</text>
            </EachButton>
          </EachButtonContainer>
          {/* <EachButtonContainer>
            <EachButton
              onClick={() => {
                window.ReactNativeWebView?.postMessage(
                  JSON.stringify({ type: "student", data: "" })
                );
              }}
            >
              <text>학생 인증하기</text>
            </EachButton>
          </EachButtonContainer> */}
        </ButtonContainer>
      </MobileContainer>
    </>
  );
}

export default MatchingPage;

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 720px;
  position: absolute;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 25.86%;
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
  height: 32.43%;
  top: 33.57%;
  /* background-color: red; */
  align-items: center;
  justify-content: center;
`;

const MatchingCardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  /* gap: 10px; */
  width: 66.66%;
  height: 85%;
  background: #ffffff;
  border: 3px solid ${(props) => (props.theme === 1 ? "#C4DFF3" : "#FEC7D7")};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const TextField = styled.div`
  width: 100%;
  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    /* or 160% */

    text-align: center;
    /* Text Black */
    color: #000000;
  }

  > text > text {
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
  }

  > text > span {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    /* or 160% */
    text-align: center;
    /* Text Black */
    color: ${(props) => (props.theme === 0 ? "#ff477e" : "#0094FF")};
  }

  > text > span > span {
    font-weight: 600;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 0px;

  width: 100%;
  height: 87.22%;
`;

export const CardTitleContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 83.63%;
`;

export const CardTag = styled.div`
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;

  width: 43.46%;
  height: 11.59%;
  min-width: 113px;
  min-height: 32px;
  /* white */
  background: ${(props) => (props.theme === 1 ? "#0094FF" : "#FF477E")};
  /* dzz_pink */
  border: 0.5px solid #ffffff;

  border-radius: 19px;

  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    /* dzz_pink */
    color: #ffffff;
  }

  > text > span {
    color: #ffffff;
  }
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
  background-color: ${(props) => (props.theme === 1 ? "#EDFAFF" : "#FFF4F4")};
`;

export const CardTitle = styled.div`
  display: flex;
  /* position: relative; */
  align-items: center;
  justify-content: center;
  /* width: 76.92%;
  min-width: 200px;
  height: 64.64%;
  min-height: 130px;
  text-align: center;
  bottom: 5.051%; */
  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #000000;
    > span.love {
      color: #ff477e;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 100%;
  height: 24.57%;
  top: 67.71%;
`;

const EachButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  width: 100%;
  height: 30.23%;
`;

const EachButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 53.85%;
  height: 80.62%;
  background: #dfe1e4;
  border-radius: 30px;

  :active {
    opacity: 50%;
  }

  &.guide {
    background: #0094ff;
  }

  &.activate {
    background: ${(props) => (props.matching === 0 ? "#FF477E" : "#0094FF")};
  }

  &.deactivate {
    background: ${(props) => (props.matching === 0 ? "#FEC7D7" : "#A6DAFF")};
  }
  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 150%;
    /* identical to box height, or 21px */

    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    /* Text Black */

    color: #000000;

    &.guide {
      color: #ffffff;
    }

    &.enter {
      font-weight: 600;
      color: #ffffff;
    }
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

export const HeaderBoarder = styled.div`
  width: 100%;
  height: 22.35%;
`;
