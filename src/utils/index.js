/**
 * 将秒数转为时间格式
 *
 * @format
 * @param {number} second
 */

export function formatTime(second) {
  let dd, hh, mm, ss

  if (!second || second < 0) {
    return
  }

  dd = (second / (24 * 3600)) | 0
  second = Math.round(second) - dd * 24 * 3600
  hh = (second / 3600) | 0
  second = Math.round(second) - hh * 3600
  mm = (second / 60) | 0
  ss = Math.round(second) - mm * 60

  if (Math.round(dd) < 10) {
    dd = dd > 0 ? '0' + dd : ''
  }

  if (Math.round(hh) < 10) {
    hh = '0' + hh
  }

  if (Math.round(mm) < 10) {
    mm = '0' + mm
  }

  if (Math.round(ss) < 10) {
    ss = '0' + ss
  }

  return hh == '00' ? mm + ':' + ss : hh + ':' + mm + ':' + ss
}

/**
 * 异常处理
 * @param {boolean} condition
 * @param {string} msg
 */
export function assert(condition, msg) {
  if (!condition) throw new Error(`[Apior] ${msg}`)
}
