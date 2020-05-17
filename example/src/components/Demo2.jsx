import React, { useCallback } from "react";
import CountDown from "rc-countdown-view";
import SyntaxHighlighter from "react-syntax-highlighter";
import tomorrowNightEighties from "react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-eighties";

export default () => {
  const format = useCallback(timestamp => timestamp / 1000, []);
  const handleTimerEnd = useCallback(() => {
    console.log("返回页面");
  }, []);

  return (
    <>
      <CountDown time={10 * 1000} format={format} onEnd={handleTimerEnd} />s
      后自动返回
      <SyntaxHighlighter language="javascript" style={tomorrowNightEighties}>
        {`import React, { useCallback } from "react";
import CountDown from "rc-countdown-view";

export default () => {
  const format = useCallback((timestamp) => timestamp / 1000, []);
  const handleTimerEnd = useCallback(() => {
    console.log('返回页面');
  }, []);

  return (
    <>
      <CountDown time={10 * 1000} format={format} onEnd={handleTimerEnd} />s 后自动返回
    </>
  )
}`}
      </SyntaxHighlighter>
    </>
  );
};
