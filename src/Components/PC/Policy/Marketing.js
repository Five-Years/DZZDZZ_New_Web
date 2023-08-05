import React from "react";
import styled from "styled-components";
import HeaderBar from "../Header/HeaderBar";
import { Scrollbars } from "react-custom-scrollbars";

function Marketing() {
  return (
    <TermsContainer>
      <HeaderContainer>
        <HeaderBar />
      </HeaderContainer>
      <TermContents>
        <ContentsDetail>
          <Scrollbars>
            <text>
              **마케팅 정보 수신 동의** **단짠단짠 서비스 (이하 '단짠단짠')는
              개인정보보호법 및 정보통신망이용촉진 및 정보보호 등에 관한 법률 등
              관계법령에 따라 광고성 정보를 전송하기 위해 이용자의 사전 수신
              동의를 받고 있습니다. 본 내용은 단짠단짠 회원 서비스가 적용되는
              개별서비스의 마케팅 수신동의를 포함하고 있으며, 마케팅 정보 수신
              동의 시개별서비스의 마케팅 수신에 일괄 동의한 것으로 처리됩니다.**
              **1. 전송방법** 마케팅 정보 전송 방법은 단짠단짠의 서비스에서 정한
              방식에 따라 전송됩니다. **2. 전송내용** 발송되는 마케팅 정보는
              수신자에게 단짠단짠 및 서비스에서 제공하는 혜택(포인트, 쿠폰 등)
              정보, 각종 이벤트, 신규 상품 관련 소식 등 광고성 정보로 관련 법의
              규정을 준수하여 발송됩니다. 단, 광고성 정보 이외에 의무적으로 안내
              되어야 하는 정보성 내용은 수신동의 여부와 무관하게 제공됩니다.
              **3. 수집항목** - **이메일, 이름, 전화번호** **4. 이용목적** -
              신규 서비스 및 이벤트 안내, 이벤트 경품/사은품 제공, 할인행사,
              고객 맞춤 마케팅/판촉 등 관련 이메일 및 SMS 등 발송 **5.
              철회안내** - 수신동의 이후에라도 언제든지 동의를 철회할 수 있으며,
              수신을 동의하지 않아도 회사가 제공하는 기본적인 서비스를 이용하실
              수 있습니다. 다만 수신 거부할 경우 신규 서비스나 상품 관련 소식
              등의 마케팅 정보를 제공받지 못할 수 있습니다. **6. 수신동의 변경
              및 보유기간** - **보유 기간 : 마케팅 정보 수신 동의로부터 2년,
              기간 초과 시 동의 절차 재진행 (미동의 시, 즉시 파기)** 단짠단짠
              **정보수정 페이지에서 개별서비스의 마케팅 수신동의를
              변경(동의/철회)할 수 있으며, 동의일로부터 회원 탈퇴 혹은 마케팅
              수신 동의 해제 시까지 광고성 정보 전달을 위하여 보유ㆍ이용
              됩니다.**
            </text>
          </Scrollbars>
        </ContentsDetail>
      </TermContents>
    </TermsContainer>
  );
}

export default Marketing;
const HeaderContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 8%;
`;
const TermsContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const TermContents = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  top: 10%;
  width: 100%;
  height: 100%;
`;

const ContentsDetail = styled.div`
  margin-top: 15px;
  width: 96%;
  height: 100%;
  text-align: start;
  align-items: center;
  justify-content: start;
  overflow-x: hidden;

  > text {
    font-size: 20px;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;
