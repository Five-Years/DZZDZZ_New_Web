import React from "react";
import styled from "styled-components";
function Meta() {
  return (
    <MetaContainer>
      <CorporateContainer>
        {" "}
        <ContentLogo>
          <img src={require("../../../assets/5Years.png")} alt="" />
        </ContentLogo>
        <ContentInformation>
          <Information>
            <text>사업자명 서화 | 대표자 이찬 | 사업자번호 295-40-01132</text>
            <text>통신판매번호 제2023-서울마포-2018호</text>
          </Information>
          <Information>
            <text>
              주소 서울 특별시 마포구 희우정로 10길 28 3층 3-20호 플랙스홈
              (망원동)
            </text>
          </Information>
          <Information>
            <text>고객센터 &nbsp;&nbsp;&nbsp; 0507-0177-1683 | </text>
            <text>5iveyears.official@gmail.com</text>
            <text>dzzdzz.official@gmail.com</text>
          </Information>
        </ContentInformation>
      </CorporateContainer>
      <ContentSns>
        <img
          src={require("../../../assets/facebook.png")}
          onClick={() => {
            window.open("https://www.facebook.com/");
          }}
          alt=""
        />
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
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
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
  flex-direction: row;
  width: 100%;
  height: 80%;

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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px;

  width: 20%;
  height: 100%;

  @media screen and (max-width: 800px) {
    width: 30%;
    height: 15%;
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

  width: 80%;
  height: 80%;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 75%;
    position: relative;
  }
`;

const ContentSns = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 40px;

  width: 20%;
  height: 20%;
  align-items: start;
  justify-content: center;

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
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px;

  width: 100%;
  height: 30%;

  > text {
    font-family: var(--font-Pretendard);
    font-size: 14px;
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
    height: 33%;
    /* gap: 6px; */

    > text {
      font-family: var(--font-Pretendard);
      color: var(--white, #fff);
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
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
