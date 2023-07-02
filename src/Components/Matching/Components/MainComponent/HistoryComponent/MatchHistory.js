import React from "react";
import styled from "@emotion/styled";
import HistoryMatch from "./HistoryMatch";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StateSlice from "../../../../../features/State/StateSlice";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MenuHeader from "../../HeaderComponent/MenuHeader";
import HistoryTicket from "./HistoryTicket";
import HistoryMile from "./HistoryMile";

function MatchHistory() {
  const navigate = useNavigate();

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
          <MenuHeader title={location.state.title} />
        </HeaderContainer>
        <ListContainer>
            <HistoryMatch />
        </ListContainer>
      </PurchasePageContainer>
    </>
  );
}

export default MatchHistory;

const HeaderContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 6.85%;
`;

const ListContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 6.86%;
  width: 100%;
  height: 93.15%;
  overflow-y: scroll;
  overflow-x: hidden;
`;


const PurchasePageContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  overflow: hidden;

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
