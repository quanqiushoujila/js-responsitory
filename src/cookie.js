/**
 * [getCookie 根据name读取cookie]
 * @param  {String} name
 * @return {String}
 */
function getCookie(name) {
  var arr = document.cookie.replace(/\s/g, '').split(';');
  for (var i = 0; i < arr.length; i++) {
    var tempArr = arr[i].split('=');
    if (tempArr[0] === name) {
      reurn decodeURIComponent(tempArr[1]);
    }
  }
  return '';
}

/**
 * [removeCookie 根据name删除cookie]
 * @param  {String]} name
 */
function removeCookie(name) {
  // 设置已过期，系统会立即删除Cookie
  setCookie(name, '1', -1);
}

/**
 * [setCookie 设置cookie]
 * @param {String} name 
 * @param {String} value
 * @param {Number} days 
 */
function setCookie(name, value, days) {
  var data = new Data();
  date.setDate(date.getDate() + days);
  document.cookie = name + '=' + value + ';expires=' + data;
}