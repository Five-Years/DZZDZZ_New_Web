import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Tickets } from "../../../assets/ticket.svg";

function MatchingHome() {
  const navigate = useNavigate();
  const location = useLocation();


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
  const {state} = useLocation();
  const dispatch = useDispatch();
  const [seasonNumber, setSeasonNumber] = useState(2);
  const [season, setSeason] = useState(state.season);
  const [theme, setTheme] = useState(state.theme)
  const seasonlist = ["이성", "혼성","정리중"];

  // 유저인증여부 확인, 추후 서버 연동 필요
  const authentification = true;

  return (
    <>
      <MobileContainer>
        <HeaderContainer>
            <HeaderTop>
            <HeaderBox>
            <HeaderProfile>
                <HeaderName>
                <text className="name">{name}님</text>
                <text>안녕하세요!</text>
                </HeaderName>
            </HeaderProfile>
            <HeaderSeason theme = {season}>
            <text>
              지금은{" "}
              <span>
                시즌{seasonNumber} ({seasonlist[season]})
              </span>{" "}
              접수기간입니다!
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
                <Tickets/>
                <Ticketviewer><text>현재 보유 티켓 : {Ticket}</text></Ticketviewer>
            </Confirmation>
                <PurchaserButton onClick={()=>{navigate("/purchasing")}}><text>충전하기</text></PurchaserButton>
          </CardTicket>
          </HeaderBottom>
        </HeaderContainer>
        <MatchingContainer>
        <MatchingCardContainer theme={theme}>
        <CardContainer>
        <CardTitleContainer>
          <CardTag theme={theme}>
            {theme === 0 ? <text><span>#</span>소개팅을 원해요</text> : <text><span>#</span>친구를 원해요</text>}
          </CardTag>
          <CardTitle>
          <TextField>
            {theme === 0 ? <text>
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
          </text> : 
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
        </text>}
          
        </TextField>
</CardTitle>
        </CardTitleContainer>
        </CardContainer>
        </MatchingCardContainer>
        </MatchingContainer>
        <ButtonContainer>
        <EachButtonContainer>{theme === season ? <EachButton onClick={()=> {navigate("/MatchingProgress", { state: { theme: theme } });}} className="activate"><text className="enter">신청하기</text></EachButton> : <EachButton className="deactivate"><text className="enter">지금은 신청 기간이 아니에요</text></EachButton> }</EachButtonContainer>
        <EachButtonContainer><EachButton><text>내 정보 수정하기</text></EachButton></EachButtonContainer>
        <EachButtonContainer>{true ? <EachButton><text>학생 인증하기</text></EachButton> :<EachButton className="guide"><text className="guide">단짠 가이드</text></EachButton>}</EachButtonContainer>
        </ButtonContainer>
      </MobileContainer>
    </>
  )
}

export default MatchingHome

const MatchingContainer = styled.div`
display: flex;
position: absolute;
width : 100%;
height: 36.57%;
top : 32.43%;
align-items: center;
justify-content : center;
`;

const MatchingCardContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
position: absolute;
width: 66.66%;
height: 100%;
background: #FFFFFF;
${props=> props.theme === 1 ? "box-shadow: 0px 0px 5px #0094FF, 0px 9px 6px rgba(0, 0, 0, 0.1)" : "{box-shadow: 0px 0px 5px #FF477E, 0px 9px 6px rgba(0, 0, 0, 0.1)" }; 
border-radius: 20px;
`;

const TextField = styled.div`
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
}

> text > text {
font-weight: bold;
line-height: 26px;
letter-spacing: 0em;
text-align: center;
}

> text > span {
  font-family: var(--font-Poppins);
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  /* or 160% */
  text-align: center;
  /* Text Black */
  color: #FF477E;
}

> text > span > span {
  font-weight : 600
}
`;

const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;

width: 100%;
height: 77.34%;
`;

export const CardTitleContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 38px;
  width: 100%;
  height: 83.63%;
