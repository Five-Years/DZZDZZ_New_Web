import React, { useRef } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import StateSlice from "../features/State/StateSlice";
import { useDispatch, useSelector } from "react-redux";
import emailjs from "@emailjs/browser";

function Inquiry() {
  const form = useRef();
  const checkform = () => {
    var from_corporate = document.getElementById("from_corporate")
    var from_name = document.getElementById("from_name")
    var from_phone = document.getElementById("from_phone")
    var from_email = document.getElementById("from_email")
    var from_address = document.getElementById("from_address")
    var from_path = document.getElementById("from_path")
    //var from_message = document.getElementById("from_message")
    

    if(from_corporate.value === "" || from_name.value==="" || from_phone.value==="" || from_email.value ==="" || from_address.value==="" || from_path.value==="") {
      alert("필수 옵션을 채워주세요");
      return false     
  }
  return true
  }
  // 필수입력 옵션 체크 기능 넣기
  const sendEmail = (e) => {
    if(checkform())
    {    e.preventDefault();
      emailjs
      .sendForm(
        "service_im4e0a8",
        "template_26k6dnn",
        form.current,
        "JyampQ_mf0PiiMRiP"
      )
      .then(
        (result) => {
          alert("전송완료");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );}
  };

  const Popup = useSelector((state) => {
    return state.Popup.value;
  });
  const Number = useSelector((state) => {
    return state.Popup.query;
  });
  // 제휴/광고 구분, 제휴문의 => 1 광고문의 => 2
  const dispatch = useDispatch();

  const variants = {
    start: {
      y: Popup ? "100vh" : 0,
      opacity: Popup ? 1 : 0,
    },
    end: {
      y: Popup ? 0 : "100vh",
      opacity: 1,

      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <AnimatePresence>
      {Popup ? (
        <InquiryContainer
          key={Popup}
          variants={variants}
          initial="start"
          animate="end"
          exit={{ y: "100vh", opacity: 0, transition: { duration: 0.5 } }}
        >
          <ContentContainer>
            <Cancel>
              <span
                onClick={() => {
                  dispatch(StateSlice.actions.Popup());
                }}
              >
                X
              </span>
            </Cancel>
            <ContentDiv>
              <TitleContainer>
                <TitleTopic>
                  {Number === 1 ? (
                    <span>제휴문의</span>
                  ) : (
                    <span>광고 상담/문의</span>
                  )}
                </TitleTopic>
                <TitleDetail>
                  <span>
                    아래의 신청 항목을 작성해주시면, 담당자 확인 후 최대한
                    빠르게 연락 드리도록 하겠습니다.
                  </span>
                </TitleDetail>
              </TitleContainer>

              <InputContainer>
                <form ref={form} name = "myform">
                  <Input>
                    <EachInput>
                      <InputTitle>
                        <span>기업명</span>
                        <span className="essential">*</span>
                      </InputTitle>
                      <InputWindow>
                        <input
                          placeholder="기업명을 입력해주세요"
                          type="text"
                          name="from_corporate"
                          id="from_corporate"
                          required
                        ></input>
                      </InputWindow>
                    </EachInput>
                    <EachInput>
                      <InputTitle>
                        <span>담당자</span>
                        <span className="essential">*</span>
                      </InputTitle>
                      <InputWindow>
                        <input
                          placeholder="담당자 성함"
                          type="text"
                          name="from_name"
                          id="from_name"
                          required
                        ></input>
                      </InputWindow>
                    </EachInput>
                  </Input>
                  {/* 모바일에선 세로로 출력*/}
                  <Input>
                    <EachInput>
                      <InputTitle>
                        <span>연락처</span>
                        <span className="essential">*</span>
                      </InputTitle>
                      <InputWindow>
                        <input
                          placeholder="담당자 개인 번호"
                          type="text"
                          name="from_phone"
                          id="from_phone"
                          required
                        ></input>
                      </InputWindow>
                    </EachInput>
                    <EachInput>
                      <InputTitle>
                        <span>이메일</span>
                        <span className="essential">*</span>
                      </InputTitle>
                      <InputWindow>
                        <input
                          placeholder="biz@5iveyears.com"
                          type="text"
                          name="from_email"
                          id="from_email"
                          required
                        ></input>
                      </InputWindow>
                    </EachInput>
                  </Input>
                  {/* 모바일에선 세로로 출력*/}
                  <Input className="long">
                    <EachInput className="long">
                      <InputTitle className="long">
                        <span className="address">주소</span>
                        <span className="essential">*</span>
                      </InputTitle>
                      <InputWindow className="long">
                        <input
                          className="long"
                          type="text"
                          placeholder="주소를 입력해주세요."
                          name="from_address"
                          id="from_address"
                          required
                        ></input>
                      </InputWindow>
                    </EachInput>
                  </Input>
                  <Input className="long">
                    <EachInput className="long">
                      <InputTitle className="long">
                        <span>유입경로</span>
                        <span className="essential">*</span>
                      </InputTitle>
                      <InputWindow className="long">
                        <input
                          className="long"
                          type="text"
                          placeholder="어떤 경로를 통해서 알게되셨나요?."
                          name="from_path"
                          id="from_path"
                          required
                        ></input>
                      </InputWindow>
                    </EachInput>
                  </Input>
                  <InputFree>
                    <InputTitle className="FreeTitle">
                      <span>문의사항</span>
                    </InputTitle>
                    <InputWindow className="FreeInput">
                      <textarea
                        placeholder="문의사항을 입력해주세요."
                        cols="50"
                        rows="3"
                        type="text"
                        name="from_message"
                        id="from_message"
                      ></textarea>
                    </InputWindow>
                  </InputFree>
                </form>
              </InputContainer>
              <ButtonContainer className="pc">
                <Button
                  onClick={sendEmail}
                  style={{
                    backgroundColor: Number === 1 ? "#FF477E" : "#0094FF",
                  }}
                >
                  문의하기
                </Button>
              </ButtonContainer>
            </ContentDiv>
            <MobileWrapper className="mobile">
              <ButtonContainer>
                <Button
                  onClick={sendEmail}
                  style={{
                    backgroundColor: Number === 1 ? "#FF477E" : "#0094FF",
                  }}
                >
                  문의하기
                </Button>
              </ButtonContainer>
            </MobileWrapper>
          </ContentContainer>
        </InquiryContainer>
      ) : (
        <></>
      )}
    </AnimatePresence>
  );
}

export default Inquiry;

const InquiryContainer = styled(motion.div)`
  display: flex;
  position: absolute;
  width: 100vw;
  height: 78.1vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 21.9vh;
  background: white;
  box-shadow: 0px -7px 50px rgba(255, 71, 126, 0.2);

  @media screen and (max-width: 800px) {
    width: 100vw;
    height: 1208px;
    top: 53px;
    gap: 26px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 33px 20px;
  gap: 10px;
  width: 820px;
  height: 802px;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
    padding: 0px;
  }
`;

const Cancel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  width: 780px;
  height: 32px;

  > span {
    width: 32px;
    height: 32px;
  }

  @media screen and (max-width: 800px) {
    width: 100%;

    > span {
      margin-right: 20px;
      width: 32px;
      height: 32px;
    }
  }
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 780px;
  height: 87.2%;

  @media screen and (max-width: 800px) {
    align-items: flex-start;
    padding: 0px;
    gap: 2px;
    width: 316px;
    height: 906px;
  }
`;

const MobileWrapper = styled.div`
  &.mobile {
    display: none;
  }

  @media screen and (max-width: 800px) {
    &.mobile {
      display: block;
    }
  }
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
  width: 390px;
  height: 80px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 316px;
    height: 80px;
  }
`;

const TitleTopic = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 350px;
  height: 30px;

  > span {
    width: 350px;
    height: 30px;
    text-align: center;
    font-family: "SF Pro";
    font-style: normal;
    font-weight: 510;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0.5px;
    color: black;
  }

  @media screen and (max-width: 800px) {
    width: 276px;

    > span {
      width: 140px;
      font-style: normal;
    }
  }
`;
const TitleDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  width: 350px;
  height: 42px;

  > span {
    width: 330px;
    height: 42px;
    font-family: "SF Pro";
    font-style: normal;
    font-weight: 274;
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.5px;
    color: black;
  }

  @media screen and (max-width: 800px) {
    width: 310px;

    > span {
      width: 310px;
      color: #000000;
    }
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 780px;
  height: 506px;

  @media screen and (max-width: 800px) {
    gap: 2px;
    width: 316px;
    height: 906px;
  }
`;
const Input = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 780px;
  height: 88px;
  border-width: 1;
  border-color: black;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 316px;
    height: 176px;

    &.long {
      height: 88px;
    }
  }
`;

const InputTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  //gap: 5px;
  width: 350px;
  height: 21px;

  > span {
    width: 50px;
    height: 21px;
    font-family: "SF Pro";
    font-style: normal;
    font-weight: 510;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.5px;
    color: black;
  }

  > span.essential {
    width: 7px;
    height: 21px;
    color: #ff477e;
  }

  &.long {
    width: 740px;
    text-align: start;
    > span {
      width: 58px;
      color: #000000;
    }

    > span.essential {
      width: 7px;
      height: 21px;
      font-family: "SF Pro";
      font-style: normal;
      font-weight: 510;
      font-size: 14px;
      line-height: 150%;
      letter-spacing: 0.5px;
      color: #ff477e;
    }
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 5px;
    width: 276px;
    height: 21px;

    &.long {
      width: 276px;
      height: 21px;

      > span {
        width: 58px;
        height: 21px;
        font-family: "SF Pro";
        font-style: normal;
        font-weight: 510;
        font-size: 14px;
        line-height: 150%;
        letter-spacing: 0.5px;
        color: #000000;
      }
    }
  }
`;
const InputWindow = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 359px;
  height: 41px;
  background: #ffffff;
  border: 0.5px solid #bcbcc0;
  border-radius: 10px;

  > input {
    margin-left: 10px;
    border: none;
    outline: none;
  }

  &.long {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 740px;
    height: 41px;
    background: #ffffff;
    border: 0.5px solid #bcbcc0;
    border-radius: 10px;

    > input {
      margin-left: 10px;
      width: 720px;
    }
  }

  @media screen and (max-width: 800px) {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 17px;
    width: 276px;
    height: 41px;
    background: #ffffff;
    border: 0.5px solid #bcbcc0;
    border-radius: 10px;

    &.long {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 10px 17px;
      width: 276px;
      height: 41px;
      background: #ffffff;
      border: 0.5px solid #bcbcc0;
      border-radius: 10px;

      > input {
        margin-left: 10px;
        width: 240px;
      }
    }
  }
`;

const InputFree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 780px;
  height: 134px;

  & > .FreeTitle {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 5px;
    width: 740px;
    height: 21px;

    > span {
      width: 60px;
      height: 21px;

      font-family: "SF Pro";
      font-style: normal;
      font-weight: 510;
      font-size: 14px;
      line-height: 150%;
      letter-spacing: 0.5px;
      color: #000000;
    }
  }

  & > .FreeInput {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 17px;
    width: 740px;
    height: 105px;
    background: #ffffff;
    border: 0.5px solid #bcbcc0;
    border-radius: 10px;

    > textarea {
      width: 100%;
      height: 105px;
      font-family: "SF Pro";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      letter-spacing: 0.5px;
      color: black;
      outline: none;
      border: none;
    }
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 9px 0px;
    width: 316px;
    height: 263px;

    & > .FreeTitle {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 0px;
      gap: 5px;
      width: 276px;
      height: 21px;

      > span {
        width: 60px;
        height: 21px;
        font-family: "SF Pro";
        font-style: normal;
        font-weight: 510;
        font-size: 14px;
        line-height: 150%;
        letter-spacing: 0.5px;
        color: #000000;
      }
    }

    & > .FreeInput {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 10px 17px;
      width: 276px;
      height: 216px;
      background: #ffffff;
      border: 0.5px solid #bcbcc0;
      border-radius: 10px;
      > textarea {
        width: 100%;
        height: 105px;
        font-family: "SF Pro";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        letter-spacing: 0.5px;
        color: black;
        outline: none;
        border: none;
      }
    }
  }
`;

const EachInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 88px;

  &.long {
    width: 780px;
    height: 70px;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 8px;
    width: 316px;
    height: 70px;

    &.long {
      width: 316px;
      height: 70px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 30px;
  gap: 10px;
  width: 305px;
  height: 48px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 4px;
    width: 390px;
    height: 70px;

    &.pc {
      display: none;
    }
  }
`;

const Button = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 10px;
  width: 245px;
  height: 48px;
  border-width: 1px 2px 2px 1px;
  border-style: solid;
  border-color: #49516f;
  border-radius: 6px;

  :active {
    opacity: 0.5;
  }
`;
