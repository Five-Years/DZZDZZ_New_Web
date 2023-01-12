import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import StateSlice from '../features/counter/StateSlice'
import { useDispatch, useSelector } from 'react-redux'

function Question() {
    const Popup = useSelector(state => {return state.Popup.value})
    const [FirstRender,setFirstRender] = useState(true)
    const dispatch = useDispatch();
    const variants = {
        start : {
            y : Popup? "100vh" : 0
        },
        end : {
            y : Popup ? 0 : "100vh",
            transition : {
                duration : 1
            }  
        }
    }
 
  return (
    <QuestionContainer key={Popup} variants = {variants} initial = "start" animate = {'end'} >
        <ContentContainer>
            <Cancel><span onClick={()=>{dispatch(StateSlice.actions.Popup())}}>X</span></Cancel>
            <ContentDiv>
                <Title>
                </Title>
                <InputContainer>
                <Input></Input>
                <Input></Input>
                <Input></Input>
                <Input></Input>
                <Input></Input>
                </InputContainer>
                <Button></Button>
            </ContentDiv>
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
background-color: white;

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
gap: 30px;

width: 780px;
height: 87.2%;
background-color: white;

@media screen and (max-width : 480px){

    align-items: flex-start;
    padding: 0px;
    gap: 2px;

    width: 316px;
    height: 1070px;
    background-color: aliceblue;
}
`;
const Title = styled.div``;
const InputContainer = styled.div``;
const Input = styled.div``;
const Button = styled.div`
    @media screen and (max-width : 480px){
        display : flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    gap : 10px;
    width : 100%;
    height : 48px;
    background-color: #FF477E;
    border-width: 1px 2px 2px 1px;
    border-style : solid;
    border-color : #49516F;
    border-radius: 6px;
    }
`;

