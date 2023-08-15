import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
function HistoryMatch() {
  const navigate = useNavigate();
  const matching = ["이성매칭", "친구매칭"];
  const data = [
    { time: "23.05.14 12:44", season: 0, isSuccess: true, isLink: true },
    { time: "23.05.14 12:44", season: 1, isSuccess: true, isLink: true },
    { time: "23.05.14 12:44", season: 0, isSuccess: true, isLink: true },
    { time: "23.05.14 12:44", season: 1, isSuccess: false, isLink: false },
    { time: "23.05.14 12:44", season: 0, isSuccess: true, isLink: false },
    { time: "23.05.14 12:44", season: 1, isSuccess: false, isLink: false },
    { time: "23.05.14 12:44", season: 0, isSuccess: true, isLink: false },
    { time: "23.05.14 12:44", season: 1, isSuccess: false, isLink: false },
    { time: "23.05.14 12:44", season: 0, isSuccess: true, isLink: false },
    { time: "23.05.14 12:44", season: 1, isSuccess: false, isLink: false },
    { time: "23.05.14 12:44", season: 0, isSuccess: true, isLink: false },
    { time: "23.05.14 12:44", season: 1, isSuccess: false, isLink: false },
    { time: "23.05.14 12:44", season: 0, isSuccess: true, isLink: false },
    { time: "23.05.14 12:44", season: 1, isSuccess: false, isLink: false },
    { time: "23.05.14 12:44", season: 1, isSuccess: false, isLink: false },
  ];

  return (
    <>
      {data.map((prop, idx) => {
        return (
          <ListItemContainer season={prop.season} link={prop.isLink}>
            <ItemBox
              onClick={
                prop.isLink
                  ? () => {
                      navigate("/historymatchingprofile");
                    }
                  : null
              }
            >
              <ItemLeft link={prop.isLink}>
                <text className="time">{prop.time}</text>
                <text>{matching[prop.season]}</text>
              </ItemLeft>
              <ItemRight link={prop.isLink}>
                {prop.isSuccess ? (
                  <text className="success">성공</text>
                ) : (
                  <text className="failure">실패</text>
                )}
              </ItemRight>
            </ItemBox>
          </ListItemContainer>
        );
      })}
    </>
  );
}

export default HistoryMatch;

const ListItemContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  left: 0px;
  border-bottom: 0.7px solid #eeeeee;

  border-left: ${(props) =>
    props.season === 0
      ? props.link
        ? "7px solid #FF477E"
        : "7px solid #D9D9D9"
      : props.link
      ? "7px solid #0094FF"
      : "7px solid #D9D9D9"};
`;

const ItemLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;

  width: 30%;
  min-width: 150px;
  height: 100%;
  margin-left: 4.57%;

  > text {
    color: ${(props) => (props.link ? "black" : "grey")};
    text-align: center;
    font-size: 14px;
    font-family: var(--font-Pretendard);
    line-height: 150%;
    letter-spacing: 0.7px;
    text-transform: capitalize;
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
  align-items: center;
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

  > text.success {
    color: ${(props) => (props.link ? "#0094ff" : "#7AC4FA")};
  }

  > text.failure {
    color: ${(props) => (props.link ? "#ff3d00" : "#FA997A")};
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
