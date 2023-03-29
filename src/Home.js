import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Theme from "./Theme"
var state = "apply"
function Home() {
    var count = 1;
    var authentification = false;
  return (
    <MobileContainer>
      <Rectangle187></Rectangle187>
      <Frame6915>
        <Headerarea>
          <HeaderLeft>
            <Frame6891>
              <img src={require("./assets/dzzdzz_logo.png")}
            alt="이미지"
          /> 
            </Frame6891>
            <text>미쥬미쥬미쥬님 안녕하세요</text>
          </HeaderLeft>
          <HeaderGap />
          <HeaderRight style={{background : (state==="apply") ? "yellow" : "black" }}>
            <HeaderRightTitle style = {{color : (state==="apply") ? "black" : "yellow"}}>
              <text>지금은</text>
              <text>
                {(state==="apply") ? <span>시즌2 접수기간</span> : <span>시즌2 매칭기간</span>}
              </text>
              <text>입니다!</text>
            </HeaderRightTitle>
          </HeaderRight>
        </Headerarea>
      </Frame6915>
      <Frame6952>
        <Frame28>
          <Content>
            <Button>
              <text>{ (count === 0) ? <Link to="/purchase" style={{color : 'white', textDecorationLine : "none"}}>충전하기</Link> : <Link to="/matching" style={{color : 'white', textDecorationLine : "none"}}>신청하기</Link>} </text>
            </Button>
          </Content>
          <Frame6936>
            <Frame6936Content>
              <SecondButton>
                <text>내 정보 수정하기</text>
              </SecondButton>
            </Frame6936Content>
          </Frame6936>
        </Frame28>
        <Frame6935>
          <Frame6936Content>
            <SecondButton>
                {authentification ?  <><text className="complete">학생 인증 완료</text><img src={require("./assets/CircleWavyCheck.png")} alt="이미지"  /></>  : <text>학생 인증 하기</text>}

              
            </SecondButton>
          </Frame6936Content>
        </Frame6935>
      </Frame6952>
      <CardContainer>
        <Frame7>
          <CardFrame6936>
            <CardFrame6935>
              <Component32>
                <Frame6882>
                  <text>#소개팅을 원해요</text>
                </Frame6882>
              </Component32>
              <text>
                매칭의 정석 소개팅♥ ‘대체 다들 어디서 만나?’ ‘연애 수문장
                졸업기원..ㅠㅠ’ 더이상 고민하지말고 시즌 입장!
              </text>
              <Ticket>
                <text>현재 보유 티켓 : {count}</text>
              </Ticket>
            </CardFrame6935>
          </CardFrame6936>
        </Frame7>
        <Frame7>
          <CardFrame6936>
            <CardFrame6935>
              <Component32>
                <Frame6882>
                  <text>#친구를 원해요</text>
                </Frame6882>
              </Component32>
              <text>
                나도 어쩌면 누군가의 소울메이트🥹?! ‘맛집 뿌실 단짝 어디 없나?’
                애매하게 서성이지 말고 시즌 입장!
              </text>
              <Ticket>
                <text>현재 보유 티켓 : {count}</text>
              </Ticket>
            </CardFrame6935>
          </CardFrame6936>
        </Frame7>   
      </CardContainer>
    </MobileContainer>
  );
}

export default Home;

const MobileContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

const Rectangle187 = styled.div`
  position: absolute;
  width: 100%;
  height: 418px;
  background: #ff477e;  
`;

const Frame6952 = styled.div`
  /* display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: absolute;
    width: 100%;
    height: 210px;
    left: -1px;
    bottom : 0px; */
    
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  width: 393px;
  height: 210px;
  top: 535px;
  left : 50%;
  transform: translate(-50%,0);
`;

const CardFrame6936 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 15px;

  width: 100%;
  height: 276px;
`;

const CardFrame6935 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 38px;

  width: 100%;
  height: 276px;

  > text {
    width: 200px;
    height: 128px;

    /* Body Light/16 pt */

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
`;

const Component32 = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 10px;

  width: 113px;
  height: 32px;

  /* white */

  background: #ffffff;
  /* dzz_pink */

  border: 0.5px solid #ff477e;
  border-radius: 19px;
`;

const Frame6882 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 3px;

  width: 100px;
  height: 18px;

  > text {
    width: 100px;
    height: 18px;

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
const Ticket = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  //padding: 8px 20px;
  gap: 10px;

  width: 193px;
  height: 40px;

  /* white */

  background: #ffffff;
  border-radius: 32px;
`;

const CardContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 260px;
  height: 353px;
  left: 50%;
  gap: 25px;
  transform: translate(-50%, 0%);
  top: 166px;
  overflow-x: scroll;
`;

const Frame7 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  //padding: 29px 0px;
  gap: 10px;

  width: 260px;
  height: 100%;

  /* white */

  background: #ffffff;
  /* card */
  box-shadow: 0px 13px 12px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

const Frame6915 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 100%;
  height: 95px;
  left: 0px;
  top: 53px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  width: 100%;
  height: 70px;
`;

const Frame6936Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 9px 20px;
  gap: 4px;

  width: 212px;
  height: 70px;
`;

const SecondButton = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 10px;

  width: 172px;
  height: 52px;

  /* white */

  background: #ffffff;
  /* Text Black */

  border: 1px solid #000000;
  border-radius: 30px;

  > text.complete {
    color: #C9C9C9;
  };

  > img {
    width : 21px;
    height : 21px;
  }
`;

const Frame6936 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 391px;
  height: 70px;
`;

const Button = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 10px;

  width: 172px;
  height: 52px;

  /* white */

  background: #ff477e;
  /* Text Black */

  border: 1px solid #000000;
  border-radius: 30px;

  > text {
    width: 140px;
    height: 24px;

    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    /* identical to box height, or 24px */

    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: #ffffff;
  }


`;

const Frame28 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 100%;
  height: 140px;
`;
const Frame6935 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 100%;
  height: 70px;
`;

const Headerarea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  width: 100%;
  min-width: 390px;
  height: 95px;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  /* padding: 9px 9px 9px 25px; */
  width: 233px;
  height: 95px;

  > text {
    width: 155px;
    height: 52px;

    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
    /* or 116% */

    /* white */

    color: #ffffff;
  }
`;

const Frame6891 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 9px;

  width: 37px;
  height: 37px;

  > img {
    width: 37px;
    height: 37px;

    /* background: url(2022-12-11 21;49;17.png), #C4C4C4; */
  }
`;

const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  right: 0px;
  width: 33.33%;
  min-width: 130px;
  height: 95px;

  /* FY_yellow */
//
`;

const HeaderRightTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //padding: 9px 0px;
  //gap: 20px;

  width: 110px;
  height: 95px;
  > text {
    width: 110px;
    height: 32px;
    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    //color: #000000;
    color : ${(state === "apply") ? "#000000" : Theme.mainColor}

    //yellow
    > span {
      font-weight: 600;
    }
  }
`;

const HeaderGap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  //padding: 9px 20px 9px 9px;
  gap: 10px;
  width: 6.92%;
  min-width: 27px;
  height: 95px;
`;
