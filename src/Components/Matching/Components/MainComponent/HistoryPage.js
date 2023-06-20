import React from "react";
import styled from "@emotion/styled";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TicketPage from "./Purchasing/TicketPage";
import { ReactComponent as Mile } from "../../../../assets/mile.svg";
import { ReactComponent as DisabledTicket } from "../../../../assets/disabledTicket.svg";
import { ReactComponent as DisabledMile } from "../../../../assets/disabledMile.svg";
import { ReactComponent as Ticket } from "../../../../assets/ticket.svg";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StateSlice from "../../../../features/State/StateSlice";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PurchasingHeader from "../Header/PurchasingHeader";
import HistoryTicket from "./HistoryTicket";
import HistoryMile from "./HistoryMile";

function HistoryPage() {
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
        <PurchasingHeader title={location.state.title} />
        <TicketMileChangeContainer>
          <MileSection 
            value={0}
            selected={isSelected}
            onClick={() => {
              setIsSelected(0);
            }}
          >
            <ItemContainer>      
            {isSelected ? <DisabledMile/> : <Mile/>}      
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
            {isSelected ? <Ticket/> : <DisabledTicket/>}
            <text>1</text></ItemContainer>          </TicketSection>
        </TicketMileChangeContainer>
            <ListContainer>
              {/* map함수로 가변적으로 들어갈듯 */}
              {isSelected ?            <HistoryMile/>    : <HistoryTicket />}
          </ListContainer>
            
      </PurchasePageContainer>
    </>
  );
}

export default HistoryPage;

const ListContainer =styled.div`
display: flex;
position: absolute;
flex-direction: column;
top : 12%;
width : 100%;
`;

const ListItemContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  left: 0px;
  border-bottom: 0.7px solid #EEEEEE;
`;

const ItemLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;

  width: 30%;
  min-width: 120px;
  height: 100%;
  margin-left : 4.57%;

  > text {
    font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
/* identical to box height, or 21px */

text-align: center;
letter-spacing: 0.05em;
text-transform: capitalize;

/* Text Black */

color: #000000;
}

  > text.time {
    font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
/* identical to box height, or 21px */

text-align: center;
letter-spacing: 0.05em;
text-transform: capitalize;

/* Text Gray */

color: #888888;
  }


`;

const ItemRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
  margin-right : 4.57%;

  width: 23.6%;
  min-width : 72px;
  height: 100%;
  
> text {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.05em;
  text-transform: capitalize;

  /* SystemRed/Light */

  color: #FF3B30;
}

  > text.title {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */


  color: #888888;
  }



  > text > span {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    /* SystemRed/Light */

    color: #FF3B30;
  }
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 4px;

  width: 89.74%;
  height: 70%;
`;

const PurchasePageContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
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