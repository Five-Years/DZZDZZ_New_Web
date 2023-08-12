import React from "react";
import styled from "styled-components";
import Links from "./Links";
import Meta from "./Meta";
import MenuLinks from "./MenuLinks";

function Footer() {
  return (
    <FooterContainer>
      <FooterContentContainer>
        <ContentContainer>
          <Content>
            <ContentLink>
              <MenuLinks />
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
  width: 100%;
  height: 300px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #231815;

  bottom: 0px;

  @media screen and (max-width: 800px) {
    min-height: 0px;
    height: 50%;
    position: relative;
    min-height: 300px;
  }
`;

const FooterContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: 75%;
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
  width: 100%;
  height: 100%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;

  width: 93.8%;
  height: 85%;
  @media screen and (max-width: 800px) {
    width: 85%;
    height: 85%;
    position: absolute;
  }
`;

const ContentLink = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    /* padding: 0px 0px 30px; */
    /* gap: 10px; */

    width: 100%;
    height: 15%;
    position: relative;
  }
`;
