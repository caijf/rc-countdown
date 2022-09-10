import React, { forwardRef, useState, useEffect, useImperativeHandle, useRef } from "react";
import CountDownPro from "countdown-pro";

export type ActionType = {
  start: () => void;
  pause: () => void;
  reset: () => void;
}

export interface CountDownProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onChange'> {
  time: number;
  interval?: number;
  format?: string | ((timestamp: number, formatRes: ReturnType<typeof CountDownPro.parseTimeData>) => string);
  autoStart?: boolean;
  onChange?: (formatTime: string) => void;
  onEnd?: () => void;
}

const CountDown = forwardRef<ActionType, CountDownProps>(({
  time = 0,
  interval = 1000,
  format = 'HH:mm:ss',
  autoStart = true,
  onChange,
  onEnd,
  ...restProps
}, ref) => {
  const formatTime = (timestamp: number) => {
    if (typeof format === 'string') {
      return CountDownPro.format(timestamp, format);
    } else if (format instanceof Function) {
      return format(timestamp, CountDownPro.parseTimeData(timestamp));
    } else {
      return timestamp + '';
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
  }
  const handleEnd = () => {
    onEnd?.();
  }

  const countdownRef = useRef<InstanceType<typeof CountDownPro>>();
  if (!countdownRef.current) {
    countdownRef.current = new CountDownPro({
      time,
      interval,
      onChange: handleChange,
      onEnd: handleEnd
    });
  }

  useImperativeHandle(ref, () => ({
    get start() {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return countdownRef.current!.start.bind(countdownRef.current);
    },
    get pause() {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return countdownRef.current!.pause.bind(countdownRef.current);
    },
    get reset() {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return countdownRef.current!.reset.bind(countdownRef.current);
    }
  }), []);

  useEffect(() => {
    if (countdownRef.current) {
      countdownRef.current.options.time = time;
      countdownRef.current.options.interval = interval;
    }
  }, [time, interval]);

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

  return <span {...restProps}>{timeState}</span>
});

CountDown.displayName = 'CountDown';

export default CountDown;