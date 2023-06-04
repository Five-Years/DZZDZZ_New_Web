import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

function DzzDzzIntrodue() {
  const navigate = useNavigate()
  return (
    <DzzDzzContainer>
              <MobileHeaderBar>
        <MobileMenuBar onClick={()=>{navigate("/MobileMenu")}}><MenuIcon style={{width : 32, height : 32}} /></MobileMenuBar>
        {/* <MobileLogoContainer><Logo width={35} height={28} /></MobileLogoContainer> */}
      </MobileHeaderBar>
      <text>단짠단짠 소개글</text>
    </DzzDzzContainer>
  )
}

export default DzzDzzIntrodue

const DzzDzzContainer = styled.div`
width : 100vw;
height : 100vh;
display: flex;
align-items: center;
justify-content: center;

> text {
    font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 150%;
/* identical to box height, or 30px */

text-align: center;
letter-spacing: 0.5px;

/* Text Black */

color: #000000;
}
`;

const MobileHeaderBar = styled.div`
display: none;

@media screen and (max-width: 800px) {
  display: flex;
  width : 100%;
  height : 100%;
  align-items: center;
  justify-content: center;
}
`;


const MobileMenuBar = styled.div`
display: flex;
position: absolute;
width : 8%;
height : 50%;
left : 10px;
`;