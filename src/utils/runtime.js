export const isIos = /ip(hone|od|ad)/i.test(navigator.userAgent)
export const isWechat = /micromessenger/i.test(navigator.userAgent)

let isIphone = /iphone/gi.test(window.navigator.userAgent)
// iPhone X、iPhone XS
let isIPhoneX = isIphone && (devicePixelRatio === 3 && screen.width === 375 && screen.height === 812)
// iPhone XS Max
let isIPhoneXSMax = isIphone && (devicePixelRatio === 3 && screen.width === 414 && screen.height === 896)
// iPhone XR
let isIPhoneXR = isIphone && (devicePixelRatio === 2 && screen.width === 414 && screen.height === 896)

export const isNeedAdapt = isIPhoneX || isIPhoneXSMax || isIPhoneXR
