import React from 'react'
import styled from 'styled-components'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { ReactComponent as Authen } from "./assets/authen.svg";

function DetailProfile() {
  return (
    <DetailProfileContainer>
      <DetailHeader><HeaderLeft><KeyboardArrowDownIcon style={{transform : "rotate(90deg)", marginLeft : "30px", width:"32px", height : "32px"}}/></HeaderLeft><HeaderName><Authen/><text>단짠지기임당</text></HeaderName><HeaderRight><MoreHorizIcon style={{marginRight : "30px"}}/></HeaderRight></DetailHeader>
      <ContentsContainer></ContentsContainer>
    </DetailProfileContainer>
  )
}

export default DetailProfile

const DetailProfileContainer = styled.div`
width : 100vw;
height : 100vh;
overflow-x: hidden;
overflow-y: scroll;
`;

const DetailHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

position: absolute;
width: 100%;
height: 48px;
left: 0px;
`;

const HeaderLeft = styled.div`
display: flex;
position: relative;
flex-direction: row;
align-items: center;
gap: 5px;

width: 33.33%;
height: 100%;
`;

const HeaderRight = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: end;
padding: 0px;
gap: 10px;

width: 33.33%;
height: 66.66%;
`;

const HeaderName = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 10px;

width: 33.33%;
min-width : 150px;
height: 50%;

>text {
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 22px;
  /* identical to box height, or 116% */

  text-align: center;
  letter-spacing: -0.408px;

  /* Text Black */

  color: #000000;
}
`;


const ContentsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: absolute;
width: 100%;
height: 1543px;
left: 0px;
top : 48px;
`;
