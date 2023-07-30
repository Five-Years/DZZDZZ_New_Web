import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Appstore } from "../../../assets/appstore.svg";
import { ReactComponent as Androidstore } from "../../../assets/androidstore.svg";
import { ReactComponent as Logo } from "../../../assets/webLogo.svg";
import { ReactComponent as Jelly } from "../../../assets/webJelly.svg";
import { ReactComponent as dzzdzzIntroduce } from "../../../assets/dzzdzzweb.svg";

import StateSlice from "features/State/StateSlice";
import Statistic from "../MainComponent/Statistic";
import CountTimer from "../MainComponent/CountTimer";
import Dzz from "../MainComponent/Dzz";
import FAQ from "../MainComponent/FAQ";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer/Footer";

function HeaderRight() {
  const isDzz = useSelector((state) => {
    return state.Popup.isDzz;
  });

  const isFAQ = useSelector((state) => {
    return state.Popup.isFAQ;
  });

  const isStatic = useSelector((state) => {
    return state.Popup.isStatic;
  });

  // stepseason 0 && 접수 안함 => 아직 신청하지 않으셨네요
  // stepseason 0 && 접수 함 => 신청되었습니다 ~~에 매칭이 시작돼요
  // stepseason 1 && 접수 안함 => 아직 신청하지 않으셨네요. ~~에 매칭 접수가 시작될 예정이에요
  // stepseason 1 && 접수함, 매칭 선택 전 => 매칭시작! ~~까지 상대방을 확인 할 수 있어요
  // stepseason 1 && 접수함, 매칭 선택 후 => 매칭시작! ~~분 뒤에 결과확인 가능
  // stepseason 2 => 지금은 준비중! ~~에 접수받을거에요

  /* > img {
      width: 120px;
      height: 63.04px;
      visibility: visible;
    } */
  const getView = () => {
    if (isStatic) {
      return <Statistic />;
    } else if (isDzz) {
      return <Dzz />;
    } else if (isFAQ) {
      return <FAQ />;
    } else {
      return <CountTimer />;
    }
  };

  useEffect(() => {
    getView();
  }, [isStatic, isDzz, isFAQ]);

  // {isStatic ? (
  //   <>
  //     <Statistic />
  //     <Footer />
  //   </>
  // ) : isDzz ? (
  //   <Dzz />
  // ) : isFAQ ? (
  //   <>
  //     <FAQ />
  //     <Footer />
  //   </>
  // ) : (
  //   <>
  //     <CountTimer />
  //     <Footer />
  //   </>
  // )}

  return (
    <ContentContainer>
      <>
        {getView()}
        {isDzz ? <></> : <Footer />}
      </>
    </ContentContainer>
  );
}

export default HeaderRight;

const ContentContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* top : 7.8%; */

  > img {
    visibility: hidden;
  }
`;

const DzzDzzIntroduce = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: visible;
  background-color: blue;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 47.67%;
  height: 19.71%;
  min-width: 572px;
  min-height: 135px;
`;

const MobileSns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;

  width: 98.33%;
  height: 12.55%;
  margin-top: 20px;

  @media screen and (max-width: 800px) {
    display: flex;
    position: absolute;
    width: 100%;
    height: 40px;
    margin-top: 0px;
    top: 49.45%;
    align-items: center;
    justify-content: center;
  }
`;

const SnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;

  > img {
    width: 34px;
    height: 34px;
    cursor: pointer;
  }
`;

const ReportContainer = styled.div`
  display: flex;
  width: 100%;
  height: 25%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 50px;
    height: 50px;
  }
  > text.ready {
    border-radius: 8px;
    background: var(--dzz-pink, #ff477e);
    font-family: var(--font-Pretendard);
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0.05em;
    text-align: left;
  }

  > text.description {
    font-family: var(--font-Pretendard);
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0.05em;
    text-align: center;
    color: #888888;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60%;
  height: 26.67%;

  > span {
    height: 36px;
    font-family: "SF Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    display: flex;
    align-items: flex-end;
    color: #ff477e;
  }

  > span.text {
    height: 23px;
    font-family: "SF Pro";
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 150%;
    letter-spacing: 0.5px;
    color: #231815;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    width: 330px;
    height: 29px;

    > span {
      height: 29px;
      font-size: 24px;
      line-height: 29px;
      /* identical to box height */

      display: flex;
      align-items: flex-end;
    }

    > span.text {
      height: 23px;
      font-family: "SF Pro";
      font-style: normal;
      font-weight: bold;
      font-size: 15px;
      line-height: 150%;
    }
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25.25%;
  height: 10.22%;
  min-width: 303px;
  min-height: 70px;
  border-radius: 10px;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 150px;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

const Sns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: start;
  width: 100%;
  height: 100%;
  margin-top: 20px;

  > span {
    font-family: "Noto Sans";
    font-style: normal;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    font-weight: bold;
  }

  > div {
    display: flex;
    width: 100%;
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    gap: 10px;
  }
  > div > div {
    width: 45%;
    cursor: pointer;
  }
  > img {
    :active {
      opacity: 0.5;
    }
  }

  @media screen and (max-width: 800px) {
    display: none;
    /* display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 147.92px;
    height: 40px;
    gap: 40px;

    > img {
      :active {
        opacity: 0.5;
      }
      width: 40px;
      height: 40px;
    }*/
  }
`;

const DownButton = styled.div`
  visibility: hidden;

  @media screen and (max-width: 800px) {
    visibility: visible;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    gap: 10px;
    width: 330px;
    height: 48px;
    background: #ff477e;
    border-width: 1px 2px 2px 1px;
    border-style: solid;
    border-color: #49516f;
    border-radius: 6px;

    > span {
      width: 70px;
      height: 26px;
      font-family: "PFStardust";
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      line-height: 150%;
      letter-spacing: 0.05em;
      text-transform: capitalize;
      color: #ffffff;
    }
  }
`;