`;

export const CardTag = styled.div`
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;

  width: 43.46%;
  height: 11.59%;
  min-width : 113px;
  min-height : 32px;
  /* white */
  background: #ffffff;
  /* dzz_pink */
  border: 1px solid ${props=> props.theme === 1 ? "#0094FF" : "#FF477E" }; 
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
    color : #000000
  }

  > text > span {
    color : ${props=> props.theme === 1 ? "#0094FF" : "#FF477E" };

  }
`;

export const CardTitle = styled.div`
  display : flex;
  position: relative;
  width : 76.92%;
  min-width: 200px;
  height : 64.64%;
  min-height: 120px;
  text-align: center;
  bottom : 5.051%;
  > text {
    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #000000;
    > span.love {
      color: #ff477e;
    }
  }
`;


const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 100%;
  height: 24.57%;
  top: 72.71%;


`;

const EachButtonContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 4px;

width: 100%;
height: 30.23%;
`;

const EachButton = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
width: 53.85%;
height: 84.62%;
/* white */
background: #FFFFFF;
/* button */
box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
border-radius: 30px;
/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

&.guide {
  background: #0094FF;
}

&.activate {
  background: #231815
}
&.deactivate {
  background: #BEBFBF;
}
> text {
  font-family: var(--font-OpenSans);
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

&.guide {
  color: #FFFFFF;
}

&.enter {
font-weight: 600;
color : #FFFFFF;
}
}
`;


const CardTicket = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
gap: 31px;

width: 66.66%;
min-width : 260px;
height: 100%;
`;

const Highlight = styled.div`
right : 27.56%;
width: 54px;
height: 21px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.05em;
text-transform: capitalize;

>text {
font-family: var(--font-OpenSans);
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 150%;
}

color: #182F43;
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
background: #FF477E;
border-radius: 30px;

>text {
    font-family: var(--font-OpenSans);
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

color: #FFFFFF;

}
`;

const MoveContainer = styled.div`
position: relative;
width : 19px;
height : 21px;
right :16.67%;
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
    width : 24px;
    height : 24px;
}
`;

const Ticketviewer = styled.div`
width : 77.78%;
min-width : 119px;


> text{
font-family: var(--font-OpenSans);
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 24px;
color: #000000;
}
`;



export const MobileContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

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

const HeaderName = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0px;

width: 100%;
height: 73.91%;

> text {
    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }

  > text.name{
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
  }
`;

const HeaderTop = styled.div`
    width: 100%;
    height: 51.76%;
`;

const HeaderBox = styled.div`
position: relative;
width: 60.36%;
min-width : 230px;
height: 100%;
left : 16.67%;
`;

const HeaderProfile = styled.div`
width : 66.98%;
min-width : 142px;
height : 78.41%;
display: flex;
justify-content: center;
align-items: center;
`;

const HeaderSeason = styled.div`
width : 100%;
min-width : 250px;
height : 21.59%;
min-height : 19px;
background-color: white;

> text {
  font-family: var(--font-OpenSans);
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;
color: #000000;
}

> text > span {
  color : ${props => props.theme ===1 ? "#0094FF" : (props.theme===2 ? "#888888" : "#FF477E")};
  font-weight: 600;
  font-size: 14px;
}
`;

export const HeaderBoarder = styled.div`
width : 100%;
height : 22.35%;
`;

const Boarder = styled.div`
position: relative;
top : 50%;
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




const SelectionTitle = styled.div`
display: flex;
flex-direction: row;
align-items: center;
position: relative;
padding: 0px;
gap: 10px;
left : 16.67%;
width: 35.9%;
min-width : 140px;
height: 16.32%;
min-height : 31px;

> text > span {
    margin-right: 10px;
    font-family: var(--font-Poppins);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    /* dzz_pink */
    color: #FF477E;

    &.friend{
        color : #0094FF
    }
}



> text {
font-family: var(--font-Poppins);
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
display: flex;
align-items: center;

/* Text Black */

color: #000000;

&.disalbed {
    color : grey;
}
}
`;

const SelectionContainer = styled.div`
    position : absolute;
    width: 100%;
    height: 26.14%;
    top: 32.43%;
`;
const Selection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 15px;

    width: 100%;
    height: 50%;

    :hover {
        background: #FEF1F5;
    }

`;
  


