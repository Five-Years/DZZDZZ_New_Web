import React from "react";
import styled from "styled-components";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { ClassNames } from "@emotion/react";

function Matching2() {
  return (
    <MatchingContainer>
      <ContentContainer>
        <ContentLeft>
          <ArrowBackIosIcon style={{marginLeft : "20px", width : "28px", height : "28px"}}/>
        </ContentLeft>
        <ContentTitle>
          <text></text>
        </ContentTitle>
        <ContentRight>
          <MoreHorizIcon style={{width: "32px", height : "32px", marginRight : "20px"}} />
        </ContentRight>
      </ContentContainer>
      <ProfileImageContainer>
        <img src={require("./assets/mango.jpg")} alt="이미지" />
        <Frame6887></Frame6887>
      </ProfileImageContainer>
      <IntroduceContainer>
        <TextContainer>
          <text>학교에서 과제만 하기엔 너무 아쉽지 않아?</text>
        </TextContainer>
        <img
          src={require("./assets/arrow.png")}
          onClick={() => {
            "확장 감소";
          }}
        />
      </IntroduceContainer>
      <ProfileNameContainer>
        <ProfileName>
          <img src={require("./assets/CircleWavyCheck.png")} />
          <text>단짠지기임당</text>
        </ProfileName>
      </ProfileNameContainer>
      <SelectionContainer>
        <Selection>
            <Option>
              <img src={require("./assets/Like.png")} />
              <text className="select">선택하기</text>
            </Option>
        </Selection>
        <Selection>
          
            <Option>
              <img src={require("./assets/Close.png")} />
              <text className="reject">거절하기</text>
            </Option>
        </Selection>
      </SelectionContainer>
      <DetailContainer>
        <KeyboardDoubleArrowUpIcon color="disabled" fontSize="large" />
        <Frame69412>
          <text>자세히 보기</text>
        </Frame69412>
      </DetailContainer>
    </MatchingContainer>
  );
}

export default Matching2;

const MatchingContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: white;
`;


const Option = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 17px;
  width : 37.95%;
  top : 10%;
  min-width: 74px;
  height: 82px;
  > img {
    width: 35px;
    height: 35px;
  }

  > text {
    width: 80px;
    height: 30px;

    font-family: var(--font-Poppins);
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height */

    text-align: center;

    /* dzz_pink */

    color: #ff477e;
  }

  > text.reject {
    color: #0094ff;
  }
`;

const TextContainer = styled.div`
  width : 53.33%;
  min-width: 208px;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;

  > text {
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #888888;
  }
`;

const ProfileNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 100%;
  height: 24px;
  top: 58.89%;
`;

const ProfileName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 33.5%;
  min-width : 340px;
  height: 24px;

  > img {
    width: 24px;
    height: 24px;
  }

  > text {
    width: 130px;
    height: 22px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 22px;
    /* identical to box height, or 116% */

    text-align: center;
    letter-spacing: -0.408px;

    /* Text Black */

    color: #000000;
  }
`;

// const Frame6887 = styled.div``;
const SelectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100px;
  left: 0px;
  top: 67.78%;
`;

const Selection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 100%;
  height: 58px;
  top: 86%;

  > KeyboardDoubleArrowUpIcon {
    width: 40px;
    height: 40px;
  }
`;

const Frame69412 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;

  width: 80px;
  height: 22px;

  > text {
    width: 80px;
    height: 22px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    /* identical to box height, or 147% */

    text-align: center;
    letter-spacing: -0.408px;

    /* Text Gray */

    color: #888888;
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
  height: 68px;
  border-bottom: 0.3px solid #888888;
`;

const ContentLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  width: 33.33%;
  height: 100%;
`;

const ContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 130px;
  height: 32px;
`;

const Frame6887 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 131px;

  width: 67px;
  height: 7px;
`;

const IntroduceContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 22px;
  top: 62.8%;

  > img {
    width: 20px;
    height: 20px;
    transform: rotate(90deg);
  }
`;

const ContentRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;


  width: 33.33%;
  height: 100%;
`;

const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  position: absolute;
  top : 68px;
  width: 100%;
  height: 46.74%;

  > img {
    width: 100%;
    height: 100%;
  }
`;

const Frame6880 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 17px;

  width: 100px;
  height: 32px;
`;
