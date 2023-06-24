import React from "react";
import styled from "@emotion/styled";
import TicketPage from "./Purchasing/TicketPage";
import { ReactComponent as Mile } from "../../../../assets/mile.svg";
import { ReactComponent as DisabledTicket } from "../../../../assets/disabledTicket.svg";
import { ReactComponent as DisabledMile } from "../../../../assets/disabledMile.svg";
import { ReactComponent as Ticket } from "../../../../assets/ticket.svg";

import {
  PurchasePageContainer,
  TicketButton,
  TicketContainer,
  TicketCount,
} from "../../StyledComponent/MatchingStyled";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StateSlice from "../../../../features/State/StateSlice";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PurchasingHeader from "../Header/MenuHeader";
import MilePage from "./Purchasing/MilePage";
import InviteEventButton from "../../ReusableComponents/InviteEventButton";

function Purchasing() {
  const navigate = useNavigate();

  const Season = useSelector((state) => {
    return state.Popup.Season;
  });

  const dispatch = useDispatch();

  const location = useLocation();

  const [isSelected, setIsSelected] = useState(0);

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
      JSON.stringify({ type: "notfirst", data: "" })
    );
  }, []);

  return (
    <>
      <PurchasePageContainer>
        <HeaderContainer>
          <PurchasingHeader title={location.state.title} />
        </HeaderContainer>
        <TicketMileChangeContainer>
          <MileSection
            value={0}
            selected={isSelected}
            onClick={() => {
              setIsSelected(0);
            }}
          >
            <ItemContainer>
              {isSelected ? <DisabledMile /> : <Mile />}
              <text>1</text>
            </ItemContainer>
          </MileSection>
          <TicketSection
            value={1}
            selected={isSelected}
            onClick={() => {
              setIsSelected(1);
            }}
          >
            <ItemContainer>
              {isSelected ? <Ticket /> : <DisabledTicket />}
              <text>1</text>
            </ItemContainer>{" "}
          </TicketSection>
        </TicketMileChangeContainer>
        <HeaderBottom>
          <InviteEventButton />
        </HeaderBottom>
        <TicketBoxContainer>
          {isSelected === 1 ? <TicketPage /> : <MilePage />}
        </TicketBoxContainer>
        <ReturnButton>
          <Button
            onClick={() => {
              navigate(-1);
            }}
          >
            <text>돌아가기</text>
          </Button>
        </ReturnButton>{" "}
        <ReturnButton className="history">
          <Button
            className="history"
            onClick={() => {
              navigate("/History", { state: { title: "이용내역" } });
            }}
          >
            <text>이용내역</text>
          </Button>
        </ReturnButton>
        <CouponContainer
          onClick={() => {
            navigate("/Coupon", {
              state: { title: "쿠폰등록" },
            });
          }}
        >
          <text>쿠폰 등록하기</text>
        </CouponContainer>
      </PurchasePageContainer>
    </>
  );
}

export default Purchasing;

const HeaderContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 6.85%;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;

  width: 46.15%;
  height: 66.66%;
`;

const MileSection = styled.div`
  display: flex;

  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;

  border-bottom: ${(props) =>
    props.value === props.selected ? "3px solid #FF477E" : ""};
`;

const TicketSection = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;

  border-bottom: ${(props) =>
    props.value === props.selected ? "3px solid #FF477E" : ""};
`;

const TicketMileChangeContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  top: 6.86%;
  width: 100%;
  height: 5.14%;
`;

const TicketBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 6px;

  position: absolute;
  width: 100%;
  height: 48.14%;
  top: 23%;
`;

const ReturnButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  position: absolute;
  width: 100%;
  height: 10%;
  left: 0px;
  top: 71.57%;

  &.history {
    top: 83%;
  }
`;

const CouponContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  position: absolute;
  width: 26.13%;
  min-width: 110px;
  height: 3.43%;
  top: 94.43%;

  /* Text Gray */

  border-bottom: 1px solid #888888;
  > text {
    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    /* identical to box height, or 24px */

    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    /* dzz_iconGrey */

    color: #a39ea3;
  }
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 79.48%;
  height: 74.29%;

  /* dzz_pink */

  background: #ff477e;
  border-radius: 13px;

  > text {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 180%;
    /* identical to box height, or 29px */

    text-align: center;
    letter-spacing: 0.5px;

    /* Background/White */

    color: #ffffff;
  }

  &.history {
    border: 1px solid #ff477e;
    border-radius: 13px;
    background: white;

    > text {
      color: #ff477e;
    }
  }
`;

const HeaderTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 15px;

  width: 89.74%;
  height: 40.4%;
`;

const HeaderBottom = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 12%;
  width: 100%;
  height: 10.85%;
`;

const InviteContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  width: 89.74%;
  height: 73.68%;

  background: #ffe8e8;
  border-radius: 13px;
`;

const InviteTextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  width: 50.57%;
  min-width: 195px;
  height: 55.26%;
  min-height: 21px;
  margin-left: 4.57%;

  > text {
    font-family: "SF Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 150%;
    /* identical to box height, or 21px */

    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    /* dzz_grey */

    color: #49516f;

    > span {
      color: #ff477e;
    }
  }
`;

const InviteToggleButton = styled.div`
  width: 22px;
  height: 22px;
  margin-right: 20px;
`;

const HeaderTopLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 38px;

  width: 43.71%;
  height: 100%;
`;

const HeaderTopRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 17.71%;
  min-width: 70px;
  height: 60%;

  /* Text Gray */

  border-bottom: 1px solid #888888;

  > text {
    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    /* identical to box height, or 24px */

    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    /* dzz_iconGrey */

    color: #a39ea3;
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
