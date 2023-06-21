import React from "react";
import styled from "styled-components";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function InviteEventButton() {
  return (
    <>
      <InviteContainer>
        <InviteTextBox>
          <text>
            친구 초대하고 <span>무료티켓 받기</span>
          </text>
        </InviteTextBox>
        <InviteToggleButton>
          <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
        </InviteToggleButton>
      </InviteContainer>
    </>
  );
}

export default InviteEventButton;

const InviteContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  width: 89.74%;
  height: 73.68%;

  background: #ffe8e8;
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

  > text {
    font-family: "SF Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 150%;
    /* identical to box height, or 21px */

    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    /* dzz_grey */

    color: #49516f;

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
