import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import {motion, transform} from 'framer-motion'
import StateSlice from '../features/counter/StateSlice'
import { useDispatch, useSelector } from 'react-redux'

function Question() {
    const Popup = useSelector(state => {return state.Popup.value})
    const [FirstRender,setFirstRender] = useState(true)
    const dispatch = useDispatch();
    
    
    const variants = {
        start : {
            y : Popup? "100vh" : 0 
            // transform ? translate(y) ok 
        },
        end : {
            y : Popup ? 0 : "100vh",
            transition : {
                duration : 1
            }  
        }
    }
//  event 감지로 없애기 
  return (
    <QuestionContainer key={Popup} variants = {variants} initial = "start" animate = {'end'} >
        <ContentContainer>
            <Cancel><span onClick={()=>{dispatch(StateSlice.actions.Popup())}}>X</span></Cancel>
            <ContentDiv>
                <TitleContainer>
                    <TitleTopic><span>광고 상담/문의</span></TitleTopic>
                    <TitleDetail><span>아래의 신청 항목을 작성해주시면, 담당자 확인 후 최대한 빠르게 연락 드리도록 하겠습니다.</span></TitleDetail>
                </TitleContainer>
                <InputContainer>
                <Input><EachInput><InputTitle><span>기업명</span><span className='essential'>*</span></InputTitle><InputWindow><input placeholder='기업명을 입력해주세요'></input></InputWindow></EachInput>
                <EachInput><InputTitle><span>담당자</span><span className='essential'>*</span></InputTitle><InputWindow><input placeholder='담당자 성함'></input></InputWindow></EachInput>
                </Input> {/* 모바일에선 세로로 출력*/}
                <Input>
                <EachInput>
                <InputTitle><span>연락처</span><span className='essential'>*</span></InputTitle><InputWindow><input placeholder='담당자 개인 번호'></input></InputWindow>
                </EachInput>
                <EachInput>
                <InputTitle><span>이메일</span><span className='essential'>*</span></InputTitle><InputWindow><input placeholder='biz@5iveyears.com'></input></InputWindow>    
                </EachInput>
                </Input> {/* 모바일에선 세로로 출력*/}

                <Input>
                <EachInput className='long'>
                    <InputTitle className='long'><span>주소</span><span className='essential'>*</span></InputTitle>
                    <InputWindow className='long'>
                        <input className='long' placeholder='주소를 입력해주세요.'></input>
                        </InputWindow>
                </EachInput>
                </Input> 
                <Input>
                <EachInput className='long'>
                    <InputTitle className='long'><span>유입경로</span><span className='essential'>*</span></InputTitle>
                    <InputWindow className='long'>
                        <input className='long' placeholder='어떤 경로를 통해서 알게되셨나요?.'></input>
                        </InputWindow>
                </EachInput>
                </Input>                 
                {/* <InputFree></InputFree>  */}
                </InputContainer>
                <ButtonContainer className='pc'>
                <Button>문의하기</Button>
                </ButtonContainer>
            </ContentDiv>
            <MobileWrapper className="mobile"><ButtonContainer><Button>문의하기</Button></ButtonContainer></MobileWrapper>
        </ContentContainer>
    </QuestionContainer>
  )
}

export default Question



const QuestionContainer = styled(motion.div)`
display: flex;

position: absolute;
width: 100%;
height: 78.1%;
bottom : 0;
flex-direction: column;
justify-content: center;
align-items: center; 

left: 0px;
top: 21.9%;

/* white */

background: white;
box-shadow: 0px -7px 50px rgba(255, 71, 126, 0.2);

@media screen and (max-width : 480px){
    width : 100%;
    height : 1208px;
    top : 53px;
    gap : 26px;
    background-color : black;
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

@media screen and (max-width : 480px){
    width : 100%;
    height : 100%;
    padding : 0px;
    background-color: red;
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

@media screen and (max-width : 480px){
    width : 100%;
    height : 32px;
    gap : 10px;

    > span {
        margin-right: 20px;
        width :32px;
        height : 32px;
    }
}
`;


const ContentDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 10px;

width: 780px;
height: 87.2%;

