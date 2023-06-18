import React from "react";
import styled from "@emotion/styled";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ReactComponent as Tickets } from "../../../../assets/ticket.svg";

import { ReactComponent as Won } from "../../../../assets/won.svg";
import { ReactComponent as Return } from "../../../../assets/return.svg";
import { ReactComponent as Ticket1 } from "../../../../assets/ticket1.svg";
import { ReactComponent as Ticket2 } from "../../../../assets/ticket2.svg";
import { ReactComponent as Ticket3 } from "../../../../assets/ticekt3.svg";
import { ReactComponent as Ticket4 } from "../../../../assets/ticket4.svg";

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
import PurchasingHeader from "../Header/PurchasingHeader";

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
        <PurchasingHeader title={location.state.title}/>
        <TicketBoxContainer>
          <TicketHeader>
            <HeaderTop><HeaderTopLeft>        
              <Confirmation>
          <Tickets />
          <Ticketviewer>
            <text>현재 보유 티켓 : {Ticket}</text>
          </Ticketviewer>
        </Confirmation></HeaderTopLeft><HeaderTopRight><text>이용내역</text></HeaderTopRight></HeaderTop>
            <HeaderBottom><InviteContainer><InviteTextBox><text>친구 초대하고 <span>무료티켓 받기</span></text></InviteTextBox><InviteToggleButton><KeyboardArrowRightIcon></KeyboardArrowRightIcon></InviteToggleButton></InviteContainer></HeaderBottom>
          </TicketHeader>
          <TicketBox>
            <ProductContainer>
              <TicketProduct>                  
                <TicketImage>
                    <Ticket1 />
                  </TicketImage>
                  <TicketCount>
                    <text>티켓 1개</text>
                  </TicketCount>
                  </TicketProduct>
                  <TicketPurchaseContainer>                  <TicketPrice>
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
                  </TicketButton></TicketPurchaseContainer>                
                </ProductContainer>
            <ProductContainer></ProductContainer>
            <ProductContainer></ProductContainer>
            <ProductContainer></ProductContainer>
          </TicketBox>
        </TicketBoxContainer>
        <ReturnButton><Button><text>돌아가기</text></Button></ReturnButton>
        <CouponContainer onClick={()=>{navigate("/Coupon", {state : {title : "쿠폰등록"}})}}><text>쿠폰 등록하기</text></CouponContainer>
      </PurchasePageContainer>
    </>
  );
}

export default Purchasing;

const TicketImage = styled.div`
width: 21.24%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
> img {
  width : 30px;
  height : 30px;
}
`;

const TicketBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  position: absolute;
  width: 100%;
  height: 58.43%;
  top: 10.43%;
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
  top: 78.86%;
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
  min-width : 110px;
  height: 3.43%;
  top: 91.14%;

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

    color: #A39EA3;
  }
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 89.74%;
  height: 74.29%;

  /* dzz_pink */

  background: #FF477E;
  border-radius: 13px;
  >text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 180%;
    /* identical to box height, or 29px */

    text-align: center;
    letter-spacing: 0.5px;

    /* Background/White */

    color: #FFFFFF;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 59.6%;
`;

const InviteContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  width: 89.74%;
  height: 67.86%;

  background: #FFE8E8;
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

  > text{
    font-family: 'SF Pro';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 150%;
/* identical to box height, or 21px */

text-align: center;
letter-spacing: 0.05em;
text-transform: capitalize;

/* dzz_grey */

color: #49516F;

> span {
  color : #FF477E
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
min-width : 70px;
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

color: #A39EA3;
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

const Confirmation = styled.div`
width : 100%;
height : 100%;
display : flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
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

const TicketProduct = styled.div`
width : 32.43%;
height : 41.38%;
display: flex;
position : relative;
flex-direction: row;
left : 5.71%;

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
  right : 5.71%;
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
  background-color: yellow;


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

  background: #DFEFFF;
  border-radius: 8px;
`;