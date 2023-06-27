import React from "react";
import MenuHeader from "../Header/MenuHeader";
import styled from "styled-components";
import { useState } from "react";

function Coupon() {
  const [isError, setIsError] = useState(false);


  
  return (
    <PurchasePageContainer>
      <HeaderContainer>
        <MenuHeader title={"쿠폰등록"}></MenuHeader>
      </HeaderContainer>
      <ItemSectionContainer>
        <CouponContainer>
          <TextContainer>
            <InputTitle>
              <text>쿠폰번호 입력하기</text>
            </InputTitle>
          </TextContainer>
          <InputContainer maxLength={10} />
          <ErrorContainer>
            {isError ? <text>유효하지 않은 번호입니다.</text> : <></>}
          </ErrorContainer>
        </CouponContainer>
        <ConfirmButtonContainer>
          <ConfirmButton
            onClick={() => {
              window.ReactNativeWebView?.postMessage(
                JSON.stringify({ type: "coupon", data: "" })
              );
              setIsError(true);
            }}
          >
            <text>확 인</text>
          </ConfirmButton>
        </ConfirmButtonContainer>
      </ItemSectionContainer>
    </PurchasePageContainer>
  );
}

export default Coupon;

const ItemSectionContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 26.71%;
  top: 7.14%;
`;

const PurchasePageContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: white;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 82.62%;
  height: 15px;

  > text {
    font-family: var(--font-Pretendard);
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
  width: 100%;
  height: 6.85%;
`;
const ConfirmButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 10px;
  width: 100%;
  height: 37.43%;
`;

const ConfirmButton = styled.div`
  /* dzz_pink */
  display: flex;
  width: 84.87%;
  height: 74.29%;
  background: #ff477e;
  border-radius: 13px;
  align-items: center;
  justify-content: center;

  > text {
    font-family: var(--font-Pretendard);
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
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 54.57%;
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
  height: 17.95%;
`;
const InputContainer = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 82.62%;
  height: 40.17%;
  padding-left: 5.15%;
  /* white */
  background: #ffffff;
  /* SystemGray/400 */
  border: 1px solid #bcbcc0;
  border-radius: 10px;

  font-size: 14px;
`;
