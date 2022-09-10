import React from 'react';
import CountDown from '..';

function Demo() {
  return (
    <div>
      <CountDown time={60 * 1000} format="ss 秒" /><br />
      <CountDown time={60 * 1000} format="ss s" /><br />
      <CountDown time={2 * 24 * 60 * 60 * 1000} format="DD 天 HH 时 mm 分 ss 秒" /><br />
      <CountDown time={2 * 24 * 60 * 60 * 1000} format="HH 时 mm 分 ss 秒" /><br />
      <CountDown time={2 * 24 * 60 * 60 * 1000} interval={100} format={(t, formatRes) => `距活动结束还剩 ${formatRes.days} 天 ${formatRes.hours} 时 ${formatRes.minutes} 分 ${formatRes.seconds}.${formatRes.milliseconds / 100} 秒`} /><br />
    </div>
  );
}

export default Demo;