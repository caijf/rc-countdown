# rc-countdown

一个简单的 `react` 倒计时组件。


## 安装

```shell
npm install rc-countdown
# or
yarn install rc-countdown
```


## 示例

```javascript
import React from 'react';
import CountDown from 'rc-countdown';

export default ()=>{
  return (
    <CountDown time={10 * 60 * 60 * 1000} />
  )
}
```


## API

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
time  | 倒计时，单位毫秒 | `number` | `0` |
interval  | 时间间隔，单位毫秒 | `number` | `1000` |
format  | 时间格式化。如果传入 `string`，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒。如果传入 `function`，必须要有返回值 `(timestamp)=>any` | `string` `function` | `HH:mm:ss` |
autoStart | 自动开始 | `boolean` | `true` |
onEnd | 倒计时结束时触发 | `function` | - |
ref | 当需要手动控制时，传入 `useRef` 将在 `ref.current` 扩展三个方法：`start` `pause` `reset` | - | - |

