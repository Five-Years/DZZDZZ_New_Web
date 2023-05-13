import React from "react";
import styled from "@emotion/styled";
import { ReactComponent as Won } from "../../../assets/won.svg"
import { ReactComponent as Return } from "../../../assets/return.svg"

import {
  PurchasePageContainer,
  PurchasingHeaderContainer,
  BackgroundCards,
  HeaderContainer,
  HeaderLeft,
  HeaderProfile,
  HeaderRight,
  StageContainer,
  PurchasingHeader,
  CardTicket,
  Confirmation,
  PurchasingCardTicket,
} from "../StyledComponent/MatchingStyled";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StateSlice from "../../../features/State/StateSlice";
function Purchasing() {
  const Ticket = useSelector((state) => {
    return state.Popup.ticket;
  });
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(1);
  const listener = (event) => {
    const {data,type} = JSON.parse(event);
    switch (type) {
      case 'buyComplete' :
        {
          alert("구매 성공")
        }
      case 'buyFail ' :
        {
          alert ("구매 실패")
        }
    }
  };

  useEffect(()=> {
    //android
    document.addEventListener("message", (e)=> listener(e.data));
    //ios
    window.addEventListener("message", (e)=> listener(e.data));
    window.ReactNativeWebView?.postMessage(JSON.stringify({type : "onLoad", data : "" }))
    return () => {
      //android
      window.removeEventListener("message", (e)=> listener(e.data));
      //ios
      document.removeEventListener("message", (e)=> listener(e.data));
    }
      },[])
  return (
    <>
      <PurchasePageContainer theme = {theme}>
        <PurchasingHeaderContainer>
          <PurchasingHeader>
          <HeaderContentContainer>
            <HeaderContents>
              <text className="name">미쥬미쥬미쥬님</text>
              <text>안녕하세요!</text>
            </HeaderContents>
          </HeaderContentContainer>
          <text>[친구초대 이벤트로 무료코드 얻기]</text>
          </PurchasingHeader>
        </PurchasingHeaderContainer>
        <PurchasingBoxContainer>
          <PurchasingBox>
            <BoxContent>
              <MyTicket>
              <PurchasingCardTicket>
            {/* 티켓 이미지 */}
            <Confirmation />
            <text>현재 보유 티켓 : {Ticket}</text>
          </PurchasingCardTicket>
              </MyTicket>
              <BuyTicket>
                <TicketContainer><TicketImage><img src={require("../../../assets/ticket1.png")} alt="이미지" /></TicketImage><TicketCount><text>티켓 1개</text></TicketCount><TicketPrice><text>1,500 </text><Won /></TicketPrice><TicketButton onClick={()=> {window.ReactNativeWebView?.postMessage(JSON.stringify({type : "buy", data : "1"})); dispatch(StateSlice.actions.Ticket());}}><text>구매</text></TicketButton></TicketContainer>
                <TicketContainer><TicketImage><img src={require("../../../assets/ticket2.png")} alt="이미지" /></TicketImage><TicketCount><text>티켓 5개</text><text className="bonus">4개 + 보너스 1개</text></TicketCount><TicketPrice><text>6,000 </text><Won /></TicketPrice><TicketButton onClick={()=> {window.ReactNativeWebView?.postMessage(JSON.stringify({type : "buy", data : "4"}))}}><text>구매</text></TicketButton></TicketContainer>
                <TicketContainer><TicketImage><img src={require("../../../assets/ticket3.png")} alt="이미지" /></TicketImage><TicketCount><text>티켓 12개</text><text className="bonus">10개 + 보너스 2개</text></TicketCount><TicketPrice><text>15,000 </text><Won /></TicketPrice><TicketButton onClick={()=> {window.ReactNativeWebView?.postMessage(JSON.stringify({type : "buy", data : "10"}))}}><text>구매</text></TicketButton></TicketContainer>
                <TicketContainer><TicketImage><img src={require("../../../assets/ticket4.png")} alt="이미지" /></TicketImage><TicketCount><text>티켓 35개</text><text className="bonus">30개 + 보너스 5개</text></TicketCount><TicketPrice><text>52,500 </text><Won /></TicketPrice><TicketButton onClick={()=> {window.ReactNativeWebView?.postMessage(JSON.stringify({type : "buy", data : "30"}))}}><text>구매</text></TicketButton></TicketContainer>
              </BuyTicket>
              <BackHome><Link to="/"><Return /></Link></BackHome>
            </BoxContent>
          </PurchasingBox>
        </PurchasingBoxContainer>
        <HeaderImg><img src={require("../../../assets/gift.png")} alt="이미지" /></HeaderImg>
        <BottomImg onClick={()=>{}}><img src={require("../../../assets/cart.png")} alt="이미지" /></BottomImg>
      </PurchasePageContainer>
    </>
  );
}

