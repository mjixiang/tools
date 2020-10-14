<template>
  <div class="upload-page xa-center">
    <div>
      <image-upload v-model="url" tip="上传试试吧" />
      <div v-show="url" class="address">{{ url }}</div>
    </div>
  </div>
</template>

<script>
import imageUpload from 'components/imageUpload.vue'
export default {
  components: { imageUpload },
  data () {
    return {
      url: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.upload-page {
  height: 100vh;
  padding: 20px;
  text-align: center;
}
.xa-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.address {
  font-size: 14px;
  color: #666;
  margin-top: 10px;
  word-break: break-all;
}
</style>
