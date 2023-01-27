import React from "react";
import StateSlice from "../../features/State/StateSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";

function Links() {
  const dispatch = useDispatch();

  return (
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
  );
}

export default Links;

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
      opacity: 0.5;
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
