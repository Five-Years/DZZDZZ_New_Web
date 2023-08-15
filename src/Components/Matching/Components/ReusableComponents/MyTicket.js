import React from "react";
import styled from "styled-components";
import { ReactComponent as Tickets } from "../../../../assets/ticket.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import StateSlice from "../../../../features/State/StateSlice";

function MyTicket() {
  const navigate = useNavigate();
  const Season = useSelector((state) => {
    return state.Popup.Season;
  });

  const userAsset = useSelector((state) => {
    return state.Popup.userAsset;
  });
  return (
    <TicketContainer>
      <TicketButton>
        <Ticket>
          <Tickets />
          <text>{userAsset.ticket}</text>
        </Ticket>
        <Charge
          onClick={() => {
            navigate("/purchasing", {
              state: { theme: Season, title: "충전하기" },
            });
          }}
        >
          <text>충전하기</text>
        </Charge>
      </TicketButton>
    </TicketContainer>
  );
}

export default MyTicket;

const TicketContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TicketButton = styled.div`
  display: flex;
  width: 66.66%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 30px;
  background: var(--dzz-black, #333);
`;

const Ticket = styled.div`
  display: flex;
  width: 16.924%;
  height: 100%;
  gap: 10px;
  margin-left: 7.69%;
  align-items: center;
  justify-content: space-between;

  > text {
    font-family: var(--font-Pretendard);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }
`;
const Charge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26.92%;
  height: 100%;
  gap: 10px;
  margin-right: 7.69%;
  cursor: pointer;

  > text {
    font-family: var(--font-Pretendard);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.05em;
    text-align: center;
    color: #ffffff;

    :active {
      color: #ff477e;
    }
  }
`;
