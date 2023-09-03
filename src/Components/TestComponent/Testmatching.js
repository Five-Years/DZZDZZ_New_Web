import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import styled from "styled-components";
import MatchingProgressHeader from "Components/Matching/Components/HeaderComponent/MatchingProgressHeader";
import Lottie from "lottie-react";
import lovelykiss from "assets/lovelykiss.json";
import sadlook from "assets/sadlook.json";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// 만약 내가 선택했다면 상대방도 나를 선택했는지 한번더 검사가 필요함
// 만약 상대방도 나를 선택해서 결과가 Success혹은 Failure로 바뀌었다면
// 결과 확인하기 버튼이 활성화 되게 만든다.

function Testmatching() {
  const [detail, setDetail] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const Result = 0;

  return (
    <MatchingContainers detail={detail}>
      <ContentContainer>
        <MatchingProgressHeader isReport={false} direct={true} isMain={true} />
      </ContentContainer>

      <ProfileImageContainer>
        <CarouselContainer dynamicHeight={true} showThumbs={false}>
          {/* api별로 들어오는 데이터 형식이 조금씩 달라 데이터들어오는것에 맞게 표시해줘야함 */}
          {/* 다이렉트로 들어온경우 */}
          {/* 매칭이 성공한 경우에도 데이터 형식이 조금 다름.. */}
          {/* 
          {isDirect ? (
            MatchedUserData.images.map((item) => (
              <div>
                <img src={item.imageUrl} alt="" />
              </div>
            ))
          ) : Result === 0 ? (
            MatchedUserData.matchingBasicInfo.images.map((item) => (
              <div>
                <img src={item.imageUrl} alt="" />
              </div>
            ))
          ) : (
            <div>
              <img src={MatchedUserData.image.imageUrl} alt="" />
            </div>
          )} */}
        </CarouselContainer>{" "}
      </ProfileImageContainer>

      <ProfileNameContainer>
        <ProfileName>
          <text>{"미쥬미쥬미쥬"}</text>
        </ProfileName>
      </ProfileNameContainer>
      <ContentsContainer>
        <ContentsBox>
          <ResultBox>
            {Result === 1 ? (
              <>
                {" "}
                <LottieContainer>
                  <Lottie animationData={lovelykiss} />
                </LottieContainer>
                <text>
                  <span>미쥬미쥬미쥬</span>님을 선택하셨습니다!
                </text>
              </>
            ) : Result === 2 ? (
              <>
                <LottieContainer>
                  <Lottie animationData={sadlook} />
                </LottieContainer>{" "}
                <text>
                  아쉽게도 <span>미쥬미쥬미쥬</span> 님은
                </text>
                <text>인연이 아닌가봐요</text>
              </>
            ) : Result === 3 ? (
              <>
                {" "}
                <LottieContainer>
                  <Lottie animationData={sadlook} />
                </LottieContainer>
                <text>
                  <span>미쥬미쥬미쥬</span>님을 거절하셨습니다
                </text>
                {/* <text
                  onClick={() => {
                    navigate("/matching");
                  }}
                  className="result"
                >
                  메인으로 돌아가기
                </text> */}
              </>
            ) : (
              <>
                {" "}
                <LottieContainer>
                  <Lottie animationData={lovelykiss} />
                </LottieContainer>
                <text>축하합니다!</text>
                <text>
                  <span>미쥬미쥬미쥬</span>
                  님과매칭이 성공했어요!
                </text>
              </>
            )}
          </ResultBox>
          {/* 매칭성공 + 상대방이 아직 선택이 안했다면 */}
          {Result === 1 ? (
            <>
              <WaitingBox state={state}>
                <text>
                  선택시간이
                  <span>
                    6<span>시간</span>
                  </span>
                  <span>
                    59
                    <span>분</span>
                  </span>{" "}
                  남았어요.
                </text>
                <text>상대방이 선택하면 결과가 나와요.</text>
              </WaitingBox>
            </>
          ) : (
            <> </>
          )}

          {/* {
            Result == 1 && (MatchingResult.matchingResult === "Success" || MatchingResult.matchingResul === "RoundFail") ?
            <><SuggestionButton onClick = {navigate("/choiceLoading", {
      state: { theme: Theme, Result: 1, Direct: false },
    }  }>
                <text>결과확인하러 가기</text>
              </SuggestionButton></> : Result === 1 ? <> <WaitingBox state={state}>
                <text>
                  선택시간이
                  <span>
                    {Hour}
                    <span>시간</span>
                  </span>
                  <span>
                    {Minute}
                    <span>분</span>
                  </span>{" "}
                  남았어요.
                </text>
                <text>상대방이 선택하면 결과가 나와요.</text>
              </WaitingBox></> : <></>           
          } */}
          {/* 
        Result 가 1이면서 현재 Theme에 맞는 매칭 결과가 Success 또는 RoundFail이라면 결과가 결정된것임으로 결과확인버튼이 활성화
        Result 가 1이면서 waitRoundResult이면 상대방이 아직 선택을 안한것임으로 시간을 띄워준다 
        */}

          {/* <SuggestionButton>
                <text>결과확인하러 가기</text>
              </SuggestionButton> */}
          <ChanceBox state={state}>
            {Result === 0 ? (
              <>
                {/* api 완성되면 실제 링크로 바꾸기 */}
                <SuggestionButton
                  onClick={() => {
                    window.ReactNativeWebView?.postMessage(
                      JSON.stringify({
                        type: "openchat",
                        data: `${"dsdkasdkao"}`,
                      })
                    );
                  }}
                >
                  <text>오픈 카톡 URL 열기</text>
                </SuggestionButton>
                {/* <text>
                  상대방의 오픈카톡 URL에 문제가 발생했다면 고객센터로 문의해
                  주세요.
                </text> */}
              </>
            ) : Result === 2 ? (
              <>
                <SuggestionButton>
                  <text>거절 사유 확인</text>
                </SuggestionButton>{" "}
              </>
            ) : (
              <>{/* <text>이유가 없음, 버튼없음</text> */}</>
            )}
            {Result === 0 ? (
              <>
                <text className="openchat">
                  상대방의 오픈카톡 URL에 문제가 발생했다면 <br />
                  고객센터로 문의해주세요.
                </text>
              </>
            ) : (
              <>
                {" "}
                <text
                  onClick={() => {
                    navigate("/matching");
                  }}
                  className="result"
                >
                  메인으로 돌아가기
                </text>
              </>
            )}
          </ChanceBox>
        </ContentsBox>
      </ContentsContainer>
    </MatchingContainers>
  );
}

