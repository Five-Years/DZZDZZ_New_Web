import React from 'react'
import styled from 'styled-components';
function DzzDzzIntrodue() {
  return (
    <DzzDzzContainer>
      <text>단짠단짠 소개글</text>
    </DzzDzzContainer>
  )
}

export default DzzDzzIntrodue

const DzzDzzContainer = styled.div`
width : 100vw;
height : 100vh;
display: flex;
align-items: center;
justify-content: center;

> text {
    font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 150%;
/* identical to box height, or 30px */

text-align: center;
letter-spacing: 0.5px;

/* Text Black */

color: #000000;
}
`;