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
import { AxiosInstanse } from "../../../../../utils/AxiosInstance";

function MatchingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const Theme = location.state.theme; // Theme-> 0이면 커플, 1이면 친구
  const [can, setCan] = useState();
  const [status, setStatus] = useState({});
  const matchingType = ["Couple", "Friend"];

  const SeasonStep = useSelector((state) => {
    return state.Popup.seasonStep;
  });

  const matchParticipate = useSelector((state) => {
    return state.Popup.matchParticipate;
  });

  const userAsset = useSelector((state) => {
    return state.Popup.userAsset;
  });

  const userInfo = useSelector((state) => {
    return state.Popup.userInfo;
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

  const userMatchAvailable = useSelector((state) => {
    return state.Popup.userMatchAvailable;
  });

  useEffect(() => {
    window.ReactNativeWebView?.postMessage(
      JSON.stringify({ type: "notfirst", data: "" })
    );
  }, []);

  const GotoMatching = () => {
    navigate("/MatchingProgress", { state: { theme: Theme } });
  };

  const GotoChoice = (data) => {
    navigate("/choiceLoading", { state: { theme: Theme, result: data } });
    // choiceloading페이지로 이동
    // data : 0 => 매칭대기중
    // data : 1 => 결과나온상태
  };

  useEffect(() => {
    //android
    document.addEventListener("message", (e) => listener(e.data));
    //ios
    window.addEventListener("message", (e) => listener(e.data));
  }, []);

  //@매칭을 신청 유무 확인, 신청을 안한상태라면 true값이 들어옴
  useEffect(() => {
    //현재 테마에 맞게 status를 설정
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
        // true가 왔다면 매칭을 신청한다
        if (data) Apply(userAt, userRt);
      }
    }
  };

  //@ 사용자의 매칭 신청가능 조건 상태를 가져온다
  //지원학교여부, 사용자필수정보, 사진인증, 학생인증
  const getAvailable = async (at, rt) => {
    try {
      const Response = await AxiosInstanse.get(`/matching/user/available`, {
        headers: {
          Authorization: at,
          "x-refresh-token": rt,
          fcmToken: "123",
          "content-type": "application/json",
        },
      });
      dispatch(StateSlice.actions.matchAvailable(Response.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  //@ 사용자 매칭신청 조건 충족여부
  useEffect(() => {
    if (userAt) getAvailable(userAt, userRt);
  }, [userAt]);

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

  //@ 매칭신청하기
  const Apply = async (at, rt) => {
    try {
      const Response = await AxiosInstanse.post(
        `/matching/participate?matchingType=${matchingType[Theme]}`, // 신청하기, 친구매칭 Friend, 커플매칭 Couple
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

      // 신청이 성공했다면 매칭 페이지로 이동하면서 토스트메시지 띄우기

      // 신청이 실패했다면 토스트메시지로 실패했습니다 띄우기
      if (Response.data.data == "success") {
        window.ReactNativeWebView?.postMessage(
          JSON.stringify({ type: "toast", data: "신청이 완료되었습니다" }) // 메시지
        );
        // 사용자 티켓 최신화
        getAsset(userAt, userRt);

        navigate("/matching");
      } else {
        window.ReactNativeWebView?.postMessage(
          JSON.stringify({ type: "toast", data: "신청이 실패하였습니다" }) // 메시지
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const Button = () => {
    // 접수중 + 신청가능한 상태
    if (SeasonStep === 0 && can) {
      return (
        <EachButton
          className="activate"
          onClick={() => {
            // 지원하는 학교가 아닌 경우
            if (!userMatchAvailable.isSupportedCampus) {
              window.ReactNativeWebView?.postMessage(
                JSON.stringify({
                  type: "unSupportedSchool",
                  data: userInfo.campusIdentifier,
                })
              );
              // 학교는 지원하지만 필수인증정보 3가지중 하나이상이 부족한 경우
            } else if (
              (!userMatchAvailable.profileDescription ||
                !userMatchAvailable.representativeImageStatus ||
                !userMatchAvailable.campusAuthStatus) &&
              can
            ) {
              window.ReactNativeWebView?.postMessage(
                JSON.stringify({
                  type: "lackinfo",
                  data: {
                    photoauthen: userMatchAvailable.representativeImageStatus,
                    campusauthen: userMatchAvailable.campusAuthStatus,
                    infoauthen: userMatchAvailable.profileDescription,
                  },
                })
              );
            } //그외, 즉 조건이 모두 충족하였고 신청하지 않은 경우
            else {
              window.ReactNativeWebView?.postMessage(
                JSON.stringify({
                  type: "application",
                  data: {
                    matchingType: matchingType[Theme],
                    ticket: userAsset.ticket,
                  },
                })
              );
            }
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
            GotoMatching();
          }}
          matching={Theme}
        >
          <text className="enter">매칭상대 확인하기</text>
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
            GotoChoice(0);
            // 상황에 따라 적절하게 페이지 이동해야함
            //초이스로딩시 친구인지, 매칭인지, 어떤페이지로 이동해야하는지가 필요
            // choiceLoading -> chociepage choicepage로 이동해야함 (이동중 자원로딩뷰 필요)
          }}
          matching={Theme}
        >
          <text className="enter">결과를 기다리는중</text>
        </EachButton>
      );
    } else if (
      SeasonStep === 1 &&
      status.matchingResult === "RoundFail" &&
      status.myChoice == "Reject"
    ) {
      //매칭시작하기 버튼
      return (
        <EachButton
          className="activate"
          onClick={() => {
            GotoChoice(0);
            // 상황에 따라 적절하게 페이지 이동해야함
            //초이스로딩시 친구인지, 매칭인지, 어떤페이지로 이동해야하는지가 필요
            // choiceLoading -> chociepage choicepage로 이동해야함 (이동중 자원로딩뷰 필요)
          }}
          matching={Theme}
        >
          <text className="enter">상대를 거절하셨어요</text>
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
            GotoChoice(1);

            // GotoMatching();
            //초이스로딩시 친구인지, 매칭인지, 어떤페이지로 이동해야하는지가 필요
            // choiceLoading -> choiceresult로 이동해야함 (이동중 자원로딩뷰 필요)
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
                  <TextField theme={Theme}>
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
          <EachButtonContainer>{Button()}</EachButtonContainer>
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
  min-height: 700px;
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
    font-family: var(--font-Pretendard-Bold);
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
    color: ${(props) => (props.theme === 1 ? "#0094FF" : "#FF477E")};
  }

  > text > span > span {
    font-family: var(--font-Pretendard-SemiBold);
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
      font-family: var(--font-Pretendard-Bold);
      font-weight: 700;
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
