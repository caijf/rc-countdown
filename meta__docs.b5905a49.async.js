"use strict";(self.webpackChunkrc_countdown_view=self.webpackChunkrc_countdown_view||[]).push([[904],{90280:function(I,t,n){var r;n.r(t),n.d(t,{demos:function(){return w}});var f=n(90228),u=n.n(f),R=n(87999),E=n.n(R),o=n(75271),h=n(47920),_=n(58288),P=n(56038),w={"docs-demo-basic":{component:o.memo(o.lazy(function(){return n.e(433).then(n.bind(n,33908))})),asset:{type:"BLOCK",id:"docs-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(65153).Z},react:{type:"NPM",value:"18.3.1"},"rc-countdown-view":{type:"NPM",value:"3.0.0"}},entry:"index.tsx"},context:{react:r||(r=n.t(o,2)),"rc-countdown-view":_},renderOpts:{compile:function(){var d=E()(u()().mark(function l(){var a,s=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(277).then(n.bind(n,32277));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,s));case 3:case"end":return e.stop()}},l)}));function c(){return d.apply(this,arguments)}return c}()}},"docs-demo-format":{component:o.memo(o.lazy(function(){return n.e(433).then(n.bind(n,36350))})),asset:{type:"BLOCK",id:"docs-demo-format",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(19601).Z},react:{type:"NPM",value:"18.3.1"},"rc-countdown-view":{type:"NPM",value:"3.0.0"}},entry:"index.tsx"},context:{react:r||(r=n.t(o,2)),"rc-countdown-view":_},renderOpts:{compile:function(){var d=E()(u()().mark(function l(){var a,s=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(277).then(n.bind(n,32277));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,s));case 3:case"end":return e.stop()}},l)}));function c(){return d.apply(this,arguments)}return c}()}},"docs-demo-control":{component:o.memo(o.lazy(function(){return n.e(433).then(n.bind(n,66761))})),asset:{type:"BLOCK",id:"docs-demo-control",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(31745).Z},react:{type:"NPM",value:"18.3.1"},"rc-countdown-view":{type:"NPM",value:"3.0.0"}},entry:"index.tsx"},context:{react:r||(r=n.t(o,2)),"rc-countdown-view":_},renderOpts:{compile:function(){var d=E()(u()().mark(function l(){var a,s=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(277).then(n.bind(n,32277));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,s));case 3:case"end":return e.stop()}},l)}));function c(){return d.apply(this,arguments)}return c}()}},"docs-demo-mutate":{component:o.memo(o.lazy(function(){return n.e(433).then(n.bind(n,95289))})),asset:{type:"BLOCK",id:"docs-demo-mutate",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(60021).Z},react:{type:"NPM",value:"18.3.1"},"rc-countdown-view":{type:"NPM",value:"3.0.0"},"rc-hooks":{type:"NPM",value:"3.0.16"}},entry:"index.tsx"},context:{react:r||(r=n.t(o,2)),"rc-countdown-view":_,"rc-hooks":P},renderOpts:{compile:function(){var d=E()(u()().mark(function l(){var a,s=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(277).then(n.bind(n,32277));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,s));case 3:case"end":return e.stop()}},l)}));function c(){return d.apply(this,arguments)}return c}()}}}},58288:function(I,t,n){n.r(t);var r=n(26068),f=n.n(r),u=n(48305),R=n.n(u),E=n(67825),o=n.n(E),h=n(75271),_=n(60954),P=n(48432),w=n(99732),d=n(7281),c=n(52676),l=["time","interval","format","autoStart","onChange","onEnd","actionRef"];function a(i,e){return typeof e=="string"?_.Z.format(i,e):e instanceof Function?e(i,_.Z.parseTimeData(i)):""+i}var s=function(e){var C=e.time,x=C===void 0?0:C,M=e.interval,D=M===void 0?1e3:M,O=e.format,b=O===void 0?"HH:mm:ss":O,T=e.autoStart,B=T===void 0?!0:T,K=e.onChange,W=e.onEnd,U=e.actionRef,$=o()(e,l),j=(0,P.Z)(function(){return a(x,b)}),A=R()(j,2),Z=A[0],H=A[1],g=(0,w.Z)(K),L=(0,w.Z)(W),N=(0,w.Z)(b),p=(0,h.useRef)(null);return p.current||(p.current=new _.Z({time:x,interval:D,adjustInterval:D*10,onChange:function(v){var y,S=a(v,N.current);H(S),(y=g.current)===null||y===void 0||y.call(g,S)},onEnd:function(){var v;(v=L.current)===null||v===void 0||v.call(L)}})),(0,h.useImperativeHandle)(U,function(){return p.current},[]),(0,h.useEffect)(function(){if(B){var m;(m=p.current)===null||m===void 0||m.start()}return function(){var v;(v=p.current)===null||v===void 0||v.pause(),p.current=null}},[]),(0,d.Z)(function(){var m;(m=p.current)===null||m===void 0||m.updateOptions({time:x,interval:D})},[x,D]),(0,c.jsx)("span",f()(f()({},$),{},{children:Z}))};t.default=s},98921:function(I,t,n){n.r(t),n.d(t,{texts:function(){return f}});var r=n(47920);const f=[{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"\u4E00\u4E2A\u7B80\u5355\u7684 ",paraId:1,tocIndex:0},{value:"React",paraId:1,tocIndex:0},{value:" \u5012\u8BA1\u65F6\u7EC4\u4EF6\u3002",paraId:1,tocIndex:0},{value:"\u9002\u7528\u4E8E\u9A8C\u8BC1\u7801\u3001\u6D3B\u52A8\u5012\u8BA1\u65F6\u3001xx \u79D2\u540E\u81EA\u52A8\u8DF3\u8F6C\u9875\u9762\u7B49\u573A\u666F\u3002",paraId:2,tocIndex:3},{value:"\u56E0\u4E3A\u7A0B\u5E8F\u6267\u884C\u6709\u5EF6\u8FDF\uFF0C\u6240\u4EE5\u65F6\u95F4\u95F4\u9694\u4E0D\u4E00\u5B9A\u51C6\u786E\u3002\u95F4\u9694\u8D8A\u5C0F\uFF0C\u8FD0\u884C\u65F6\u95F4\u8D8A\u4E45\uFF0C\u5EF6\u8FDF\u8D8A\u9AD8\u3002",paraId:3},{value:"\u9664\u4E86\u4EE5\u4E0B\u5C5E\u6027\uFF0C\u8FD8\u652F\u6301 ",paraId:4,tocIndex:6},{value:"span",paraId:4,tocIndex:6},{value:" \u6807\u7B7E\u7684\u5176\u4ED6\u5C5E\u6027\u3002",paraId:4,tocIndex:6},{value:"\u53C2\u6570",paraId:5,tocIndex:6},{value:"\u8BF4\u660E",paraId:5,tocIndex:6},{value:"\u7C7B\u578B",paraId:5,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:6},{value:"time",paraId:5,tocIndex:6},{value:"\u5012\u8BA1\u65F6\uFF0C\u5355\u4F4D\u6BEB\u79D2",paraId:5,tocIndex:6},{value:"number",paraId:5,tocIndex:6},{value:"0",paraId:5,tocIndex:6},{value:"interval",paraId:5,tocIndex:6},{value:"\u65F6\u95F4\u95F4\u9694\uFF0C\u5355\u4F4D\u6BEB\u79D2",paraId:5,tocIndex:6},{value:"number",paraId:5,tocIndex:6},{value:"1000",paraId:5,tocIndex:6},{value:"format",paraId:5,tocIndex:6},{value:"\u683C\u5F0F\u5316\u3002",paraId:5,tocIndex:6},{value:"\u5982\u679C\u4F20\u5165 ",paraId:5,tocIndex:6},{value:"string",paraId:5,tocIndex:6},{value:" \u5C06\u81EA\u52A8\u8F6C\u6362 ",paraId:5,tocIndex:6},{value:"DD-\u65E5\uFF0CHH-\u65F6\uFF0Cmm-\u5206\uFF0Css-\u79D2\uFF0CSSS-\u6BEB\u79D2",paraId:5,tocIndex:6},{value:" \u3002",paraId:5,tocIndex:6},{value:"\u5982\u679C\u4F20\u5165 ",paraId:5,tocIndex:6},{value:"function",paraId:5,tocIndex:6},{value:"\uFF0C\u5FC5\u987B\u8981\u6709\u8FD4\u56DE\u503C ",paraId:5,tocIndex:6},{value:"string",paraId:5,tocIndex:6},{value:" \u4E14\u4E0D\u4F1A\u81EA\u52A8\u8F6C\u6362\u3002",paraId:5,tocIndex:6},{value:"string | (timestamp: number, formatRes: { days: number, hours: number, minutes: number, seconds: number, milliseconds: number }) => void",paraId:5,tocIndex:6},{value:"HH:mm:ss",paraId:5,tocIndex:6},{value:"autoStart",paraId:5,tocIndex:6},{value:"\u81EA\u52A8\u5F00\u59CB",paraId:5,tocIndex:6},{value:"boolean",paraId:5,tocIndex:6},{value:"true",paraId:5,tocIndex:6},{value:"onChange",paraId:5,tocIndex:6},{value:"\u65F6\u95F4\u53D8\u5316\u65F6\u89E6\u53D1\uFF0C\u53C2\u6570\u662F ",paraId:5,tocIndex:6},{value:"format",paraId:5,tocIndex:6},{value:" \u7684\u8FD4\u56DE\u503C\u3002",paraId:5,tocIndex:6},{value:"(formatTime: string) => void",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"onEnd",paraId:5,tocIndex:6},{value:"\u5012\u8BA1\u65F6\u7ED3\u675F\u65F6\u89E6\u53D1",paraId:5,tocIndex:6},{value:"() => void",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"actionRef",paraId:5,tocIndex:6},{value:"\u5E38\u7528\u64CD\u4F5C\uFF0C\u5F00\u59CB/\u6682\u505C/\u91CD\u7F6E",paraId:5,tocIndex:6},{value:"MutableRefObject<ActionType>",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6}]},65153:function(I,t){t.Z=`import React from 'react';
import CountDown from 'rc-countdown-view';

function Demo() {
  return <CountDown time={8 * 60 * 60 * 1000} />;
}

export default Demo;
`},31745:function(I,t){t.Z=`import React, { useRef } from 'react';
import CountDown, { ActionType } from 'rc-countdown-view';

function Demo() {
  const actionRef = useRef<ActionType>();

  return (
    <div>
      <CountDown
        time={10 * 1000}
        interval={35}
        format="ss:SSS"
        onEnd={() => console.log('\u5012\u8BA1\u65F6\u7ED3\u675F\uFF01')}
        autoStart={false}
        actionRef={actionRef}
      />
      <br />
      <button onClick={() => actionRef.current?.start()}>\u5F00\u59CB</button>
      <button onClick={() => actionRef.current?.pause()}>\u6682\u505C</button>
      <button onClick={() => actionRef.current?.reset()}>\u91CD\u7F6E</button>
    </div>
  );
}

export default Demo;
`},19601:function(I,t){t.Z=`import React from 'react';
import CountDown from 'rc-countdown-view';

function Demo() {
  return (
    <div>
      <CountDown time={2 * 24 * 60 * 60 * 1000} format="ss \u79D2" />
      <br />
      <CountDown time={2 * 24 * 60 * 60 * 1000} format="ss s" />
      <br />
      <CountDown time={2 * 24 * 60 * 60 * 1000} format="DD \u5929 HH \u65F6 mm \u5206 ss \u79D2" />
      <br />
      <CountDown time={2 * 24 * 60 * 60 * 1000} format="HH \u65F6 mm \u5206 ss \u79D2" />
      <br />
      <CountDown
        time={2 * 24 * 60 * 60 * 1000}
        interval={100}
        format={(t, formatRes) =>
          \`\u8DDD\u6D3B\u52A8\u7ED3\u675F\u8FD8\u5269 \${formatRes.days} \u5929 \${formatRes.hours} \u65F6 \${formatRes.minutes} \u5206 \${
            formatRes.seconds
          }.\${formatRes.milliseconds / 100} \u79D2\`
        }
      />
      <br />
    </div>
  );
}

export default Demo;
`},60021:function(I,t){t.Z=`import React, { useEffect, useRef } from 'react';
import CountDown, { ActionType } from 'rc-countdown-view';
import { useSetState } from 'rc-hooks';

function Demo() {
  const countdownActionRef = useRef<ActionType>();
  const [state, setState] = useSetState({
    inputTime: 60 * 60,
    inputInterval: 1,
    inputFormat: 'HH:mm:ss',

    time: 60 * 60 * 1000,
    interval: 1000,
    format: 'HH:mm:ss'
  });

  useEffect(() => {
    countdownActionRef.current?.restart();
  }, [state.time]);

  // console.log('state:', state);

  return (
    <div>
      <div>
        <label>
          time:{' '}
          <input
            type="number"
            min="0"
            step="1"
            value={state.inputTime}
            onChange={(e) => {
              setState({
                inputTime: Number(e.target.value)
              });
            }}
            style={{ width: 100 }}
          />
        </label>
        \u79D2
      </div>
      <div>
        <label>
          interval:{' '}
          <input
            type="number"
            min="0"
            step="1"
            value={state.inputInterval}
            onChange={(e) => {
              setState({
                inputInterval: Number(e.target.value)
              });
            }}
            style={{ width: 100 }}
          />
        </label>
        \u79D2
      </div>
      <div>
        <label>
          format:{' '}
          <input
            type="input"
            value={state.inputFormat}
            onChange={(e) => {
              setState({
                inputFormat: e.target.value
              });
            }}
            style={{ width: 100 }}
          />
        </label>
      </div>
      <div>
        <button
          onClick={() => {
            setState((s) => ({
              time: s.inputTime * 1000,
              interval: s.inputInterval * 1000,
              format: s.inputFormat
            }));
          }}
        >
          \u786E\u5B9A\u4FEE\u6539\u5E76\u91CD\u65B0\u8FD0\u884C
        </button>
      </div>
      <div>
        <CountDown
          time={state.time}
          interval={state.interval}
          format={state.format}
          actionRef={countdownActionRef}
        />
      </div>
    </div>
  );
}

export default Demo;
`}}]);
