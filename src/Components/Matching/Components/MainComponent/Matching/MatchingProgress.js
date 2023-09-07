import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as DzzDate } from "assets/dzzdzz_datelogo.svg";
// 로티이미지 삽입하기
import Lottie from "lottie-react";
import Logo from "assets/matching_logo2.json";
import search from "assets/search.json";
// import axios from "axios";
import { useDispatch } from "react-redux";
import StateSlice from "features/State/StateSlice";
import { useSelector } from "react-redux";
import { AxiosInstanse } from "../../../../../utils/AxiosInstance";

var Spinner = require("react-spinkit");

function MatchingProgress() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const Theme = location.state.theme; // Theme-> 0이면 커플, 1이면 친구
  const [isLoading, setLoading] = useState(true);

  const [MatchedUserData, setMatchedUserData] = useState(null);
  const matchingType = ["Couple", "Friend"];

  useEffect(() => {
    if (MatchedUserData) setLoading(false);
  }, [MatchedUserData]);

  const navigate = useNavigate();

  //@ 현재 매칭하는 상대방의 정보를 불러오고 리듀서에 저장한다 (친구, 이성 테마에 맞춰서)
  const getMatchedUserInfo = async () => {
    try {
      const Response = await AxiosInstanse.get(
        `/matching/user/info?matchingType=${matchingType[Theme]}`
      );
      // dispatch(StateSlice.actions.matchParticipate(Response.data.data));
      dispatch(StateSlice.actions.MatchedUserInfo(Response.data.data));
      setMatchedUserData(Response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  //@ 매칭된 상대방 정보
  const matchedUserInfo = useSelector((state) => {
    return state.Popup.MatchedUserInfo;
  });

  const userAt = useSelector((state) => {
    return state.Popup.userToken.accessToken;
  });

  const userRt = useSelector((state) => {
    return state.Popup.userToken.refreshToken;
  });

  useEffect(() => {
    if (MatchedUserData === null) {
      getMatchedUserInfo();
    }
  }, [MatchedUserData]);

  return (
    <MatchingContainer>
      {isLoading ? (
        <SpinnerContainer>
          <Spinners name="line-spin-fade-loader" />
        </SpinnerContainer>
      ) : (
        <></>
      )}
      <CardContainer>
        <CardContents theme={state.theme}>
          <text>
            지금부터<br></br>
            <span>매칭상대</span>가<br />
            공개됩니다!
          </text>
        </CardContents>
        {state.theme === 1 ? (
          <LottieContainer>
            <Lottie animationData={Logo} />
          </LottieContainer>
        ) : (
          <LottieContainer>
            <Lottie animationData={Logo} />
          </LottieContainer>
        )}
      </CardContainer>
      <MatchingConfirmContainer theme={state.theme}>
        {isLoading ? (
          <text>
            곧 매칭된 상대방을<br></br> 볼 수 있어요!
          </text>
        ) : (
          <ConfirmButton
            onClick={() => {
              navigate("/matching2", { state: { theme: Theme } });
            }}
            theme={state.theme}
          >
            <text>확인하기</text>
          </ConfirmButton>
        )}
      </MatchingConfirmContainer>
    </MatchingContainer>
  );
}

export default MatchingProgress;

const MatchingContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 720px;
  justify-content: center;
  align-items: center;
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
    font-family: var(--font-Pretendard-Bold);
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 34px;
    text-align: center;

    /* dzz_black */
    color: #333333;
  }

  > text > span {
    color: ${(props) => (props.theme === 1 ? "#0094FF" : "#FF477E")};
  }
`;

const LottieContainer = styled.div`
  width: 65px;
  height: 65px;
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
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    /* or 156% */
    text-align: center;
    /* dzz_pink */
    color: ${(props) => (props.theme === 1 ? "#0094FF" : "#FF477E")};
  }
`;

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
  background: ${(props) => (props.theme === 1 ? "#0094FF" : "#FF477E")};
  border-radius: 13px;

  > text {
    font-family: var(--font-Pretendard-Bold);
    font-style: normal;
    font-weight: 700;
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
