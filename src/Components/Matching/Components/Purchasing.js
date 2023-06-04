import React from "react";
import styled from "@emotion/styled";
import { ReactComponent as Won } from "../../../assets/won.svg";
import { ReactComponent as Return } from "../../../assets/return.svg";
import { ReactComponent as Ticket1 } from "../../../assets/ticket1.svg";
import { ReactComponent as Ticket2 } from "../../../assets/ticket2.svg";
import { ReactComponent as Ticket3 } from "../../../assets/ticekt3.svg";
import { ReactComponent as Ticket4 } from "../../../assets/ticket4.svg";

import {
  PurchasePageContainer,
  PurchasingHeaderContainer,
  BackgroundCards,
  HeaderContainer,
  HeaderContentContainer,
  HeaderLeft,
  HeaderProfile,
  HeaderRight,
  StageContainer,
  PurchasingHeader,
  CardTicket,
  Confirmation,
  PurchasingCardTicket,
  TicketButton,
  HeaderContents,
  TicketContainer,
  PurchasingBoxContainer,
  PurchasingBox,
  BoxContent,
  MyTicket,
  BuyTicket,
  BackHome,
  HeaderImg,
  BottomImg,
  TicketImage,
  TicketCount,
  TicketPrice,
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
    const { data, type } = JSON.parse(event);
    switch (type) {
      case "buyComplete": {
        alert("구매 성공");
        break;
      }
      
      case "buyFail ": {
        alert("구매 실패");
        break;
      }
    }
  };

  useEffect(() => {
    //android
    document.addEventListener("message", (e) => listener(e.data));
    //ios
    window.addEventListener("message", (e) => listener(e.data));
    window.ReactNativeWebView?.postMessage(
      JSON.stringify({ type: "onLoad", data: "" })
    );
    return () => {
      //android
      window.removeEventListener("message", (e) => listener(e.data));
      //ios
      document.removeEventListener("message", (e) => listener(e.data));
    };
  }, []);
  return (
    <>
      <PurchasePageContainer theme={theme}>
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
                <TicketContainer>
                  <TicketImage>
                    <Ticket1 />
                  </TicketImage>
                  <TicketCount>
                    <text>티켓 1개</text>
                  </TicketCount>
                  <TicketPrice>
                    <text>1,500 </text>
                    <Won />
                  </TicketPrice>
                  <TicketButton
                    onClick={() => {
                      window.ReactNativeWebView?.postMessage(
                        JSON.stringify({ type: "buy", data: 1 })
                      );
                      dispatch(StateSlice.actions.Ticket());
                    }}
                  >
                    <text>구매</text>
                  </TicketButton>
                </TicketContainer>
                <TicketContainer>
                  <TicketImage>
                    <Ticket2 />
                  </TicketImage>
                  <TicketCount>
                    <text>티켓 5개</text>
                    <text className="bonus">4개 + 보너스 1개</text>
                  </TicketCount>
                  <TicketPrice>
                    <text>6,000 </text>
                    <Won />
                  </TicketPrice>
                  <TicketButton
                    onClick={() => {
                      window.ReactNativeWebView?.postMessage(
                        JSON.stringify({ type: "buy", data: 4 })
                      );
                    }}
                  >
                    <text>구매</text>
                  </TicketButton>
                </TicketContainer>
                <TicketContainer>
                  <TicketImage>
                    <Ticket3 />
                  </TicketImage>
                  <TicketCount>
                    <text>티켓 12개</text>
                    <text className="bonus">10개 + 보너스 2개</text>
                  </TicketCount>
                  <TicketPrice>
                    <text>15,000 </text>
                    <Won />
                  </TicketPrice>
                  <TicketButton
                    onClick={() => {
                      window.ReactNativeWebView?.postMessage(
                        JSON.stringify({ type: "buy", data: 10 })
                      );
                    }}
                  >
                    <text>구매</text>
                  </TicketButton>
                </TicketContainer>
                <TicketContainer>
                  <TicketImage>
                    <Ticket4 />
                  </TicketImage>
                  <TicketCount>
                    <text>티켓 35개</text>
                    <text className="bonus">30개 + 보너스 5개</text>
                  </TicketCount>
                  <TicketPrice>
                    <text>52,500 </text>
                    <Won />
                  </TicketPrice>
                  <TicketButton
                    onClick={() => {
                      window.ReactNativeWebView?.postMessage(
                        JSON.stringify({ type: "buy", data: 30 })
                      );
                    }}
                  >
                    <text>구매</text>
                  </TicketButton>
                </TicketContainer>
              </BuyTicket>
              <BackHome>
                <Link to="/">
                  <Return />
                </Link>
              </BackHome>
            </BoxContent>
          </PurchasingBox>
        </PurchasingBoxContainer>
        <HeaderImg>
          <img src={require("../../../assets/gift.png")} alt="이미지" />
        </HeaderImg>
        <BottomImg onClick={() => {}}>
        </BottomImg>
      </PurchasePageContainer>
    </>
  );
}

export default Purchasing;
