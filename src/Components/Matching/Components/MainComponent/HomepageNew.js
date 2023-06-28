import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MatchingProgressHeader from "../Header/MatchingProgressHeader";
import { ReactComponent as Info } from "../../../../assets/Info.svg";

import MatchingHeaderNew from "../Header/MatchingHeaderNew";
import StateSlice from "../../../../features/State/StateSlice";
import MyTicket from "../../ReusableComponents/MyTicket";
import axios from "axios";

function HomepageNew() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState();

  const accessToken =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwcm9AbmF2ZXIuY29tIiwiYXV0aCI6Ik5PUk1BTF9VU0VSIiwiZXhwIjoxNjg3ODUyMDI1fQ.nHYURcTW93rZFCWhz5b_JsCz91AymhGdbcFkQVFplKM";
  const refreshToken =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODc4NTIwMjV9.xavy7sCNrxbaq43kQFV1t_t4ZIuuJcrNE59lFhlL8Co";
    const getData = async () => {
      try {
        const Response = await axios.get(
          `${
            process.env.NODE_ENV === "development"
              ? ""
              : "https://dev.fiveyears.click"
          }/login/token`,
          {
            headers: {
              Authorization: accessToken,
              "x-refresh-token": refreshToken,
              "content-type": "application/json",
            },
          }
        )
        setUserData(JSON.parse(Response.data.data)); 
        console.log(userData);         
        dispatch(StateSlice.actions.Name(userData.nickname));

      } catch (error) {
        console.log(error);
      }
    }

  useEffect(()=>{
    getData();
},[])
    
    

  const listener = (event) => {
    const { data, type } = JSON.parse(event);

    switch (type) {
      case "loginToken":
        if (Name === "anonymous") {
          // getData(data);
          dispatch(StateSlice.actions.Name("미쥬미쥬미쥬"));
        }
        break;

      case "onBlur":
        navigate("/Matching");
        break;

      case "store":
        navigate("/purchasing", { state: { title: "충전하기", direct : true } });
        break;

      case "season":
        dispatch(StateSlice.actions.Season(data.season));
        dispatch(StateSlice.actions.SeasonNumber(data.seasonnumber));

      case "back":
        if (this.props.navigation.isFirstRouteInParent()) {
          navigate("/Matching");
        } else {
          navigate(-1);
        }
        break;
      case "report":
        navigate("/")
    }
  };

  // useEffect(() => {
  //   axios
  //     .get(
  //       `${
  //         process.env.NODE_ENV === "development"
  //           ? ""
  //           : "https://dev.fiveyears.click"
  //       }/login/token`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //           "x-refresh-token": `Bearer ${refreshToken}`,
  //           "content-type": "application/json",
  //         },
  //       }
  //     )
  //     .then((response) => console.log(response.data));
  // }, []);

  const Ticket = useSelector((state) => {
    return state.Popup.ticket;
  });

  const UserData = useSelector((state) => {
    return state.Popup.userData;
  });
  const Name = useSelector((state) => {
    return state.Popup.name;
  });
  const Season = useSelector((state) => {
    return state.Popup.Season;
  });
  const SeasonNumber = useSelector((state) => {
    return state.Popup.SeasonNumber;
  });

  // 유저인증여부 확인, 추후 서버 연동 필요
  const authentification = true;

  const Description = (props) => {
    if (props === 0) {
      return (
        <EventTextContainer>
          {" "}
          <EventText>
            <text>아직 신청하지 않으셨네요!</text>
          </EventText>
          <EventTextTime>
            <text>1일 2시간 25분 뒤에 접수가 끝나요.</text>
          </EventTextTime>
        </EventTextContainer>
      );
    } else if (props === 1) {
      return (
        <EventTextContainer>
          {" "}
          <EventText>
            <text>잠시 후 매칭이 시작됩니다!</text>
          </EventText>
          <EventTextTime>
            <text>1일 2시간 25분 뒤에 상대방을 확인할 수 있어요.</text>
          </EventTextTime>
        </EventTextContainer>
      );
    } else if (props === 2) {
      return (
        <EventTextContainer>
          {" "}
          <EventText>
            <text>과연 결과는?</text>
          </EventText>
          <EventTextTime>
            <text>2시간 25분 뒤에 결과가 나와요.</text>
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

  return (
    <>
      <MobileContainer>
        <HeaderContainer>
          <ToggleContainer>
            <MatchingProgressHeader isFirst={true} />
          </ToggleContainer>
          <ProfileContainer>
            <MatchingHeaderNew />
          </ProfileContainer>
        </HeaderContainer>
        <CouponContainer>
          <MyTicket />
        </CouponContainer>
        <SelectionContainer>
          <Selection
            theme={0}
            onClick={() => {
              navigate("/MatchingHome", {
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
                <span>#</span> 소개팅을 원해요
              </text>
            </SelectionTitle>
            <MoveContainer>
              <KeyboardArrowRightIcon />
            </MoveContainer>
          </Selection>
          <Selection
            theme={1}
            onClick={() => {
              navigate("/MatchingHome", {
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
                <span className="friend">#</span> 친구를 원해요
              </text>
            </SelectionTitle>
            <MoveContainer>
              <KeyboardArrowRightIcon />
            </MoveContainer>
            {/* color="disabled" */}
          </Selection>
        </SelectionContainer>
        <MatchingOptionContainer>
          <MatchingOption>
            <input type="checkbox" disabled />
            <text>같은 학교끼리 만나기</text>
            <InfoContainer>
              <Info
                onClick={() => {
                  window.ReactNativeWebView?.postMessage(
                    JSON.stringify({ type: "same", data: 0 })
                  );
                }}
              />
            </InfoContainer>
          </MatchingOption>
        </MatchingOptionContainer>
        <HistoryContainer>
          <HistoryButton
            onClick={() => {
              navigate("/MatchHistory", { state: { title: "히스토리" } });
            }}
          >
            <text>히스토리 보기</text>
          </HistoryButton>
        </HistoryContainer>
        <EventContainer>{Description(1)}</EventContainer>
      </MobileContainer>
    </>
  );
}

export default HomepageNew;

const HistoryContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 10%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  top: 73.71%;
  flex-shrink: 0;
`;
const HistoryButton = styled.div`
  display: flex;
  width: 66.66%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 13px;
  background: var(--system-gray-100, #ebebf0);

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
  justify-content: center;
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
  height: 11.71%;
  position: absolute;
  top: 87.57%;
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
  top: 62.43%;
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
    font-family: var(--font-Pretendard);
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
    font-family: var(--font-Pretendard);
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

const HeaderProfile = styled.div`
  width: 66.98%;
  min-width: 142px;
  height: 78.41%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderSeason = styled.div`
  width: 100%;
  min-width: 250px;
  height: 21.59%;
  min-height: 19px;
  background-color: white;

  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #000000;
  }

  > text > span {
    color: ${(props) =>
      props.theme === 1
        ? "#0094FF"
        : props.theme === 2
        ? "#888888"
        : "#FF477E"};
    font-weight: 600;
    font-size: 14px;
  }
`;

export const HeaderBoarder = styled.div`
  width: 100%;
  height: 22.35%;
`;

const Boarder = styled.div`
  position: relative;
  top: 50%;
  box-sizing: border-box;
  border-bottom: 0.3px solid #888888;
`;

const HeaderBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: 100%;
  height: 25.88%;
`;

const SelectionTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 0px;
  gap: 10px;
  left: 16.67%;
  width: 35.9%;
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
  height: 26.14%;
  top: 36.29%;
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
