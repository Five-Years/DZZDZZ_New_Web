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
  display: flex;
  flex: 1;
  position: relative;
  flex-direction: column;
  background-color: #231815;
  padding-bottom: 10px;
  /* min-height: 200px; */
  /* bottom: 0px; */

  @media screen and (max-width: 800px) {
    display: flex;
    flex: 1;
    /* overflow: hidden; */
    min-height: 250px;
  }
`;

const FooterContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  /* gap: 10px; */

  /* width: 75%;
  height: 100%; */

  @media screen and (max-width: 800px) {
    display: flex;
    flex: 1;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;

    height: auto;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  /* background-color: antiquewhite; */
  /* align-items: flex-start;
  justify-content: space-between; */

  /* width: 93.8%;
  height: 85%; */
  @media screen and (max-width: 800px) {
    width: auto;
    height: auto;
    position: absolute;
  }
`;

const ContentLink = styled.div`
  display: flex;
  flex: 3;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    /* padding: 0px 0px 30px; */
    /* gap: 10px; */

    width: auto;
    height: 15%;
    position: relative;
  }
`;
