import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../../assets/dzzdzzNew.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import StateSlice from "../../../features/State/StateSlice";
import { useSelector } from "react-redux";
import { backIn } from "framer-motion";

function HeaderBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isDzz = useSelector((state) => {
    return state.Popup.isDzz;
  });

  const isFAQ = useSelector((state) => {
    return state.Popup.isFAQ;
  });

  const isStatic = useSelector((state) => {
    return state.Popup.isStatic;
  });
  const isNotice = useSelector((state) => {
    return state.Popup.isNotice;
  });
  const isGuide = useSelector((state) => {
    return state.Popup.isGuide;
  });
  return (
    <HeaderBarContainer>
      <MobileHeaderBar>
        <MobileMenuBar
          onClick={() => {
            navigate("/MobileMenu");
          }}
        >
          <MenuIcon style={{ width: 32, height: 32 }} />
        </MobileMenuBar>
        {/* <MobileLogoContainer><Logo width={35} height={28} /></MobileLogoContainer> */}
      </MobileHeaderBar>
      <HeaderBarContents>
        <LogoContainer>
          <Logo
            onClick={() => {
              dispatch(StateSlice.actions.URL(false));
              dispatch(StateSlice.actions.isStatic(false));
              dispatch(StateSlice.actions.isFrame(false));
              dispatch(StateSlice.actions.isFAQ(false));
              dispatch(StateSlice.actions.isDzz(false));
              dispatch(StateSlice.actions.isNotice(false));
              dispatch(StateSlice.actions.isGuide(false));

              navigate("/pc");
            }}
          />
        </LogoContainer>
        <MenuContainer>
          <MenuLeft>
            <span
              className={isDzz ? "isClicked" : ""}
              onClick={() => {
                dispatch(StateSlice.actions.isDzz(true));
                dispatch(StateSlice.actions.isStatic(false));
                dispatch(StateSlice.actions.isFrame(false));
                dispatch(StateSlice.actions.isFAQ(false));
                dispatch(StateSlice.actions.isNotice(false));
                dispatch(StateSlice.actions.isGuide(false));
              }}
            >
              단짠단짠
            </span>
            <span
              className={isGuide ? "isClicked" : ""}
              onClick={() => {
                dispatch(
                  StateSlice.actions.URL("https://dzz-guide.stibee.com")
                );
                dispatch(StateSlice.actions.isFrame(true));
                dispatch(StateSlice.actions.isGuide(true));
                dispatch(StateSlice.actions.isStatic(false));
                dispatch(StateSlice.actions.isDzz(false));
                dispatch(StateSlice.actions.isFAQ(false));
                dispatch(StateSlice.actions.isNotice(false));
              }}
            >
              단짠 가이드
            </span>
            <span
              className={isNotice ? "isClicked" : ""}
              onClick={() => {
                dispatch(
                  StateSlice.actions.URL("https://dzzdzz-notice.stibee.com/")
                );
                dispatch(StateSlice.actions.isFrame(true));
                dispatch(StateSlice.actions.isNotice(true));

                dispatch(StateSlice.actions.isStatic(false));
                dispatch(StateSlice.actions.isDzz(false));
                dispatch(StateSlice.actions.isFAQ(false));
                dispatch(StateSlice.actions.isGuide(false));
              }}
            >
              공지사항
            </span>
            <span
              className={isStatic ? "isClicked" : ""}
              onClick={() => {
                dispatch(StateSlice.actions.isFrame(false));
                dispatch(StateSlice.actions.URL(false));
                dispatch(StateSlice.actions.isDzz(false));
                dispatch(StateSlice.actions.isFAQ(false));
                dispatch(StateSlice.actions.isStatic(true));
                dispatch(StateSlice.actions.isNotice(false));
                dispatch(StateSlice.actions.isGuide(false));
              }}
            >
              통계리포트
            </span>
            <span
              className={isFAQ ? "isClicked" : ""}
              onClick={() => {
                dispatch(
                  StateSlice.actions.URL(
                    "https://dzzdzz.notion.site/FAQ-bbd41fcf81eb4c7c8cb09ef7b1bfe8bd?pvs=4"
                  )
                );
                dispatch(StateSlice.actions.isFrame(true));
                dispatch(StateSlice.actions.isStatic(false));
                dispatch(StateSlice.actions.isDzz(false));
                dispatch(StateSlice.actions.isFAQ(true));
                dispatch(StateSlice.actions.isGuide(false));
              }}
            >
              FAQ
            </span>
          </MenuLeft>
          {/*<MenuRight onClick={()=>{navigate("/login")}}><text>로그인</text></MenuRight>*/}
        </MenuContainer>
      </HeaderBarContents>
    </HeaderBarContainer>
  );
}

export default HeaderBar;

const HeaderBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  position: relative;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 800px) {
    flex-direction: row;
    height: 8%;
  }
`;

const MobileHeaderBar = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenuBar = styled.div`
  display: flex;
  position: absolute;
  width: 8%;
  height: 50%;
  left: 10px;
`;

const MobileLogoContainer = styled.div`
  display: flex;
  width: 10%;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const HeaderBarContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 24px;

  width: 83.33%;
  height: 100%;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  width: 43px;
  height: 34px;

  cursor: pointer;
`;

const MenuContainer = styled.div`
  width: 89.42%;
  height: 22px;
  display: flex;
  justify-content: space-between;
`;

const MenuLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px;
  gap: 32px;
  left: 10px;

  position: relative;
  width: 37.91%;
  min-width: 420px;
  height: 100%;

  > span {
    font-family: var(--font-Pretendard);
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: center;

    cursor: pointer;

    :hover {
      text-decoration-line: underline;
      text-decoration-color: red;
      text-decoration-thickness: 3px;
      text-underline-offset: 7px;
      opacity: 0.5;
    }
  }
  > span.isClicked {
    text-decoration-line: underline;
    text-decoration-color: red;
    text-decoration-thickness: 3px;
    text-underline-offset: 7px;
    opacity: 0.5;
  }
`;
const MenuRight = styled.div`
  width: 4.47%;
  min-width: 48px;
  height: 100%;

  > text {
    font-family: "Inter";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 140%;
    /* or 22px */
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    /* FY_black */
    color: #231815;
    cursor: default;

    :hover {
      text-decoration-line: underline;
      text-decoration-color: red;
      text-decoration-thickness: 3px;
      text-underline-offset: 7px;
    }
  }
`;
