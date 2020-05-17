import React from "react";
import CountDown from "rc-countdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import tomorrowNightEighties from "react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-eighties";

export default () => {
  return (
    <>
      <CountDown time={10 * 60 * 60 * 1000} />

      <SyntaxHighlighter language="javascript" style={tomorrowNightEighties}>
        {`import React from "react";
import CountDown from "rc-countdown";

export default () => <CountDown time={10 * 60 * 60 * 1000} />`}
      </SyntaxHighlighter>
    </>
  );
};
