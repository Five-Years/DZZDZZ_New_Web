import React, { useEffect } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { useState, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MatchingProgressHeader from "../HeaderComponent/MatchingProgressHeader";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import {
  MatchingContainers,
  Option,
  MatchingLink,
  ProfileImageContainer,
  TextContainer,
  ProfileNameContainer,
  DetailTextView,
  ProfileName,
  SelectionContainer,
  Selection,
  DetailContainer,
  DetailView,
  IntroduceContainer,
} from "../StyledComponent/MatchingStyled";

function Matching2() {
  const DetailDownRef = useRef();
  const DetailUpRef = useRef();

  const [offset,setOffset] = useState(0);
  useEffect(()=>{setOffset(DetailDownRef.current.offsetTop)},[DetailDownRef])




  const accept = () => {
    if (window.confirm("선택하시겠습니까?")) {
      alert("선택하셨습니다");
      navigate("/Choice", { state: "accept" });

    }
  };

  const reject = () => {
    if (window.confirm("거절하시겠습니까?")) {
      alert("거절하셨습니다");
      navigate("/Choice", { state: "reject" });
    }
  };

  const [detail, setDetail] = useState(false);
  const [isSelected, setIsSelected] = useState(0);
  const navigate = useNavigate();

  return (
    <MatchingContainers detail={detail}>
      <ContentContainer><MatchingProgressHeader isReport={true}/></ContentContainer>
      <ProfileImageContainer>
        {true ? <ExtraMatching><DoubleMatching value={0} select = {isSelected} onClick={()=>{setIsSelected(0)}}><text>현재매칭</text></DoubleMatching><DoubleMatching  select={isSelected} value={1} onClick={()=>{setIsSelected(1)}}><text>이전매칭</text></DoubleMatching></ExtraMatching> :<></>}
        {isSelected===0 ? <img src={require("../../../../assets/ProfileSample.png")} alt="이미지"/> : <img src={require("../../../../assets/mango.jpg")} alt="이미지"/>}
        {/* <Frame6887></Frame6887> */}
      </ProfileImageContainer>
      {isSelected===0 ? <><IntroduceContainer
        onClick={() => {
          setDetail(!detail);
        }}
      >
        <DetailTextView detail={detail}></DetailTextView>
        <TextContainer detail={detail}>
          <text>
            학교에서 과제만 하기엔 너무 아쉽지 않아? 학교에서 과제만 하기엔 너무 아쉽지 않아?
          </text>
        </TextContainer>
        <KeyboardArrowDownIcon
          style={{
            color: detail ? "#FFFFFF" : "#888888",
            zIndex: 2,
            transform: detail ? "rotate(180deg)" : "",
          }}
        />
      </IntroduceContainer>
      <ProfileNameContainer>
        <ProfileName>
          <img
            src={require("../../../../assets/CircleWavyCheck.png")}
            alt="이미지"
          />
          <text>단짠지기임당</text>
        </ProfileName>
      </ProfileNameContainer></> : <><IntroduceContainer
        onClick={() => {
          setDetail(!detail);
        }}
      >
        <DetailTextView detail={detail}></DetailTextView>
        <TextContainer detail={detail}>
          <text>
            츄르좀 주면 덧나나? 스크래쳐도 좋아합니다
          </text>
        </TextContainer>
        <KeyboardArrowDownIcon
          style={{
            color: detail ? "#FFFFFF" : "#888888",
            zIndex: 2,
            transform: detail ? "rotate(180deg)" : "",
          }}
        />
      </IntroduceContainer>
      <ProfileNameContainer>
        <ProfileName>
          <img
            src={require("../../../../assets/CircleWavyCheck.png")}
            alt="이미지"
          />
          <text>망고임당</text>
        </ProfileName>
      </ProfileNameContainer></>}
      
      <SelectionContainer>
        {/* 선택시 확인작업 거치고 진행 */}
        <Selection>
          <Option
            onClick={() => {
              accept();
            }}
          >
            <img src={require("../../../../assets/Like.png")} alt="이미지" />
            <text className="select">선택하기</text>
          </Option>
        </Selection>
        <Selection>
          <Option
            onClick={() => {
              reject();
            }}
          >
            <img src={require("../../../../assets/Close.png")} alt="이미지" />
            <text className="reject">거절하기</text>
          </Option>
        </Selection>
      </SelectionContainer>
      <DetailContainer onClick={()=>{window.scrollTo({
        top: offset,
        behavior: 'smooth'
   	});  }}>
        <KeyboardDoubleArrowUpIcon color="disabled" fontSize="large" />
        <DetailView>
          <MatchingLink ref ={DetailUpRef}>
            <text>자세히 보기</text>
          </MatchingLink>
        </DetailView>
      </DetailContainer>
      <DetailProfileContainer>
      {/* <DetailHeader><HeaderLeft onClick={()=>{navigate(-1)}}><KeyboardArrowDownIcon style={{transform : "rotate(90deg)", marginLeft : "30px", width:"32px", height : "32px"}}/></HeaderLeft><HeaderName><Authen/><text>단짠지기임당</text></HeaderName><HeaderRight><MoreHorizIcon style={{marginRight : "30px"}}/></HeaderRight></DetailHeader> */}
    </DetailProfileContainer>
    <ContentsContainer ref={DetailDownRef}>
        <ContentsName><text><span>단짠지기임당</span>님의 정보</text></ContentsName>
        <ContentsSection><Contents><ContentsTitle><text>학교</text></ContentsTitle><ContentsWindow className='fixed'><text>단국대학교(죽전)</text></ContentsWindow></Contents></ContentsSection>
        <ContentsSection><Contents><ContentsTitle><text>성별</text></ContentsTitle><ContentsWindow className='fixed'><text>여자</text></ContentsWindow></Contents></ContentsSection>
        <ContentsSection><Contents><ContentsTitle><text>학번</text></ContentsTitle><ContentsWindow className='fixed'><text>14학번</text></ContentsWindow></Contents></ContentsSection>
        <ContentsSection className='long'><Contents className='long' ><ContentsTitle className='long'><text>단과대/전공</text><span>변경이 필요한 경우 고객센터를 통해 요청해주세요</span></ContentsTitle><ContentsWindow className='fixed'><text>공과대학</text></ContentsWindow></Contents></ContentsSection>
        <ContentsSection><Contents><ContentsTitle><text>자기소개</text></ContentsTitle><ContentsWindow><text>안녕하세요.</text></ContentsWindow></Contents></ContentsSection>
        <ContentsSection><Contents><ContentsTitle><text>내 성격</text></ContentsTitle><ContentsWindow className='tag'><TagContainer><text><span>#</span>진지한</text><text><span>#</span>진취적인</text><text><span>#</span>예의바른</text><text><span>#</span>솔직한</text><text><span>#</span>상냥한</text></TagContainer><TagContainer><text><span>#</span>진지한</text><text><span>#</span>예의바른</text><text><span>#</span>솔직한</text><text><span>#</span>상냥한</text></TagContainer></ContentsWindow></Contents></ContentsSection>
        <ContentsSection><Contents><ContentsTitle><text>관심사</text></ContentsTitle><ContentsWindow className='tag' ><TagContainer><text><span>#</span>향수</text><text><span>#</span>애니메이션</text><text><span>#</span>인테리어</text><text><span>#</span>맛집</text><text><span>#</span>홈카페</text></TagContainer></ContentsWindow></Contents></ContentsSection>
        <ContentsSection><Contents><ContentsTitle><text>지역</text></ContentsTitle><ContentsWindow><text>서울</text></ContentsWindow></Contents></ContentsSection>
        <ContentsSection><Contents><ContentsTitle><text>병역 여부</text></ContentsTitle><ContentsWindow><text>해당없음</text></ContentsWindow></Contents></ContentsSection>
        <ContentsSection><Contents><ContentsTitle><text>MBTI</text></ContentsTitle><ContentsWindow><text>INTJ</text></ContentsWindow></Contents></ContentsSection>
        <ContentsSection><Contents><ContentsTitle><text>종교</text></ContentsTitle><ContentsWindow><text>무 교</text></ContentsWindow></Contents></ContentsSection>
        <ContentsSection><Contents><ContentsTitle><text>음주</text></ContentsTitle><ContentsWindow><text>한 달에 1회 미만</text></ContentsWindow></Contents></ContentsSection>
        <ContentsSection><Contents><ContentsTitle><text>흡연</text></ContentsTitle><ContentsWindow><text>비 흡연자</text></ContentsWindow></Contents></ContentsSection>
        <SelectButtonContainer>
          <SelectionButton><Button onClick={()=>{accept()}}><text>선택하기</text></Button></SelectionButton>
          <SelectionButton><Button onClick={()=>{reject()}} className='reject'><text>거절하기</text></Button></SelectionButton>
        </SelectButtonContainer>
      </ContentsContainer>
    </MatchingContainers>
  );
}

export default Matching2;

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

const ExtraMatching = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
width : 100%;
height : 7.6%;
position: absolute;
top : 0px;
`;

const DoubleMatching = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
width : 50%;
height : 100%;
border-bottom: ${props => props.value === props.select ? "3px solid #FF477E" : <></> };

> text {
  font-family: var(--font-Pretendard);
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 150%;
/* identical to box height, or 21px */

text-align: center;
letter-spacing: 0.5px;

/* Text Black */

color:  ${props => props.value === props.select ? "000000" : "#AEAEB2" };
}

`;



const Button = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;

width: 66%;
height: 74.28%;

/* dzz_pink */

background: #FF477E;
border-radius: 13px;

&.reject {
  background : #EBEBF0;

  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    /* identical to box height, or 24px */

    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    /* white */

    color: #48484A;
  }
}

