import React from 'react'
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from 'react-router-dom';

import {   
    ContentContainers,
    ContentLeft,
    ContentTitle,
    ContentRight 
} from '../../StyledComponent/MatchingStyled';


function MatchingProgressHeader() {
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
          <text></text>
        </ContentTitle>
        <ContentRight>
          <MoreHorizIcon onClick={()=>{window.ReactNativeWebView?.postMessage(
                  JSON.stringify({ type: "report", data: "" })
                ); alert("신고")}}
            style={{ width: "50%", height: "50%", marginRight: "15.4%" }}
          />
        </ContentRight>
      </ContentContainers>
  )
}

export default MatchingProgressHeader
