import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  query: 1,
  //@ 사용자 티켓수
  ticket: 0,
  //@ 사용자 닉네임
  name: "anonymous",

  //@ 현재 시즌 진행중 여부( 추후 삭제예정)
  season: true,

  //@ 현재 시즌 정보
  seasonStatus: null,

  ReportData: null,
  // {reporter : "인성", reported : "희주", reportNum : 0}

  //@ 신고 사유
  ReportCase: [
    "낚시/놀람/도배",
    "상업적 광고 및 판매",
    "불건전한 만남 및 대화유도",
    "음란성 게시물 공유 및 게시",
    "정당/정치인 비하 및 선거운동",
    "욕설/모욕/비하",
    "유출/사칭/사기",
    "닉네임 신고",
  ],

  //@ 웹페이지 관련 리덕스
  URL: "",
  isFrame: false,
  isStatic: false,
  isDzz: false,
  isFAQ: false,
  isNotice: false,
  isGuide: false,

  //@ 사용자 정보
  userInfo: {},
  userToken: {},
  userHistory: {},

  //@ 현재 시즌상태 남은시간
  seasonTimer: null,

  //@현재 시즌상태정보 (접수중, 매칭중, 휴식중 3가지 케이스)
  seasonStep: -1,

  //@현재 사용자의 매칭 신청가능 여부 {friendMatchingAvailable : boolean, coupleMatchingAvailable : boolean 형식으로 전달예정 }
  matchParticipate: {},

  //@매칭 성사 여부, 나의 결정 여부
  FriendmatchResult: {},
  CouplematchResult: {},

  //@ 매칭된 상대방 정보
  MatchedUserInfo: null,

  //@사용자 자산 정보
  userAsset: { jelly: 0, ticket: 0 },
  userMatchAvailable: {},
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
    SeasonStatus: (state, action) => {
      state.seasonStatus = action.payload;
    },
    SeasonStep: (state, action) => {
      state.seasonStep = action.payload;
    },
    ReportData: (state, action) => {
      state.ReportData = action.payload;
    },
    isFrame: (state, action) => {
      state.isFrame = action.payload;
    },
    URL: (state, action) => {
      state.URL = action.payload;
    },
    isStatic: (state, action) => {
      state.isStatic = action.payload;
    },
    isDzz: (state, action) => {
      state.isDzz = action.payload;
    },
    isGuide: (state, action) => {
      state.isGuide = action.payload;
    },
    userToken: (state, action) => {
      state.userToken = action.payload;
    },
    isNotice: (state, action) => {
      state.isNotice = action.payload;
    },
    isFAQ: (state, action) => {
      state.isFAQ = action.payload;
    },
    userInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    seasonTimer: (state, action) => {
      state.seasonTimer = action.payload;
    },
    matchParticipate: (state, action) => {
      state.matchParticipate = action.payload;
    },
    FriendmatchResult: (state, action) => {
      state.FriendmatchResult = action.payload;
    },
    CouplematchResult: (state, action) => {
      state.CouplematchResult = action.payload;
    },
    MatchedUserInfo: (state, action) => {
      state.MatchedUserInfo = action.payload;
    },
    userAsset: (state, action) => {
      state.userAsset = action.payload;
    },
    userHistory: (state, action) => {
      state.userHistory = action.payload;
    },
    matchAvailable: (state, action) => {
      state.userMatchAvailable = action.payload;
    },
  },
});

export default StateSlice;
