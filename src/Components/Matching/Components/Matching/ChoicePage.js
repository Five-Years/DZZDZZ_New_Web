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
import { ReactComponent as Smile } from "../../../../assets/smile.svg";
import { ReactComponent as Tear } from "../../../../assets/tear.svg";

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
import MatchingProgressHeader from "../Header/MatchingProgressHeader";

function ChoicePage() {
  const [isStart,setIsStart] = useState(true);
  const [detail, setDetail] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [theme,setTheme] = useState(0);

  return (
    <MatchingContainers detail={detail}>
      <ContentContainer>              <MatchingProgressHeader isReport={true}/>
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
      <SelectionContainer>
        <ResultBox>{state ==="accept" ? <><Smile /><text><span>단짠지기임당</span>님을 선택하셨습니다</text></> : <><Tear /><text><span>단짠지기임당</span>님을 거절하셨습니다</text><text onClick={()=>{navigate("/")}} className="reject">메인으로 돌아가기기</text></>}</ResultBox>
        {isStart ? <WaitingBox state={state}><SuggentionButton onClick={()=>{navigate("/ChoiceLoading", {state : {theme : 1}})}}><text>결과 확인하기</text></SuggentionButton></WaitingBox>: <WaitingBox state={state}><text>선택시간이<span>22<span>시간</span></span><span>41<span>분</span></span> 남았어요.</text><text>상대방이 선택하면 결과가 나와요.</text></WaitingBox>}
        <ChanceBox state={state}>{state ==="accept" ? <text onClick={()=>{navigate("/")}}>메인으로 돌아가기</text> : <><text>이대로 끝내기 아쉽다면?</text><SuggentionButton><text>이건 어때요?</text></SuggentionButton></>}</ChanceBox>
      </SelectionContainer>

    </MatchingContainers>
  );
}

export default ChoicePage;

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

const SuggentionButton =styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 24px;
gap: 4px;

width: 142px;
height: 40px;

/* dzz_pink */

background: #FF477E;
border-radius: 31px;

> text {
  font-family: 'Inter';
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

color: #FFFFFF;
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
  background-color : gray;

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

  width: 280px;
  height: 100px;

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

color: #0094FF;
  }
`;

const WaitingBox = styled.div`
  display: ${props => props.state === "accept" ? "flex" : "none"};
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 5px;

  width: 280px;
  height: 49px;
  >text {
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
  >span{
    color : #FF477E;
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

  color: ${props=> props.state==="accept" ? "#0094FF" : "#888888"};
}
`;