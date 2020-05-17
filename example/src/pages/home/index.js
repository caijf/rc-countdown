import React from "react";
import Demo1 from "~/components/Demo1";
import Demo2 from "~/components/Demo2";
import Demo3 from "~/components/Demo3";
import Demo4 from "~/components/Demo4";

export default () => {
  return (
    <div>
      <h2>基本用法</h2>
      <Demo1 />
      <h2>手动控制</h2>
      <Demo4 />
      <h2>自定义格式</h2>
      <h3>xx 秒后自动返回</h3>
      <Demo2 />
      <h3>活动倒计时</h3>
      <Demo3 />
    </div>
  );
};