@media screen and (max-width : 480px){

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

    @media screen and (max-width : 480px){
        &.mobile {
            display : block;
        }  
    }
`;
const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 7px;

    width: 390px;
    height: 80px;

    @media screen and (max-width : 480px){
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
    align-items: flex-start;
    padding: 0px;
    gap: 5px;

    width: 350px;
    height: 30px;

    > span {
        width: 140px;
        height: 30px;

        font-family: 'SF Pro';
        font-style: normal;
        font-weight: 510;
        font-size: 20px;
        line-height: 150%;
        /* identical to box height, or 30px */

        letter-spacing: 0.5px;

        /* Text Black */

        color: #000000;
    }

    @media screen and (max-width : 480px){
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        padding: 0px;
        gap: 5px;

        width: 276px;
        height: 30px;

        > span {
            width: 140px;
            height: 30px;

            font-family: 'SF Pro';
            font-style: normal;
            font-weight: 510;
            font-size: 20px;
            line-height: 150%;
            /* identical to box height, or 30px */

            letter-spacing: 0.5px;

            /* Text Black */

            color: #000000;
        }
    }

`;
const TitleDetail = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 5px;

    width: 350px;
    height: 42px;

    >span {
        width: 330px;
        height: 42px;

        font-family: 'SF Pro';
        font-style: normal;
        font-weight: 274;
        font-size: 14px;
        line-height: 150%;
        /* or 21px */

        text-align: center;
        letter-spacing: 0.5px;

        /* Text Black */

        color: #000000;
    }

    @media screen and (max-width : 480px){
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        padding: 0px;
        gap: 5px;

        width: 310px;
        height: 42px;

        > span {
            width: 310px;
            height: 42px;

            font-family: 'SF Pro';
            font-style: normal;
            font-weight: 274;
            font-size: 14px;
            line-height: 150%;
            /* or 21px */

            text-align: center;
            letter-spacing: 0.5px;

            /* Text Black */

            color: #000000;
        }
    }

`;
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    width: 780px;
    height: 506px;
    background-color: grey;

    @media screen and (max-width : 480px){
        
    }
`;
const Input = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    width: 780px;
    height: 88px;
    border-width: 1;
    border-color: black;
`;

const InputTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 5px;

    width: 350px;
    height: 21px;


    > span {
        width: 50px;
        height: 21px;

        font-family: 'SF Pro';
        font-style: normal;
        font-weight: 510;
        font-size: 14px;
        line-height: 150%;
        /* identical to box height, or 21px */

        letter-spacing: 0.5px;

        /* Text Black */

        color: #000000;
    }

    > span.essential {
        width: 7px;
        height: 21px;

        font-family: 'SF Pro';
        font-style: normal;
        font-weight: 510;
        font-size: 14px;
        line-height: 150%;
        /* identical to box height, or 21px */

        letter-spacing: 0.5px;

        /* dzz_pink */

        color: #FF477E;
    }

    &.long{
        width : 740px;
        height : 21px;
        
        > span {
        width: 58px;
        height: 21px;

        font-family: 'SF Pro';
        font-style: normal;
        font-weight: 510;
        font-size: 14px;
        line-height: 150%;
        /* identical to box height, or 21px */

        letter-spacing: 0.5px;

        /* Text Black */

        color: #000000;
    }

    > span.essential {
        width: 7px;
        height: 21px;

        font-family: 'SF Pro';
        font-style: normal;
        font-weight: 510;
        font-size: 14px;
        line-height: 150%;
        /* identical to box height, or 21px */

        letter-spacing: 0.5px;

        /* dzz_pink */

        color: #FF477E;
    }}
`;
const InputWindow = styled.div`
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 359px;
    height: 41px;
    /* white */

    background: #FFFFFF;
    /* SystemGray/400 */

    border: 0.5px solid #BCBCC0;
    border-radius: 10px;



    > input {
        margin-left: 10px;
        border : none;
        border : 0px 0px 0px 0px;
        outline:none;
    }

    &.long{
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 740px;
    height: 41px;

    /* white */

    background: #FFFFFF;
    /* SystemGray/400 */

    border: 0.5px solid #BCBCC0;
    border-radius: 10px;

    > input {
        margin-left : 10px;
        width : 720px;
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
`;

const EachInput = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;

width: 390px;
height: 88px;

&.long{
    width: 780px;
    height: 70px;
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


    @media screen and (max-width : 480px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding : 0px;
        gap: 4px;

        width: 390px;
        height: 70px;
        background-color: yellow;

        &.pc {
            display : none;
        }
    }
`;

const Button = styled.div`
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    gap: 10px;

    width: 245px;
    height: 48px;

    /* dzz_pink */

    background: #FF477E;
    /* dzz_grey */

    border-width: 1px 2px 2px 1px;
    border-style: solid;
    border-color: #49516F;
    border-radius: 6px;
`;

