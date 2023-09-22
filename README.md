# rc-countdown-view

[![npm][npm]][npm-url] ![GitHub](https://img.shields.io/github/license/caijf/rc-countdown-view.svg)

一个简单的 `React` 倒计时组件。

[查看示例][site]

## 安装

```shell
npm install rc-countdown-view
```

```shell
yarn add rc-countdown-view
```

```shell
pnpm add rc-countdown-view
```

## 示例

```javascript
import CountDown from 'rc-countdown-view';

export default () => {
  return <CountDown time={10 * 60 * 60 * 1000} />;
};
```

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

[site]: https://caijf.github.io/rc-countdown-view/index.html
[npm]: https://img.shields.io/npm/v/rc-countdown-view.svg
[npm-url]: https://npmjs.com/package/rc-countdown-view
