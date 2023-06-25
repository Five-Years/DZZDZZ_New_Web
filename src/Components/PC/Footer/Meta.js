import React from "react";
import styled from "styled-components";
function Meta() {
  return (
    <>
      <ContentLogo>
        <img src={require("../../../assets/5Years.png")} alt="" />
      </ContentLogo>
      <ContentInformation>
        <Information>
          <InformationTopic>
            <span>사업자번호</span>
          </InformationTopic>
          <InformationTopicDetail>
            <span>295-40-01132</span>
          </InformationTopicDetail>
        </Information>
        <Information>
          <InformationTopic>
            <span>대표번호</span>
          </InformationTopic>
          <InformationTopicDetail>
            <span>010-5929-6831</span>
          </InformationTopicDetail>
        </Information>
        <Information>
          <InformationTopic>
            <span>주소</span>
          </InformationTopic>
          <InformationTopicDetail>
            <span>
              서울특별시 마포구 희우정로 10길 28 3-20호 플렉스홈(망원동)
            </span>
          </InformationTopicDetail>
        </Information>
      </ContentInformation>
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
          src={require("../../../assets/Github.png")}
          onClick={() => {
            window.open("https://github.com/orgs/Five-Years");
          }}
          alt=""
        />
      </ContentSns>
    </>
  );
}

export default Meta;

const ContentLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;

  width: 385px;
  height: 91.11px;

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

  width: 451px;
  height: 69px;

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
  align-items: flex-start;
  padding: 0px;
  gap: 30px;

  width: 385px;
  height: 30px;

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

  width: 100%;
  height: 19px;

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
