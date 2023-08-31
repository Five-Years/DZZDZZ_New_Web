import React, { useEffect } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { useState, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MatchingProgressHeader from "../../HeaderComponent/MatchingProgressHeader";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Slider from "react-slick";
import styled from "styled-components";
import heartHand from "assets/heartHand.json";
import search from "assets/search.json";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ReactComponent as Careup } from "assets/CaretDoubleUp.svg";
// import axios from "axios";
import { useSelector } from "react-redux";
import { AxiosInstanse } from "../../../../../utils/AxiosInstance";
import { useDispatch } from "react-redux";
import StateSlice from "features/State/StateSlice";
function Matching2(props) {
  const dispatch = useDispatch();
  const matchingType = ["Couple", "Friend"];
  const location = useLocation();
  const Theme = location.state.theme; // Theme-> 0이면 커플, 1이면 친구
  const DetailDownRef = useRef();
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    setOffset(DetailDownRef.current.offsetTop);
  }, [DetailDownRef]);

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  // getKeyByValue(ENUM_AGE, 'OLDER')

  const ENUM_ReportReason = {
    "낚시/놀람/도배": "PHISHING_OR_SPAMMING",
    "상업적 광고 및 판매": "ADVERTISEMENT",
    "불건전한 만남 및 대화유도": "INDUCE_UNWHOLESOME_MEETING",
    "음란성 게시물 공유 및 게시": "OBSCENE_POSTS",
    "정당/정치인 비하 및 선거운동": "POLITICS",
    "욕설/모욕/비하": "ABUSE",
    "유출/사칭/사기": "IMPERSONATE_OR_SCAM",
    "닉네임 신고": "NICKNAME",
  };

  const ENUM_AGE = {
    연상: "OLDER",
    연하: "YOUNGER",
    동갑: "SAME_AGE",
    "상관 없어요": "INDETERMINATE",
  };

  const ENUM_DRINK = {
    안마셔요: "NONE",
    "분위기에 따라 1~2잔": "BY_MOOD",
    "가끔 마셔요": "SOMETIMES",
    "자주 마셔요": "OFTEN",
    "술을 좋아해요": "LIKE",
    "술자리만 좋아해요": "ONLY_PARTY",
    "상관 없어요": "INDETERMINATE",
  };

  const ENUM_INTEREST = {
    산책: "WALKING",
    자전거: "BICYCLE",
    레져: "LEISURE",
    "PC/모바일 게임": "GAME",
    쇼핑: "SHOPPING",
    독서: "READING",
    "사진 촬영": "TAKING_PICTURE",
    "요리/베이킹": "COOKING",
    자기계발: "SELF_IMPROVEMENT",
    헬스: "HEALTH",
    패션: "FASHION",
    맛집: "FAMOUS_RESTAURANT",
    댄스: "DANCE",
    정치: "POLITICS",
    "금융/재태크": "FINANCIAL",
    부동산: "REAL_ESTATE",
    여행: "TRAVEL",
    어학: "LANGUAGE",
    영화: "MOVIE",
    드라이브: "DRIVE",
    애니메이션: "ANIMATION",
    공연관람: "PERFORMANCE",
    전시회: "EXHIBITION",
    반려동물: "PETS",
    인테리어: "INTERIOR",
    봉사활동: "VOLUNTEER",
    악기: "INSTRUMENT",
    안마셔요: "MUSIC",
    "기타(직접 알아가도록 해요)": "ETC",
  };

  const ENUM_MAJOR = {
    "같은 전공은 피하고 싶어요": "DIFFERENT",
    "같은 전공이 좋아요": "SAME",
    "상관 없어요": "INDETERMINATE",
  };

  const ENUM_GENDER = {
    FEMALE: "여자",
    MALE: "남자",
  };

  const ENUM_MILITARYSERVICE = {
    병역필: "COMPLETED",
    미필: "UNFULFILLED",
    "해당사항 없음": "EXEMPTED",
    "알려주고 싶지 않아요": "INDETERMINATE",
  };
  const ENUM_PERSONALITY = {
    귀여운: "CUTE",
    섹시한: "SEXY",
    도도한: "UPSTAGE",
    예의바른: "POLITE",
    시크한: "CHIC",
    진지한: "SERIOUS",
    어른스러운: "MATURE",
    솔직한: "CANDID",
    "호기심이 많은": "CURIOS",
    외향적인: "OUTGOING",
    상냥한: "AFFABLE",
    차분한: "TRANQUIL",
    지적인: "INTELLECTUAL",
    듬직한: "TRUSTWORTHY",
    자유로운: "FREE",
    감성적인: "SENTIMENTAL",
    시원시원한: "COOL",
    "4차원적인": "STRANGE",
    낙천적인: "OPTIMISTIC",
    열정적인: "ENTHUSIASTIC",
  };

  const ENUM_RELIGION = {
    기독교: "CHRISTIAN",
    천주교: "CATHOLIC",
    불교: "BUDDHISM",
    "기타 종교": "ETC",
    무교: "NONE",
    "상관 없어요": "INDETERMINATE",
    "알려주고 싶지 않아요": "~",
  };

  const ENUM_SMOKE = {
    비흡연자: "NONE",
    "가끔 흡연함": "SOMETIMES",
    "자주 흡연함": "OFTEN",
    "상관 없어요": "INDETERMINATE",
  };

  const ENUM_UNIVERSITY = {
    "다른 학교가 좋아요": "DIFFERENT",
    "같은 학교가 좋아요": "SAME",
    "상관 없어요": "INDETERMINATE",
  };

  const ENUM_MBTI = {
    "미묘한 INFJ": "INFJ",
    "요정같은 INFP": "INFP",
    "은근 다정한 INTJ": "INTJ",
    "영리한 INTP": "INTP",
    "조용한 ISTP": "ISTP",
    "예술적인 ISFP": "ISFP",
    "모범적인 ISTJ": "ISTJ",
    "따뜻한 ISFJ": "ISFJ",
    "다정한 ENFJ": "ENFJ",
    "뽀짝발랄한 ENFP": "ENFP",
    "호탕한 ENTJ": "ENTJ",
    "재잘재잘 ENTP": "ENTP",
    "지휘관같은 ESTJ": "ESTJ",
    "사교적인 ESFJ": "ESFJ",
    "쿨한 모험가 ESTP": "ESTP",
    "인싸같은 ESFP": "ESFP",
  };

  const ENUM_COLLEGE = {
    인문계: "HUMANITIES",
    "사회계(경상)": "SOCIAL_ECONOMICS",
    "사회계(법학)": "SOCIAL_LAW",
    "사회계(사회과학)": "SOCIAL_SCIENCE",
    교육계: "EDUCATION",
    "이공계(자연)": "NATURAL_SCIENCE",
    "이공계(공학)": "ENGINEERING",
    "이공계(IT)": "IT",
    "의약계(의학)": "MEDICINE",
    "의약계(약학)": "PHARMACY",
    "의약계(간호,보건)": "HEALTH_CARE",
    미술계: "FINE_ARTS",
    체육계: "PHYSICAL_EDUCATION",
    음악계: "MUSIC",
    예술계: "ART",
  };

  useEffect(() => {
    const messageListener = (e) => listener(e.data);

    document.removeEventListener("message", messageListener);
    window.removeEventListener("message", messageListener);

    document.addEventListener("message", messageListener);
    // iOS 플랫폼에서의 동작 설정
    window.addEventListener("message", messageListener);

    return () => {
      document.removeEventListener("message", messageListener);
      // iOS 플랫폼에서의 동작 설정
      window.removeEventListener("message", messageListener);
    };
  }, []);

  const userAt = useSelector((state) => {
    return state.Popup.userToken.accessToken;
  });

  const userRt = useSelector((state) => {
    return state.Popup.userToken.refreshToken;
  });

  const reportCase = useSelector((state) => {
    return state.Popup.ReportCase;
  });

  const getMatchResult = async (at, rt) => {
    try {
      const CoupleResponse = await AxiosInstanse.get(
        `/matching/user/result?matchingType=Couple`,
        {
          headers: {
            Authorization: at,
            "x-refresh-token": rt,
            fcmToken: "123",
            "content-type": "application/json",
          },
        }
      );

      dispatch(StateSlice.actions.CouplematchResult(CoupleResponse.data.data));
      // 커플 매칭 성사 조회
    } catch (error) {
      console.log(error);
    }

    try {
      const FriendResponse = await AxiosInstanse.get(
        `/matching/user/result?matchingType=Friend`,
        {
          headers: {
            Authorization: at,
            "x-refresh-token": rt,
            fcmToken: "123",
            "content-type": "application/json",
          },
        }
      );

      dispatch(StateSlice.actions.FriendmatchResult(FriendResponse.data.data));
      //친구매칭 성사 조회
    } catch (error) {
      console.log(error);
    }
  };

  const accepts = async (at, rt) => {
    try {
      const Response = await AxiosInstanse.post(
        `/matching/user/decide?matchingChoice=Accept&matchingType=${matchingType[Theme]}`, // 동의, Couple, Friend
        {},
        {
          headers: {
            Authorization: at,
            "x-refresh-token": rt,
            fcmToken: "123",
            "content-type": "application/json",
          },
        }
      );
      // 동의 수락시 매칭결과 한번 업로드 해줘야 할듯?

      if (Response.data.status === 200) {
        getMatchResult(userAt, userRt);
        navigate("/Choice", {
          state: { theme: Theme, Result: 1, Direct: true },
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  const report = async (at, rt, index) => {
    try {
      const Response = await AxiosInstanse.post(
        `/user/report`, // 거절, couple, friend
        {
          // "commentSeq": 0,
          // "communitySeq": 0,
          reportType: "USER",
          matchingType: matchingType[Theme],
          reportReason: ENUM_ReportReason[reportCase[index]],
          // "reCommentSeq": 0,
          // "reportedUser": "string"
        },

        {
          headers: {
            Authorization: at,
            "x-refresh-token": rt,
            fcmToken: "123",
            "content-type": "application/json",
          },
        }
      );
      if (Response.data.status === 200) {
        getMatchResult(userAt, userRt);
        navigate("/Choice", {
          state: { theme: Theme, Result: 3, Direct: true },
        });
      }
    } catch (error) {
      alert(error);
    }
  };
  const rejects = async (at, rt) => {
    try {
      const Response = await AxiosInstanse.post(
        `/matching/user/decide?matchingChoice=Reject&matchingType=${matchingType[Theme]}`, // 거절, couple, friend
        {},
        {
          headers: {
            Authorization: at,
            "x-refresh-token": rt,
            fcmToken: "123",
            "content-type": "application/json",
          },
        }
      );
      if (Response.data.status === 200) {
        getMatchResult(userAt, userRt);
        navigate("/Choice", {
          state: { theme: Theme, Result: 3, Direct: true },
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  const listener = (event) => {
    const { data, type } = JSON.parse(event);

    switch (type) {
      case "accept": {
        if (data) accepts(userAt, userRt);
        break;
      }

      case "withoutReject": {
        getMatchResult(userAt, userRt);
        navigate("/Choice", {
          state: { theme: Theme, Result: 3, Direct: true },
        });
        break;
      }

      case "reject": {
        if (data) rejects(userAt, userRt);
        break;
      }

      case "report":
        {
          // 신고 API완성되면 대체하기
          report(userAt, userRt, data.reportNum); // 거절처리하기
        }
        break;
    }
  };

  // @ 사용자 정보를 가져와 리덕스에 저장하는 매소드
  // 인자로 access token, refresh token 필요

  // @ 매칭 상대방에 대한 정보를 가져오는 통신
  // MatcherInfo배열에 정보를 저장한다

  // const getData = async (at, rt) => {
  //   try {
  //     const Response = await axios.get(
  //       `${
  //         process.env.NODE_ENV === "development"
  //           ? ""
  //           : "https://dev.fiveyears.click"
  //       }/login/token`,
  //       {
  //         headers: {
  //           Authorization: at,
  //           "x-refresh-token": rt,
  //           fcmToken: "123",
  //           "content-type": "application/json",
  //         },
  //       }
  //     );

  //     dispatch(StateSlice.actions.MatcherInfo(Response.data.data));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const [detail, setDetail] = useState(false);
  const [isSelected, setIsSelected] = useState(0);
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToShow: 1,
  };

  const MatchedUserData = useSelector((state) => {
    return state.Popup.MatchedUserInfo;
  });

  return (
    <MatchingContainers detail={detail}>
      <ContentContainer>
        <MatchingProgressHeader isReport={true} direct={true} />
      </ContentContainer>
      <ProfileImageContainer>
        <CarouselContainer
          dynamicHeight={true}
          showThumbs={false}
          showIndicators={false}
        >
          {MatchedUserData.images.map((item) => (
            <div>
              <img src={item.imageUrl} alt="" />
            </div>
          ))}
        </CarouselContainer>
        {/* <img src={require("assets/mango.jpg")} alt="" /> */}
      </ProfileImageContainer>
      <IntroduceContainer
        onClick={() => {
          setDetail(!detail);
        }}
      >
        <DetailTextView detail={detail}></DetailTextView>
        <TextContainer detail={detail}>
          {MatchedUserData.introduce && (
            <text>{MatchedUserData.introduce}</text>
          )}
        </TextContainer>
        <KeyboardArrowDownIcon
          style={{
            color: detail ? "#FFFFFF" : "#888888",
            zIndex: 2,
            transform: detail ? "rotate(180deg)" : "",
          }}
        />
      </IntroduceContainer>
      <ProfileNameContainer>
        <ProfileName>
          <text>{MatchedUserData.matchedUserNickname}</text>
        </ProfileName>
      </ProfileNameContainer>
      <SelectionContainer>
        {/* 선택시 서버에 사진인증, 학생인증, 1장이상의 쿠폰을 보유하고 있는지 확인  */}
        <Selection>
          <Option
            onClick={() => {
              window.ReactNativeWebView?.postMessage(
                JSON.stringify({ type: "accept", data: matchingType[Theme] })
              );
              // accept(userAt, userRt);
            }}
          >
            {/* <img src={require("assets/Like.png")} alt="이미지" /> */}
            <LottieContainer>
              <Lottie animationData={heartHand} />
            </LottieContainer>
            <text className="select">단짠메이트를 찾았어요!</text>
          </Option>
        </Selection>
        <Selection>
          <Option
            className="reject"
            onClick={() => {
              window.ReactNativeWebView?.postMessage(
                JSON.stringify({ type: "reject", data: matchingType[Theme] })
              );
              // reject(userAt, userRt);
            }}
          >
            <LottieContainer>
              <Lottie animationData={search} />
            </LottieContainer>
            <text className="reject">다른 메이트를 찾아볼게요</text>
          </Option>
        </Selection>
      </SelectionContainer>
      <DetailContainer
        onClick={() => {
          window.scrollTo({
            top: offset,
            behavior: "smooth",
          });
        }}
      >
        {/* <KeyboardDoubleArrowUpIcon color="disabled" fontSize="large" /> */}
        <Careup />
        <DetailView>
          <MatchingLink>
            <text>자세히 보기</text>
          </MatchingLink>
        </DetailView>
      </DetailContainer>
      <DetailProfileContainer>
        {/* <DetailHeader><HeaderLeft onClick={()=>{navigate(-1)}}><KeyboardArrowDownIcon style={{transform : "rotate(90deg)", marginLeft : "30px", width:"32px", height : "32px"}}/></HeaderLeft><HeaderName><Authen/><text>단짠지기임당</text></HeaderName><HeaderRight><MoreHorizIcon style={{marginRight : "30px"}}/></HeaderRight></DetailHeader> */}
      </DetailProfileContainer>
      <ContentsContainer ref={DetailDownRef}>
        <ContentsName>
          <text>
            <span>{MatchedUserData.matchedUserNickname}</span>님의 정보
          </text>
        </ContentsName>
        <ContentsSection>
          <Contents>
            <ContentsTitle>
              <text>학교</text>
            </ContentsTitle>
            <ContentsWindow className="fixed">
              <text>{MatchedUserData.campusIdentifier}</text>
              {/* {MatcherInfo.school} */}
            </ContentsWindow>
          </Contents>
        </ContentsSection>
        <ContentsSection>
          <Contents>
            <ContentsTitle>
              <text>성별</text>
            </ContentsTitle>
            <ContentsWindow className="fixed">
              {/* <text>{MatchedUserData.gender}</text> */}
              <text>{ENUM_GENDER[MatchedUserData.gender]}</text>
              {/* {MatcherInfo.sex} */}
            </ContentsWindow>
          </Contents>
        </ContentsSection>
        <ContentsSection>
          <Contents>
            <ContentsTitle>
              <text>학번</text>
            </ContentsTitle>
            <ContentsWindow className="fixed">
              <text>{MatchedUserData.studentId}학번</text>
              {/* {MatcherInfo.gradenumber} */}
            </ContentsWindow>
          </Contents>
        </ContentsSection>
        <ContentsSection className="long">
          <Contents className="long">
            <ContentsTitle className="long">
              <text>단과대/전공</text>
              <span>변경이 필요한 경우 고객센터를 통해 요청해주세요.</span>
            </ContentsTitle>
            <ContentsWindow className="fixed">
              <text>
                {getKeyByValue(ENUM_COLLEGE, MatchedUserData.college)}
              </text>
              {/* {MatcherInfo.major} */}
            </ContentsWindow>
          </Contents>
        </ContentsSection>
        {MatchedUserData.introduce && (
          <ContentsSection>
            <Contents>
              <ContentsTitle>
                <text>자기소개</text>
              </ContentsTitle>
              <ContentsWindow>
                <text>{MatchedUserData.introduce}</text>
                {/* {MatcherInfo.introduce} */}
              </ContentsWindow>
            </Contents>
          </ContentsSection>
        )}
        {MatchedUserData.personalities.length !== 0 && (
          <ContentsSection>
            <Contents>
              <ContentsTitle>
                <text>내 성격</text>
              </ContentsTitle>
              <ContentsWindow className="tag">
                <TagContainer>
                  {/* {MatcherInfo.personality, => foreach} */}
                  {MatchedUserData.personalities.map((item) => (
                    <text>
                      <span>#</span>
                      {getKeyByValue(ENUM_PERSONALITY, item)}
                    </text>
                  ))}
                </TagContainer>
              </ContentsWindow>
            </Contents>
          </ContentsSection>
        )}
        {MatchedUserData.interests.length !== 0 && (
          <ContentsSection>
            <Contents>
              <ContentsTitle>
                <text>관심사</text>
              </ContentsTitle>
              <ContentsWindow className="tag">
                <TagContainer>
                  {/* {MatcherInfo.interest} =>foreach */}
                  {MatchedUserData.interests.map((item) => (
                    <text>
                      <span>#</span>
                      {getKeyByValue(ENUM_INTEREST, item)}
                    </text>
                  ))}
                </TagContainer>
              </ContentsWindow>
            </Contents>
          </ContentsSection>
        )}

        {MatchedUserData.region && (
          <ContentsSection>
            <Contents>
              <ContentsTitle>
                <text>지역</text>
              </ContentsTitle>
              <ContentsWindow>
                <text>{MatchedUserData.region}</text>
                {/* {MatcherInfo.area} */}
              </ContentsWindow>
            </Contents>
          </ContentsSection>
        )}

        {MatchedUserData.militaryServiceStatus && (
          <ContentsSection>
            <Contents>
              <ContentsTitle>
                <text>병역 여부</text>
              </ContentsTitle>
              <ContentsWindow>
                <text>{MatchedUserData.militaryServiceStatus}</text>
                {/* {MatcherInfo.military} */}
              </ContentsWindow>
            </Contents>
          </ContentsSection>
        )}

        {MatchedUserData.mbti && MatchedUserData.mbti != "INITIAL_VALUE" && (
          <ContentsSection>
            <Contents>
              <ContentsTitle>
                <text>MBTI</text>
              </ContentsTitle>
              <ContentsWindow>
                <text>{MatchedUserData.mbti}</text>
                {/* {MatcherInfo.mbti} */}
              </ContentsWindow>
            </Contents>
          </ContentsSection>
        )}

        {MatchedUserData.religion && (
          <ContentsSection>
            <Contents>
              <ContentsTitle>
                <text>종교</text>
              </ContentsTitle>
              <ContentsWindow>
                <text>{MatchedUserData.religion}</text>
                {/* {MatcherInfo.religion} */}
              </ContentsWindow>
            </Contents>
          </ContentsSection>
        )}

        {MatchedUserData.drink && (
          <ContentsSection>
            <Contents>
              <ContentsTitle>
                <text>음주</text>
              </ContentsTitle>
              <ContentsWindow>
                <text>{MatchedUserData.drink}</text>
                {/* {MatcherInfo.alcohol} */}
              </ContentsWindow>
            </Contents>
          </ContentsSection>
        )}

        {MatchedUserData.smoke && (
          <ContentsSection>
            <Contents>
              <ContentsTitle>
                <text>흡연</text>
              </ContentsTitle>
              <ContentsWindow>
                <text>{MatchedUserData.smoke}</text>
                {/* {MatcherInfo.smoke} */}
              </ContentsWindow>
            </Contents>
          </ContentsSection>
        )}

        <SelectButtonContainer>
          <Selection>
            <Option
              onClick={() => {
                window.ReactNativeWebView?.postMessage(
                  JSON.stringify({ type: "accept", data: matchingType[Theme] })
                );
                // accept(userAt, userRt);
              }}
            >
              {/* <img src={require("assets/Like.png")} alt="이미지" /> */}
              <LottieContainer>
                <Lottie animationData={heartHand} />
              </LottieContainer>
              <text className="select">단짠메이트를 찾았어요!</text>
            </Option>
          </Selection>
          <Selection>
            <Option
              className="reject"
              onClick={() => {
                window.ReactNativeWebView?.postMessage(
                  JSON.stringify({ type: "reject", data: matchingType[Theme] })
                );
                // reject(userAt, userRt);
              }}
            >
              <LottieContainer>
                <Lottie animationData={search} />
              </LottieContainer>
              <text className="reject">다른 메이트를 찾아볼게요.</text>
            </Option>
          </Selection>
          {/* <SelectionButton><Button onClick={()=>{   
              window.ReactNativeWebView?.postMessage(
                JSON.stringify({ type: "accept" , data: "" })
              );}}
            ><text>단짠메이트를 찾았어요!</text></Button></SelectionButton>
          <SelectionButton className="reject"><Button onClick={()=>{   
              window.ReactNativeWebView?.postMessage(
                JSON.stringify({ type: "reject" , data: "" })
              );}} className='reject'><text>다른 메이트를 찾아볼게요</text></Button></SelectionButton> */}
        </SelectButtonContainer>
      </ContentsContainer>
    </MatchingContainers>
  );
}

export default Matching2;

const CarouselContainer = styled(Carousel)`
  width: 100%;
  height: 100%;

  > div {
    width: 100%;
    height: 100%;
  }
  > img {
    /* width: 100%;
    height: 100%; */
    object-fit: fill;
  }
`;

const ImageSlider = styled(Slider)`
  width: 100%;
  position: relative;
  height: auto;
`;

const Slide = styled.div`
  > img {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

const LottieContainer = styled.div`
  width: 30px;
  height: 30px;
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: start;
  gap: 10px;
  position: absolute;
  top: 6.5%;
  width: 100%;
  height: 53.286%;

  /* > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */
`;

export const MatchingContainers = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  min-width: 360px;
  /* min-height: 700px; */
  background: white;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 84.1%;
  top: 10%;
  min-width: 74px;
  height: 79.55%;
  border-radius: 20px;
  gap: 4px;
  background-color: #ffe3e3;

  &.reject {
    background-color: #cfd8e3;
  }
  > img {
    width: 35px;
    height: 35px;
  }

  > text {
    font-family: var(--font-Pretendard);
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
    color: #ff477e;
  }

  > text.reject {
    color: #49516f;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 53.33%;
  min-width: 208px;
  height: 22px;
  overflow: ${(props) => (props.detail ? "visible" : "hidden")};
  /* background-color: ${(props) => (props.detail ? "#888888" : "#FFFFFF")}; */
  z-index: 2;
  align-items: center;
  justify-content: start;
  text-align: start;
  margin-left: 20px;

  > text {
    text-overflow: hidden;
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    display: flex;

    text-align: center;
    /* background-color: ${(props) =>
      props.detail ? "#888888" : "#FFFFFF"}; */
    color: ${(props) => (props.detail ? "#FFFFFF" : "#888888")};
  }

  > img {
    width: 20px;
    height: 20px;
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

export const DetailTextView = styled.div`
  display: ${(props) => (props.detail ? "flex" : "none")};
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 70%;
  z-index: 1;
  align-items: center;
  justify-content: center;
`;

export const DetailText = styled.div`
  position: absolute;
  width: 100%;
  height: 24px;
  top: 62.8%;
  text-align: center;

  > text {
    color: white;
  }
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

// const Frame6887 = styled.div``;
export const SelectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 12.57%;
  left: 0px;
  top: 75.14%;
`;

export const Selection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 100%;
  height: 58px;
  top: 90.22%;

  > KeyboardDoubleArrowUpIcon {
    width: 40px;
    height: 40px;
  }
`;

export const DetailView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;
  width: 80px;
  height: 22px;
`;

export const MatchingLink = styled.div`
  text-decoration-line: none;

  > text {
    width: 80px;
    height: 22px;

    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    /* identical to box height, or 147% */

    text-align: center;
    letter-spacing: -0.408px;

    /* Text Gray */

    color: #888888;
  }
`;

export const ContentContainers = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 6%;

  /* border-bottom: 0.3px solid #888888; */
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  width: 33.33%;
  height: 100%;
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 130px;
  height: 32px;

  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 22px;
    /* identical to box height, or 116% */

    text-align: center;
    letter-spacing: -0.408px;

    /* Text Black */

    color: #000000;
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

export const IntroduceContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 3.14%;
  top: 69.14%;

  > img {
    width: 20px;
    height: 20px;
    transform: rotate(90deg);
  }
`;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;

  width: 33.33%;
  height: 100%;
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

const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 66%;
  height: 74.28%;

  /* dzz_pink */

  background: #ff477e;
  border-radius: 13px;

  &.reject {
    background: #ebebf0;

    > text {
      font-family: var(--font-Pretendard);
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      /* identical to box height, or 24px */

      text-align: center;
      letter-spacing: 0.05em;
      text-transform: capitalize;

      /* white */

      color: #48484a;
    }
  }

  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    /* identical to box height, or 24px */

    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    /* white */

    color: #ffffff;
  }
`;

const SelectButtonContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
`;

const SelectionButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  width: 100%;
  height: 50%;
`;

const DetailProfileContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 100%;
  height: auto;
  /* height: 76px; */

  /* &.long {
    height: 105px;
  } */
`;

const ContentsTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 100%;
  height: auto;

  &.long {
    height: auto;
  }

  > text {
    margin-left: 20px;
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    /* identical to box height, or 21px */
    letter-spacing: 0.5px;
    /* Text Black */
    color: #000000;
  }

  > span {
    /* width: 100%; */
    margin-top: 5px;
    margin-left: 20px;
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    /* line-height: 150%; */
    /* identical to box height, or 21px */
    letter-spacing: 0.3px;
    /* Text Black */
    color: #888888;
  }
`;
const ContentsWindow = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 92.05%;
  min-height: 50px;
  height: auto;
  /* white */

  background: #ffffff;
  /* SystemGray/400 */

  border: 1px solid #bcbcc0;
  border-radius: 10px;
  &.tag {
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }
  &.fixed {
    > text {
      color: #a39ea3;
    }
  }

  > text {
    margin-left: 17px;
    margin-right: 17px;
    margin-top: 13px;
    margin-bottom: 13px;
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    /* identical to box height, or 21px */

    letter-spacing: 0.5px;

    /* dzz_iconGrey */

    color: #48484a;

    > span {
      color: #ff477e;
    }
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;
  margin-left: 17px;
  margin-right: 17px;
  margin-top: 13px;
  margin-bottom: 13px;

  width: 96%;
  /* white-space: normal; */

  > text {
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%;

    /* identical to box height, or 21px */

    letter-spacing: 0.5px;

    /* dzz_pink */

    color: #48484a;

    > span {
      color: #ff477e;
    }
  }
`;

const ContentsName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
  width: 100%;
  height: 44px;
  background: #ffffff;
  margin-top: 15px;
  text-decoration: underline; // 줄의 위치, underline : 밑줄
  text-decoration-color: red; // 밑줄의 색
  text-decoration-thickness: 2px; //밑줄의 두께
  text-underline-offset: 5px; //밑줄과 텍스트와의 간격

  > text {
    margin-left: 20px;
    font-family: var(--font-Pretendard);
    font-style: normal;
    font-weight: 510;
    font-size: 17px;
    line-height: 150%;
    /* identical to box height, or 26px */
    letter-spacing: 0.5px;
    /* dzz_pink */
    color: #000000;
  }

  > text > span {
    color: #ff477e;
  }
`;

const ContentsContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 80px;
  width: 100%;
  margin-top: 50px;

  /* height: 1550px; */
  left: 0px;
  top: 0%;
  /* background-color: blue; */
`;

const ContentsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
  /* background-color: red; */

  width: 100%;
  height: auto;
  &.long {
    height: auto;
  }
`;
