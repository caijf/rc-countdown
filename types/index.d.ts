import React from 'react';

interface CountDownProps {
  time: number;
  interval?: number;
  format?: string;
  autoStart?: boolean;
  onChange?: (time: any) => void;
  onEnd?: () => void;
  ref?: React.Ref<any>
}

declare const CountDown: React.FC<CountDownProps>;

export default CountDown;