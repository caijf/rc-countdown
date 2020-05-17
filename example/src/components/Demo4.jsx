import React, { useCallback, useRef } from "react";
import CountDown from "rc-countdown-view";
import SyntaxHighlighter from "react-syntax-highlighter";
import tomorrowNightEighties from "react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-eighties";

export default () => {
  const countdownRef = useRef(null);

  const handleTimerEnd = useCallback(() => {
    console.log("倒计时结束！");
  }, []);

  const handleTimerStart = useCallback(() => {
    countdownRef.current.start();
  }, []);
  const handleTimerPause = useCallback(() => {
    countdownRef.current.pause();
  }, []);
  const handleTimerReset = useCallback(() => {
    countdownRef.current.reset();
  }, []);

  return (
    <>
      <CountDown
        time={10 * 1000}
        interval={35}
        format="ss:SSS"
        ref={countdownRef}
        autoStart={false}
        onEnd={handleTimerEnd}
      />
      <br />
      <br />
      <button onClick={handleTimerStart} type="button">
        开始
      </button>
      <button onClick={handleTimerPause} type="button">
        暂停
      </button>
      <button onClick={handleTimerReset} type="button">
        重置
      </button>

      <SyntaxHighlighter language="javascript" style={tomorrowNightEighties}>
        {`import React, { useCallback, useRef } from "react";
import CountDown from "rc-countdown-view";

export default () => {
  const countdownRef = useRef(null);

  const handleTimerEnd = useCallback(() => {
    console.log('倒计时结束！');
  }, []);

  const handleTimerStart = useCallback(() => {
    countdownRef.current.start();
  }, []);
  const handleTimerPause = useCallback(() => {
    countdownRef.current.pause();
  }, []);
  const handleTimerReset = useCallback(() => {
    countdownRef.current.reset();
  }, []);

  return (
    <>
      <CountDown
        time={10 * 1000}
        interval={35}
        format="ss:SSS"
        ref={countdownRef}
        autoStart={false}
        onEnd={handleTimerEnd}
      />
      <br/><br/>
      <button onClick={handleTimerStart} type="button">开始</button>
      <button onClick={handleTimerPause} type="button">暂停</button>
      <button onClick={handleTimerReset} type="button">重置</button>
    </>
  )
}`}
      </SyntaxHighlighter>
    </>
  );
};
