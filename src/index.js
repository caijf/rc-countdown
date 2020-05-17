import React, { useState, useEffect, useMemo, useCallback } from "react";
import PropTypes from 'prop-types';
import CountDownPro from "countdown-pro";
import { format as formatUtil } from "countdown-pro/lib/util";

const CountDown = React.forwardRef(({
  time = 0,
  interval = 1000,
  format = 'HH:mm:ss',
  autoStart = true,
  onEnd = () => { },
  ...restProps
}, ref) => {
  const formatTime = useCallback((time) => {
    if (typeof format === 'string') {
      return formatUtil(time, format);
    } else if (typeof format === 'function') {
      return format(time);
    } else {
      return time;
    }
  }, [format]);
  const [timeState, setTimeState] = useState(() => formatTime(time));
  const countdown = useMemo(() => new CountDownPro({
    time,
    interval,
    format: formatTime,
    onChange: setTimeState,
    onEnd
  }), [time, interval, format]);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.start = countdown.start.bind(countdown);
      ref.current.pause = countdown.pause.bind(countdown);
      ref.current.reset = countdown.reset.bind(countdown);
    }
  }, [ref]);

  useEffect(() => {
    if (autoStart) {
      countdown.start();
    }

    return () => countdown.pause();
  }, []);

  return (
    <span ref={ref} {...restProps}>{timeState}</span>
  );
});

CountDown.propTypes = {
  time: PropTypes.number,
  interval: PropTypes.number,
  format: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  autoStart: PropTypes.bool,
  onEnd: PropTypes.func
}

export default CountDown;