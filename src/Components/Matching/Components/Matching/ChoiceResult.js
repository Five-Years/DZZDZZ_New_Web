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
import Smile from "../../../../assets/SmileHeartEye.gif";
import Tear from "../../../../assets/SweatFace.gif";
import MatchingProgressHeader from "../Header/MatchingProgressHeader";

function ChoiceResult() {
  const [detail, setDetail] = useState(false);
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(true);
  const { state } = useLocation();

  return (
    <MatchingContainers detail={detail}>
      <ContentContainer>
        <MatchingProgressHeader isReport={true} />
      </ContentContainer>
      <ProfileImageContainer>
        <img src={require("../../../../assets/mango.jpg")} alt="이미지" />
        <Frame6887></Frame6887>
      </ProfileImageContainer>

      <ProfileNameContainer>
        <ProfileName>
          <img
            src={require("../../../../assets/CircleWavyCheck.png")}
            alt="이미지"
          />
          <text>단짠지기임당</text>
        </ProfileName>
      </ProfileNameContainer>
      <ContentsContainer>
        <ContentsBox>
          {" "}
          <ResultBox>
            {isSuccess ? (
              <>
                <img src={Smile} alt="loading..." />
                <text>축하합니다!</text>
                <text>
                  <span>단짠지기임당</span>님과매칭이 성공했어요!
                </text>
              </>
            ) : (
              <>
                <img src={Tear} alt="loading..." />
                <text>
                  아쉽게도<span>단짠지기임당</span>님은
                </text>
                <text>인연이 아닌가봐요</text>
              </>
            )}
          </ResultBox>
          {/* <WaitingBox state={state}><text>선택시간이<span>22<span>시간</span></span><span>41<span>분</span></span> 남았어요.</text><text>상대방이 선택하면 결과가 나와요.</text></WaitingBox> */}
          <ChanceBox state={state}>
            {isSuccess ? (
              <>
                <SuggentionButton
                  onClick={() => {
                    window.ReactNativeWebView?.postMessage(
                      JSON.stringify({
                        type: "openchat",
                        data: "https://open.kakao.com/o/gZ5Purqf",
                      })
                    );
                  }}
                >
                  <text>오픈 카톡 URL 열기</text>
                </SuggentionButton>
              </>
            ) : (
              <text
                onClick={() => {
                  navigate("/");
                }}
                className="result"
              >
                메인으로 돌아가기
              </text>
            )}
          </ChanceBox>
          {/* onClick={()=>{   window.open("https://open.kakao.com/o/gZ5Purqf")}} */}
        </ContentsBox>
      </ContentsContainer>
    </MatchingContainers>
  );
}

export default ChoiceResult;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const ContentsContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 29.86%;
  top: 70.14%;
`;

export const MatchingContainers = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
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
  width: 100%;
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
  gap: 4px;

  width: 56.41%;
  height: 52px;

  /* dzz_pink */

  background: #ff477e;
  border-radius: 13px;

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
  justify-content: space-between;
  padding: 0px;
  gap: 7px;
  width : 100%;
  height: 120px;

  > img {
    width: 50px;
    height: 50px;
  }
  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    /* identical to box height */

    > span {
      font-weight: 700;
    }
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

const WaitingBox = styled.div`
  display: ${(props) => (props.state === "accept" ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 5px;

  width: 280px;
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
      > span {
        font-weight: 600;
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

  width: 100%;
  height: 80px;

  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* system_blue */

    color: ${(props) => (props.state === "accept" ? "#0094FF" : "#888888")};
  }

  > text.result {
    color: #0094ff;
  }
`;
