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

import {
  MatchingContainers,
  ContentContainers,
  Option,
  MatchingLink,
  ProfileImageContainer,
  ContentRight,
  TextContainer,
  ProfileNameContainer,
  DetailTextView,
  DetailText,
  ProfileName,
  Selection,
  DetailContainer,
  DetailView,
  ContentLeft,
  ContentTitle,
  IntroduceContainer,
  Frame6887,
} from "../../StyledComponent/MatchingStyled";

function ChoiceResult() {
  const [detail, setDetail] = useState(false);
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(true);
  const { state } = useLocation();
  return (
    <MatchingContainers detail={detail}>
      <ContentContainers>
        <ContentLeft>
          <ArrowBackIosIcon
            style={{ marginLeft: "15.4%", width: "50%", height: "50%" }}
            onClick={() => {
              navigate("/Matching");
            }}
          />
        </ContentLeft>
        <ContentTitle>
          <text></text>
        </ContentTitle>
        <ContentRight>
          <MoreHorizIcon
            style={{ width: "50%", height: "50%", marginRight: "15.4%" }}
          />
        </ContentRight>
      </ContentContainers>
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
      <SelectionContainer>
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
                <text>
                  오픈 카톡 URL <br />
                  열기
                </text>
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
      </SelectionContainer>
    </MatchingContainers>
  );
}

export default ChoiceResult;

const SuggentionButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  gap: 4px;

  width: 142px;
  height: 40px;

  /* dzz_pink */

  background: #ff477e;
  border-radius: 31px;

  > text {
    font-family: "Inter";
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
  justify-content: space-evenly;
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
  height: 120px;

  > img {
    width: 50px;
    height: 50px;
  }
  > text {
    font-family: var(--font-OpenSans);
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

  > text.reject {
    font-family: var(--font-OpenSans);
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
    font-family: var(--font-OpenSans);
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
  padding: 0px;
  gap: 5px;

  width: 180px;
  height: 80px;

  > text {
    font-family: var(--font-OpenSans);
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
