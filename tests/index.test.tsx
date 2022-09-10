import React from 'react';
import renderer from 'react-test-renderer';
import CountDown from '../src';

describe('CountDown', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should de defined', () => {
    expect(CountDown).toBeDefined();
  });

  it('snapshot', async () => {
    const component = renderer.create(<CountDown time={60 * 1000} className='test' autoStart={false} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});