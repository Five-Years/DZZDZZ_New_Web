import React,{useEffect, useState} from 'react';
import './App.css';
import styled from 'styled-components';
import MainHeader from './Components/MainHeader';
import Footer from './Components/Footer';
import Question from './Components/Question';
import { useSelector, useDispatch } from 'react-redux';
function App() {
  const Popup = useSelector((state) => {return state.Popup.value});
  const [Rendering, setRendering] = useState(false)
  useEffect(()=> {
    if(Popup)
      setRendering(true)
  }, [Popup])

  return (
    <div className="App">
        <MainFrame>
        <MainHeader />
        <Footer />
        </MainFrame>
        {/* 애니메이션 효과 추가하기 */}
        {/* framer motion */}
        {Rendering ? <Question/> : <></>}
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


