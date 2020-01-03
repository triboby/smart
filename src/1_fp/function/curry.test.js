import curry from './curry';

let f = (a,v,b,d) => a * v * b * d;
let cf = curry(f);

test('cf(1)(2)(3)(4) should equals to 24', () => {
  expect(cf(1)(2)(3)(4)).toBe(24);
})
