import React from 'react'
import styled from 'styled-components';

function Event() {
  return (
    <ContentContainer>
        <img src={require('../assets/dz.jpg')} alt=""/>
    <Title>
      <span>SEASON 2</span><span className='text'>마감까지</span>
    </Title>
    <Description>
      <Timer>[<span>21</span>:<span>03</span>:<span>42</span>]</Timer>
      <DownButton>
        <span>
            다운로드
        </span>
      </DownButton>
      <Sns>
        <img src={require('../assets/insta.png')} alt="" />
        <img src={require('../assets/kakao.png')} alt="" />
      </Sns>
    </Description>
    </ContentContainer>  )
}

export default Event

const ContentContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px 30px;
gap: 8px;

width: 468px;
height: 238px;
position : relative;

> img {
    visibility: hidden;
}


@media screen and (max-width: 480px) {
    gap: 25px;


    > img {
        width: 120px;
        height: 63.04px;
        visibility: visible;
    }


}
`;


const Title = styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;
padding: 0px;

width: 408px;
height: 36px;

> span {
  width: 150px;
height: 36px;

font-family: 'SF Pro';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 36px;
/* identical to box height */

display: flex;
align-items: flex-end;

/* dzz_pink */

color: #FF477E;
}

> span.text{
  width: 70px;
  height: 23px;
  font-family: 'SF Pro';
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 150%;

letter-spacing: 0.5px;

/* FY_black */

color: #231815;
}

@media screen and (max-width :480px){
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;

    width: 330px;
    height: 29px;
    
    > span {
    width: 125px;
    height: 29px;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    display: flex;
    align-items: flex-end;
    }

    > span.text {
        width: 65px;
        height: 23px;
        font-family: 'SF Pro';
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
align-items: flex-start;
padding: 0px;

width: 408px;
height: 194px;

border-radius: 10px;


@media screen and (max-width : 480px) {
    width: 100%;
    height: 150px;
    align-items: center;
}
`;


const Timer = styled.div`
width: 408px;
height: 80px;

font-family: 'PFStardust';
font-style: normal;
font-weight: 500;
font-size: 80px;
line-height: 80px;
/* identical to box height, or 100% */

> span {
  color : black;
}

/* dzz_pink */

color: #FF477E;

@media screen and (max-width : 480px){
    width: 330px;
    height: 75px;

    font-size: 50px;
    line-height: 70px;
    text-align: center;

    border-radius: 10px;

    font-size: 50px;
    line-height: 70px;
}
`;

const Sns = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-end;
padding: 22px 0px;
gap: 30px;

width: 408px;
height: 94px;
 
> img {
  width: 50px;
height: 50px;
}

@media screen and (max-width : 480px){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 147.92px;
    height: 40px;
    gap : 40px;
    

    > img {
    width: 40px;
    height: 40px;
}
}
`;


const DownButton = styled.div`
    visibility: hidden;


    @media screen and (max-width : 480px){
        visibility : visible;
        box-sizing: border-box;

        /* Auto layout */

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 24px;
        gap: 10px;

        width: 330px;
        height: 48px;

        /* dzz_pink */

        background: #FF477E;
        /* dzz_grey */

        border-width: 1px 2px 2px 1px;
        border-style: solid;
        border-color: #49516F;
        border-radius: 6px;

        > span {
            
            width: 70px;
            height: 26px;

            font-family: 'PFStardust';
            font-style: normal;
            font-weight: 500;
            font-size: 17px;
            line-height: 150%;
            /* identical to box height, or 26px */

            letter-spacing: 0.05em;
            text-transform: capitalize;

            /* white */

            color: #FFFFFF;
        }
        
    }
`


