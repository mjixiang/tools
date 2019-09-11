import EXIF from 'exif-js'
export default class FileUpload {
  constructor () {
    this.dom = document.createElement('input')
    this.dom.type = 'file'
    this.dom.multiple = true
    this.dom.onchange = this.onImageChange.bind(this)
    this.dom.accept = '.jpg,.jpeg,.png'
    this.resolve = null
  }
  chooseImages () {
    this.dom.multiple = true
    this.dom.click()
    return new Promise((resolve, reject) => {
      this.resolve = resolve
    })
  }
  chooseImage () {
    this.dom.multiple = false
    this.dom.click()
    return new Promise((resolve, reject) => {
      this.resolve = resolve
    })
  }
  onImageChange () {
    let files = this.dom.files
    if (!files.length || !this.resolve) return
    this.resolve(Array.from(this.dom.files))
    this.resolve = null
  }

  // 获取文临时路径
  getImageSrc (file) {
    return new Promise((resolve, reject) => {
      if (!file || file.type.indexOf('image') !== 0) {
        return reject(new Error('该文件不是图片文件'))
      }
      resolve(window.URL.createObjectURL(file))
    })
  }

  // 返回内容 {name:'图片名称', time:'拍照时间', lat:'拍摄地经度',lng:'拍摄地纬度', width: '照片宽度', height: '照片高度', bolb: '临时地址'}
  getImageBaseExif (file) {
    return new Promise((resolve, reject) => {
      EXIF.getData(file, function () {
        let lngExif = this.exifdata.GPSLongitude
        let latExif = this.exifdata.GPSLatitude
        let bolb = window.URL.createObjectURL(file)
        if (!lngExif || !latExif) {
          // return reject(new Error('该图片不含有EXIF信息'))
          return resolve({ error: true, name: file.name || '', bolb })
        }
        let time = this.exifdata.DateTimeOriginal.replace(/^(\d+):(\d+):(\d+)/, '$1-$2-$3')
        let width = this.exifdata.PixelXDimension
        let height = this.exifdata.PixelYDimension
        let lng = lngExif[0] + lngExif[1] / 60 + lngExif[2] / 3600
        let lat = latExif[0] + latExif[1] / 60 + latExif[2] / 3600
        resolve({ name: file.name || '', time, lat, lng, width, height, bolb })
      })
    })
  }

  static getImageBaseInfo (file) {
    return new Promise((resolve, reject) => {
      var _image = new Image()
      _image.onload = () => {
        resolve({ width: _image.width, height: _image.height, src: _image.src })
      }
      _image.onerror = () => {
        reject(new Error(this.$t('图片加载失败')))
      }
      _image.src = window.URL.createObjectURL(file)
    })
  }
}
