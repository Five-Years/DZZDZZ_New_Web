import React from "react";
import styled from "styled-components";
import Background1 from "assets/dzz_img1.png";
import Background2 from "assets/dzz_img2.png";
import Background3 from "assets/dzz_img3.png";
import Background4 from "assets/dzz_img4.png";
import Footer from "../Footer/Footer";

function Dzz() {
  return (
    <IntroduceContainer>
      <ImageContainer>
        <img src={Background1} aalt="단짠단짠" />
      </ImageContainer>
      <ImageContainer>
        <img src={Background2} aalt="단짠단짠" />
      </ImageContainer>

      <ImageContainer>
        <img src={Background3} alt="단짠단짠" />
      </ImageContainer>
      <ImageContainer>
        <img src={Background4} alt="단짠단짠" />
      </ImageContainer>
      {/* <Footer /> */}
    </IntroduceContainer>
  );
}

export default Dzz;
const ImageContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  /* height: 100%; */

  > img {
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    > img {
      width: 100%;
      height: 300px;
    }
  }
`;

const IntroduceContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #231815;
  overflow-y: scroll;

  @media screen and (max-width: 800px) {
    position: absolute;
  }
`;

// const BackgroundContainer = styled.div`
//   width: 100%;
//   height: 100%;
// `;

// const BackgroundContainer2 = styled.div`
//   display: flex;
//   width: 100%;
//   height: 2000px;
//   background-color: pink;
// `;
