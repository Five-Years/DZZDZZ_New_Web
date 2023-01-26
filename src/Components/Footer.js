import React from "react";
import styled from "styled-components";
import StateSlice from "../features/State/StateSlice";
import { useDispatch } from "react-redux";

function Footer() {
    const dispatch = useDispatch();

  return (
    <FooterContainer>
      <FooterContentContainer>
        <ContentContainer>
          <Content>
            <ContentLink>
              <MobileWrapper>
                <Link>
                  <a
                    href="#"
                    onClick={() => {
                      dispatch(StateSlice.actions.Popup());
                      dispatch(StateSlice.actions.Number(1));
                    }}
                  >
                    제휴문의
                  </a>
                  <a
                    href="#"
                    onClick={() => {
                      dispatch(StateSlice.actions.Popup());
                      dispatch(StateSlice.actions.Number(2));
                    }}
                  >
                    광고문의
                  </a>
                  <a href="http://www.naver.com">이용약관</a>
                  <a className="pc" href="http://www.naver.com">
                    개인정보 처리방침
                  </a>
                </Link>
                <Link className="Mobile">
                  <a href="http://www.naver.com">개인정보 처리방침</a>
                </Link>
              </MobileWrapper>
            </ContentLink>
            <ContentLogo>
              <img src={require("../assets/5Years.png")} alt="" />
            </ContentLogo>
            <ContentInformation>
              <Information>
                <InformationTopic>
                  <span>사업자번호</span>
                </InformationTopic>
                <InformationTopicDetail>
                  <span>123-456-78910</span>
                </InformationTopicDetail>
              </Information>
              <Information>
                <InformationTopic>
                  <span>대표번호</span>
                </InformationTopic>
                <InformationTopicDetail>
                  <span>010-8646-8516</span>
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
              <img src={require("../assets/facebook.png")} alt="" />
              <img src={require("../assets/Instagram.png")} alt="" />
              <img src={require("../assets/Github.png")} alt="" />
            </ContentSns>
          </Content>
        </ContentContainer>
      </FooterContentContainer>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  width: 100vw;
  height: 42.5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #231815;

  @media screen and (max-width: 800px) {
    /* 전체 가로 390 세로 844px 중 헤더부분은 가로 390 세로 중 */
    height: 44.7vh;
    padding: 0px;
  }
`;

const FooterContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 30px;
  gap: 10px;

  width: 71.9%;
  height: 100%;

  @media screen and (max-width: 800px) {
    align-items: flex-start;
    padding: 0px;
    gap: 10px;

    width: 84.6%;
    height: 77%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 94.2%;
  height: 100%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;

  width: 93.8%;
  height: 81.6%;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
  }
`;

const ContentLink = styled.div`
  width: 385px;
  height: 136px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 0px 30px;
    /* gap: 10px; */

    width: 100%;
    height: 49%;
  }
`;

const MobileWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;

    width: 216px;
    height: 56px;
  }
`;

const Link = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  align-items: flex-start;
  color: white;
  gap: 24px;


  > a {
    :active {
        opacity : 0.5;
    }

    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;
    /* border-bottom: 1px solid #FFFFFF; */
    color: white;
  }

  &.Mobile {
    display: none;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;

    width: 100%;
    height: 18px;

    > a {
      width: 120px;
      height: 18px;

      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 18px;
      /* identical to box height */

      display: flex;
      align-items: center;
      text-align: center;
    }

    > a.pc {
      display: none;
    }

    &.Mobile {
      display: block;
    }
  }
`;

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
