import React from "react";
import "./App.css";
import styled from "styled-components";
import HeaderMain from "./Header/HeaderMain";
import Footer from "./Footer/Footer";
import Inquiry from "./Inquiry/Inquiry";
import HeaderBar from "./Header/HeaderBar";
import HeaderMain2 from "./Header/HeaderMain2";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <meta
        name="viewport"
        content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width"
      />
      {/* user-scalable=no, 모바일 화면에서 input창 확대되는것 방지 */}
      <MainFrame>
        <HeaderBar />

        <HeaderMain2 />
        <Footer />
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
  width: 100%;
  height: 100%;
`;
