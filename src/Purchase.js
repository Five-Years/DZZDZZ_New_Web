import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StateSlice from "./features/State/StateSlice";

function Purchase() {
  const Ticket = useSelector((state) => {
    return state.Popup.ticket;
  });
  const dispatch = useDispatch();

  return (
    <PurchaseContainer>
      <TicketMachine>
        <TicketMachineTitle>
          <text>현재 보유중인 티켓의 개수는 {Ticket}개</text>
        </TicketMachineTitle>
        <TicketButtonContainer>
          <ButtonContainer
            onClick={() => {
              dispatch(StateSlice.actions.Ticket());
            }}
          >
            <text>구입하기</text>
          </ButtonContainer>
          <ButtonContainer style={{ backgroundColor: "green" }}>
            <text>구입안함</text>
          </ButtonContainer>
        </TicketButtonContainer>
      </TicketMachine>
      <BackButton>
        <Link to="/" style={{ textDecorationLine: "none" }}>
          <text>메인페이지로 이동</text>
        </Link>
      </BackButton>
    </PurchaseContainer>
  );
}

export default Purchase;

const PurchaseContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
`;

const TicketMachine = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 100%;
  height: 30%;
  top: 30%;
`;

const BackButton = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 10%;
  top: 70%;
  background-color: red;
  align-items: center;
  justify-content: center;
`;

const TicketMachineTitle = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > text {
    font-weight: 600;
    font-size: 20px;
  }
`;

const TicketButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  background-color: yellow;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
