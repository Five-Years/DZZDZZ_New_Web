import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ReactComponent as Tickets } from "../../../../assets/ticket.svg";
import { ReactComponent as Mile } from "../../../../assets/mile.svg";

function MatchingHeader(props) {
  // 유저티켓 보유 갯수 확인, 추후 서버 연동 필요
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
  const seasonlist = ["1Round매칭", "정리중"];
  const navigate = useNavigate();

  return (
    <>
      <HeaderContainer>
        <HeaderTop>
          <HeaderBox>
            <HeaderProfile>
              <HeaderName>
                <text className="name">{Name}님</text>
                <text>안녕하세요!</text>
              </HeaderName>
            </HeaderProfile>
            <HeaderSeason theme={Season}>
              <text>
                지금은 <span>{seasonlist[Season]}</span> 접수기간입니다!
              </text>
            </HeaderSeason>
          </HeaderBox>
        </HeaderTop>
        <HeaderBoarder>
          <Boarder></Boarder>
        </HeaderBoarder>
        <HeaderBottom>
          <CardTicket>
            <Confirmation>
              <Tickets />
              <Ticketviewer>
                <text>현재 보유 티켓 : {Ticket}</text>
              </Ticketviewer>
            </Confirmation>
            <PurchaserButton
              onClick={() => {
                navigate("/purchasing", {
                  state: { theme: Season, title: "충전하기" },
                });
              }}
            >
              <text>충전하기</text>
            </PurchaserButton>
          </CardTicket>
        </HeaderBottom>
      </HeaderContainer>
    </>
  );
}

export default MatchingHeader;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: absolute;
  width: 100%;
  height: 24.29%;
  left: 0px;
  top: 4.29%;
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

const HeaderTop = styled.div`
  width: 100%;
  height: 51.76%;
`;

const HeaderBox = styled.div`
  position: relative;
  width: 60.36%;
  min-width: 230px;
  height: 100%;
  left: 16.67%;
`;

const HeaderProfile = styled.div`
  width: 66.98%;
  min-width: 142px;
  height: 78.41%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;

  width: 100%;
  height: 73.91%;

  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }

  > text.name {
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
  }
`;

const HeaderSeason = styled.div`
  width: 100%;
  min-width: 250px;
  height: 21.59%;
  min-height: 19px;

  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
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

const Boarder = styled.div`
  position: relative;
  top: 50%;
  box-sizing: border-box;
  border-bottom: 0.3px solid #888888;
`;

const HeaderBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: 100%;
  height: 25.88%;
`;

const CardTicket = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 31px;

  width: 66.66%;
  min-width: 260px;
  height: 100%;
`;

const Highlight = styled.div`
  right: 27.56%;
  width: 54px;
  height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: capitalize;

  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 150%;
  }

  color: #ff0000;
`;

const PurchaserButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 70px;
  height: 37px;
  /* dzz_pink */
  background: #ff477e;
  border-radius: 30px;

  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 150%;
    /* or 18px */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: #ffffff;
    :active {
      color: #ff477e;
    }
  }
`;

const MoveContainer = styled.div`
  position: relative;
  width: 19px;
  height: 21px;
  right: 16.67%;
`;

const Confirmation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 58.85%;
  height: 100%;

  > img {
    width: 24px;
    height: 24px;
  }
`;

const Ticketviewer = styled.div`
  width: 77.78%;
  min-width: 119px;

  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: #000000;
  }
`;

export const MobileContainer = styled.div`
  flex: 1;
`;
