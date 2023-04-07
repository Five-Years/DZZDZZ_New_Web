import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { useDispatch, useSelector } from "react-redux";

function Item(props) {
  return (
    <Paper>
      <CardTitleContainer>
        <CardTag>
          <text>{props.item.title}</text>
        </CardTag>
        <CardTitle>{props.item.description}</CardTitle>
        <CardTicket>
          <ConfirmationNumberIcon
            style={{
              width: "24px",
              height: "24px",
              color: props.theme === 0 ? "#FF477E" : "#0094FF",
            }}
          />
          <text>현재 보유 티켓 : {props.ticket}</text>
        </CardTicket>
      </CardTitleContainer>
    </Paper>
  );
}

function Home() {
  // 유저티켓 보유 갯수 확인, 추후 서버 연동 필요
  const Ticket = useSelector((state) => {
    return state.Popup.ticket;
  });
  const dispatch = useDispatch();

  const [theme, setTheme] = useState(0);

  // 유저인증여부 확인, 추후 서버 연동 필요
  const authentification = true;

  const items = [
    {
      title: "#소개팅을 원해요",
      description: (
        <text>
          매칭의 정석 소개팅<span>♥</span> <br />
          ‘대체 다들 어디서 만나?’
          <br /> ‘연애 수문장 졸업기원..ㅠㅠ’
          <br /> 더이상 고민하지말고 <br />
          시즌 입장!
        </text>
      ),
    },
    {
      title: "#친구를 원해요",
      description: (
        <text>
          나도 어쩌면
          <br />
          누군가의 소울메이트🥹?!
          <br />
          ‘맛집 뿌실 단짝 어디 없나?’
          <br />
          애매하게 서성이지 말고
          <br />
          시즌 입장!
        </text>
      ),
    },
  ];

  // 기준 746으로 수정
  return (
    <>
      <BackgroundCard
        style={{ backgroundColor: theme === 0 ? "#FF477E" : "#49516F" }}
      ></BackgroundCard>
      <MobileContainer>
        <HeaderContainer>
          <HeaderLeft>
            {/* 사용자 프로필 사진 가져오기 */}
            <HeaderAvatar>
              <img src={require("./assets/mango.jpg")} alt="이미지" />
            </HeaderAvatar>
            <HeaderProfile>
              <text>미쥬미쥬미쥬님 안녕하세요!</text>
            </HeaderProfile>
          </HeaderLeft>
          <HeaderRight>
            <StageContainer>
              <text>
                지금은 <br /> <span>시즌2접수기간</span>
                <br />
                입니다{" "}
              </text>
            </StageContainer>
          </HeaderRight>
        </HeaderContainer>
        <MatchingCard>
          <>
            <Carousel
              onChange={(now) => {
                setTheme(now);
              }}
              swipe={true}
              autoPlay={false}
              navButtonsAlwaysInvisible={true}
              indicators={true}
              indicatorContainerProps={{ style: { marginTop: "-20px" } }}
            >
              {items.map((item, i) => (
                <Item key={i} item={item} theme={theme} ticket={Ticket} />
              ))}
            </Carousel>
          </>
        </MatchingCard>
      </MobileContainer>
      <ButtonContainer>
        <EachButtonContainer>
          <EachButton className="ticket">
            <text className="ticket">
              {Ticket === 0 ? (
                <Link
                  to="/purchase"
                  style={{ color: "white", textDecorationLine: "none" }}
                >
                  충전하기
                </Link>
              ) : (
                <Link
                  to="/matching"
                  state={{ theme: theme }}
                  style={{ color: "white", textDecorationLine: "none" }}
                >
                  신청하기
                </Link>
              )}
            </text>
          </EachButton>
        </EachButtonContainer>
        <EachButtonContainer>
          <EachButton>
            <text>내 정보 수정하기</text>
          </EachButton>
        </EachButtonContainer>
        <EachButtonContainer>
          <EachButton>
            {authentification ? (
              <>
                <text className="authentification">학생 인증 완료</text>
                <img
                  src={require("./assets/CircleWavyCheck.png")}
                  alt="이미지"
                />
              </>
            ) : (
              <text>학생 인증 하기</text>
            )}
          </EachButton>
        </EachButtonContainer>
      </ButtonContainer>
    </>
  );
}

export default Home;

const MobileContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* white */
  background: #ffffff;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 100%;
  height: 95px;
`;

const MatchingCard = styled.div`
  position: absolute;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 66.66%;
  height: 44.77vh;
  max-width: 260px;
  max-height: 334px;

  left: 50%;
  transform: translate(-50%, 50%);
  background: #ffffff;

  box-shadow: 0px 13px 12px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  > div {
    top: 5%;
    width: 100%;
    height: 100%;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  left: 0px;
  position: absolute;
  width: 59.74%;
  height: 95px;
`;

const BackgroundCard = styled.div`
  position: absolute;
  width: 100%;
  height: 56.03%;
  top: 0px;
  background: #ff477e;
`;

const HeaderRight = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  right: 0px;

  width: 33.33%;
  height: 95px;

  /* 진행단계별 색상 변경필요 */
  background: yellow;
`;

const StageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  width: 81.54%;
  min-width: 110px;
  height: 95px;

  > text {
    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #000000;

    > span {
      font-weight: 600;
    }
  }
`;

const CardTitleContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 38px;

  width: 100%;
  height: 82.63%;
`;

const CardTag = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;

  width: 113px;
  height: 32px;

  /* white */

  background: #ffffff;
  /* dzz_pink */

  border: 0.5px solid #ff477e;
  border-radius: 19px;

  > text {
    font-family: var(--font-Poppins);
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    /* dzz_pink */

    color: #ff477e;
  }
`;

const CardTitle = styled.div`
  width: 200px;
  height: 128px;
  text-align: center;

  /* Body Light/16 pt */

  > text {
    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
    /* or 160% */

    text-align: center;

    /* Text Black */

    color: #000000;

    > span.love {
      color: #ff477e;
    }
  }
`;

const CardTicket = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  width: 193px;
  height: 40px;

  /* white */
  border-radius: 32px;

  > img {
    width: 24px;
    height: 24px;
  }

  > text {
    width: 130px;
    height: 24px;

    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    /* Text Black */

    color: #000000;
  }
`;

const HeaderAvatar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 9px;
  margin-left: 10%;

  > img {
    width: 37px;
    height: 37px;
    border-radius: 50%;
  }
`;

const HeaderProfile = styled.div`
  width: 142px;
  height: 52px;

  > text {
    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    color: #ffffff;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  width: 100%;
  height: 28.15%;
  bottom: 0px;
`;

const EachButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  width: 100%;
  height: 33.33%;
`;

const EachButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 44.1%;
  max-width: 182px;
  height: 52px;

  /* white */

  background: #ffffff;
  /* Text Black */

  border: 1px solid #000000;
  border-radius: 30px;

  &.ticket {
    background: #ff477e;
  }

  > text {
    width: 81.4%;
    height: 24px;

    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    /* identical to box height, or 24px */

    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: #000000;
  }
  > text.ticket {
    color: #ffffff;
  }

  > text.authentification {
    color: #c9c9c9;
  }
`;
