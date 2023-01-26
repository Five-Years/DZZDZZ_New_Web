import React from "react";
import styled from "styled-components";
import MainPopup from "./MainPopup";
import MainEvent from "./MainEvent";
import { useSelector, useDispatch } from 'react-redux';
import StateSlice from "../features/State/StateSlice";

function MainHeader() {
  const Popup = useSelector((state) => {return state.Popup.value});
  const dispatch = useDispatch()
  return (
    <HeaderBackground onClick={() => {Popup ? dispatch(StateSlice.actions.Popup()) : <></> }}  style = {{backgroundColor : Popup?  "rgba(35, 24, 21, 0.3)" : "white"}}>
      <HeaderContainer>
        <HeaderContentContainer>
          <MainPopup />
          <MainEvent />
        </HeaderContentContainer>
      </HeaderContainer>
    </HeaderBackground>
  );
}

export default MainHeader;

//전체 헤더부분
const HeaderBackground = styled.div`
  width: 100vw;
  height: 57.5vh;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 800px) {
    /* 전체 가로 390 세로 844px 중 헤더부분은 가로 390 세로 중 */
    width: 100vw;
    height: 55.3vh;
  }
`;

//헤더 컨텐츠 배치할 영역 구분
const HeaderContainer = styled.div`
  width: 83.3%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;

//컨텐츠 배치 예정 영역
const HeaderContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 44px;

  width: 776px;
  height: 301px;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
    justify-content: center;
  }
`;
