// const isMobile = 'ontouchstart' in window

export default class Drag {
  constructor ({ box, moveBox = box, direction, pconly }) {
    this.box = box
    this.moveBox = moveBox
    this.direction = direction
    this._isTouch = pconly ? false : 'ontouchstart' in window
    this._startKey = this._isTouch ? 'touchstart' : 'mousedown'
    this._movingKey = this._isTouch ? 'touchmove' : 'mousemove'
    this._endKey = this._isTouch ? 'touchend' : 'mouseup'
    box.addEventListener(this._startKey, this.onMoveStart, false)
    // console.log(this.box, this._startKey)
  }
  onMoveStart = e => {
    e.stopPropagation()
    let _touch = this._isTouch ? e.touches[0] : e
    this._DW = document.documentElement.clientWidth
    this._DH = document.documentElement.clientHeight
    this._disX = _touch.clientX - this.moveBox.offsetLeft
    this._disY = _touch.clientY - this.moveBox.offsetTop
    if (this.onmovestart) this.onmovestart(e)
    document.addEventListener(this._movingKey, this.onMoving, false)
    document.addEventListener(this._endKey, this.onMoveEnd, false)
    return false
  }
  onMoving = e => {
    e.stopPropagation()
    if (!this._isTouch) e.preventDefault()
    let _touch = this._isTouch ? e.touches[0] : e
    var l = _touch.clientX - this._disX
    var t = _touch.clientY - this._disY
    if (l < 0) {
      l = 0
    } else if (l > this._DW - this.moveBox.offsetWidth) {
      l = this._DW - this.moveBox.offsetWidth
    }
    if (t < 0) {
      t = 0
    } else if (t > this._DH - this.moveBox.offsetHeight) {
      t = this._DH - this.moveBox.offsetHeight
    }
    if (this.direction === 'vertical' || this.direction === 'v') {
      this.moveBox.style.top = t + 'px'
      if (this.onmoving) this.onmoving(e, t)
    } else if (this.direction === 'horizontal' || this.direction === 'h') {
      this.moveBox.style.left = l + 'px'
      if (this.onmoving) this.onmoving(e, l)
    } else {
      this.moveBox.style.left = l + 'px'
      this.moveBox.style.top = t + 'px'
      if (this.onmoving) this.onmoving(e, t, l)
    }
    return false
  }
  onMoveEnd = e => {
    e.stopPropagation()
    document.removeEventListener(this._movingKey, this.onMoving)
    document.removeEventListener(this._endKey, this.onMoveEnd)
    if (this.onmoveend) this.onmoveend(e)
    return false
  }
}
