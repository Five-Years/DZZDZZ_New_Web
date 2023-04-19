import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import {
  BackgroundCard,
  MobileContainer,
  HeaderContainer,
  HeaderLeft,
  HeaderAvatar,
  HeaderProfile,
  HeaderRight,
  StageContainer,
  Carousels,
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
} from "../StyledComponent/MatchingStyled";
function Item(props) {
  return (
    <Paper>
      <CardTitleContainer>
        <CardTag>
          <text>{props.item.title}</text>
        </CardTag>
        <CardTitle>{props.item.description}</CardTitle>
        <CardTicket>
          {/* 티켓 이미지 */}
          <Confirmation theme={props.theme} />
          <text>현재 보유 티켓 : {props.ticket}</text>
        </CardTicket>
      </CardTitleContainer>
    </Paper>
  );
}


function Homes() {

  const [paddingTop, setPaddingTop] = useState(0)
  const listener = (event) => {
    const data = JSON.parse(event);
    if(data[1].type === 'paddingTop')
    {
      setPaddingTop(Number(data[1].data))
    }
  };


  useEffect(()=> {
//android
document.addEventListener("message", (e)=> listener(e.data));
//ios
window.addEventListener("message", (e)=> listener(e.data));
window.ReactNativeWebView?.postMessage(JSON.stringify({type : "onLoad"}))
return () => {
  //android
  window.removeEventListener("message", (e)=> listener(e.data));
  //ios
  document.removeEventListener("message", (e)=> listener(e.data));
}
  },[])




  const [padding, setPadding] = useState(0)
  // 유저티켓 보유 갯수 확인, 추후 서버 연동 필요
  const Ticket = useSelector((state) => {
    return state.Popup.ticket;
  });
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(1);


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
            ‘맛집 뿌실 단짝 어디 없나?’
            <br />
            애매하게 서성이지 말고
            <br />
            시즌 입장!
          </text>
        </TextField>
      ),
    },
  ];
  return (
    //  "#FF477E" : "#49516F"
    <>
      {/* 테마 이미지 */}
      <BackgroundCard theme={theme}></BackgroundCard>
      <MobileContainer style = {{ paddingTop : padding }} >
        <HeaderContainer>
          <HeaderLeft>
            {/* 사용자 프로필 사진 가져오기 */}
            <HeaderAvatar>
              <img src={require("../../../assets/mango.jpg")} alt="이미지" />
            </HeaderAvatar>
            <HeaderProfile>
              <text>미쥬미쥬미쥬님 안녕하세요!</text>
            </HeaderProfile>
          </HeaderLeft>
          <HeaderRight>
            <StageContainer>
              <text>
                지금은
                <br />
                <span>시즌2(이성)</span>
                <br />
                접수기간입니다!
                <br />
                padding값 = {paddingTop}
              </text>
            </StageContainer>
          </HeaderRight>
        </HeaderContainer>
        <MatchingCardContainer>
          <MatchingCard>
            <>
              <Carousel index={theme}
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
        </MatchingCardContainer>
      </MobileContainer>
      <ButtonContainer>
        <EachButtonContainer>
          <EachButton className="ticket" theme={theme}>
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
          <EachButton onClick={()=> {window.ReactNativeWebView?.postMessage(JSON.stringify({type : "modify"}))}}>
            <text>내 정보 수정하기</text>
          </EachButton>
        </EachButtonContainer>
        <EachButtonContainer>
          <EachButton onClick={()=>{setPaddingTop(1);}}>
            {authentification ? (
              <>
                <text className="authentification">학생 인증 완료</text>
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
    </>
  );
}

export default Homes;
