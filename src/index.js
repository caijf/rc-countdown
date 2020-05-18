import React, { useState, useEffect, useMemo, useCallback, useImperativeHandle } from "react";
import PropTypes from 'prop-types';
import CountDownPro from "countdown-pro";
import { format as formatUtil } from "countdown-pro/lib/util";

const noop = () => { }

const CountDown = React.forwardRef(({
  time = 0,
  interval = 1000,
  format = 'HH:mm:ss',
  autoStart = true,
  onChange = noop,
  onEnd = noop
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
    onChange: time => {
      setTimeState(time);
      onChange(time);
    },
    onEnd
  }), [time, interval, format]);

  useImperativeHandle(ref, () => ({
    start: countdown.start.bind(countdown),
    pause: countdown.pause.bind(countdown),
    reset: countdown.reset.bind(countdown)
  }), [ref]);

  useEffect(() => {
    if (autoStart) {
      countdown.start();
    }

    return () => countdown.pause();
  }, []);

  return timeState
});

CountDown.propTypes = {
  time: PropTypes.number,
  interval: PropTypes.number,
  format: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  autoStart: PropTypes.bool,
  onChange: PropTypes.func,
  onEnd: PropTypes.func
}

export default CountDown;