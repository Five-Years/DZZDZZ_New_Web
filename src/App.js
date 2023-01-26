import React from 'react';
import './App.css';
import styled from 'styled-components';
import MainHeader from './Components/MainHeader';
import Footer from './Components/Footer';
import Inquiry from './Components/Inquiry';
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width" />
      {/* user-scalable=no, 모바일 화면에서 input창 확대되는것 방지 */}
        <MainFrame>
        <MainHeader />
        <Footer />
        </MainFrame>
        <AnimatePresence>
        <Inquiry />
        </AnimatePresence>
    </div>
  );
}

// 안드로이드는 open-sans
// 맥북은 sf pro로 통일

export default App;

const MainFrame = styled.div`
  width : 100%;
  height : 100%;
`;


