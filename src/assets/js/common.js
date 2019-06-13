/** @format */

// import hydra from './hydra-2.0.1.js'

// if (navigator && navigator.userAgent.indexOf('hydra') > -1) {
//     window.hydra = hydra
// }
// window.store = store

export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function removeClass(el, className) {
  if (!hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.splice(newClass.indexOf(className), 1)
  el.className = newClass.join(' ')
}

export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
