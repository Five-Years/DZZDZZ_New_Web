import React from "react";
import axios from "axios";

// @ 현재 시즌 상태를 가져오는 매소드, 날짜 객체를 이용
export const getSeason = async () => {
  // @ 시즌 정보 통신을 위한 날짜 객체
  const today = new Date();
  const todaytime = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
    hours: today.getHours(),
    minutes: today.getMinutes(),
    seconds: today.getSeconds(),
  };
  const expire = new Date(
    todaytime.year,
    todaytime.month - 1,
    todaytime.date,
    23,
    59
  );

  try {
    const Response = await axios.get(
      `${
        process.env.NODE_ENV === "development"
          ? ""
          : "https://dev.fiveyears.click"
      }/matching/calendar?today=${`${todaytime.year}-${String(
        todaytime.month
      ).padStart(2, "0")}-${String(todaytime.date).padStart(2, "0")}`}`,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );

    //   dispatch(StateSlice.actions.seasonTimer(expire.getTime()));
    return { seasonstatus: Response.data.data, expiretime: expire.getTime() };
  } catch (error) {
    console.log(error);
  }
};