export default Purchasing;

const HeaderContentContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
gap: 20px;
left : 17.44%;
width: 82.56%;
min-width : 151px;
height: 100%;
`;

const TicketImage = styled.div`
width: 10.96%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
> img {
  width : 30px;
  height : 30px;
}
`;
const TicketCount = styled.div`
display: flex;
flex-direction: column;
width: 19.01%;
min-width : 100px;
height: 100%;
margin-left : 12px;
align-items: start;
justify-content: center;
text-align: center;

> text{
  font-family: var(--font-OpenSans);
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 24px;
/* identical to box height, or 171% */
/* Text Black */
color: #000000;
}

> text.bonus {
font-weight: 400;
font-size: 11px;
line-height: 15px;
color: #FF477E;
}

`;
const TicketPrice = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
padding: 0px;
gap: 3px;
width: 39.21%;
height: 100%;
margin-left : 12px;
margin-right : 7px;

> text {
  font-family: var(--font-OpenSans);
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 24px;
/* identical to box height, or 171% */

text-align: right;

/* Text Black */

color: #000000;
}
`;
const TicketButton = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
width: 59px;
height: 31px;
left : 9px;
background: #FF477E;
border-radius: 30px;

> text {
  font-family: var(--font-OpenSans);
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 150%;
/* identical to box height, or 21px */
text-align: center;
letter-spacing: 0.05em;
text-transform: capitalize;
color: #FFFFFF;
}
`;

const HeaderContents = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-end;
padding: 0px;

width: 100%;
min-width : 154px;
height: 73.91%;


> text {
  font-family: var(--font-OpenSans);
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 25px;
}

> text.name {
font-weight: 600;
font-size: 22px;
line-height: 26px;
/* identical to box height, or 116% */


/* Text Black */

color: #000000;
}
`;

const TicketContainer = styled.div`
width : 100%;
height : 15.38%;
display: flex;
position: relative;
flex-direction: row;
align-items: center;
`;
const PurchasingBoxContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

position: absolute;
width: 100%;
height: 63.06%;
top: 18.67%;
`;
const PurchasingBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;

position: absolute;
width: 87.18%;
height: 100%;

/* white */

background: #FFFFFF;
box-shadow: 0px 0px 4px rgba(255, 71, 126, 0.6), 0px 13px 12px rgba(0, 0, 0, 0.1);
border-radius: 20px;
`;

const BoxContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
gap: 10px;

width: 82.88%;
height: 93.56%;
`;

const MyTicket = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
gap: 15px;

width: 100%;
height: 9.17%;

`;

const BuyTicket = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
padding: 0px;
gap: 36px;

width: 100%;
height: 58.14%;
`;

const BackHome = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;

width: 100%;
height: 9.17%;

`;

const HeaderImg = styled.div`
display: flex;
position: absolute;
width: 16.92%;
height: 16.97%;
left: 14.1%;
top: 0.84%;
`;

const BottomImg = styled.div`
display: flex;
position: absolute;
width: 37.69%;
height: 18.09%;
left: 53.31%;
top: 77.56%;
`;