/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React, { act } from 'react';
import { render } from '@testing-library/react';
import CountDown from '../src';

describe('CountDown', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should de defined', () => {
    expect(CountDown).toBeDefined();
  });

  it('work', async () => {
    const changeFn = jest.fn();
    const endFn = jest.fn();

    const component = render(
      <CountDown
        time={60 * 1000}
        interval={1000}
        format={'HH:mm:ss'}
        onChange={changeFn}
        onEnd={endFn}
      />
    );

    expect(component.container).toContainHTML('<span>00:01:00</span>');
    expect(changeFn).toHaveBeenCalledTimes(0);
    expect(endFn).toHaveBeenCalledTimes(0);

    await act(async () => {
      jest.advanceTimersByTime(30 * 1000);
    });

    expect(component.container).toContainHTML('<span>00:00:30</span>');
    expect(changeFn).toHaveBeenCalledTimes(30);
    expect(endFn).toHaveBeenCalledTimes(0);

    await act(async () => {
      jest.advanceTimersByTime(30 * 1000);
    });

    expect(component.container).toContainHTML('<span>00:00:00</span>');
    expect(changeFn).toHaveBeenCalledTimes(60);
    expect(endFn).toHaveBeenCalledTimes(1);
  });

  it('unmount', async () => {
    const changeFn = jest.fn();
    const endFn = jest.fn();

    const component = render(
      <CountDown
        time={60 * 1000}
        interval={1000}
        format={'HH:mm:ss'}
        onChange={changeFn}
        onEnd={endFn}
      />
    );

    expect(component.container).toContainHTML('<span>00:01:00</span>');
    expect(changeFn).toHaveBeenCalledTimes(0);
    expect(endFn).toHaveBeenCalledTimes(0);

    await act(async () => {
      jest.advanceTimersByTime(30 * 1000);
    });

    expect(component.container).toContainHTML('<span>00:00:30</span>');
    expect(changeFn).toHaveBeenCalledTimes(30);
    expect(endFn).toHaveBeenCalledTimes(0);

    await act(async () => {
      component.unmount();
    });

    expect(component.container).toBeEmptyDOMElement();
    expect(changeFn).toHaveBeenCalledTimes(30);
    expect(endFn).toHaveBeenCalledTimes(0);
  });

  it('autoStart=false', async () => {
    const actionRef = { current: undefined };
    const changeFn = jest.fn();
    const endFn = jest.fn();

    const component = render(
      <CountDown
        time={60 * 1000}
        interval={1000}
        format={'HH:mm:ss'}
        onChange={changeFn}
        onEnd={endFn}
        autoStart={false}
        actionRef={actionRef}
      />
    );

    expect(component.container).toContainHTML('<span>00:01:00</span>');
    expect(changeFn).toHaveBeenCalledTimes(0);
    expect(endFn).toHaveBeenCalledTimes(0);

    await act(async () => {
      jest.advanceTimersByTime(30 * 1000);
    });

    expect(component.container).toContainHTML('<span>00:01:00</span>');
    expect(changeFn).toHaveBeenCalledTimes(0);
    expect(endFn).toHaveBeenCalledTimes(0);

    await act(async () => {
      // @ts-ignore
      actionRef.current?.start();
      jest.advanceTimersByTime(30 * 1000);
    });

    expect(component.container).toContainHTML('<span>00:00:30</span>');
    expect(changeFn).toHaveBeenCalledTimes(30);
    expect(endFn).toHaveBeenCalledTimes(0);
  });

  it('update `time` `interval` `format` effect', async () => {
    const actionRef = { current: undefined };
    const changeFn = jest.fn();
    const endFn = jest.fn();

    const component = render(
      <CountDown
        time={60 * 1000}
        interval={1000}
        format={'HH:mm:ss'}
        onChange={changeFn}
        onEnd={endFn}
        actionRef={actionRef}
      />
    );

    expect(component.container).toContainHTML('<span>00:01:00</span>');
    expect(changeFn).toHaveBeenCalledTimes(0);
    expect(endFn).toHaveBeenCalledTimes(0);

    await act(async () => {
      component.rerender(
        <CountDown
          time={60 * 1000}
          interval={1000}
          format={'mm:ss'}
          onChange={changeFn}
          onEnd={endFn}
          actionRef={actionRef}
        />
      );
      jest.advanceTimersByTime(30 * 1000);
    });

    expect(component.container).toContainHTML('<span>00:00:30</span>');
    expect(changeFn).toHaveBeenCalledTimes(30);
    expect(endFn).toHaveBeenCalledTimes(0);

    await act(async () => {
      component.rerender(
        <CountDown
          time={60 * 1000}
          interval={1000}
          format={'mm:ss'}
          onChange={changeFn}
          onEnd={endFn}
          actionRef={actionRef}
        />
      );
      // @ts-ignore
      actionRef.current?.restart();
    });

    expect(component.container).toContainHTML('<span>01:00</span>');
    expect(changeFn).toHaveBeenCalledTimes(31);
    expect(endFn).toHaveBeenCalledTimes(0);

    await act(async () => {
      jest.advanceTimersByTime(60 * 1000);
    });

    expect(component.container).toContainHTML('<span>00:00</span>');
    expect(changeFn).toHaveBeenCalledTimes(91);
    expect(endFn).toHaveBeenCalledTimes(1);
  });

  it('snapshot', async () => {
    const component = render(<CountDown time={60 * 1000} className="test" autoStart={false} />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
