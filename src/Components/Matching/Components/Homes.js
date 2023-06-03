import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import {
  MobileContainer,
  HeaderContainer,
  HeaderLeft,
  HeaderProfile,
  HeaderRight,
  ButtonContainer,
  EachButtonContainer,
  EachButton,
  CardTitleContainer,
  CardTag,
  CardTicket,
  CardTitle,
  Confirmation,
  TextField,
  MatchingCardContainer,
  MatchingCard,
  HeaderAvatar,
} from "../StyledComponent/MatchingStyled";

function Homes() {
  const navigate = useNavigate();
  const location = useLocation();
  function Item(props) {
    return (
      <Paper>
        <CardTitleContainer>
          <CardTag>
            <text>{props.item.title}</text>
          </CardTag>
          <CardTitle>{props.item.description}</CardTitle>
          <CardTicket>
            <Confirmation theme={props.theme} />
            <text>현재 보유 티켓 : {props.ticket}</text>
          </CardTicket>
        </CardTitleContainer>
      </Paper>
    );
  }

  const listener = (event) => {
    const { data, type } = JSON.parse(event);

    switch (type) {
      case "accessToken":
        setName(data);
        break;

      case "onBlur":
        navigate("/");
        break;
    }
  };

  useEffect(() => {
    //android
    document.addEventListener("message", (e) => listener(e.data));
    //ios
    window.addEventListener("message", (e) => listener(e.data));

    window.ReactNativeWebView?.postMessage(
      JSON.stringify({ type: "onLoad", data: "" })
    );
  }, []);

  const [name, setName] = useState("미쥬미쥬미쥬");
  // 유저티켓 보유 갯수 확인, 추후 서버 연동 필요
  const Ticket = useSelector((state) => {
    return state.Popup.ticket;
  });
  const dispatch = useDispatch();
  const [seasonNumber, setSeasonNumber] = useState(2);
  const [season, setSeason] = useState(1);
  const [theme, setTheme] = useState(season);
  const seasonlist = ["이성", "혼성"];

  // 유저인증여부 확인, 추후 서버 연동 필요
  const authentification = true;

  const items = [
    {
      title: "#소개팅을 원해요",
      description: (
        <TextField>
          <text>
            매칭의 정석 소개팅♥
            <br />
            <text className="highlight">
              ‘대체 다들 어디서 만나?’
              <br />
              ‘연애 수문장 졸업기원..ㅠㅠ’
            </text>
            <br />
            <span>
              <span className="highlight">더이상 고민</span>하지말고
            </span>
            <br />
            시즌 입장!
          </text>
        </TextField>
      ),
    },
    {
      title: "#친구를 원해요",
      description: (
        <TextField>
          <text>
            나도 어쩌면
            <br />
            누군가의 소울메이트🥹?!
            <br />
            <text className="highlight">‘맛집 뿌실 단짝 어디 없나?’</text>
            <br />
            <span>
              <span className="highlight">애매하게 서성이지</span>말고
            </span>
            <br />
            시즌 입장!
          </text>
        </TextField>
      ),
    },
  ];

  return (
    <>
      <MobileContainer>
        <HeaderContainer>
          <HeaderAvatar>
            <img src={require("../../../assets/donut.png")} alt="이미지" />
          </HeaderAvatar>
          <HeaderLeft>
            {/* 사용자 프로필 사진 가져오기 */}
            <HeaderProfile>
              <text className="name">{name}님</text>
              <text>안녕하세요!</text>
            </HeaderProfile>
          </HeaderLeft>
          <HeaderRight>
            <text>
              지금은{" "}
              <span>
                시즌{seasonNumber} ({seasonlist[season]})
              </span>{" "}
              접수기간입니다!
            </text>
          </HeaderRight>
        </HeaderContainer>
        <MatchingCardContainer>
          <MatchingCard theme={theme}>
            <>
              <Carousel
                index={season}
                onChange={(now) => {
                  setTheme(now);
                }}
                swipe={true}
                autoPlay={false}
                navButtonsAlwaysInvisible={true}
                indicators={true}
                indicatorContainerProps={{ style: { marginTop: "-19px" } }}
              >
                {items.map((item, i) => (
                  <Item key={i} item={item} theme={theme} ticket={Ticket} />
                ))}
              </Carousel>
            </>
          </MatchingCard>
        </MatchingCardContainer>
        <ButtonContainer>
          <EachButtonContainer>
            <EachButton
              onClick={() => {
                Ticket === 0
                  ? navigate("/purchase")
                  : navigate("/matching", { state: { theme: theme } });
              }}
              className="ticket"
              theme={theme}
              season={season}
            >
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
                    // to="/matching"
                    // state={{ theme: theme }}
                    style={{ color: "white", textDecorationLine: "none" }}
                  >
                    신청하기
                  </Link>
                )}
              </text>
            </EachButton>
          </EachButtonContainer>
          <EachButtonContainer>
            <EachButton
              onClick={() => {
                window.ReactNativeWebView?.postMessage(
                  JSON.stringify({ type: "modify", data: "" })
                );
              }}
            >
              <text>내 정보 수정하기</text>
            </EachButton>
          </EachButtonContainer>
          <EachButtonContainer>
            <EachButton>
              {authentification ? (
                <>
                  <text className="authentification">학생 인증 완료 </text>
                  <img
                    src={require("../../../assets/CircleWavyCheck.png")}
                    alt="이미지"
                  />
                </>
              ) : (
                <text>학생 인증 하기</text>
              )}
            </EachButton>
          </EachButtonContainer>
        </ButtonContainer>
      </MobileContainer>
    </>
  );
}

export default Homes;



