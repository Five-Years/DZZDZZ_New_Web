//@ 이페이지 참고해서 로딩페이지, 타이머 반영해보자

import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const TimeCounter = () => {
  const [deadline, setDeadline] = useState(null); // 마감 시간
  const [timeLeft, setTimeLeft] = useState(null); // 잔여 시간

  // 서버에서 마감일을 가져온다

  const fetchDeadlineFromServer = async () => {
    try {
      const response = await axios.get("/api/getDeadline"); // 서버 API 경로에 맞게 수정해주세요.

      // 마감일을 상태변수에 저장한다.
      setDeadline(response.data.deadline); // 서버에서 받아온 마감일을 상태에 설정
    } catch (error) {
      console.error("Error fetching deadline from server:", error);
    }
  };

  // 남은 시간을 계산하는 함수
  const calculateTimeLeft = () => {
    const now = moment();
    const end = moment(deadline);
    ㅇ;
    const duration = moment.duration(end.diff(now));
    const hours = Math.floor(duration.asHours());
    const minutes = moment.utc(duration.asMilliseconds()).format("mm");
    const seconds = moment.utc(duration.asMilliseconds()).format("ss");
    setTimeLeft({ hours, minutes, seconds });
  };

  // 컴포넌트가 처음 렌더링될 때 서버에서 마감일을 가져오고 남은 시간을 계산합니다.
  useEffect(() => {
    fetchDeadlineFromServer();
  }, []);

  // 1초마다 남은 시간을 갱신합니다.
  useEffect(() => {
    if (deadline) {
      const intervalId = setInterval(calculateTimeLeft, 1000);
      return () => clearInterval(intervalId);
    }
  }, [deadline]);

  // 남은 시간이 계산되기 전까지는 로딩 메시지를 표시합니다.
  if (!timeLeft) {
    return <div>Loading...</div>;
  }

  // 남은 시간을 카운트다운 형태로 표시합니다.
  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>Deadline: {moment(deadline).format("YYYY-MM-DD HH:mm:ss")}</p>
      <p>
        Time Left: {timeLeft.hours} hours, {timeLeft.minutes} minutes,{" "}
        {timeLeft.seconds} seconds
      </p>
    </div>
  );
};

export default TimeCounter;
