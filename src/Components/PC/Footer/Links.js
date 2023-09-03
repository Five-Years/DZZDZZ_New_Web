import React from "react";
import StateSlice from "../../../features/State/StateSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Links() {
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
        <a
          onClick={() => {
            window.open("https://dzzdzz.oopy.io/policy/terms");
          }}
        >
          이용약관
        </a>
        <a
          className="pc"
          onClick={() => {
            window.open("https://dzzdzz.oopy.io/policy/privacy");
          }}
        >
          개인정보 처리방침
        </a>
        <a
          className="pc"
          onClick={() => {
            window.open("https://dzzdzz.oopy.io/marketing");
          }}
        >
          마케팅 이용약관
        </a>
      </Link>
      <Link className="Mobile">
        <a
          onClick={() => {
            navigate("/Privacy");
          }}
        >
          개인정보 처리방침
        </a>
      </Link>
      <Link className="Mobile">
        <a
          onClick={() => {
            navigate("/Marketing");
          }}
        >
          마케팅 이용약관
        </a>
      </Link>
    </MobileWrapper>
  );
}

export default Links;

const MobileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    display: none;
    width: 30%;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;
    height: 10%;
    /* background-color: yellow; */
  }
`;

const Link = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 400px;
  justify-content: flex-end;

  /* align-items: center; */
  /* box-sizing: border-box; */

  /* Auto layout */

  /* align-items: center;
  justify-content: center; */
  color: white;
  gap: 24px;
  text-underline-offset: 3px;

  > a {
    :active {
      opacity: 0.5;
    }
    cursor: pointer;

    font-family: var(--font-Pretendard);

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    /* identical to box height */

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
    height: 100%;

    > a {
      width: 120px;
      height: 18px;

      font-family: var(--font-Pretendard);
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
