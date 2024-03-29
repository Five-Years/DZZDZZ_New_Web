import React from "react";
import styled from "styled-components";
import Links from "../Footer/Links"  
import Meta from "../Footer/Meta"

function Footer() {

  return (
    <FooterContainer>
      <FooterContentContainer>
        <ContentContainer>
          <Content>
            <ContentLink>
            <Links />
            </ContentLink>
            <Meta />
          </Content>
        </ContentContainer>
      </FooterContentContainer>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  width: 100vw;
  height: 42.5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #231815;

  @media screen and (max-width: 800px) {
    height: 44.7vh;
  }
`;

const FooterContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 30px;
  gap: 10px;

  width: 71.9%;
  height: 100%;

  @media screen and (max-width: 800px) {
    align-items: flex-start;
    padding: 0px;
    gap: 10px;

    width: 84.6%;
    height: 77%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 94.2%;
  height: 100%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  width: 93.8%;
  height: 81.6%;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
  }
`;

const ContentLink = styled.div`
  width: 385px;
  height: 136px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 0px 30px;
    /* gap: 10px; */

    width: 100%;
    height: 49%;
  }
`;




