import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import StateSlice from "../../../../../features/State/StateSlice";
import { ReactComponent as Won } from "../../../../../assets/won.svg";

import { ReactComponent as Jelly } from "../../../../../assets/jelly.svg";
import { ReactComponent as Jelly2 } from "../../../../../assets/Jelly2.svg";
import { ReactComponent as Jelly3 } from "../../../../../assets/Jelly3.svg";
import { ReactComponent as Jelly4 } from "../../../../../assets/Jelly4.svg";

function MilePage(props) {
  const dispatch = useDispatch();
  return (
    <>
      <ProductContainer>
        <TicketProduct>
          <TicketImage>
            <Jelly />
          </TicketImage>
          <TicketCount>
            <text>8 젤리</text>
          </TicketCount>
        </TicketProduct>
        <TicketPurchaseContainer>
          <TicketPrice>
            <text>1,600 </text>
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
        </TicketPurchaseContainer>
      </ProductContainer>
      <ProductContainer>
        <TicketProduct>
          <TicketImage>
            <Jelly2 />
          </TicketImage>
          <TicketCount>
            <text>25 젤리</text>
          </TicketCount>
        </TicketProduct>
        <TicketPurchaseContainer>
          {" "}
          <TicketPrice>
            <text>4,200 </text>
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
        </TicketPurchaseContainer>
      </ProductContainer>
      <ProductContainer>
        <TicketProduct>
          <TicketImage>
            <Jelly2 />
          </TicketImage>
          <TicketCount>
            <text>56 젤리</text>
          </TicketCount>
        </TicketProduct>
        <TicketPurchaseContainer>
          {" "}
          <TicketPrice>
            <text>8,400 </text>
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
        </TicketPurchaseContainer>
      </ProductContainer>
      <ProductContainer>
        <TicketProduct>
          <TicketImage>
            <Jelly3 />
          </TicketImage>
          <TicketCount>
            <text>77 젤리</text>
          </TicketCount>
        </TicketProduct>
        <TicketPurchaseContainer>
          {" "}
          <TicketPrice>
            <text>10,500 </text>
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
        </TicketPurchaseContainer>
      </ProductContainer>
      <ProductContainer>
        <TicketProduct>
          <TicketImage>
            <Jelly3 />
          </TicketImage>
          <TicketCount>
            <text>100 젤리</text>
          </TicketCount>
        </TicketProduct>
        <TicketPurchaseContainer>
          {" "}
          <TicketPrice>
            <text>12,600 </text>
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
        </TicketPurchaseContainer>
      </ProductContainer>
      <ProductContainer>
        <TicketProduct>
          <TicketImage>
            <Jelly4 />
          </TicketImage>
          <TicketCount>
            <text>130 젤리</text>
          </TicketCount>
        </TicketProduct>
        <TicketPurchaseContainer>
          {" "}
          <TicketPrice>
            <text>15,000 </text>
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
        </TicketPurchaseContainer>
      </ProductContainer>
    </>
  );
}

export default MilePage;

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
    font-family: var(--font-OpenSans);
    font-style: normal;
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
  gap: 12px;

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
    font-family: var(--font-OpenSans);
    font-style: normal;
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
    color: #ff477e;
  }
`;
