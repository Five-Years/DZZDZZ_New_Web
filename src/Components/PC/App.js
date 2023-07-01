import React from "react";
import "./App.css";
import styled from "styled-components";
import HeaderMain from "./Header/HeaderMain";
import Footer from "./Footer/Footer";
import Inquiry from "./Inquiry/Inquiry";
import HeaderBar from "./Header/HeaderBar";
import HeaderMain2 from "./Header/HeaderMain2";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
function App() {

  const URL = useSelector((state) => {
    return state.Popup.URL;
  });
  const isFrame = useSelector((state) => {
    return state.Popup.isFrame;
  });

  return (
    <div className="App">
      <meta
        name="viewport"
        content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width"
      />
      {/* user-scalable=no, 모바일 화면에서 input창 확대되는것 방지 */}
      <MainFrame>
        <HeaderContainer><HeaderBar /></HeaderContainer>
        {isFrame ? (
          <IFrame>
            <iframe src={URL}/>
          </IFrame>
        ) : (
          <>
            <HeaderMain2 />
            <Footer />
          </>
        )}
      </MainFrame>
      {/* <AnimatePresence>
        <Inquiry />
      </AnimatePresence> */}
    </div>
  );
}

// 안드로이드는 open-sans Ios는 sf pro

export default App;

const MainFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const IFrame = styled.div`
  display: flex;
  width: 100%;
  height: 92%;

  > iframe {
    width : 100%;
    height : 100%;    
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 8%;
`;
