import React,{useEffect, useState} from 'react';
import './App.css';
import styled from 'styled-components';
import MainHeader from './Components/MainHeader';
import Footer from './Components/Footer';
import Inquiry from './Components/Inquiry';
import { useSelector, useDispatch } from 'react-redux';
import { AnimatePresence } from "framer-motion";

function App() {
  const Popup = useSelector((state) => {return state.Popup.value});
  const [Rendering, setRendering] = useState(false)
  useEffect(()=> {
    if(Popup)
      setRendering(true)
  }, [Popup])

  return (
    <div className="App">
      <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width" />
        <MainFrame>
        <MainHeader />
        <Footer />
        </MainFrame>
        {/* 애니메이션 효과 추가하기 */}
        {/* framer motion */}
        <AnimatePresence>
        <Inquiry />
        </AnimatePresence>
    </div>
  );
}

// 안드로이드는 open-sans
// 맥북은 sf pro

export default App;

const MainFrame = styled.div`
  width : 100%;
  height : 100%;
`;


