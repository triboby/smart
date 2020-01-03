
/**
 * curry function
 * 
 * f(n, m, o) --> f'(n)(m)(o)
 * 
 * source: https://github.com/learn-javascript-courses/es6-curry
 * 
 * @param {*} f 
 * @param {*} arr 
 */

const curry = (
  f, arr = []
) => (...args) => (
  a => a.length === f.length ?
    f(...a) :
    curry(f, a)
)([...arr, ...args]);

export default curry;