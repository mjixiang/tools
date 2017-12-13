export function formatNumer (n) {
  return n > 9 ? n : '0' + n
}

export function setStorage (key, value, type = 'localStorage') {
  window[type].setItem(key, typeof value === 'object' ? JSON.stringify(value) : value)
}

export function getStorage (key, type = 'localStorage') {
  var value = window[type].getItem(key)
  if (value) return JSON.parse(value)
  return value
}

export function copy (obj) {
  return typeof obj === 'object' ? JSON.parse(JSON.stringify(obj)) : obj
}

export function setSessionStorage (key, value) {
  setStorage(key, value, 'sessionStorage')
}

export function getSessionStorage (key) {
  return getStorage(key, 'sessionStorage')
}

export function urlQueryString (url, params) {
  let querys = []
  for (let key in params) {
    let value = params[key]
    if (value !== undefined && value !== null) querys.push(`${key}=${value}`)
  }
  return url + (querys.length ? '?' + querys.join('&') : '')
}

export function setDocumentTitle (title, subtitle = '') {
  if (subtitle && (title + '').indexOf(subtitle) === -1) {
    title = `${title}-${subtitle}`
  }
  document.title = title
  if (/ip(hone|od|ad)/i.test(navigator.userAgent)) {
    var iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = '/favicon.ico'
    iframe.onload = () => {
      setTimeout(() => {
        document.body.removeChild(iframe)
      }, 0)
    }
    document.body.appendChild(iframe)
  }
}
