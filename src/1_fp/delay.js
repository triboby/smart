const DEFAULT_WAIT = 100;

export const delay = (func, wait = DEFAULT_WAIT) => 
  (...args) => setTimeout(func.bind(null, ...args), wait);

export const debounce = (func, wait = DEFAULT_WAIT) => {
  let tid;
  return (...args) => {
    if(tid){
      tid = clearTimeout(tid);
    }
    tid = setTimeout(func.bind(null, ...args), wait);
  }
}

export const throttle = (func, wait = DEFAULT_WAIT) => {
  let tid;
  return (...args) => {
    if(tid){
      return;
    }
    tid = setTimeout(() => {
      func(...args);
      tid = null;
    }, wait);
  }
}

 