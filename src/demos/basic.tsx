import React from 'react';
import CountDown from 'rc-countdown-view';

function Demo() {
  return <CountDown time={8 * 60 * 60 * 1000} />;
}

export default Demo;
