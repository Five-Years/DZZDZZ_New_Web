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
  flex: 1;
  position: relative;
  justify-content: center;

  @media screen and (max-width: 800px) {
    /* 전체 가로 390 세로 844px 중 헤더부분은 가로 390 세로 중 */
    display: flex;
    flex: 1;
    position: relative;
    justify-content: center;
    background-color: yellow;
  }
`;

//헤더 컨텐츠 배치할 영역 구분
const HeaderContainer = styled.div`
  display: flex;
  flex: 1;
  position: relative;

  /* @media screen and (max-width: 800px) {
    display: ;
   
  } */
`;

//컨텐츠 배치 예정 영역
const HeaderContentContainer = styled.div`
  display: flex;
  flex: 1;
  /* justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 44px; */

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
  }
`;
