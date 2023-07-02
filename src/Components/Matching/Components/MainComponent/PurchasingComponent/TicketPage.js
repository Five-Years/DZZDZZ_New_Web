import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import StateSlice from "../../../../../features/State/StateSlice";
import Ticket1 from "../../../../../assets/package1.png";
import Ticket2 from "../../../../../assets/package2.png";
import Ticket3 from "../../../../../assets/package3.png";
import Ticket4 from "../../../../../assets/package4.png";

import { ReactComponent as Mile1pri } from "../../../../../assets/TicketProduct1.svg";
import { ReactComponent as Mile2pri } from "../../../../../assets/TicketProduct2.svg";
import { ReactComponent as Mile3pri } from "../../../../../assets/TicketProduct3.svg";
import { ReactComponent as Mile4pri } from "../../../../../assets/TicketProduct4.svg";
function TicketPage() {
  const dispatch = useDispatch();
  return (
    <>
      <ProductContainer>
        <TicketProduct>
          <TicketImage>
            <img src={Ticket1} />
          </TicketImage>
          <TicketCount>
            <text>티켓 1개</text>
          </TicketCount>
        </TicketProduct>
        <TicketPurchaseContainer>
          {" "}
          <TicketPrice>
            <Mile1pri />
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
        </TicketPurchaseContainer>
      </ProductContainer>
      <ProductContainer>
        <TicketProduct>
          <TicketImage>
            <img src={Ticket2} />
          </TicketImage>
          <TicketCount>
            <text>티켓 4개</text>
            <text className="bonus">3개+보너스1개</text>
          </TicketCount>
        </TicketProduct>
        <TicketPurchaseContainer>
          {" "}
          <TicketPrice>
            <Mile2pri />
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
        </TicketPurchaseContainer>
      </ProductContainer>
      <ProductContainer>
        <TicketProduct>
          <TicketImage>
            <img src={Ticket3} />
          </TicketImage>
          <TicketCount>
            <text>티켓 8개</text>
            <text className="bonus">6개+보너스2개</text>
          </TicketCount>
        </TicketProduct>
        <TicketPurchaseContainer>
          {" "}
          <TicketPrice>
            <Mile3pri />
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
        </TicketPurchaseContainer>
      </ProductContainer>{" "}
      <ProductContainer>
        <TicketProduct>
          <TicketImage>
            <img src={Ticket4} />
          </TicketImage>
          <TicketCount>
            <text>티켓 15개</text>
            <text className="bonus">11개+보너스4개</text>
          </TicketCount>
        </TicketProduct>
        <TicketPurchaseContainer>
          {" "}
          <TicketPrice>
            <Mile4pri />
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
        </TicketPurchaseContainer>
      </ProductContainer>
    </>
  );
}

export default TicketPage;

export const TicketButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 59px;
  height: 31px;
  left: 9px;
  background: #ff477e;
  border-radius: 30px;

  > text {
    font-family: var(--font-Pretendard);    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    /* identical to box height, or 21px */
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: #ffffff;
  }
`;

const TicketImage = styled.div`
  width: 21.24%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 30px;
    height: 30px;
  }
`;

const TicketHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 3px;

  width: 100%;
  height: 24.21%;
`;

const TicketBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px;
  gap: 18px;

  width: 89.74%;
  height: 75.06%;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 6px;

  width: 100%;
  height: 18.89%;

  border-radius: 8px;
`;

const Confirmation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TicketProduct = styled.div`
  width: 32.43%;
  height: 41.38%;
  display: flex;
  position: relative;
  flex-direction: row;
  left: 5.71%;

  > text {
    font-family: var(--font-Pretendard);    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    /* Text Black */

    color: #000000;
  }
`;

const TicketPurchaseContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  right: 5.71%;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 7px;

  width: 52.71%;
  height: 55.17%;
`;

const TicketPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 3px;
  width: 58.15%;
  height: 100%;

  > text {
    font-family: var(--font-Pretendard);    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */
    text-align: right;
    /* Text Black */
    color: #000000;
  }
`;

const Discount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;

  width: 37px;
  height: 14px;

  background: #dfefff;
  border-radius: 8px;
`;

export const TicketCount = styled.div`
  display: flex;
  flex-direction: column;
  width: 19.01%;
  min-width: 100px;
  height: 100%;
  margin-left: 12px;
  align-items: start;
  justify-content: center;
  text-align: center;

  > text {
    font-family: var(--font-Pretendard);    
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
    color: #ff477e;
  }
`;
