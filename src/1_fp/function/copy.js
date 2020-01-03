const is = (obj, type) => {
  const clas =  Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  return obj !== undefined && obj !== null && clas === type;
}


/**
 * 浅拷贝
 */
export const shallowCopy = (target, handler) => {
  const source = Array.isArray(target) ? [] : {};
  
  for(let i in target){
    if(target.hasOwnProperty(i)){
      source[i] = (handler && is(handler, 'function')) ? handler(target[i]) : target[i];
    }
  }

  return source;
};

/* ES5 */
export const shallowCopy2 = (target) => {
  return Object.assign({}, target)
};

/* ES6 */
export const shallowCopy3 = (target) => {
  return {
    ...target
  }
};



/**
 * 深拷贝
 * 
 * 缺陷: 比如拷贝Symbol、拷贝函数、循环引用
 */
export const deepCopyJson = (source) => {
  return JSON.parse(JSON.stringify(source));
}


export const deepCopy = (source) => {
  if(typeof source === 'object'){
    return shallowCopy(source, deepCopy);
  }else{
    return source;
  }
};