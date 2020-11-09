import React, { useState, useEffect } from 'react';

const Timer = (props) => {
  const [nowDate, setNowDate] = useState();

  let endDate = new Date(props.endDate);
  endDate.setHours(0);

  let remainTime = new Date(endDate.getTime()) - nowDate;

  var dDay = {};
  dDay.year = Math.floor(remainTime / (1000 * 60 * 60 * 24 * 30 * 12));
  dDay.month = Math.floor((remainTime / (1000 * 60 * 60 * 24 * 30)) % 12);
  dDay.day = Math.floor((remainTime / (1000 * 60 * 60 * 24)) % 365);
  dDay.hour = Math.floor((remainTime / (1000 * 60 * 60)) % 24);
  dDay.minute = Math.floor((remainTime / (1000 * 60)) % 60);
  dDay.second = Math.floor((remainTime / 1000) % 60);
  dDay.millisecond = ('00' + (remainTime % 1000)).slice(-3);

  useEffect(() => {
    setInterval(() => {
      setNowDate(Date.now());
    }, 800);
  });

  return (
    <>
      <h1 className="has-text-weight-bold	is-size-3 has-text-black mt-3">
        {dDay.year} 년 {dDay.month} 월 {dDay.day} 일 {dDay.hour} 시간 <br></br>
        {dDay.minute} 분 {dDay.second} 초 {dDay.millisecond} 밀리초
      </h1>
      <h2 className="description is-size-4">({props.endDate} 임기 만료)</h2>
    </>
  );
};

export default Timer;
