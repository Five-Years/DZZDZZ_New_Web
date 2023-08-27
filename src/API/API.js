import React from "react";
import { AxiosInstanse, setHeader } from "../utils/AxiosInstance";
import StateSlice from "features/State/StateSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// @ 사용자 정보를 가져와 userInfo에 넣은후 리덕스에 저장. (엑세스,리프래시토큰은 웹뷰통신으로 리덕스에 저장)

export const getData = async (at, rt) => {
  try {
    const Response = await AxiosInstanse.get(`/login/token`, {
      headers: {
        Authorization: at,
        "x-refresh-token": rt,
        fcmToken: "123",
        "content-type": "application/json",
      },
    });

    return Response.data.data;
  } catch (error) {
    console.log(error);
  }
};
