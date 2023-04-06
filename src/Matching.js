import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";

var Spinner = require("react-spinkit");

function Matching() {
  const location = useLocation();
	const theme = location.state.theme;
  const [loading, setLoading] = useState(true)
  setInterval(() => {setLoading(false)}, 5000);

  return (
    <MatchingContainer style={{backgroundColor : (theme===0)? "#FF477E" : "#49516f" }}>
      {loading ? <SpinnerContainer>
        <Spinner
          name="line-spin-fade-loader"
          style={{
            display: "flex",
            left : 35,
            top: 30,
            color: "white",
            width: 80,
            height: 80,
          }}
        />
      </SpinnerContainer> : <></>}
      <MatchingCardContainer>
        <MatchingCardContent> 
            <ContentContainer>
              {/*<img src={require("./assets/dzzdzz_logo2.png")}
            alt="이미지"
          /> */}
              {(theme === 0) ? <img src={require("./assets/dzzdzz_logo2.png")} alt="이미지" />: <img src={require("./assets/dzzdzz_logo.png")} alt="이미지" />}
              <text>
                지금부터<br></br>
                <span>매칭</span>이<br />
                시작됩니다!
              </text>
            </ContentContainer>
        </MatchingCardContent>
      </MatchingCardContainer>
      <ConfirmContainer>
        {loading ? <text>곧 매칭된 상대방을 볼 수 있어요!</text> : <Button>
          <Link to="/matching2" style={{color : '#48484A', textDecorationLine : "none"}}>
            <text>확인하기</text>
          </Link>
        </Button>}
      </ConfirmContainer>
    </MatchingContainer>
  );
}

export default Matching;

const MatchingContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 10px;

  width: 66.66%;
  max-width : 260px;
  height: 32px;

  /* white */

  background: #ffffff;
  border-radius: 13px;

  > text {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 10px;

    width: 260px;
    height: 32px;

    /* white */

    background: #ffffff;
    border-radius: 13px;
  }
`;

const MatchingCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 66.66%;
  max-width : 260px;
  height: 37.56%;
  max-height : 320px;
  top: 13.74%;
  background: #ffffff;
  box-shadow: 0px 13px 12px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

const MatchingCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  width: 100%;
  height : 71.92%;
  min-height: 228px;
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  //padding: 20px;
  //gap: 10px;
  position: absolute;
  width: 100px;
  height: 100px;
  top: 58.53%;

  border-radius: 5px;
`;


const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 30px;

  width: 50%;
  min-width : 125px;
  height: 100%;

  > text {
    width: 135px;
    height: 102px;
    white-space: pre-line;
    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 34px;
    text-align: center;

    /* dzz_black */

    color: #333333;
  }

  > text > span {
    color: #ff477e;
  }

  > img {
    width: 80%;
    height: 80%;
    max-width : 96px;
    max-height : 96px;  
  }
`;

const ConfirmContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  position: absolute;
  width: 100%;
  height: 50px;
  top: 74.17%;


  > text {
    width: 127px;
    height: 50px;

    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    /* or 156% */

    text-align: center;

    /* white */

    color: #ffffff;
  }
`;
