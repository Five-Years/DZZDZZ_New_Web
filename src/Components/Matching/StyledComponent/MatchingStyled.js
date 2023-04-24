import styled from "styled-components"
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";
var Spinner = require("react-spinkit");

// Homes
export const BackgroundCard = styled.div`
  position: absolute;
  width: 100vw;
  height: 57.9vh;
  top: 0px;
  background-color: red;
  background: ${props => props.theme === 1 ? "linear-gradient(180deg, #345084 30.21%, #6A7FA5 100%)" : "linear-gradient(180deg, #FD5084 40.76%, #FE9FBB 134.93%)"};
  /* background: linear-gradient(180deg, #FD5084 40.76%, #FE9FBB 134.93%); */
`;

export const MobileContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

export const HeaderContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

position: absolute;
width: 100%;
height: 11.91%;
left: 0px;
top: 3.38%;
`;

export const HeaderLeft = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 0px;
margin-left: 16.67%;
width: 36.41%;
height: 78.41%;
min-width : 155px;
`;

export const HeaderAvatar = styled.div`
position: absolute;

top: 9px;
left : 66.66%;
> img {
  width: 50px;
  height: 46px;
  }
`;


export const HeaderRight = styled.div`
width: 54.36%;
height: 19px;
min-width : 230px;
margin-left : 16.67%;

> text {
  font-family: var(--font-OpenSans);
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;
/* identical to box height */
/* Text Black */
color: #000000;
}

> text > span {
  color : #0094FF;
  font-weight: 600;
font-size: 14px;
}

`;

export const MatchingCardContainer = styled.div`
  display : flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45.2%;
  top: 17.32%;
`;

export const MatchingCard = styled.div`
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 66.66%;
  height: 100%;
  background: ${props => props.theme === 1 ? "#E3F1FF" : "#FFE9E9"  };
  // 이성매칭 
  box-shadow: ${props => props.theme === 1 ? "0px 0px 10px rgba(0, 148, 255, 0.6), 0px 13px 12px rgba(0, 0, 0, 0.1)" : "0px 0px 10px rgba(255, 71, 126, 0.6), 0px 13px 12px rgba(0, 0, 0, 0.1)"};
  border-radius: 20px;
  // 동성매칭 
  > div {
    top : 6%;
    width: 100%;
    height: 100%;
  }
`;







export const StageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  width: 81.54%;
  min-width: 110px;
  height: 95px;

  > text {
    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #000000;

    > span {
      font-weight: 600;
    }
  }
`;

export const CardTitleContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 38px;
  width: 100%;
  height: 83.63%;
`;

export const CardTag = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;

  width: 43.46%;
  height: 11.59%;
  min-width : 113px;
  min-height : 32px;
  /* white */
  background: #ffffff;
  /* dzz_pink */
  border: 1px solid #ff477e;
  border-radius: 19px;

  > text {
    font-family: var(--font-Poppins);
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    /* dzz_pink */

    color: #ff477e;
  }
`;

export const CardTitle = styled.div`
  width: 200px;
  height: 128px;
  text-align: center;
  > text {
    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #000000;
    > span.love {
      color: #ff477e;
    }
  }
`;

export const CardTicket = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  width : 74.23%;
  height : 14.49%;
  min-width: 193px;
  min-height: 40px;

  background: #FFFFFF;
  border-radius: 32px;

  > img {
    width: 24px;
    height: 24px;
  }

  > text {
    width: 130px;
    height: 24px;

    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    /* Text Black */

    color: #000000;
  }
`;

export const PurchasingCardTicket = styled(CardTicket)`
display: flex;
flex-direction: row;
align-items: center;

width: 193px;
height: 40px;
border-radius: 0px;

> text {
  width: 140px;
    height: 24px;

    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    /* Text Black */

    color: #000000;
}

`;


export const HeaderProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;

