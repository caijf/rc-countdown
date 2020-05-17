import React, { useCallback } from "react";
import CountDown from "rc-countdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import tomorrowNightEighties from "react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-eighties";

export default () => {
  const handleTimerEnd = useCallback(() => {
    console.log("活动已结束！");
  }, []);

  return (
    <>
      距活动结束还剩{" "}
      <CountDown
        time={2 * 24 * 60 * 60 * 1000}
        format="DD 天 HH 小时 mm 分 ss 秒"
        onEnd={handleTimerEnd}
      />
      <SyntaxHighlighter language="javascript" style={tomorrowNightEighties}>
        {`import React, { useCallback } from "react";
import CountDown from "rc-countdown";

export default () => {
  const handleTimerEnd = useCallback(() => {
    console.log('活动已结束！');
  }, []);

  return (
    <>
      距活动结束还剩 <CountDown time={2 * 24 * 60 * 60 * 1000} format="DD 天 HH 小时 mm 分 ss 秒" onEnd={handleTimerEnd} />
    </>
  )
}`}
      </SyntaxHighlighter>
    </>
  );
};
