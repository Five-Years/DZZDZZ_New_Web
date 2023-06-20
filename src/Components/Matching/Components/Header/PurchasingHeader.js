import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom/dist";
import styled from "styled-components";


function PurchasingHeader(props) {
  const locate = useLocation();
  const navigate = useNavigate();
  return (
      <ContentContainers>
        <ContentLeft>
          <ArrowBackIosIcon
            style={{ marginLeft: "15.4%", width: "50%", height: "50%" }}
            onClick={() => {
              navigate(-1);
            }}
          />
        </ContentLeft>
        <ContentTitle>
          <text>{props.title}</text>
        </ContentTitle>
        <ContentRight></ContentRight>
      </ContentContainers>
  );
}

export default PurchasingHeader;


export const ContentContainers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  height: 6.85%;

  /* border-bottom: 0.3px solid #888888; */
`;


export const ContentLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  width: 33.33%;
  height: 100%;
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 130px;
  height: 32px;

  > text {
    font-family: var(--font-OpenSans);
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 22px;
  /* identical to box height, or 116% */

  text-align: center;
  letter-spacing: -0.408px;

  /* Text Black */

  color: #000000;
  }
`;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;

  width: 33.33%;
  height: 100%;
`;

const TicketselectContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  height: 22.5%;
  background-color: yellow;
`;