width: 100%;
height: 73.91%;

  > text {
    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }

  > text.name{
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  height: 22.73%;
  top : 68.88%;
`;

export const EachButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  width: 100%;
  height: 30.95%;
`;

export const EachButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 53.85%;
  height: 84.6%;
  /* white */
  background: #FFFFFF;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  pointer-events : ${(props)=>(props.season !== props.theme?'none':null)};


  &.ticket {
    background: ${props => (props.theme === props.season)? ((props.season === props.theme) ? ("#0094FF"): ("#BDE5FF")) : ((props.season === props.theme)? ("#FF477E") : ("#FEC7D7"))}

  }

  > text {
    height: 24px;
    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    /* identical to box height, or 24px */

    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: #000000;
  }

  > img {
    margin-left: 5px;
    width : 24px;
    height : 24px;

  }
  > text.ticket {
    color: #ffffff;
  }

  > text.authentification {
    color: #c9c9c9;
  }
`;
export const TextField = styled.div`
> text {
  font-family: var(--font-OpenSans);
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  /* or 160% */
  text-align: center;
  /* Text Black */
  color: #000000;
}

> text > text {
font-weight: bold;
line-height: 26px;
letter-spacing: 0em;
text-align: center;
}

> text > span {
  font-family: var(--font-Poppins);
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  /* or 160% */
  text-align: center;
  /* Text Black */
  color: #FF477E;
}

> text > span > span {
  font-weight : 600
}
`;

export const Confirmation = styled(ConfirmationNumberIcon)`
  width: 24px;
  height: 24px;
  color: ${props => props.theme === 1 ? "#0094FF" : "#FF477E"  };
`;

export const Carousels = styled(Carousel)`
  &.indicatorContainerProps{margin-top: -30px}
`;


export const MatchingContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color : ${props=>props.theme === 1 ? "#49516f" :  "#FF477E"};
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 10px;

  width: 66.66%;
  max-width: 260px;
  height: 32px;

  /* white */

  background: #ffffff;
  border-radius: 13px;

  > text {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 10px;

    width: 260px;
    height: 32px;

    /* white */

    background: #ffffff;
    border-radius: 13px;
  }
`;

//Matching
export const MatchingCardContainers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 66.66%;
  height: 45.29%;
  max-width: 260px;
  max-height: 320px;
  top: 8.57%;
  background: #ffffff;
  box-shadow: 0px 13px 12px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

export const MatchingCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  width: 100%;
  height: 71.92%;
  min-height: 228px;
`;


export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  //padding: 20px;
  //gap: 10px;
  position: absolute;
  width: 100px;
  height: 100px;
  top: 63.71%;

  border-radius: 5px;
`;

export const BackgroundCards = styled(BackgroundCard)`
width : 100vw;
height : 100vh;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 30px;

  width: 50%;
  min-width: 125px;
  height: 100%;

  > text {
    width: 135px;
    height: 102px;
    white-space: pre-line;
    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 34px;
    text-align: center;

    /* dzz_black */

    color: #333333;
  }

  > text > span {
    color: #ff477e;
  }

  > img {
    width: 80%;
    height: 80%;
    max-width: 96px;
    max-height: 96px;
  }
`;


export const ConfirmContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  position: absolute;
  width: 100%;
  height: 50px;
  top: 82.57%;

  > text {
    width: 127px;
    height: 50px;

    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    /* or 156% */

    text-align: center;

    /* white */

    color: #ffffff;
  }
`;


export const Spinners = styled(Spinner)`
              display: "flex";
              left: 35px;
              top: 30px;
              color: white;              
              width: 80px;
              height: 80px;
`;

// Mating2

export const MatchingContainers = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  min-height : 798px;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 17px;
  width: 37.95%;
  top: 10%;
  min-width: 74px;
  height: 82px;
  > img {
    width: 35px;
    height: 35px;
  }

  > text {
    width: 80px;
    height: 30px;

    font-family: var(--font-Poppins);
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height */

    text-align: center;

    /* dzz_pink */

    color: #ff477e;
  }

  > text.reject {
    color: #0094ff;
  }
`;

export const TextContainer = styled.div`
  width: 53.33%;
  min-width: 208px;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;

  > text {
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: var(--font-OpenSans);
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #888888;
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
  height: 24px;
  top: 56.52%;
`;

export const DetailTextView = styled.div`
  display: flex;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: #888888;
  opacity: 80%;

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

    font-family: "SF Pro Text";
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
  height: 100px;
  left: 0px;
  top: 65.91%;
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
  top: 88.22%;

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

export const MatchingLink = styled(Link)`
  text-decoration-line: none;
  > text {
    width: 80px;
    height: 22px;

    font-family: "SF Pro Text";
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

  border-bottom: 0.3px solid #888888;
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
  height: 22px;
  top: 60.65%;

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

export const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  position: absolute;
  top: 6%;
  width: 100%;
  height: 46.74%;

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const PurchasePageContainer = styled(MatchingContainer)`
background-color: ${props=> props.theme === 1 ? "#E3F1FF" : "#FFE9EF" }

`

export const PurchasingHeaderContainer = styled.div`
position: absolute;
width: 100%;
height: 12.71%;
left: 0px;
top: 3.57%;
`;



export const PurchasingHeader = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;

padding: 0px;
gap: 4px;
margin-left : 39.23%;

width: 44.1%;
height: 100%;
min-width : 190px;

> text {
  font-family: var(--font-OpenSans);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  /* dzz_pink */
  color: #FF477E;
}
`;


