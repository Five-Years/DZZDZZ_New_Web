import React from "react";
import MenuHeader from "../../HeaderComponent/MenuHeader";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Coupon() {
  const [isError, setIsError] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [inputValue, setInputValue] = useState("");

  const postCoupon = async (at, rt) => {
    try {
      const Response = await axios.post(
        `${
          process.env.NODE_ENV === "development"
            ? ""
            : "https://dev.fiveyears.click"
        }/item/coupon?code=${inputValue}`,
        {},
        {
          headers: {
            Authorization: at,
            "x-refresh-token": rt,
            fcmToken: "123",
            "content-type": "application/json",
          },
        }
      );

      // 비정상적으로 처리되었다면 isError 를 false로 하고 웹뷰에 표시 요청
      if (Response.data.status === 6000) {
        setErrorMessage(Response.data.data.message);
        setIsError(true);
      } else {
        window.ReactNativeWebView?.postMessage(
          JSON.stringify({ type: "coupon", data: "" })
        );
        setErrorMessage("");
        isError(false);
      }

      // 정상적이지 않다면 isError를 true로 바꾼다
    } catch (error) {
      console.log(error);
    }
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const userAt = useSelector((state) => {
    return state.Popup.userToken.accessToken;
  });

  const userRt = useSelector((state) => {
    return state.Popup.userToken.refreshToken;
  });

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
          <InputContainer
            maxLength={15}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
          <ErrorContainer>
            {isError ? <text>{ErrorMessage}</text> : <></>}
          </ErrorContainer>
        </CouponContainer>
        <ConfirmButtonContainer>
          <ConfirmButton
            onClick={() => {
              // 서버에 쿠폰 검증요청, 검증 완료되면 수민이형한테 웹뷰 요청, 검증실패시 에러로그 띄워준다.
              postCoupon(userAt, userRt);
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
  height: 13px;
  margin-bottom: 18px;

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
  height: 52px;
  background: #ff477e;
  border-radius: 13px;
  align-items: center;
  justify-content: center;

  :hover {
    opacity: 0.5;
  }

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
  justify-content: space-between;
  margin-top: 11px;
  gap: 5px;
  width: 100%;
  height: 115px;
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
  height: 21px;
`;
const InputContainer = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 82.62%;
  /* height: 55.17%; */
  height: 47px;
  /* padding-left: 5.15%; */
  text-indent: 17px;

  /* white */
  background: #ffffff;
  /* SystemGray/400 */
  border: 1px solid #bcbcc0;
  border-radius: 10px;

  font-size: 14px;
`;
