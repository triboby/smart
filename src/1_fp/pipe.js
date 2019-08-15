/**
 * pipe Function from left to right 
 * pipe(a,b,c) = (...args) => c(b(a(...args)));
 * 
 * 代数计算, 符合阅读习惯, 从左到右.
 * 
 * @param  {Array[Function]} funcs 
 */
export default function pipe(...funcs){
  if(funcs.length === 0){
    return arg => arg;
  }
  return funcs.reduce((a, b) => (...args) => b(a(...args)));
}


/**
  const trace = label => value => {
    console.log(`${ label }: ${ value }`);
    return value;
  };
  const g = n => n + 1;
  const f = n => n * 2;

  const h = pipe(
    g,
    trace('after g'),
    f,
    trace('after f'),
  );

  h(20);
  
  after g: 21
  after f: 42
*/