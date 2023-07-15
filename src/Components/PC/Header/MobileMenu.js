import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { ReactComponent as Logo } from "../../../assets/webLogo.svg";
import { useNavigate } from "react-router-dom";
import StateSlice from "features/State/StateSlice";
import { useDispatch } from "react-redux";
function MobileMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <MobileContainer>
      <MenuTop>
        <MenuTopLeft>
          <text>메뉴</text>
        </MenuTopLeft>
        <MenuTopRight
          onClick={() => {
            navigate("/pc");
          }}
        >
          <CloseIcon />
        </MenuTopRight>
      </MenuTop>
      <MenuMain>
        <Content>
          <ContentContainer
            onClick={() => {
              navigate("/pc");
            }}
          >
            <text>메인으로 돌아가기</text>
          </ContentContainer>
        </Content>
        <Horizontal></Horizontal>
        <Content>
          <ContentContainer
            onClick={() => {
              dispatch(StateSlice.actions.isDzz(true));
              dispatch(StateSlice.actions.isStatic(false));
              dispatch(StateSlice.actions.isFrame(false));
              dispatch(StateSlice.actions.isFAQ(false));
              navigate("/pc");
            }}
          >
            <text>단짠단짠</text>
          </ContentContainer>
        </Content>
        <Content>
          <ContentContainer
            onClick={() => {
              // https://www.notion.so/URL-802ee347ca324ff48616617bd4931627?pvs=4
              dispatch(StateSlice.actions.isFrame(true));
              dispatch(StateSlice.actions.isStatic(false));
              dispatch(StateSlice.actions.isDzz(false));
              dispatch(StateSlice.actions.isFAQ(false));
              navigate("/pc");
            }}
          >
            <text>단짠 가이드</text>
          </ContentContainer>
        </Content>
        <Content>
          <ContentContainer
            onClick={() => {
              dispatch(
                StateSlice.actions.URL("https://dzzdzz-notice.stibee.com/")
              );
              dispatch(StateSlice.actions.isFrame(true));
              dispatch(StateSlice.actions.isStatic(false));
              dispatch(StateSlice.actions.isDzz(false));
              dispatch(StateSlice.actions.isFAQ(false));
            }}
          >
            <text>공지사항</text>
          </ContentContainer>
        </Content>
        <Content>
          <ContentContainer
            onClick={() => {
              dispatch(StateSlice.actions.isFrame(false));
              dispatch(StateSlice.actions.isStatic(true));
              dispatch(StateSlice.actions.isDzz(false));
              dispatch(StateSlice.actions.isFAQ(false));
            }}
          >
            <text>통계리포트</text>
          </ContentContainer>
        </Content>
        <Horizontal></Horizontal>
        {/* <Content><ContentContainer><text>제휴문의</text></ContentContainer></Content>
            <Content><ContentContainer><text>광고문의</text></ContentContainer></Content> */}
        <Content>
          <ContentContainer
            onClick={() => {
              navigate("/Terms");
            }}
          >
            <text>이용약관</text>
          </ContentContainer>
        </Content>
        <Content>
          <ContentContainer
            onClick={() => {
              navigate("/Privacy");
            }}
          >
            <text>개인정보 처리방침</text>
          </ContentContainer>
        </Content>
      </MenuMain>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </MobileContainer>
  );
}

export default MobileMenu;

const MobileContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const LogoContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100px;
  height: 41px;
  left: 70%;
  bottom: 5.21%;
`;

const MenuTop = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 50px;
  top: 4.5%;
`;

const MenuTopLeft = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  left: 32px;
  width: 30%;
  height: 32px;

  > text {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    /* identical to box height, or 30px */

    text-align: center;
    letter-spacing: 0.5px;

    /* Text Black */

    color: #000000;
  }
`;

const MenuTopRight = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  right: 32px;
`;

const MenuMain = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  top: 9%;
  width: 100%;
  height: 85.55%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 7.7%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  width: 89.74%;
  height: 73.85%;

  > text {
    margin-left: 20px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    /* identical to box height, or 24px */
    text-align: center;
    letter-spacing: 0.5px;
    /* Text Black */
    color: #000000;
  }
`;

const Horizontal = styled.div`
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 11.46px;
  background: #ffffff;
  /* Text Gray */
  border-bottom: 0.3px solid #888888;
`;
