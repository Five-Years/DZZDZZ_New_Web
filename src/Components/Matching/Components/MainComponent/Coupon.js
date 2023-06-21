import React from "react";
import MenuHeader from "../Header/MenuHeader";
import styled from "styled-components";
import {
  PurchasePageContainer,
} from "../../StyledComponent/MatchingStyled";

function Coupon() {
  return (
    <PurchasePageContainer>
      <HeaderContainer><MenuHeader title={"쿠폰등록"}></MenuHeader>
</HeaderContainer>
      <CouponContainer>
        <TextContainer><InputTitle><text>쿠폰번호 입력하기</text></InputTitle></TextContainer>
        <InputContainer maxLength={10}/>
        <ErrorContainer><text>유효하지 않은 번호입니다.</text></ErrorContainer>
      </CouponContainer>
      <ConfirmButton
        onClick={() => {
          window.ReactNativeWebView?.postMessage(
            JSON.stringify({ type: "coupon", data: "" })
          );
          alert("쿠폰 등록");
        }}
      >
        <text>확 인</text>
      </ConfirmButton>
    </PurchasePageContainer>
  );
}

export default Coupon;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 84.62%;
  height : 15%;

  > text {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;
    /* identical to box height */

    /* dzz_pink */

    color: #ff477e;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  position: absolute;
  width : 100%;
  height : 6.85%;
`;
const ConfirmButton = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  top: 25.14%;
  width: 84.6%;
  height: 7.43%;

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
`;

const CouponContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: 8.43%;
  width: 100%;
  height: 13.43%;
`;

const InputTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
  width: 84.62%;
  height: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 84.62%;
  height : 20%;
`;
const InputContainer = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 82.62%;
  height: 61.84%;
  padding-left: 5.15%;
  /* white */
  background: #ffffff;
  /* SystemGray/400 */
border: 1px solid #BCBCC0;
border-radius: 10px;
  
`;
