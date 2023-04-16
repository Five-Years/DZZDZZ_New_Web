import React from "react";
import {
  PurchasePageContainer,
  Purchasingbox,
  BackgroundCards,
  HeaderContainer,
  HeaderLeft,
  HeaderAvatar,
  HeaderProfile,
  HeaderRight,
  StageContainer,
} from "../StyledComponent/MatchingStyled";
import { useState } from "react";
function Purchasing() {
  const [theme, setTheme] = useState(0);
  return (
    <>
      <BackgroundCards theme={theme}></BackgroundCards>
      <PurchasePageContainer>
        <HeaderContainer>
          <HeaderLeft>
            {/* 사용자 프로필 사진 가져오기 */}
            <HeaderAvatar>
              <img src={require("../../../assets/mango.jpg")} alt="이미지" />
            </HeaderAvatar>
            <HeaderProfile>
              <text>미쥬미쥬미쥬님 안녕하세요!</text>
            </HeaderProfile>
          </HeaderLeft>
          <HeaderRight>
            <StageContainer>
              <text>
                지금은
                <br />
                <span>시즌2(이성)</span>
                <br />
                접수기간입니다!
              </text>
            </StageContainer>
          </HeaderRight>
        </HeaderContainer>
        <Purchasingbox>
          <text>티켓</text>
          {/* 티켓구매 아이템들 구현필요 */}
          {/* <PurchasingContentContainer>
          <Ticket></Ticket>
          <TicketProduct>
            <Ticketprice></Ticketprice>
            <Ticketprice></Ticketprice>
            <Ticketprice></Ticketprice>
            <Ticketprice></Ticketprice>
          </TicketProduct>
          <BackButton></BackButton>
        </PurchasingContentContainer> */}
        </Purchasingbox>
      </PurchasePageContainer>
    </>
  );
}

export default Purchasing;
