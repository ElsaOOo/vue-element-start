/**
* 函数节流
* @param fn function callback
* @param  interval number 延迟执行时间
* @result
*/

export function throttle(fn, interval) {
  const _self = fn;
  let timer;
  let firstTime = true;

  return function () {
    const _me = this;
    const args = arguments;
    if (firstTime) {
      _self.apply(_me, args);
      firstTime = false;
    }
    if (timer) {
      return false;
    }
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      _self.apply(_me, args);
    }, interval || 500);
  };
}
