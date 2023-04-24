import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

function HeaderLeft() {
  return (
    <PopupContainer>
      <PopupClose>
        <CloseIcon />
      </PopupClose>
      <PopupTop>
        <PopupImage>
          <img
            className="team"
            src={require("../../assets/dz.jpg")}
            alt="이미지"
          />
        </PopupImage>
        <PopupText>다운로드 하러가기</PopupText>
        <PopupDown>
          <KeyboardDoubleArrowDownIcon />
        </PopupDown>
      </PopupTop>
      <PopupDivder></PopupDivder>
      <ButtonContainer>
        <AppButton className="Android">
          <img src={require("../../assets/GooglePlayLogo.png")} alt="" />
          <img src={require("../../assets/AndroidLogo2.png")} alt="" />
        </AppButton>
        <AppButton className="Ios">
          <img src={require("../../assets/AppStoreLogo.png")} alt="" />
          <img src={require("../../assets/AppleLogo.png")} alt="" />
        </AppButton>
      </ButtonContainer>
    </PopupContainer>
  );
}

export default HeaderLeft;

const PopupContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
  gap: 12px;
  width: 264px;
  height: 301px;
  border-width: 1px 4px 4px 1px;
  border-style: solid;
  border-color: #000000;
  box-shadow: 0px 0px 16px rgba(255, 71, 126, 0.5);
  border-radius: 23px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const PopupTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 19px;
  width: 264px;
  height: 129px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 390px;
    height: 63.04px;
    left: 0px;
    top: 94px;
  }
`;

const PopupImage = styled.div`
  width: 92px;
  height: 49px;
`;

const PopupText = styled.div`
  width: 264px;
  height: 18px;
  font-family: "PFStardust";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #231815;
`;

const PopupClose = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 16px;
  top: 16px;
`;

const PopupDown = styled.div`
  width: 24px;
  height: 24px;
`;

const PopupDivder = styled.div`
  width: 260px;
  border: 1px solid #a39ea3;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 264px;
  height: 108px;
`;

const AppButton = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 184px;
  height: 48px;
  border-width: 1px 2px 2px 1px;
  border-style: solid;
  border-color: #49516f;
  border-radius: 6px;

  &.Android {
    background: #34c759;
  }

  &.Ios {
    background: #007dfe;
  }
`;
