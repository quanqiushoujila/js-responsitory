/**
 * [getScrollTop 获取滚动条距顶部的距离]
 * @return {Number} 
 */
function getScrollTop() {
  return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
}

/**
 * [offset 获取一个元素的距离文档（document）的位置，类似JQ的offset()]
 * @param  {HTMLElement} ele
 * @return {{left: number, top: number}}
 */
function offset(ele) {
  var pos = {
    left: 0,
    top: 0
  }
  while (ele) {
    pos.left += ele.offsetLeft;
    pos.top += ele.offsetTop;
    ele = ele.offsetParent;
  }
  return pos;
}

/**
 * [setScrollTop 设置滚动条距离顶部的距离]
 * @param {Number} value 
 */
function setScrollTop (value) {
  window.scrollTop(0, value);
  return value;
}

/*---------------------------------------*/
var getScrollTop = require('./getScrollTop');
var setScrollTop = require('./setScrollTop');
var requestAnimFrame = (function () {
  return window.requestAnimationFrame || 
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnumationFrame || 
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();
/**
 * [scrollTo 在${duration}时间内，滚动条平滑滚动到${to}指定位置]
 * @param  {Number} to
 * @param  {Number} duration
 */
function scrollTo(to, duration) {
  if (duration < 0) {
    setScrollTop(to);
    return ;
  }
  var diff = to - getScrollTop();
  if (diff === 0) return ;
  var step = diff / duration * 10;
  requestAnimFrame(
    function () {
      if (Math.abs(step) > Math.abs(diff)) {
        setScrollTop(getScrollTop() + diff);
        return ;
      }
      setScrollTop(getScrollTop() + step);
      if (diff > 0 && getScrollTop() >= to || diff < 0 && getScrollTop() <= to) return ;

      scrollTop(to, duration - 16);
    }
  );
}