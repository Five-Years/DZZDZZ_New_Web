import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Jelly } from "../../../../assets/jelly.svg";

function MatchingProgressHeader(props) {
  const navigate = useNavigate();
  return (
    // <ContentContainers>      </ContentContainers>

    <>
      <ContentLeft>
        {props.isFirst ? (
          <></>
        ) : (
          <>
            <ArrowBackIosIcon
              style={{ marginLeft: "15.4%", width: "60%", height: "60%" }}
              onClick={() => {
                navigate("/Matching");
              }}
            />
          </>
        )}
      </ContentLeft>
      <ContentTitle>
        <text></text>
      </ContentTitle>
      <ContentRight>
        {props.isReport ? (
          <>
            <MoreHorizIcon
              onClick={() => {
                window.ReactNativeWebView?.postMessage(
                  JSON.stringify({ type: "report", data: "" })
                );
                alert("신고");
              }}
              style={{ width: "50%", height: "50%", marginRight: "15.4%" }}
            />
          </>
        ) : (
          <>
            <MileHeader>
              <Jelly />
              <text>1</text>
            </MileHeader>
          </>
        )}
      </ContentRight>
    </>
  );
}

export default MatchingProgressHeader;

const MileHeader = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  margin-right: 15.4%;
  align-items: center;
  justify-content: space-evenly;
  z-index: 1;

  > text {
    font-family: var(--font-OpenSans);
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const ContentContainers = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 6%;

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

  width: 33.33%;
  height: 100%;

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
