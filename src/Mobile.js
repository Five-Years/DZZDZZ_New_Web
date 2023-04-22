import React from 'react'
import styled from 'styled-components'
function Mobile() {
  return (
    <MobileContainer>
      <Rectangle187></Rectangle187>
      <Frame6915>
        <Headerarea>
            <HeaderLeft><Frame6891><img src={require("./assets/Sample.png")}
            alt="이미지"
          /> </Frame6891><text>미쥬미쥬미쥬님 안녕하세요</text></HeaderLeft>
            <HeaderGap />
            <HeaderRight><HeaderRightTitle><text>지금은</text><text><span>시즌2 접수기간</span></text><text>입니다!</text></HeaderRightTitle></HeaderRight>
        </Headerarea>
      </Frame6915>
    </MobileContainer>
  )
}

export default Mobile

const MobileContainer = styled.div`
  width: 100%;
  height: 100%;
  min-width: 390px;
  min-height: 844px;
  background-color: green;
`;

const Rectangle187 = styled.div`
    position: absolute;
    width: 100%;
    height: 418px;
    background: #FF477E;
`;

const Frame6915 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: absolute;
    width: 100%;
    height: 95px;
    left: 0px;
    top: 53px;
`;

const Headerarea = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
width : 100%;
min-width: 390px;
height: 95px;
background-color: blue;
`;

const HeaderLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    /* padding: 9px 9px 9px 25px; */
    width : 233px;
    height: 95px;
    

    > text {
        width: 155px;
        height: 52px;

        font-family : var(--font-OpenSans);        
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 26px;
        /* or 116% */


        /* white */

        color: #FFFFFF;
    }
`;

const Frame6891 = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 9px;

width: 37px;
height: 37px;

> img {
    width: 37px;
    height: 37px;

    /* background: url(2022-12-11 21;49;17.png), #C4C4C4; */
}
`;

const HeaderRight = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    right : 0px;
    width : 33.33%;
    min-width: 130px;
    height: 95px;

    /* FY_yellow */

    background: #FFF100;
`;

const HeaderRightTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    //padding: 9px 0px;
    //gap: 20px;

    width: 110px;
    height: 95px;

    > text {
        width: 110px;
        height: 32px;
        font-family : var(--font-OpenSans);        
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #000000;
        > span {
            font-weight: 600;
        }
    }

`;



const HeaderGap = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
//padding: 9px 20px 9px 9px;
gap: 10px;
width : 6.92%;
min-width: 27px;
height: 95px;
`;