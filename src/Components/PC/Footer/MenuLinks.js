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
      <Link>
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
        <text onClick={()=> {              dispatch(StateSlice.actions.isDzz(true));
              dispatch(StateSlice.actions.isStatic(false));
              dispatch(StateSlice.actions.isFrame(false));
              dispatch(StateSlice.actions.isFAQ(false))}}>단짠단짠</text>
        <text onClick={() => {
                dispatch(StateSlice.actions.isFrame(false));
                dispatch(StateSlice.actions.isStatic(true));
                dispatch(StateSlice.actions.isDzz(false))
                dispatch(StateSlice.actions.isFAQ(false))


              }}>단짠가이드</text>
        <text onClick={() => {
                dispatch(StateSlice.actions.URL("https://dzzdzz-notice.stibee.com/"));
                dispatch(StateSlice.actions.isFrame(true));
                dispatch(StateSlice.actions.isStatic(false));
                dispatch(StateSlice.actions.isDzz(false))
                dispatch(StateSlice.actions.isFAQ(false))

              }}>공지사항</text>
        <text               onClick={() => {
                dispatch(StateSlice.actions.isFrame(false));
                dispatch(StateSlice.actions.isStatic(true));
                dispatch(StateSlice.actions.isDzz(false))
                dispatch(StateSlice.actions.isFAQ(false))


              }}>통계리포트</text>
        <text onClick={()=> {
                              dispatch(StateSlice.actions.isFrame(false));

                              dispatch(StateSlice.actions.isStatic(false));
                              dispatch(StateSlice.actions.isDzz(false))
                              dispatch(StateSlice.actions.isFAQ(true))



            }}>FAQ</text>

      </Link>
      <Link className="Mobile">
        <a href="#" onClick={()=> {
          navigate("/Privacy")
        }}>개인정보 처리방침</a>
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
    padding: 0px;
    gap: 20px;
    width: 216px;
    height: 56px;
  }
`;

const Link = styled.div`
  box-sizing: border-box;

  > text {
    font-family: var(--font-Pretendard);
    font-size: 14px;
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
  text-underline-offset : 3px;
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
