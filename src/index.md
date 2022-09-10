# rc-countdown-view

一个简单倒计时 react 组件。

## 代码演示

### 基础用法

<code src="./demos/basic.tsx" />

### 自定义格式

适用于验证码、活动倒计时、xx 秒后自动跳转页面等场景。

<code src="./demos/format.tsx" />

因为程序执行有延迟，所以时间间隔不一定准确。间隔越小，运行时间越久，延迟越高。

### 手动控制

<code src="./demos/control.tsx" />

## API

除了以下属性，还支持 `span` 标签的其他属性。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| time | 倒计时，单位毫秒 | `number` | `0` |
| interval | 时间间隔，单位毫秒 | `number` | `1000` |
| format | 格式化。<br/>如果传入 `string` 将自动转换 `DD-日，HH-时，mm-分，ss-秒，SSS-毫秒` 。<br/>如果传入 `function`，必须要有返回值 `string` 且不会自动转换。 | `string \| (timestamp: number, formatRes: { days: number, hours: number, minutes: number, seconds: number, milliseconds: number }) => void` | `HH:mm:ss` |
| autoStart | 自动开始 | `boolean` | `true` |
| onChange | 时间变化时触发，参数是 `format` 的返回值。 | `(formatTime: string) => void` | - |
| onEnd | 倒计时结束时触发 | `() => void` | - |
| ref | 常用操作，开始/暂停/重置 | `ActionType` | - |

```typescript
type ActionType = {
  start: () => void;
  pause: () => void;
  reset: () => void;
};
```
