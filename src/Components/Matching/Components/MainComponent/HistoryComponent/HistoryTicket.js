import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
function HistoryTicket() {
  const data = [
    {
      time: "23.05.14 12:44",
      title: "젤리 8개 구매 함",
      type: "젤리",
      count: 8,
      won: 9600,
    },
    // {
    //   time: "23.05.14 12:44",
    //   title: "젤리 8개 구매 함",
    //   type: "젤리",
    //   count: 8,
    //   won: 9600,
    // },
    // {
    //   time: "23.05.14 12:44",
    //   title: "젤리 8개 구매 함",
    //   type: "젤리",
    //   count: 8,
    //   won: 9600,
    // },
    // {
    //   time: "23.05.14 12:44",
    //   title: "젤리 8개 구매 함",
    //   type: "젤리",
    //   count: 8,
    //   won: 9600,
    // },
    // {
    //   time: "23.05.14 12:44",
    //   title: "젤리 8개 구매 함",
    //   type: "젤리",
    //   count: 8,
    //   won: 9600,
    // },
    // {
    //   time: "23.05.14 12:44",
    //   title: "젤리 8개 구매 함",
    //   type: "젤리",
    //   count: 8,
    //   won: 9600,
    // },
    // {
    //   time: "23.05.14 12:44",
    //   title: "젤리 8개 구매 함",
    //   type: "젤리",
    //   count: 8,
    //   won: 9600,
    // },
    { time: "23.05.14 12:44", title: "티켓 1개", type: "젤리", count: -20 },
    {
      time: "23.05.14 12:44",
      title: "젤리 8개 구매 함",
      type: "젤리",
      count: 8,
      won: 9600,
    },
    { time: "23.05.14 12:44", title: "티켓 1개", type: "젤리", count: -20 },
    {
      time: "23.05.14 12:44",
      title: "젤리 8개 구매 함",
      type: "젤리",
      count: 8,
      won: 9600,
    },
    { time: "23.05.14 12:44", title: "티켓 1개", type: "젤리", count: -20 },
    {
      time: "23.05.14 12:44",
      title: "젤리 8개 구매 함",
      type: "젤리",
      count: 8,
      won: 9600,
    },
    { time: "23.05.14 12:44", title: "티켓 1개", type: "젤리", count: -20 },
    {
      time: "23.05.14 12:44",
      title: "젤리 8개 구매 함",
      type: "젤리",
      count: 8,
      won: 9600,
    },
    { time: "23.05.14 12:44", title: "티켓 1개", type: "젤리", count: -20 },
    {
      time: "23.05.14 12:44",
      title: "젤리 8개 구매 함",
      type: "젤리",
      count: 8,
      won: 9600,
    },
    { time: "23.05.14 12:44", title: "티켓 1개", type: "젤리", count: -20 },
    {
      time: "23.05.14 12:44",
      title: "젤리 8개 구매 함",
      type: "젤리",
      count: 8,
      won: 9600,
    },
    { time: "23.05.14 12:44", title: "티켓 1개", type: "젤리", count: -20 },
    {
      time: "23.05.14 12:44",
      title: "젤리 8개 구매 함",
      type: "젤리",
      count: 8,
      won: 9600,
    },
    { time: "23.05.14 12:44", title: "티켓 1개", type: "젤리", count: -20 },
  ];

  const userTicketHistory = useSelector((state) => {
    return state.Popup.userHistory.jellyHistory;
  });
  return (
    <>
      {data.map((data) => {
        if (data.count > 0) {
          return (
            <ListItemContainer>
              <ItemBox>
                <ItemLeft>
                  <text className="time">{data.time}</text>
                  <text>{data.title}</text>
                </ItemLeft>
                <ItemRight>
                  <text className="title">{"티켓"}</text>
                  <text>
                    +{data.count}
                    <span>({data.won})</span>
                  </text>
                </ItemRight>
              </ItemBox>
            </ListItemContainer>
          );
        } else {
          return (
            <ListItemContainer>
              <ItemBox>
                <ItemLeft>
                  <text className="time">{data.time}</text>
                  <text>{data.title}</text>
                </ItemLeft>
                <ItemRight>
                  <text className="title">{"티켓"}</text>
                  <text className="use">{data.count}</text>
                </ItemRight>
              </ItemBox>
            </ListItemContainer>
          );
        }
      })}
    </>
  );
}

export default HistoryTicket;

const ListItemContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: 80px; */
  height: 80px;
  min-height: 10%;
  left: 0px;
  border-bottom: 0.7px solid #eeeeee;
`;

const ItemLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;

  width: 30%;
  min-width: 120px;
  height: 100%;
  margin-left: 4.57%;

  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    /* identical to box height, or 21px */

    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    /* Text Black */

    color: #000000;
  }

  > text.time {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    /* identical to box height, or 21px */

    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    /* Text Gray */

    color: #888888;
  }
`;

const ItemRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
  margin-right: 4.57%;

  width: 23.6%;
  min-width: 72px;
  height: 100%;

  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    /* SystemRed/Light */

    color: #ff3b30;

    &.use {
      color: #49516f;
    }
  }

  > text.title {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    /* identical to box height, or 21px */

    color: #888888;
  }

  > text > span {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    /* SystemRed/Light */

    color: #ff3b30;
  }
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 4px;

  width: 89.74%;
  height: 70%;
`;
