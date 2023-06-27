import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ReactComponent as Tickets } from "../../../../assets/ticket.svg";
import { ReactComponent as Mile } from "../../../../assets/mile.svg";

function MatchingHeaderNew(props) {
  // 유저티켓 보유 갯수 확인, 추후 서버 연동 필요
  const location = useLocation();
  const color = props.theme;

  const Ticket = useSelector((state) => {
    return state.Popup.ticket;
  });

  const Name = useSelector((state) => {
    return state.Popup.name;
  });
  const Season = useSelector((state) => {
    return state.Popup.season;
  });
  const SeasonNumber = useSelector((state) => {
    return state.Popup.seasonNumber;
  });

  const dispatch = useDispatch();
  const seasonlist = ["매칭", "정리중"];
  const navigate = useNavigate();

  return (
    <>
      <HeaderContainer theme={color}>
        <HeaderTop>
          <HeaderName>
            <text className="name">{Name}님</text>
            <text>안녕하세요!</text>
          </HeaderName>
          <HeaderSeason theme={Season}>
            <text>
              지금은 <span>{seasonlist[Season]}</span> 접수기간입니다!
            </text>
          </HeaderSeason>
        </HeaderTop>
      </HeaderContainer>
    </>
  );
}

export default MatchingHeaderNew;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  width: 100%;
  height: 100%;
  left: 0px;
  /* background-color: ${(props) =>
    props.theme === 1 ? "#EDFAFF" : "#FFF4F4"}; */
`;

const HeaderTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 50.23%;
  height: 92.59%;
  margin-left: 16.67%;
`;

const HeaderMileContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 2.86%;
  top: 3px;
`;

const HeaderMile = styled.div`
  display: flex;
  width: 10.77%;
  height: 100%;
  border-radius: 8px;
  margin-right: 5.13%;
  align-items: center;
  justify-content: space-between;
`;

const HeaderName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;

  width: 100%;
  height: 81%;

  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 36.77px;
    color: #000000;
  }
  > text.name {
    font-weight: 600;
    font-size: 27px;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

const HeaderSeason = styled.div`
  width: 100%;
  min-width: 210px;
  height: 20%;

  > text {
    font-family: var(--font-Pretendard);
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
  }

  > text > span {
    color: ${(props) =>
      props.theme === 1
        ? "#0094FF"
        : props.theme === 2
        ? "#888888"
        : "#FF477E"};
    font-weight: 600;
    font-size: 14px;
  }
`;

export const HeaderBoarder = styled.div`
  width: 100%;
  height: 22.35%;
`;

export const MobileContainer = styled.div`
  flex: 1;
`;
