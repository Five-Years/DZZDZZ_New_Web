import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from "../../../assets/dzzdzzNew.svg";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

function HeaderBar() {
  const navigate = useNavigate();

  return (
    <HeaderBarContainer>
      <MobileHeaderBar>
        <MobileMenuBar onClick={()=>{navigate("/MobileMenu")}}><MenuIcon style={{width : 32, height : 32}} /></MobileMenuBar>
        {/* <MobileLogoContainer><Logo width={35} height={28} /></MobileLogoContainer> */}
      </MobileHeaderBar>
      <HeaderBarContents>
        <LogoContainer><Logo /></LogoContainer>
<MenuContainer><MenuLeft><text onClick={()=>{navigate("/DzzIntroduce")}}>단짠단짠</text><text onClick={()=>{navigate("/DzzIntroduce")}}>단짠 가이드</text><text onClick={()=>{window.open("https://stib.ee/m2o7")}}>공지사항</text><text onClick={()=>{window.open("https://dzzdzz-reprot.stibee.com/")}}>통계리포트</text></MenuLeft>{/*<MenuRight onClick={()=>{navigate("/login")}}><text>로그인</text></MenuRight>*/}</MenuContainer>
      </HeaderBarContents>
    </HeaderBarContainer>
  )
}

export default HeaderBar

const HeaderBarContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0px;

position: absolute;
width: 100%;
height: 80px;

@media screen and (max-width: 800px) {
    flex-direction: row;
    height : 8%;
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

const MobileLogoContainer = styled.div`
display: flex;
width : 10%;
height: 100%;
align-items: center;
justify-content: center;
text-align: center;
`;



const HeaderBarContents = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 24px;

    width: 83.33%;
    height: 100%;

    @media screen and (max-width: 800px) {
    display: none;
  }
`;

const LogoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 10px;

width: 43px;
height: 34px;
`;

const MenuContainer = styled.div`
width: 89.42%;  
height: 22px;
display: flex;
justify-content: space-between;
`;
const MenuLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0px;
    gap: 32px;
    left : 10px;

    position: relative;
    width: 37.91%;
    min-width : 420px;
    height: 100%;
  

    > text {
        font-family: 'Inter';
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 140%;
        display: flex;
        align-items: center;
        text-align: center;
        /* FY_black */
        color: #231815;    
        cursor: default;

      :hover {
        text-decoration-line : underline;
        text-decoration-color: red;
        text-decoration-thickness: 3px;
        text-underline-offset : 7px;
        opacity: 0.5;

      }
      }
    

`;
const MenuRight = styled.div`
    width: 4.47%;
    min-width : 48px;
    height: 100%;

    >text {
      font-family: 'Inter';
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 140%;
    /* or 22px */
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    /* FY_black */
    color: #231815;
    cursor: default;

    :hover {
        text-decoration-line : underline;
        text-decoration-color: red;
        text-decoration-thickness: 3px;
        text-underline-offset : 7px;

      }
    }

`;