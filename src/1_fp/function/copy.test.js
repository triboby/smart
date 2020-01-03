import {
  shallowCopy,
  shallowCopy2,
  shallowCopy3,
  deepCopyJson,
  deepCopy
} from "./copy";

const x = {
  'a': [1,2,3],
  'b': {
    a: 3,
    b: 3
  }
}

const ar = [1,2,3];

const y = {
  'a': 'z',
  [Symbol('z')]: 'd'
}

const z = {
  'a': 'z',
  'z': () => 'd'
}

var r = {
  'a': 'z'
}
r.r = r;

test('should shallowcopy right', () => {
  expect(shallowCopy(x)).toStrictEqual(x)
  expect(shallowCopy(ar)).toStrictEqual(ar)

  expect(shallowCopy(x)).toStrictEqual(x)
  expect(shallowCopy2(x)).toStrictEqual(x)
  expect(shallowCopy3(x)).toStrictEqual(x)
})

test('should deepCopyJson right', () => {
  let base = {};
  expect(deepCopyJson(x)).toStrictEqual(x)

  expect(deepCopy(z)).toStrictEqual(z)
  expect(deepCopy(y)).toStrictEqual(y)
  // expect(deepCopy(r)).toStrictEqual(r)
})
