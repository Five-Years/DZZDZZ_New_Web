import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

var Spinner = require("react-spinkit");

function Matching() {
  return (
    <MatchingContainer>
      <Frame70>
        <Spinner
          name="line-spin-fade-loader"
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            justifyContent: "center",
            width: 80,
            height: 80,
            left: 35,
            top: 35,
          }}
        />
      </Frame70>
      <Frame9>
        <Frame6936>
          <Frame6935>
            <Frame6945>
              {/*<img src={require("./assets/dzzdzz_logo2.png")}
            alt="이미지"
          /> */}
              <img src={require("./assets/dzzdzz_logo.png")} alt="이미지" />
              <text>
                지금부터<br></br>
                <span>매칭</span>이<br />
                시작됩니다!
              </text>
            </Frame6945>
          </Frame6935>
        </Frame6936>
      </Frame9>
      <Frame6885>
        {/*<text>곧 매칭된 상대방을
볼 수 있어요!</text>*/}
        <Button>
          <Link to="/matching2">
            <text>확인하기</text>
          </Link>
        </Button>
      </Frame6885>
    </MatchingContainer>
  );
}

export default Matching;

const MatchingContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 390px;
  min-height: 844px;
  justify-content: center;
  /* dzz_pink */
  //이성 매칭
  //background: #FF477E;

  //혼성 매칭
  background: #49516f;
  justify-content: center;
`;

const Button = styled.div`
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

const Frame9 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  //padding: 29px 0px;
  gap: 10px;

  position: absolute;
  width: 260px;
  height: 317px;
  top: 116px;

  /* white */

  background: #ffffff;
  /* card */

  box-shadow: 0px 13px 12px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

const Frame6936 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 15px;

  width: 260px;
  height: 228px;
`;

const Frame70 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  //padding: 20px;
  //gap: 10px;
  position: absolute;
  width: 100px;
  height: 100px;
  top: 494px;

  border-radius: 5px;
`;

const Frame6935 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 38px;

  width: 260px;
  height: 228px;

`;

const Frame6945 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 30px;

  width: 135px;
  height: 228px;

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
    width: 96px;
    height: px;
  }
`;

const Frame6885 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  position: absolute;
  width: 390px;
  height: 50px;
  bottom: 20%;


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