export default Testmatching;

const SuggestionButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;

  width: 56.41%;

  min-height: 52px;

  /* dzz_pink */

  background: #ff477e;
  border-radius: 13px;

  > text {
    font-family: var(--font-Pretendard-Bold);
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1px;

    /* white */

    color: #ffffff;
  }
`;

const CarouselContainer = styled(Carousel)`
  width: 100%;
  height: 100%;

  > div {
    width: 100%;
    height: 100%;
  }
  > img {
    object-fit: fill;
  }
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 95%;
`;

const ContentsContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* height: 25.86%; */
  height: 230px;
  top: 69.14%;
  /* background-color: red; */
`;

export const MatchingContainers = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 700px;
  background: white;
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: start;
  gap: 10px;
  position: absolute;
  top: 6.86%;
  width: 100%;
  height: 53.286%;

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const Frame6887 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 131px;

  width: 67px;
  height: 7px;
`;

export const ProfileName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 33.5%;
  min-width: 340px;
  height: 24px;

  > img {
    width: 24px;
    height: 24px;
  }

  > text {
    width: 130px;
    height: 22px;

    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.408px;
    color: #000000;
  }
`;

export const ProfileNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 100%;
  height: 3.43%;
  top: 64.43%;
`;

const ReportContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 70px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
`;

const ReportCard = styled.div`
  display: flex;
  width: 89.74%;
  height: 72%;
  border-radius: 7px;
  background: #48484a;
  align-items: center;
  justify-content: center;
  text-align: center;

  > text {
    color: var(--white, #fff);
    text-align: center;
    font-size: 12px;
    font-family: var(--font-Pretendard);
    line-height: 150%;
    letter-spacing: 0.6px;
    text-transform: capitalize;
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
  height: 6.86%;
`;

const SuggentionButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  gap: 4px;

  width: 95px;
  height: 40px;

  /* dzz_pink */

  background: #ff477e;
  border-radius: 31px;

  > text {
    font-family: var(--font-Pretendard-Bold);
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1px;

    /* white */

    color: #ffffff;
  }
`;

const SelectionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 15px;

  width: 66.15%;
  height: 240px;
  background-color: gray;
`;

export const SelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  height: 35.85%;
  left: 0px;
  top: 62.91%;
`;

const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  gap: 7px;

  width: 100%;
  height: 100px;
  z-index: 10;

  > text {
    font-family: var(--font-Pretendard-Light);
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
    /* identical to box height */

    > span {
      font-weight: 700;
    }
  }

  > img {
    width: 50px;
    height: 50px;
  }

  > text.reject {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* system_blue */

    color: #0094ff;
  }
`;

const LottieContainer = styled.div`
  width: 50px;
  height: 50px;
`;

const WaitingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 5px;

  width: 100%;
  height: 49px;
  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    /* Text Black */

    color: #000000;
    > span {
      font-family: var(--font-Pretendard-Bold);
      color: #ff477e;
      font-weight: 700;
      > span {
        font-weight: 700;
        color: #000000;
      }
    }
  }
`;

const ChanceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 5px;

  width: 100%;
  height: 60px;

  > text {
    z-index: 10;
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* system_blue */

    color: ${(props) => (props.state === "accept" ? "#007DFE" : "#007DFE")};
  }

  > text.openchat {
    text-align: center;
    color: #888888;
    margin-bottom: 25px;
  }

  > text.accept {
    font-size: 16px;
  }
`;
