import React from "react";
import styled from "styled-components";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../Footer/Footer";
import StateSlice from "../../../features/State/StateSlice";

function HeaderMain2() {
  const Popup = useSelector((state) => {
    return state.Popup.value;
  });
  const dispatch = useDispatch();
  return (
    <HeaderBackground
      onClick={() => {
        Popup ? dispatch(StateSlice.actions.Popup()) : <></>;
      }}
      style={{ backgroundColor: Popup ? "rgba(35, 24, 21, 0.3)" : "white" }}
    >
      <HeaderContainer>
        <HeaderContentContainer>
          {/* <HeaderLeft /> */}
          <HeaderRight />
        </HeaderContentContainer>
      </HeaderContainer>
    </HeaderBackground>
  );
}

export default HeaderMain2;

//전체 헤더부분
const HeaderBackground = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: center;
  background-color: yellow;

  @media screen and (max-width: 800px) {
    /* 전체 가로 390 세로 844px 중 헤더부분은 가로 390 세로 중 */
    width: 100vw;
    height: 55.3vh;
  }
`;

//헤더 컨텐츠 배치할 영역 구분
const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position  : relative;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;

//컨텐츠 배치 예정 영역
const HeaderContentContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 44px;

  width: 100%;
  height: 100%;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
    justify-content: center;
  }
`;
