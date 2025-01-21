import React, { useEffect, useImperativeHandle, useRef } from 'react';
import CountDownPro, { Options } from 'countdown-pro';
import { useLatest, useSafeState, useUpdateEffect } from 'rc-hooks';

type CountDownInstanceType = InstanceType<typeof CountDownPro>;

export type ActionType = CountDownInstanceType;

type FormatType =
  | string
  | ((timestamp: number, format: ReturnType<typeof CountDownPro.parseTimeData>) => string);

function formatTime(timestamp: number, format?: FormatType) {
  if (typeof format === 'string') {
    return CountDownPro.format(timestamp, format);
  } else if (format instanceof Function) {
    return format(timestamp, CountDownPro.parseTimeData(timestamp));
  } else {
    return '' + timestamp;
  }
}

export interface CountDownProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onChange'>,
    Pick<Options, 'time' | 'interval' | 'onEnd'> {
  format?: FormatType;
  autoStart?: boolean;
  onChange?: (formatTime: string) => void;
  actionRef?: React.MutableRefObject<ActionType | undefined>;
}

const CountDown: React.FC<CountDownProps> = ({
  time = 0,
  interval = 1000,
  format = 'HH:mm:ss',
  autoStart = true,
  onChange,
  onEnd,
  actionRef,
  ...restProps
}) => {
  const [timeState, setTimeState] = useSafeState(() => formatTime(time, format));
  const changeLatest = useLatest(onChange);
  const endLatest = useLatest(onEnd);
  const formatLatest = useLatest(format);

  const countdownRef = useRef<CountDownInstanceType | null>(null);
  if (!countdownRef.current) {
    countdownRef.current = new CountDownPro({
      time,
      interval,
      onChange(currentTime) {
        const fmtTime = formatTime(currentTime, formatLatest.current);
        setTimeState(fmtTime);
        changeLatest.current?.(fmtTime);
      },
      onEnd() {
        endLatest.current?.();
      }
    });
  }

  useImperativeHandle(actionRef, () => countdownRef.current!, []);

  useEffect(() => {
    if (autoStart) {
      countdownRef.current?.start();
    }

    return () => {
      countdownRef.current?.pause();
      countdownRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useUpdateEffect(() => {
    countdownRef.current?.updateOptions({ time, interval });
  }, [time, interval]);

  return <span {...restProps}>{timeState}</span>;
};

export default CountDown;
