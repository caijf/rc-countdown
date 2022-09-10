import React, { useRef } from 'react';
import CountDown, { ActionType } from '..';

function Demo() {
  const actionRef = useRef<ActionType>(null);

  return (
    <div>
      <CountDown
        time={10 * 1000}
        interval={35}
        format='ss:SSS'
        onEnd={() => console.log('倒计时结束！')}
        autoStart={false}
        ref={actionRef}
      />
      <br />
      <br />
      <button onClick={() => actionRef.current?.start()}>开始</button>
      <button onClick={() => actionRef.current?.pause()}>暂停</button>
      <button onClick={() => actionRef.current?.reset()}>重置</button>
    </div>
  );
}

export default Demo;