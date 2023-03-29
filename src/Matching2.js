import React from "react";
import styled from "styled-components";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { ClassNames } from "@emotion/react";

function Matching2() {
  return (
    <MatchingContainer>
      <Content>
        <ContentLeft>
          <img src={require("./assets/Vector.png")} alt="이미지" />
        </ContentLeft>
        <ContentTitle>
          <text></text>
        </ContentTitle>
        <ContentRight>
          <Frame6880>
            <img src={require("./assets/DotsThree.png")} alt="이미지" />
          </Frame6880>
        </ContentRight>
      </Content>
      <Frame6931>
        <img src={require("./assets/dzzdzz_logo.png")} alt="이미지" />
        <Frame6887></Frame6887>
      </Frame6931>
      <Frame68872>
        <Group72>
          <text>학교에서 과제만 하기엔 너무 아쉽지 않아?</text>
        </Group72>
        <img
          src={require("./assets/arrow.png")}
          onClick={() => {
            "확장 감소";
          }}
        />
      </Frame68872>
      <Frame6883>
        <Frame6941>
          <img src={require("./assets/CircleWavyCheck.png")} />
          <text>단짠지기임당</text>
        </Frame6941>
      </Frame6883>
      <Frame6942>
        <Frame6933>
          <Frame6933Content>
            <Frame6885>
              <img src={require("./assets/Like.png")} />
              <text className="select">선택하기</text>
            </Frame6885>
          </Frame6933Content>
        </Frame6933>
        <Frame6933>
          <Frame6933Content>
            <Frame6885>
              <img src={require("./assets/Close.png")} />
              <text className="reject">거절하기</text>
            </Frame6885>
          </Frame6933Content>
        </Frame6933>
      </Frame6942>
      <Frame6944>
        <KeyboardDoubleArrowUpIcon color="disabled" fontSize="large" />
        <Frame69412>
          <text>자세히 보기</text>
        </Frame69412>
      </Frame6944>
    </MatchingContainer>
  );
}

export default Matching2;

const MatchingContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  /* white */

  background: #ffffff;
`;

const Frame6933Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //padding: 9px 10px 9px 30px;
  gap: 4px;

  width: 100%;
  height: 100px;
`;

const Frame6885 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 17px;

  width: 74px;
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

const Group72 = styled.div`
  width: 208px;
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
    /* identical to box height */

    display: flex;
    align-items: center;

    /* Text Gray */

    color: #888888;
  }
`;

const Frame6883 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  position: absolute;
  width: 100%;
  height: 24px;
  /* left: 3px; */
  top: 497px;
`;

const Frame6941 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;

  width: 140px;
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
const Frame6942 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px;

  position: absolute;
  width: 100%;
  height: 100px;
  left: 0px;
  top: 572px;
`;

const Frame6933 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 195px;
  height: 100px;
`;

const Frame6944 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  position: absolute;
  width: 100%;
  height: 58px;
  left: 0px;
  top: 750px;

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

const Content = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  position: absolute;
  width: 100%;
  height: 48px;
  left: 0px;
  top: 46px;

  /* Text Gray */

  border-bottom: 0.3px solid #888888;
`;

const ContentLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 5px;

  width: 130px;
  height: 48px;

  > img {
    padding-left: 20px;
    width: 10px;
    height: 20px;
  }
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

const Frame68872 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  position: absolute;
  width: 390px;
  height: 22px;
  left: 50%;
  transform : translate(-50%,0);
  top: 530px;

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
  padding: 0px;
  gap: 10px;

  width: 130px;
  height: 32px;

  > img {
    width: 32px;
    height: 32px;
  }
`;

const Frame6931 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 10px;

  position: absolute;
  width: 100%;
  height: 373px;
  left: 0px;
  top: 94px;

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
