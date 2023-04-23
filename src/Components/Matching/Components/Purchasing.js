import React from "react";
import {
  PurchasePageContainer,
  Purchasingbox,
  BackgroundCards,
  HeaderContainer,
  HeaderLeft,
  HeaderProfile,
  HeaderRight,
  StageContainer,
  PurchasingHeader,
} from "../StyledComponent/MatchingStyled";
import { useState } from "react";
function Purchasing() {
  const [theme, setTheme] = useState(0);
  return (
    <>
      <BackgroundCards theme={theme}></BackgroundCards>
      <PurchasePageContainer>
        <Purchasingbox>
          <PurchasingHeader>
            
          </PurchasingHeader>
        </Purchasingbox>
      </PurchasePageContainer>
    </>
  );
}

export default Purchasing;
