import partial from "./partial";

let x = (a,b,c) => a*b*c;

test('partial should ok', () => {
  let y = partial(x, 3);
  expect(y(1,2)).toBe(6);
});
