import React from 'react'
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom/dist';

import {   
    ContentContainers,
    ContentLeft,
    ContentTitle,
    ContentRight
} from '../../StyledComponent/MatchingStyled';


function PurchasingHeader(props) {
    const locate = useLocation()
    const navigate = useNavigate()
  return (
<ContentContainers>
        <ContentLeft>
          <ArrowBackIosIcon
            style={{ marginLeft: "15.4%", width: "50%", height: "50%" }}
            onClick={() => {navigate("/");
            }}
          />
        </ContentLeft>
        <ContentTitle>
          <text>{props.title}</text>
        </ContentTitle>
        <ContentRight></ContentRight>

</ContentContainers>  )
}

export default PurchasingHeader


