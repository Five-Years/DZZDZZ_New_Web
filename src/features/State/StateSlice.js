import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  query: 1,
  ticket: 0,
  name: "anonymous",
  season: true,
  seasonstep : 0, //0 => 신청중 1 => 매칭중
  ReportData : null, 
  // {reporter : "인성", reported : "희주", reportNum : 0}
  ReportCase : ["낚시/놀람/도배","상업적 광고 및 판매","불건전한 만남 및 대화유도", "음란성 게시물 공유 및 게시", "정당/정치인 비하 및 선거운동","욕설/모욕/비하","유출/사칭/사기","닉네임 신고"],
  URL : "",
  isFrame : false,
  isStatic : false,
  isDzz : false,
};

const StateSlice = createSlice({
  name: "popup",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    Popup: (state) => {
      state.value = !state.value;
    },
    Number: (state, action) => {
      state.query = action.payload;
    },
    Ticket: (state, action) => {
      state.ticket = state.ticket + 1;
    },
    Name: (state, action) => {
      state.name = action.payload;
    },
    Season: (state, action) => {
      state.season = action.payload;
    },
    userData : (state,action) => {
      state.userData = action.payload;
    },
    ReportData : (state,action) => {
      state.ReportData = action.payload;
    },
    isFrame : (state,action) => {
      state.isFrame = action.payload;
    },
    URL : (state,action) => {
      state.URL = action.payload;
    },
    isStatic : (state,action) => {
      state.isStatic = action.payload;
    },
    isDzz : (state,action) => {
      state.isDzz = action.payload;
    },  }
});

export default StateSlice;
