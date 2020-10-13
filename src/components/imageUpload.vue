<template>
  <div>
    <div @click="chooseFile" class="img-box xa-center">
      <img
        v-if="value"
        v-show="value && !isUploading"
        :src="value + '?imageView2/2/w/300'"
      />
      <div v-show="!value && !isUploading">
        <i class="el-icon-plus" style="font-size: 88px; color: #8c939d">+</i>
      </div>
      <div v-show="isUploading && isShowProgressBar">{{ percent }}%</div>
    </div>
    <input
      style="display: none"
      ref="oFile"
      type="file"
      @change="onFileChange"
      :accept="accept"
    />
  </div>
</template>
<script>
import { GetUploadToken } from 'apis/disk'
import axios from 'axios'
export default {
  data () {
    return {
      percent: 0,
      isShowProgressBar: false,
      isUploading: false
    }
  },
  props: {
    value: String,
    accept: {
      type: String,
      default: 'image/*'
      //   default: '.jpg,.jpeg,.png,.gif'

    },
    tip: String
  },
  methods: {
    onFileChange () {
      if (!this.$refs.oFile.files.length) return
      this.isShowProgressBar = !!this.$refs.oFile.files.length
      this.uploadFile()
    },
    chooseFile () {
      if (this.isUploading) return
      this.$refs.oFile.click()
    },
    uploadFile () {
      var file = this.$refs.oFile.files[0]
      this.getImageSize(file).then(({ width, height }) => {
        this.startUpload(file, width, height)
      }).catch(() => {
        this.startUpload(file)
      })
    },
    startUpload (file, width, height) {
      var sizeStr = ''
      if (width && height) {
        sizeStr = `_${width}x${height}`
      }
      var subfix = file.name.substring(file.name.lastIndexOf('.'))
      var key = 'disk/images/' + this.$utils.UUIDV4() + sizeStr + subfix
      this.percent = 1
      this.isUploading = true
      GetUploadToken({ key: key }).then(
        data => {
          var formData = new FormData()
          formData.append('key', key)
          formData.append('token', data.token)
          formData.append('file', file)
          return axios.post('//upload.qiniu.com/', formData, {
            onUploadProgress: (e) => {
              if (e.lengthComputable) {
                this.percent = Math.floor(e.loaded / e.total * 100)
              }
            }
          })
        }
      ).then(({ data }) => {
        this.$toast.show('上传成功', 2500)
        this.$emit('uploaded', data)
        this.$emit('input', data.url)
      }).finally(() => {
        this.isUploading = false
      })
    },
    getImageSize (file) {
      return new Promise((resolve, reject) => {
        var _image = new Image()
        _image.onload = () => {
          resolve({ width: _image.width, height: _image.height })
        }
        _image.onerror = () => {
          reject(new Error('图片加载失败'))
        }
        _image.src = window.URL.createObjectURL(file)
      })
    }
  }
}
</script>

<style scoped>
.img-box {
  border: 1px dashed #c0ccda;
  background-color: #fbfdff;
  border-radius: 6px;
  width: 300px;
  height: 300px;
  margin: auto;
}
.img-box > img {
  max-width: 300px;
  max-height: 300px;
  min-width: 40px;
  min-height: 40px;
}
.img-box:hover {
  border-color: #20a0ff;
}
.xa-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
