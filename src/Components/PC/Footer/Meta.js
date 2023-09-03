import React from "react";
import styled from "styled-components";
import { ReactComponent as FYLogo } from "assets/FYlogo.svg";
function Meta() {
  return (
    <MetaContainer>
      <CorporateContainer>
        {" "}
        <ContentLogo>
          <FYLogo />
        </ContentLogo>
        <ContentInformation>
          <Information>
            <text>사업자명 서화 | 대표자 이찬 | 사업자번호 295-40-01132</text>
            <text>통신판매번호 제2023-서울마포-2018호</text>
          </Information>
          <Information>
            <text>
              서울특별시 서초구 마방로6길 13, 4층 4193호(양재동, 범정빌딩)
            </text>
          </Information>
          <Information>
            <text>
              고객센터 &nbsp;&nbsp;&nbsp; 0507-0177-1683 &nbsp;|&nbsp;
            </text>
            <text>5iveyears.official@gmail.com &nbsp;|&nbsp;</text>
            <text>dzzdzz.official@gmail.com</text>
          </Information>
        </ContentInformation>
      </CorporateContainer>
      <ContentSns>
        <img
          src={require("../../../assets/Instagram.png")}
          onClick={() => {
            window.open(
              "https://instagram.com/dzzdzz_official?igshid=YmMyMTA2M2Y="
            );
          }}
          alt=""
        />
        <img
          src={require("assets/openchat.png")}
          onClick={() => {
            window.open("https://pf.kakao.com/_Wgxgxmb");
          }}
          alt=""
        />
      </ContentSns>
    </MetaContainer>
  );
}

export default Meta;

const MetaContainer = styled.div`
  display: flex;
  flex: 5;
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;

  @media screen and (max-width: 800px) {
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;

const CorporateContainer = styled.div`
  display: flex;
  flex: 3;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 90%;
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }
`;

const ContentLogo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px;

  /* width: 20%;
  height: 100%; */

  @media screen and (max-width: 800px) {
    width: 30%;
    height: 35%;
    justify-content: start;

    > img {
      width: 60%;
      height: 100%;
    }
  }
`;

const ContentInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  padding: 0px;

  width: 100%;
  height: 60%;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 75%;
    position: relative;
  }
`;

const ContentSns = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 0px;
  gap: 40px;

  align-items: start;
  justify-content: start;

  > img {
    :active {
      opacity: 0.5;
    }
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    width: 50%;
    height: 10%;
    align-items: center;
    justify-content: center;
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: start;
  padding: 0px;
  width: auto;

  > text {
    font-family: var(--font-Pretendard);
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    /* text-align: center; */
    color: white;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 0px;
    width: 100%;
    /* height: 33%; */
    /* gap: 6px; */

    > text {
      font-family: var(--font-Pretendard);
      color: var(--white, #fff);
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      /* line-height: normal; q */
    }
  }
`;

const InformationTopic = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  /* gap: 10px; */

  width: 80px;
  height: 19px;

  > span {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    /* white */

    color: #ffffff;
  }
  @media screen and (max-width: 800px) {
    width: 70px;
    height: 16px;

    > span {
      font-size: 12px;
      line-height: 16px;
    }
  }
`;
const InformationTopicDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;

  height: 19px;

  > span {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: start;

    /* white */

    color: #ffffff;
  }

  @media screen and (max-width: 800px) {
    width: 200px;
    height: 16px;

    > span {
      font-size: 12px;
      line-height: 16px;
    }
  }
`;
