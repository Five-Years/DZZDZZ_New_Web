import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Tickets } from "../../../assets/ticket.svg";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { ReactComponent as Info } from "../../../assets/Info.svg";

function Homepage() {
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
  const dispatch = useDispatch();
  const [seasonNumber, setSeasonNumber] = useState(2);
  const [season, setSeason] = useState(1); //현재 시즌 정보,  0 : 이성매칭 1 : 혼성매칭 2 : 준비중
  const seasonlist = ["이성", "혼성","정리중"];
  const [checked,setChecked] = useState(false)
  console.log(checked)

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
            <HeaderSeason theme={season}>
            <text>
              지금은{" "}
              <span>
                시즌{seasonNumber} ({seasonlist[season]})
              </span>{" "}
              접수기간입니다!
            </text>            </HeaderSeason>
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
        <SelectionContainer>
            <Selection theme= {0} onClick={()=>{navigate("/MatchingHome", {state : {theme : 0, season : season}})}}>
                <SelectionTitle>
                    <text><span>#</span> 소개팅을 원해요</text>
                </SelectionTitle>
                {season===0 ? <Highlight><text>NOW!</text></Highlight> : <></>}
                <MoveContainer><KeyboardArrowRightIcon /></MoveContainer>
            </Selection>
            <Selection theme = {1} onClick={()=>{navigate("/MatchingHome", {state : {theme : 1, season : season}})}}>
            <SelectionTitle>
                {/*  className="disalbed" */}
                    <text><span className="friend">#</span> 친구를 원해요</text>
                </SelectionTitle>
                {season===1 ? <Highlight><text>NOW!</text></Highlight> : <></>}
                <MoveContainer><KeyboardArrowRightIcon /></MoveContainer>
                {/* color="disabled" */}
            </Selection>
        </SelectionContainer>
        <MatchingOptionContainer>
            <MatchingOption>
                <input type="checkbox" checked={checked} onChange={({ target: { checked } }) => setChecked(checked)}/>
                <text>같은 학교끼리 만나기</text>
                <InfoContainer><Info onClick={()=>{window.ReactNativeWebView?.postMessage(
                        JSON.stringify({ type: "same", data: 0 })
                      ); }} /></InfoContainer>
            </MatchingOption>
        </MatchingOptionContainer>
      </MobileContainer>
    </>
  );
}

export default Homepage;

const MatchingOptionContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

position: absolute;
width: 100%;
height: 4.57%;
top: 58.57%;
`;

const MatchingOption = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 70.66%;
height: 100%;
/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
>input {
    width :20px;
    height : 20px;
}

> text {
    width: 74.9%;
    height: 100%;
    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    /* identical to box height, or 200% */
    display: flex;
    align-items: center;
    /* SystemGray/300 */
    color: #D8D8DC;
}
`;

const InfoContainer = styled.div`
display : flex;
height : 100%;
width : 20px;
align-items: center;
justify-content: center;
margin-right: 0;
right : 0
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

color: #FF0000;
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
  flex : 1;
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
  color : ${props=> props.theme===1 ? "#0094FF" : (props.theme===2 ? "#888888" : "#FF477E")};
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

    :active {
        background: ${props=> props.theme === 1 ? "#EFF6FC" : "#FEF1F5"};
    }
`;



