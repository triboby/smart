/**
 * Memoization
 * 
 * Memoization 是一种将函数返回值缓存起来的方法，在 Lisp, Ruby, Perl, Python 等语言中使用非常广泛。
 * 随着 Ajax 的兴起，客户端对服务器的请求越来越密集（经典如 autocomplete），
 * 如果有一个良好的缓存机制，那么客户端 JavaScript 程序的效率的提升是显而易见的。
 * 
 * @param {Function} func 需要执行的函数
 * @param {Function} hasher 散列函数
 */
export default function memo(func, hasher){
  const cache = {};
  return function x(...args){
    let key = '' + (hasher ? hasher(...args):args[0]);
    if(!cache[key]){
      cache[key] = func(...args);
    }
    return cache[key];
  };
}