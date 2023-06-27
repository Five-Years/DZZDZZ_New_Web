import React from "react";
import styled from "styled-components";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function JellyButtonContainer() {
  return (
    <>
      <InviteContainer>
        <InviteTextBox>
          <text>
            <span>젤리</span>를 이용한 서비스는 더 추가될 예정이에요.
          </text>
        </InviteTextBox>
      </InviteContainer>
    </>
  );
}

export default JellyButtonContainer;

const InviteContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  width: 89.74%;
  height: 50%;

  background: #ebebf0;

  border-radius: 13px;
`;

const InviteTextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 195px;
  height: 55.26%;

  > text {
    font-family: var(--font-Pretendard);
    font-size: 12px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0.05em;
    text-align: center;

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
