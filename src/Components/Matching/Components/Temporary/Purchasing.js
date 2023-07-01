import React from "react";
import styled from "@emotion/styled";
import { ReactComponent as Won } from "../../../../assets/won.svg";
import { ReactComponent as Return } from "../../../../assets/return.svg";
import { ReactComponent as Ticket1 } from "../../../../assets/ticket1.svg";
import { ReactComponent as Ticket2 } from "../../../../assets/ticket2.svg";
import { ReactComponent as Ticket3 } from "../../../../assets/ticekt3.svg";
import { ReactComponent as Ticket4 } from "../../../../assets/ticket4.svg";
import {
  PurchasePageContainer,
  PurchasingHeaderContainer,
  HeaderContentContainer,
  PurchasingHeader,
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
  BottomImg,
  TicketImage,
  TicketCount,
  TicketPrice,
} from "../StyledComponent/MatchingStyled";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StateSlice from "../../../../features/State/StateSlice";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Purchasing() {
  const navigate = useNavigate();
  const Ticket = useSelector((state) => {
    return state.Popup.ticket;
  });
  const dispatch = useDispatch();

  const location = useLocation();
  const name = location.state.name

  
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
      JSON.stringify({ type: "notfirst", data: "" }),
    );
  }, []);

  return (
    <>
      <PurchasePageContainer>
        <PurchasingHeaderContainer>
          <PurchasingHeader>
            <HeaderContentContainer>
              <HeaderContents>
                <text className="name">{location.state.name}님</text>
                <text>안녕하세요!</text>
              </HeaderContents>
            </HeaderContentContainer >
            <text onClick={() => {
                window.ReactNativeWebView?.postMessage(
                  JSON.stringify({ type: "invite", data: "" })
                );
              }}>[친구초대 이벤트로 무료코드 얻기]</text>
          </PurchasingHeader>
        </PurchasingHeaderContainer>
        <PurchasingBoxContainer>
          <PurchasingBox theme={location.state.theme}>
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
                    <text>1,900 </text>
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
                    <text>티켓 4개</text>
                    <text className="bonus">3개 + 보너스 1개</text>
                  </TicketCount>
                  <TicketPrice>
                    <text>5,700 </text>
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
                    <text>티켓 8개</text>
                    <text className="bonus">6개 + 보너스 2개</text>
                  </TicketCount>
                  <TicketPrice>
                    <text>11,400 </text>
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
                    <text>티켓 15개</text>
                    <text className="bonus">11개 + 보너스 4개</text>
                  </TicketCount>
                  <TicketPrice>
                    <text>21,800 </text>
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
              <BackHome onClick={()=>{navigate('/')}}>
                <Link >
                  <Return />
                </Link>
              </BackHome>
            </BoxContent>
          </PurchasingBox>
        </PurchasingBoxContainer>
      </PurchasePageContainer>
    </>
  );
}

export default Purchasing;


const Confirmation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 58.85%;
  height: 100%;

  > img {
    width: 24px;
    height: 24px;
  }
`;

const Ticketviewer = styled.div`
  width: 77.78%;
  min-width: 119px;

  > text {
    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: #000000;
  }
`;