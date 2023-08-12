import React from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import styled from "styled-components";
import Smile from "assets/SmileHeartEye.gif";
import Tear from "assets/SweatFace.gif";
import { useSelector } from "react-redux";
import MatchingProgressHeader from "Components/Matching/Components/HeaderComponent/MatchingProgressHeader";
import Lottie from "lottie-react";
import lovelykiss from "assets/lovelykiss.json";
import pokerface from "assets/pokerface.json";
import sadlook from "assets/sadlook.json";

function ChoicePage() {
  const [isStart, setIsStart] = useState(true);
  const [detail, setDetail] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [theme, setTheme] = useState(0);
  const ReportedData = useSelector((state) => {
    return state.Popup.ReportData;
  });
  const ReportCase = useSelector((state) => {
    return state.Popup.ReportCase;
  });
  return (
    <MatchingContainers detail={detail}>
      <ContentContainer>
        <MatchingProgressHeader isReport={true} />
      </ContentContainer>

      <ProfileImageContainer>
        <img src={require("assets/mango.jpg")} alt="이미지" />
      </ProfileImageContainer>

      <ProfileNameContainer>
        <ProfileName>
          <img src={require("assets/CircleWavyCheck.png")} alt="이미지" />
          <text>단짠지기임당</text>
        </ProfileName>
      </ProfileNameContainer>
      <ContentsContainer>
        <ContentsBox>
          <ResultBox>
            {state === "accept" ? (
              <>
                {/* <img src={Smile} alt="loading..." /> */}
                {/* <Lottie animationData={lovelykiss} /> */}
                <LottieContainer>
                  <Lottie animationData={lovelykiss} />
                </LottieContainer>
                <text>
                  <span>단짠지기임당</span>님을 선택하셨습니다!
                </text>
              </>
            ) : (
              <>
                {/* <img src={Tear} alt="loading..." /> */}
                <LottieContainer>
                  <Lottie animationData={sadlook} />
                </LottieContainer>
                <text>
                  <span>단짠지기임당</span>님을 거절하셨습니다
                </text>

                {ReportedData ? (
                  <>
                    <ReportContainer>
                      <ReportCard>
                        <text>
                          '{ReportCase[ReportedData.reportNum]}'의 항목으로
                          신고가 접수되었습니다.
                        </text>
                      </ReportCard>
                    </ReportContainer>
                  </>
                ) : (
                  <></>
                )}
                <text
                  onClick={() => {
                    navigate("/Matching");
                  }}
                  className="reject"
                >
                  메인으로 돌아가기
                </text>
              </>
            )}
          </ResultBox>
          <WaitingBox state={state}>
            <text>
              선택시간이
              <span>
                22<span>시간</span>
              </span>
              <span>
                41<span>분</span>
              </span>{" "}
              남았어요.
            </text>
            <text>상대방이 선택하면 결과가 나와요.</text>
          </WaitingBox>
          {/* {isStart ? (
            <WaitingBox state={state}>
              <SuggentionButton
                onClick={() => {
                  navigate("/ChoiceLoading", { state: { theme: 1 } });
                }}
              >
                <text>결과 확인하기</text>
              </SuggentionButton>
            </WaitingBox>
          ) : (
            <WaitingBox state={state}>
              <text>
                선택시간이
                <span>
                  22<span>시간</span>
                </span>
                <span>
                  41<span>분</span>
                </span>{" "}
                남았어요.
              </text>
              <text>상대방이 선택하면 결과가 나와요.</text>
            </WaitingBox>
          )} */}
          <ChanceBox state={state}>
            {state === "accept" ? (
              <text
                onClick={() => {
                  navigate("/Matching");
                }}
                className="accept"
              >
                메인으로 돌아가기
              </text>
            ) : ReportedData ? (
              <></>
            ) : (
              <>
                <text>이대로 끝내기 아쉽다면?</text>
                <SuggentionButton
                  onClick={() => {
                    window.ReactNativeWebView?.postMessage(
                      JSON.stringify({
                        type: "rematch",
                        data: { applicant: "miju", target: "target" },
                      })
                    );
                  }}
                >
                  <text>이건 어때요?</text>
                </SuggentionButton>
              </>
            )}
          </ChanceBox>
        </ContentsBox>
      </ContentsContainer>
    </MatchingContainers>
  );
}

export default ChoicePage;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 65.31%;
  height: 95%;
`;

const ContentsContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* height: 25.86%; */
  height: 230px;
  top: 69.14%;
  /* background-color: red; */
`;

export const MatchingContainers = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 700px;
  background: white;
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: start;
  gap: 10px;
  position: absolute;
  top: 6.86%;
  width: 100%;
  height: 53.286%;

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const Frame6887 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 131px;

  width: 67px;
  height: 7px;
`;

export const ProfileName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 33.5%;
  min-width: 340px;
  height: 24px;

  > img {
    width: 24px;
    height: 24px;
  }

  > text {
    width: 130px;
    height: 22px;

    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.408px;
    color: #000000;
  }
`;

export const ProfileNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 100%;
  height: 3.43%;
  top: 64.43%;
`;

const ReportContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 70px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
`;

const ReportCard = styled.div`
  display: flex;
  width: 89.74%;
  height: 72%;
  border-radius: 7px;
  background: #48484a;
  align-items: center;
  justify-content: center;
  text-align: center;

  > text {
    color: var(--white, #fff);
    text-align: center;
    font-size: 12px;
    font-family: var(--font-Pretendard);
    line-height: 150%;
    letter-spacing: 0.6px;
    text-transform: capitalize;
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
  height: 6.86%;
`;

const SuggentionButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  gap: 4px;

  width: 95px;
  height: 40px;

  /* dzz_pink */

  background: #ff477e;
  border-radius: 31px;

  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1px;

    /* white */

    color: #ffffff;
  }
`;

const SelectionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 15px;

  width: 66.15%;
  height: 240px;
  background-color: gray;
`;

export const SelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  height: 35.85%;
  left: 0px;
  top: 62.91%;
`;

const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 0px;
  gap: 7px;

  width: 100%;
  height: 100px;
  z-index: 10;

  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    /* identical to box height */

    display: flex;
    align-items: center;

    > span {
      font-weight: 700;
    }
  }

  > img {
    width: 50px;
    height: 50px;
  }

  > text.reject {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* system_blue */

    color: #0094ff;
  }
`;

const LottieContainer = styled.div`
  width: 50px;
  height: 50px;
`;

const WaitingBox = styled.div`
  display: ${(props) => (props.state === "accept" ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 5px;

  width: 100%;
  height: 49px;
  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    /* Text Black */

    color: #000000;
    > span {
      color: #ff477e;
      font-weight: 700;
      > span {
        font-weight: 700;
        color: #000000;
      }
    }
  }
`;

const ChanceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 5px;

  width: 180px;
  height: 60px;

  > text {
    z-index: 10;
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* system_blue */

    color: ${(props) => (props.state === "accept" ? "#0094FF" : "#888888")};
  }

  > text.accept {
    font-size: 16px;
  }
`;
