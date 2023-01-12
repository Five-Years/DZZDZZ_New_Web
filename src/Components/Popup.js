import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function Popup() {
  return (
        <PopupContainer>
        <PopupClose>
          <CloseIcon />
        </PopupClose>
        <PopupTop>
        <PopupImage>
          <img className='team' src={require('../assets/dz.jpg')} alt="이미지" />
        </PopupImage>
        <PopupText>
          다운로드 하러가기
        </PopupText>
        <PopupDown>
          <KeyboardDoubleArrowDownIcon/>
        </PopupDown>

        </PopupTop>
        <PopupDivder></PopupDivder>
        <ButtonContainer>
          <AndroidButton>
            <img src={require('../assets/GooglePlayLogo.png')} alt=""/>
            <img src={require('../assets/AndroidLogo2.png')} alt=""/>
          </AndroidButton>
          <IosButton>
            <img src={require('../assets/AppStoreLogo.png')} alt=""/>
            <img src={require('../assets/AppleLogo.png')} alt=""/>
          </IosButton>
        </ButtonContainer>
      </PopupContainer>  )
}

export default Popup

const PopupContainer = styled.div`
box-sizing: border-box;

/* Auto layout */
position : relative;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px 0px;
gap: 12px;
isolation: isolate;

width: 264px;
height: 301px;

/* white */

background: #FFFFFF;
border-width: 1px 4px 4px 1px;
border-style: solid;
border-color: #000000;
box-shadow: 0px 0px 16px rgba(255, 71, 126, 0.5);
border-radius: 23px;

@media screen and (max-width:480px){
  display : none;
}

`;

const PopupTop = styled.div`

display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 19px;

width: 264px;
height: 129px;

@media screen and (max-width:480px){
  display: flex;
flex-direction: column;
align-items: center;
padding: 0px 30px;
gap: 10px;

position: absolute;
width: 390px;
height: 63.04px;
left: 0px;
top: 94px;
}


`;

const PopupImage = styled.div`
width: 92px;
height: 49px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`;

const PopupText = styled.div`
width: 264px;
height: 18px;

font-family: 'PFStardust';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 18px;
/* identical to box height, or 112% */

text-align: center;
letter-spacing: 0.1px;

/* FY_black */

color: #231815;

`;

const PopupClose = styled.div`
position: absolute;
width: 24px;
height: 24px;
right: 16px;
top: 16px;
`;

const PopupDown = styled.div`
/* CaretDoubleDown */
width: 24px;
height: 24px;

`;

const PopupDivder = styled.div`
/* divider */
width: 260px;
height: 0px;

/* dzz_iconGrey */
border: 1px solid #A39EA3;

`;

const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 12px;

width: 264px;
height: 108px;
`;
const AndroidButton = styled.div`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 24px;
gap: 10px;

width: 184px;
height: 48px;

/* SystemGreen/Light */

background: #34C759;
/* dzz_grey */

border-width: 1px 2px 2px 1px;
border-style: solid;
border-color: #49516F;
border-radius: 6px; 
`;
const IosButton = styled.div`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 24px;
gap: 10px;

width: 184px;
height: 48px;

/* HandBlue/Primary/Light */

background: #007DFE;
/* dzz_grey */

border-width: 1px 2px 2px 1px;
border-style: solid;
border-color: #49516F;
border-radius: 6px;
`;