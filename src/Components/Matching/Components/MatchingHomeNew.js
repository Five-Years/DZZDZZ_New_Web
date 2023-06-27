import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import MatchingHeaderNew from "./Header/MatchingHeaderNew";
import MatchingProgressHeader from "./Header/MatchingProgressHeader";
import MyTicket from "../ReusableComponents/MyTicket";


function MatchingHomeNew() {
  const navigate = useNavigate();
  const location = useLocation();
  const seasonTheme = location.state.theme;

  // const Name = useSelector((state) => {
  //   return state.Popup.name;
  // });
  const Season = useSelector((state) => {
    return state.Popup.season;
  });


  useEffect(() => {
    window.ReactNativeWebView?.postMessage(
      JSON.stringify({ type: "notfirst", data: "" })
    );
  }, []);

  const listener = (event) => {
    const { data, type } = JSON.parse(event);

    switch (type) {
      case "back":
        if (this.props.navigation.isFirstRouteInParent()) {
          navigate("/Matching");
        } else {
          navigate(-1);
        }
        break;
    }
  };

  return (
    <>
      <MobileContainer>
        <HeaderContainer>
          <ToggleContainer>
            <MatchingProgressHeader />
          </ToggleContainer>
          <ProfileContainer>
            <MatchingHeaderNew />
          </ProfileContainer>
        </HeaderContainer>
        <CouponContainer>
          <MyTicket />
        </CouponContainer>
        {/* theme={location.state.theme} */}
        <MatchingContainer>
          <MatchingCardContainer theme={seasonTheme}>
            <CardContainer>
              <CardTitleContainer>
                <CardTag theme={seasonTheme}>
                  {seasonTheme === 0 ? (
                    <text>
                      <span>#</span>소개팅을 원해요
                    </text>
                  ) : (
                    <text>
                      <span>#</span>친구를 원해요
                    </text>
                  )}
                </CardTag>
                <CardTitle>
                  <TextField>
                    {seasonTheme === 0 ? (
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
                        매칭 입장!
                      </text>
                    ) : (
                      <text>
                        나도 어쩌면
                        <br />
                        누군가의 소울메이트🥹?!
                        <br />
                        <text className="highlight">
                          ‘맛집 뿌실 단짝 어디 없나?’
                        </text>
                        <br />
                        <span>
                          <span className="highlight">애매하게 서성이지</span>
                          말고
                        </span>
                        <br />
                        매칭 입장!
                      </text>
                    )}
                  </TextField>
                </CardTitle>
              </CardTitleContainer>
            </CardContainer>
          </MatchingCardContainer>
        </MatchingContainer>
        <ButtonContainer>
          <EachButtonContainer>
            {Season ? (
              <EachButton
                onClick={() => {
                  navigate("/MatchingProgress", { state: { theme: seasonTheme } });
                }}
                className="activate"
                theme={seasonTheme}
              >
                <text className="enter">신청하기</text>
              </EachButton>
            ) : (
              <EachButton className="deactivate" theme={seasonTheme}>
                <text className="enter">지금은 신청 기간이 아니에요</text>
              </EachButton>
            )}
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
          {/* <EachButtonContainer>
            <EachButton
              onClick={() => {
                window.ReactNativeWebView?.postMessage(
                  JSON.stringify({ type: "student", data: "" })
                );
              }}
            >
              <text>학생 인증하기</text>
            </EachButton>
          </EachButtonContainer> */}
        </ButtonContainer>
      </MobileContainer>
    </>
  );
}

export default MatchingHomeNew;

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 25.86%;
`;

const ToggleContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 5.143%;
  top: 3px;
  gap: 8px;
`;

const ProfileContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 15.43%;
  gap: 15px;
  top: 7.857%;
`;

const CouponContainer = styled.div`
  display: flex;
  width: 100%;
  height: 6.14%;
  gap: 10px;
`;

const MatchingContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 32.43%;
  top: 36.57%;
  align-items: center;
  justify-content: center;
`;

const MatchingCardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 10px;
  width: 66.66%;
  height: 100%;
  background: #ffffff;
  border: 3px solid ${(props) => (props.theme === 1 ? "#C4DFF3" : "#FEC7D7")};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const TextField = styled.div`
  width: 100%;
  > text {
font-family: var(--font-Pretendard);    font-style: normal;
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
    color: #ff477e;
  }

  > text > span > span {
    font-weight: 600;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 0px;

  width: 100%;
  height: 87.22%;
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
  min-width: 113px;
  min-height: 32px;
  /* white */
  background: ${(props) => (props.theme === 1 ? "#0094FF" : "#FF477E")};
  /* dzz_pink */
  border: 0.5px solid #ffffff;

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
    color: #ffffff;
  }

  > text > span {
    color: #ffffff;
  }
`;
const ContentContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 6%;
  background-color: ${(props) => (props.theme === 1 ? "#EDFAFF" : "#FFF4F4")};
`;

export const CardTitle = styled.div`
  display: flex;
  position: relative;
  width: 76.92%;
  min-width: 200px;
  height: 64.64%;
  min-height: 130px;
  text-align: center;
  bottom: 5.051%;
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
  background: #dfe1e4;
  border-radius: 30px;

  :active {
    opacity: 50%;
  }

  &.guide {
    background: #0094ff;
  }

  &.activate {
    background: ${(props) => (props.theme === 0 ? "#FF477E" : "#0094FF")};
  }

  &.deactivate {
    background: ${(props) => (props.theme === 0 ? "#A6DAFF" : "#FEC7D7")};
  }
  > text {
    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 150%;
    /* identical to box height, or 21px */

    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    /* Text Black */

    color: #000000;

    &.guide {
      color: #ffffff;
    }

    &.enter {
      font-weight: 600;
      color: #ffffff;
    }
  }
`;

// export const HeaderContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;

//   position: absolute;
//   width: 100%;
//   height: 24.29%;
//   left: 0px;
//   top: 4.29%;
// `;

export const HeaderBoarder = styled.div`
  width: 100%;
  height: 22.35%;
`;
