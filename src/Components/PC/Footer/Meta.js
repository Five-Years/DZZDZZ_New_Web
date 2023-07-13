import React from "react";
import styled from "styled-components";
function Meta() {
  return (
    <>
    <CorporateContainer>      <ContentLogo>
        <img src={require("../../../assets/5Years.png")} alt="" />
      </ContentLogo>
      <ContentInformation>
        <Information>
          <text>사업자명 &nbsp;&nbsp;&nbsp;서화 | 대표자 이찬 | 사업자번호 295-40-01132 | 통신판매번호 제2023-서울마포-2018호</text>
        </Information>
        <Information>
        <text>주소 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서울 특별시 마포구 희우정로 10길 28 3층 3-20호 플랙스홈 (망원동)</text>
        </Information>
        <Information>
        <text>고객센터 &nbsp;&nbsp;&nbsp; 0507-0177-1683 | 5iveyears.official@gmail.com | dzzdzz.official@gmail.com</text>
        </Information>
      </ContentInformation></CorporateContainer>
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
    </>
  );
}

export default Meta;

const CorporateContainer = styled.div`
display: flex;
width : 100%;
height : 45%;
`;

const ContentLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px;

  width: 15%;
  height: 100%;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 15.7%;

    > img {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px;
      gap: 10px;

      width: 60px;
      height: 45.56px;
    }
  }
`;

const ContentInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 6px;

  width: 85%;
  height: 100%;

  @media screen and (max-width: 800px) {
    padding: 0px;
    gap: 20px;

    width: 100%;
    height: 28.2%;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 9px;

    width: 248px;
    height: 82px;
  }
`;

const ContentSns = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 40px;

  width: 15%;
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
    display: none;
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  width: 60%;
  height: 30%;

  > text {
    font-family: var(--font-Pretendard);    
font-size: 14px;
font-weight: 400;
line-height: 17px;
letter-spacing: 0em;
text-align: center;
color : white;

  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;

    width: 100%;
    height: 82px;
    gap: 6px;
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
