import React, { forwardRef, useState, useEffect, useImperativeHandle, useRef } from 'react';
import CountDownPro, { Options } from 'countdown-pro';

export type ActionType = {
  start: () => void;
  pause: () => void;
  reset: () => void;
};

export interface CountDownProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onChange'>,
    Pick<Options, 'time' | 'interval' | 'onEnd'> {
  format?:
    | string
    | ((timestamp: number, formatRes: ReturnType<typeof CountDownPro.parseTimeData>) => string);
  autoStart?: boolean;
  onChange?: (formatTime: string) => void;
}

const CountDown = forwardRef<ActionType, CountDownProps>(
  (
    {
      time = 0,
      interval = 1000,
      format = 'HH:mm:ss',
      autoStart = true,
      onChange,
      onEnd,
      ...restProps
    },
    ref
  ) => {
    const formatTime = (timestamp: number) => {
      if (typeof format === 'string') {
        return CountDownPro.format(timestamp, format);
      } else if (format instanceof Function) {
        return format(timestamp, CountDownPro.parseTimeData(timestamp));
      } else {
        return '' + timestamp;
      }
    };
    const unmountedRef = useRef(false);
    const [timeState, setTimeState] = useState(() => formatTime(time));

    const handleChange = (currentTime: number) => {
      if (!unmountedRef.current) {
        const fmtTime = formatTime(currentTime);
        setTimeState(fmtTime);
        onChange?.(fmtTime);
      }
    };

    const countdownRef = useRef<InstanceType<typeof CountDownPro>>();
    if (!countdownRef.current) {
      countdownRef.current = new CountDownPro({
        time,
        interval,
        onChange: handleChange,
        onEnd
      });
    }

    useImperativeHandle(ref, () => countdownRef.current!, []);

    useEffect(() => {
      if (autoStart) {
        countdownRef.current?.start();
      }

      return () => {
        unmountedRef.current = true;
        countdownRef.current?.pause();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <span {...restProps}>{timeState}</span>;
  }
);

CountDown.displayName = 'CountDown';

export default CountDown;