> text {
  font-family: var(--font-Pretendard);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  text-align: center;
  letter-spacing: 0.05em;
  text-transform: capitalize;

  /* white */

  color: #FFFFFF;
}
`;

const SelectButtonContainer = styled.div`
display: flex;
position: relative;
flex-direction: column;

width: 100%;
height: 154px;
`;

const SelectionButton = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 4px;

width: 100%;
height: 50%;
`;

const DetailProfileContainer = styled.div`
width : 100vw;
height : 100vh;
overflow-x: hidden;
overflow-y: scroll;
`;

const Contents = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 8px;

width: 100%;
height: 76px;

&.long {
  height : 105px;
}
`;

const ContentsTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;

  width: 100%;
  height: 21px;

  &.long {
    height : 50px;
  }

  > text{
    margin-left: 20px;
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 150%;
    /* identical to box height, or 21px */
    letter-spacing: 0.5px;
    /* Text Black */
    color: #000000;
  }

  > span {
    margin-left: 20px;
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 150%;
    /* identical to box height, or 21px */
    letter-spacing: 0.5px;
    /* Text Black */
    color: #888888;
  }
`;
const ContentsWindow = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  

  width: 92.05%;
  height: 47px;
  /* white */

  background: #FFFFFF;
  /* SystemGray/400 */

  border: 0.5px solid #BCBCC0;
  border-radius: 10px;
  &.tag {
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }
  &.fixed {
    > text {
      color: #A39EA3;
    }
  }

  > text {
    margin-left: 14px;
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    /* identical to box height, or 21px */

    letter-spacing: 0.5px;

    /* dzz_iconGrey */

    color: #48484A;

    > span {
      color : #FF477E;
    }
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  margin-left : 14px;

  width: 100%;
  height: 22px;

  > text {
    overflow: hidden;
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    /* identical to box height, or 21px */

    letter-spacing: 0.5px;

    /* dzz_pink */

    color: #48484A;

    > span {
      color : #FF477E;
    }
  }
`;

const ContentsName = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 7px;
width: 100%;
height: 44px;
background: #FFFFFF;
margin-top : 15px;
text-decoration : underline; // 줄의 위치, underline : 밑줄
text-decoration-color : red; // 밑줄의 색
text-decoration-thickness: 2px;//밑줄의 두께
text-underline-offset : 5px; //밑줄과 텍스트와의 간격



> text {
  margin-left: 20px;
  font-family: var(--font-Pretendard);
  font-style: normal;
  font-weight: 510;
  font-size: 17px;
  line-height: 150%;
  /* identical to box height, or 26px */
  letter-spacing: 0.5px;
  /* dzz_pink */
  color: #000000;
}

> text > span {
  color : #FF477E;
}
`;



const ContentsContainer = styled.div`
display: flex;
position: relative;
flex-direction: column;
align-items: flex-start;
padding: 0px;
width: 100%;
height : 1550px;
left: 0px;
top : 0%;

`;

const ContentsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;

  width: 100%;
  height: 100px;

  &.long {
    height : 140px
  }
`;
