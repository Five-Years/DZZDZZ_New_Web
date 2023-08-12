import React from "react";
import StateSlice from "../../../features/State/StateSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function MenuLinks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <MobileWrapper>
      <Link className="pc">
        {/* <a
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
        </a> */}
        <text
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
        </text>
        <text
          onClick={() => {
            dispatch(StateSlice.actions.URL("https://dzz-guide.stibee.com"));
            dispatch(StateSlice.actions.isFrame(true));
            dispatch(StateSlice.actions.isStatic(false));
            dispatch(StateSlice.actions.isDzz(false));
            dispatch(StateSlice.actions.isFAQ(false));
            dispatch(StateSlice.actions.isNotice(false));
            dispatch(StateSlice.actions.isGuide(true));
          }}
        >
          단짠가이드
        </text>
        <text
          onClick={() => {
            dispatch(
              StateSlice.actions.URL("https://dzzdzz-notice.stibee.com/")
            );
            dispatch(StateSlice.actions.isFrame(true));
            dispatch(StateSlice.actions.isStatic(false));
            dispatch(StateSlice.actions.isDzz(false));
            dispatch(StateSlice.actions.isFAQ(false));
            dispatch(StateSlice.actions.isNotice(true));
            dispatch(StateSlice.actions.isGuide(false));
          }}
        >
          공지사항
        </text>
        <text
          onClick={() => {
            dispatch(StateSlice.actions.isFrame(false));
            dispatch(StateSlice.actions.isStatic(true));
            dispatch(StateSlice.actions.isDzz(false));
            dispatch(StateSlice.actions.isFAQ(false));
            dispatch(StateSlice.actions.isNotice(false));
            dispatch(StateSlice.actions.isGuide(false));
          }}
        >
          통계리포트
        </text>
        <text
          onClick={() => {
            dispatch(StateSlice.actions.isFrame(false));

            dispatch(StateSlice.actions.isStatic(false));
            dispatch(StateSlice.actions.isDzz(false));
            dispatch(StateSlice.actions.isFAQ(true));
            dispatch(StateSlice.actions.isNotice(false));
            dispatch(StateSlice.actions.isGuide(false));
          }}
        >
          FAQ
        </text>
      </Link>
      <Link className="Mobile">
        <a
          href="#"
          onClick={() => {
            window.open(
              "https://dzzdzz.notion.site/78dbf85d5258479badc2f8eaf31c297f?pvs=4"
            );
          }}
        >
          이용약관
        </a>
        <a
          href="#"
          onClick={() => {
            window.open(
              "https://dzzdzz.notion.site/d48fbfd46b354eda9c71543bfbe1b0ee?pvs=4"
            );
          }}
        >
          개인정보 처리방침
        </a>
        <a
          href="#"
          onClick={() => {
            window.open(
              "https://dzzdzz.notion.site/461ea44398c042a585db3cb78647ba3c?pvs=4"
            );
          }}
        >
          마케팅 이용약관
        </a>
      </Link>
    </MobileWrapper>
  );
}

export default MenuLinks;

const MobileWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    padding: 0px;
    width: 100%;
    height: 100%;
  }
`;

const Link = styled.div`
  box-sizing: border-box;

  > text {
    font-family: var(--font-Pretendard);
    font-size: 12px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;

    :hover {
      cursor: pointer;
      opacity: 50%;
    }
  }

  /* Auto layout */

  display: flex;
  align-items: flex-start;
  color: white;
  gap: 24px;
  text-underline-offset: 3px;
  > a {
    :active {
      opacity: 0.5;
    }

    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
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
    /* gap: 24px; */

    width: 100%;
    height: 18px;

    > a {
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
    &.pc {
      display: none;
    }
    &.Mobile {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
      gap: 24px;
    }
  }
`;
