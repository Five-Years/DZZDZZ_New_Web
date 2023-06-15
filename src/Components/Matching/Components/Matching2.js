import React from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useNavigate } from "react-router-dom";
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
  SelectionContainer,
  Selection,
  DetailContainer,
  DetailView,
  ContentLeft,
  ContentTitle,
  IntroduceContainer,
  Frame6887,
} from "../StyledComponent/MatchingStyled";

function Matching2() {
  const accept = ()=> {
    if (window.confirm("선택하시겠습니까?")) {

      alert("선택하셨습니다");
      navigate("/Choice", { state: "accept" })

    } 
  };

  const reject = ()=> {
    if (window.confirm("거절하시겠습니까?")) {

      alert("거절하셨습니다");
      navigate("/Choice", { state: "reject" })


    } 
  };
  
  const [detail, setDetail] = useState(false);
  const navigate = useNavigate();
  return (
    <MatchingContainers detail={detail}>
      <ContentContainers>
        <ContentLeft>
          <ArrowBackIosIcon
            style={{ marginLeft: "15.4%", width: "50%", height: "50%" }}
            onClick={() => {
              navigate("/");
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
        <img src={require("../../../assets/mango.jpg")} alt="이미지" />
        <Frame6887></Frame6887>
      </ProfileImageContainer>
      <IntroduceContainer onClick={() => {setDetail(!detail);}}>
        <DetailTextView detail={detail}>
        </DetailTextView>
        <TextContainer detail={detail}>
              <text>학교에서 과제만 하기엔 너무 아쉽지 않아?학교에서 과제만 하기엔 너무 아쉽지 않아?학교에서 과제만 하기엔 너무 아쉽지 않아?학교에서 과제만 하기엔 너무 아쉽지 않아?학교에서 과제만 하기엔 너무 아쉽지 않아?</text>
      </TextContainer>
      <KeyboardArrowDownIcon style={{ color : detail ? "#FFFFFF" : "#888888", zIndex : 2, transform: detail ? "rotate(180deg)" : ""}}/>
        {/* {detail ? (
          <DetailTextView
            onClick={() => {
              setDetail(false);
            }}
          >
            <DetailText>
              <text>학교에서 과제만 하기엔 너무 아쉽지 않아?</text>
              <text>
                <KeyboardArrowUpIcon />
              </text>
            </DetailText>
          </DetailTextView>
        ) : (
          <>
            <TextContainer
              onClick={() => {
                setDetail(true);
              }}
            >
              <text>학교에서 과제만 하기엔 너무 아쉽지 않아?</text>
            </TextContainer>
            <KeyboardArrowDownIcon style={{ color: "#888888" }} />
          </>
        )} */}
      </IntroduceContainer>
      <ProfileNameContainer>
        <ProfileName>
          <img
            src={require("../../../assets/CircleWavyCheck.png")}
            alt="이미지"
          />
          <text>단짠지기임당</text>
        </ProfileName>
      </ProfileNameContainer>
      <SelectionContainer>
        {/* 선택시 확인작업 거치고 진행 */}
        <Selection>
          <Option
            onClick={() => {accept()}}>
            <img src={require("../../../assets/Like.png")} alt="이미지" />
            <text className="select">선택하기</text>
          </Option>
        </Selection>
        <Selection>
          <Option
            onClick={() => {reject()
            }}
          >
            <img src={require("../../../assets/Close.png")} alt="이미지" />
            <text className="reject">거절하기</text>
          </Option>
        </Selection>
      </SelectionContainer>
      <DetailContainer onClick={()=> {navigate("/detail")}}>
        <KeyboardDoubleArrowUpIcon color="disabled" fontSize="large" />
        <DetailView>
          <MatchingLink >
            <text>자세히 보기</text>
          </MatchingLink>
        </DetailView>
      </DetailContainer>
    </MatchingContainers>
  );
}

export default Matching2;
