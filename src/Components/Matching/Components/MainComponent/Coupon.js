import React from "react";
import PurchasingHeader from "../Header/PurchasingHeader";
import styled from "styled-components";
import {
  PurchasePageContainer,
} from "../../StyledComponent/MatchingStyled";

function Coupon() {
  return (
    <PurchasePageContainer>
      <PurchasingHeader title={"쿠폰등록"}></PurchasingHeader>
      <CouponContainer>
        <InputTitle>
          <text>쿠폰번호 입력하기</text>
        </InputTitle>
        <InputContainer>
          <input maxLength={10} />
        </InputContainer>
        <text>유효하지 않은 번호입니다.</text>
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
  justify-content: center;
  align-items: start;
  gap: 8px;
  position: absolute;
  top: 8.43%;
  width: 100%;
  height: 13.43%;

  > text {
    margin-left: 7.69%;
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

const InputTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
  margin-left: 7.69%;
  width: 84.62%;
  height: 27.63%;
  background-color: white;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 84.62%;
  height: 61.84%;
  margin-left: 7.69%;

  /* white */

  background: #ffffff;
  /* SystemGray/400 */

  border: 0.5px solid #bcbcc0;
  border-radius: 10px;

  > input {
    margin-left: 5.15%;
    height: 85%;
    border: none;
    border-right: 0px;
    font-family: "SF Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    /* identical to box height, or 21px */

    letter-spacing: 0.5px;

    /* FY_black */

    color: #231815;
    :focus {
      outline: none;
    }
  }
`;
