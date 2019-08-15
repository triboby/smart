import { delay, debounce, throttle } from './delay';

jest.useFakeTimers();

test('delay should be called once', () => {
  const callback = jest.fn();
  let dx = delay(callback);
  dx();

  jest.runAllTimers();

  expect(callback).toHaveBeenCalledTimes(1);
});

test('throttle should be called ', () => {
  const callback = jest.fn();
  let dx = throttle(callback,10);
  for(let x of new Array(10).fill(1).map((_,i) => i*3)){
    setTimeout(()=>dx(), x);
  }

  jest.advanceTimersByTime(500);

  expect(callback).toHaveBeenCalledTimes(3);
});

test('debounce should be called ', () => {
  const callback = jest.fn();
  let dx = debounce(callback,10);
  for(let x of new Array(10).fill(1).map((_,i) => i*3)){
    setTimeout(()=>dx(), x);
  }

  jest.advanceTimersByTime(500);

  expect(callback).toHaveBeenCalledTimes(1);
});