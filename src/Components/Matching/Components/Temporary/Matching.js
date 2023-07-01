import React from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  MatchingContainer,
  Button,
  MatchingCardContainers,
  MatchingCardContent,
  SpinnerContainer,
  ContentContainer,
  ConfirmContainer,
  Spinners,
} from "../StyledComponent/MatchingStyled";

function Matching() {
  const location = useLocation();
  const theme = location.state.theme;
  const [loading, setLoading] = useState(true);
  setInterval(() => {
    setLoading(false);
  }, 5000);
  const navigate = useNavigate();

  return (
    <MatchingContainer theme={theme}>
      {loading ? (
        <SpinnerContainer>
          <Spinners name="line-spin-fade-loader" />
        </SpinnerContainer>
      ) : (
        <></>
      )}
      <MatchingCardContainers>
        <MatchingCardContent>
          <ContentContainer>
            {theme === 0 ? (
              <img
                src={require("../../../assets/dzzdzz_logo2.png")}
                alt="이미지"
              />
            ) : (
              <img
                src={require("../../../assets/dzzdzz_logo.png")}
                alt="이미지"
              />
            )}
            <text>
              지금부터<br></br>
              <span>매칭</span>이<br />
              시작됩니다!
            </text>
          </ContentContainer>
        </MatchingCardContent>
      </MatchingCardContainers>
      <ConfirmContainer>
        {loading ? (
          <text>곧 매칭된 상대방을 볼 수 있어요!</text>
        ) : (
          <Button
            onClick={() => {
              navigate("/matching2");
            }}
          >
            <Link
              to="/matching2"
              style={{ color: "#48484A", textDecorationLine: "none" }}
            >
              <text>확인하기</text>
            </Link>
          </Button>
        )}
      </ConfirmContainer>
    </MatchingContainer>
  );
}

export default Matching;
