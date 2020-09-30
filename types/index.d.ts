import React from 'react';

interface CountDownProps {
  time: number;
  interval?: number;
  format?: string | ((timestamp: number) => any);
  autoStart?: boolean;
  onChange?: (time: any) => void;
  onEnd?: () => void;
  ref?: React.Ref<any>
}

declare const CountDown: React.FC<CountDownProps>;

export default CountDown;