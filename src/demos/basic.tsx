import React from 'react';
import CountDown from '..';

function Demo() {
  return (
    <div>
      <CountDown time={8 * 60 * 60 * 1000} onEnd={() => console.log('倒计时结束！')} />
    </div>
  );
}

export default Demo;