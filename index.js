
/**
 *
 * @export
 * @param {any} time 输入需要转化的时间参数
 * @param {any} format 需要转化的格式
 * @returns 返回处理后的时间格式
 */
export function dateFormat (time, format) {
  if (!time) return null
  var date = new Date(time)
  var o = {
    'M+': date.getMonth() + 1, // month
    'd+': date.getDate(), // day
    'H+': date.getHours(), // hour
    'm+': date.getMinutes(), // minute
    's+': date.getSeconds(), // second
    'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
    'S': date.getMilliseconds() // millisecond
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  return format
}

/**
 *
 *  用于阿拉伯数字转换成对应的中文数字
 *
 * @export
 * @param {any} val
 * @returns
 */
export function num (val) {
  if (!val) return

  const arr = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
  return arr[val - 1]
}

